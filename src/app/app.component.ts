import { Component } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';
import { ValueService } from 'app/value.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ValueService ]
})

export class AppComponent {
  private time: string;
  private minutes: number = .1;
  private seconds: number = this.minutes * 60;
  private originalSeconds: number = this.seconds;
  private interval:any;
  private audio: string = 'sound';
  private isBtnDisabled: boolean = false;
  private params: any;
  
  constructor(private valueService: ValueService){
    this.getMinSec(this.seconds, false);
  }

  start(){
    this.isBtnDisabled = true;
    this.params = this.valueService.getDefaults();
    this.seconds = this.params.pomodoro * 60;

    this.interval = setInterval(() => {
      this.getMinSec(this.seconds, true);
      if(this.seconds < 0){
        clearInterval(this.interval);
      }
    }, 1000);
  }

  stop(){
    this.isBtnDisabled = false;
    clearInterval(this.interval);
  }

  reset(){
    this.isBtnDisabled = false;
    clearInterval(this.interval);
    this.getMinSec(this.originalSeconds, false);
  }

  getMinSec = (seconds: number, isTimer: boolean) => {
    if(isTimer)
      this.seconds -= 1;
    else
      this.seconds = seconds;

    let min: number = Math.floor(seconds/60),
        sec: number = seconds%60,
        result: string;

    result = (min.toString().length == 1) ? '0' + min : min.toString();
    result += ':';
    result += (sec.toString().length == 1) ? '0' + sec : sec.toString();
    
    this.time = result;
  }
}
