import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalModule  } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingComponent } from './settings/setting/setting.component';
import { FaqComponent } from './settings/faq/faq.component';
import { SocialComponent } from './settings/social/social.component';
import { ValueService } from 'app/value.service';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    SettingComponent,
    FaqComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  providers: [ValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
