import { Component, OnInit } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';
import { ValueService } from 'app/value.service';
import { Subject }    from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  public time: string;
  public interval: any;
  public seconds: number;  
  public isBtnDisabled: boolean = false;
  public params: any;
  //

  ngOnInit(){
    this.params = {pomodoro: '25', shortBreak: '5', longBreak: '10', sound: 'alarmclock', volume: '0.5' };
    this.seconds = this.params.pomodoro * 60;
    this.getMinSec(this.seconds, false);
  }

  constructor(private valueService: ValueService){
    valueService.rxParams$.subscribe( (param) => {
      this.params = param;
      this.seconds = this.params.pomodoro * 60;
      this.getMinSec(this.seconds, false);
    });
  }

  start(){
    this.interval = setInterval(() => {
      this.getMinSec(this.seconds, true);
      if(this.seconds < 0) {
        clearInterval(this.interval);
      }
    }, 1000);
    this.isBtnDisabled = true;    
  }

  stop(){
    clearInterval(this.interval);
    this.isBtnDisabled = false;    
  }

  reset(){
    clearInterval(this.interval);
    this.isBtnDisabled = false;    
    this.seconds = this.params.pomodoro * 60;
    this.getMinSec(this.seconds, false);
  }

  getMinSec = (seconds: number, isTimer: boolean) => {
    this.seconds = isTimer ? this.seconds - 1 : seconds;
    this.time = this.getMinutes(this.seconds) + ':' + this.getSeconds(this.seconds);
  }

  getMinutes(seconds: any){
    let min: number = Math.floor(seconds/60);
    return (min.toString().length == 1) ? '0' + min : min.toString();
  }

  getSeconds(seconds: any){
    let sec: number = seconds%60;    
    return (sec.toString().length == 1) ? '0' + sec : sec.toString();
  }
}
