import { Injectable } from '@angular/core';
import { ThemeService } from 'systelab-components';
import { THEMES } from '../../app.component';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public currentTheme = THEMES.Dark;

  constructor(private readonly themeService: ThemeService) { }

  public setCurrentTheme(currentTheme: THEMES): void {
    this.currentTheme = currentTheme;
  }

  /*public getErrorClassNameSwitchTheme(): void {
    return this.currentTheme === THEMES.Dark ? ''
  }*/

}
