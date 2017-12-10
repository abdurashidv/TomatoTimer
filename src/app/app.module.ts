import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalModule  } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingComponent } from './settings/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
