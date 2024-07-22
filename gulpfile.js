const {src, dest, parallel} = require('gulp');
const props = require('gulp-props');
const replace = require('gulp-replace');
const convertEncoding = require('gulp-convert-encoding');
const mkdirp = require('mkdirp');
const fs = require('fs');
const npmCheck = require('npm-check');
const stripLine = require('gulp-strip-line');

const comparePackagesFile = 'compare-packages.txt';
const propertiesFolderPath = '../../../../ModulabGoldCommon/src/main/resources/com/systelab/modulabgold/common/constants/';
const messagePropertiesFilesPath = propertiesFolderPath + 'Messages*.properties';
const errorPropertiesFilesPath = propertiesFolderPath + 'Errors*.properties';
const jsonFolderPath = 'src/common/i18n/';
const messageJsonFolderPath = jsonFolderPath + 'language';
const errorJsonFolderPath = jsonFolderPath + 'error';
const isoEncoding = 'ISO-8859-1';
const utf8Encoding = 'UTF-8';
const stripLineOptions = 'use strict';
const distLaboratoryPath = './dist/lab/laboratory';

/* Compares package.json to installed packages */
function comparePackages() {

	return npmCheck()
		.then((currentState) => {
			const lines = currentState.get('packages')
				.filter(library => library.packageJson !== undefined && library.installed !== library.packageJson.replace('^', '')
					.replace('~', ''))
				.map(library => `${library.moduleName} - expected: ${library.packageJson}, installed: ${library.installed}`)
				.join('\r\n');
			console.log(lines);
			fs.writeFile(comparePackagesFile, lines, err => err ? console.log('error', err) : undefined);
		});
}

/* Converting PROPERTIES to JSON file for languages*/
function setupI18nMessageFiles() {
	return src(messagePropertiesFilesPath)
		// Converting encoding to UTF-8 from ISO-8859-1 to maintain special chars from LATIN alphabet
		.pipe(convertEncoding({from: isoEncoding, to: utf8Encoding}))
		// Removing empty translated definitions
		.pipe(stripLine([/^\w+=$/, stripLineOptions]))
		// From PROPERTIES File to JSON File adding indentation with a tab
		.pipe(props({namespace: '', space: '\t'}))
		// Replacing #TEXT# and ##TEXT## from Java Keys to {{text}} for angular-translate variables
		.pipe(replace(/[#]+([^#\n]+)[#]+/g, '{{$1}}'))
		.pipe(replace(/^\w+=$/g, ''))
		//File destination
		.pipe(dest(messageJsonFolderPath));
}

/* Converting PROPERTIES to JSON file for languages*/
function setupI18nErrorFiles() {
	return src(errorPropertiesFilesPath)
		// Converting encoding to UTF-8 from ISO-8859-1 to maintain special chars from LATIN alphabet
		.pipe(convertEncoding({from: isoEncoding, to: utf8Encoding}))
		// Removing empty translated definitions
		.pipe(stripLine([/^\w+=$/, stripLineOptions]))
		// Removing empty translated definitions
		.pipe(replace(/^\t("\w+"):\s"",$/g, ''))
		// From PROPERTIES File to JSON File adding indentation with a tab
		.pipe(props({namespace: '', space: '\t'}))
		// Replacing #TEXT# and ##TEXT## from Java Keys to {{text}} for angular-translate variables
		.pipe(replace(/[#]+([^#\n]+)[#]+/g, '{{$1}}'))
		//File destination
		.pipe(dest(errorJsonFolderPath));

}

function createDistFolder() {
	return mkdirp(distLaboratoryPath);
}

const setupI18nFiles = parallel(setupI18nMessageFiles, setupI18nErrorFiles);
const test = parallel(setupI18nFiles, createDistFolder);
const build = parallel(comparePackages, setupI18nFiles, createDistFolder);

exports.setupI18nFiles = setupI18nFiles;
exports.test = test;
exports.default = build;
