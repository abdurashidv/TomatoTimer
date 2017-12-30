import { Component, OnInit } from '@angular/core';
import { ValueService } from 'app/value.service';
import {ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent {

  public params: any;
  public sounds: any = [
    {value: '80sAlarm', name:'80s Alarm'},
    {value: 'alarmclock', name:'Alarm Clock'},
    {value: 'alarmwatch', name:'Wristwatch Alarm'},
    {value: 'ding', name:'Elevator Ding'},
    {value: 'doorbell', name:'Door Bell'},
  ];

  public volumes: any = [
    {value: '0', name:'Mute'},
    {value: '0.25', name:'25%'},
    {value: '0.5', name:'50%'},
    {value: '0.75', name:'75%'},
    {value: '1.0', name:'100%'},
  ];

  constructor(private valueService: ValueService) {
    this.params = this.valueService.getParameters();
  }

  save(params: any){
    this.valueService.setParameters(params);
  }

  reset(){
    this.params = this.valueService.getParameters();
  }

  soundTest(sound: string, volume: string){
  }
}
