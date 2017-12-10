import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent {

  private items:string[] = ['FAQ', 'Settings', 'Tweet about us!'];

  constructor() { }

  showModal(value: string){
    console.log(value);
  }

}
