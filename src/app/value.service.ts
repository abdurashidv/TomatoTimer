import { Injectable, Input } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ValueService {
  private params: any;
  private defaults: any = {pomodoro: '25', shortBreak: '5', longBreak: '10', sound: 'alarmclock', volume: '0.5' };
  private rxParams = new Subject<any>();
  rxParams$ = this.rxParams.asObservable();

  constructor(){
    this.rxParams.next(this.defaults);
  }

  setParameters(params: any){
    this.rxParams.next(params);
  }

  getParameters(){
    return this.params ? this.params : this.defaults;
  }
}
