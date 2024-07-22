import { Component, ViewEncapsulation } from '@angular/core';
import { ThemeService } from 'systelab-components';
import { I18nService } from 'systelab-translate';
import { UtilsService } from './common/services/utils.service';

export enum THEMES {
    Dark =  'dark',
    Light = 'default'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    public title = 'reactive-forms';
    public currentTheme = THEMES.Dark;
    public darkTheme = THEMES.Dark;


    constructor(protected themeService: ThemeService,
                private i18nService: I18nService,
                private utilsService: UtilsService) {
        this.i18nService.use(navigator.language);
        themeService.setTheme(this.currentTheme);
    }

    public doToggleTheme(): void {

        this.currentTheme = this.currentTheme === THEMES.Dark ? THEMES.Light : THEMES.Dark;
        this.utilsService.setCurrentTheme(this.currentTheme);
        this.themeService.setTheme(this.currentTheme);

    }

}
