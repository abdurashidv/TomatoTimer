import { Injectable } from '@angular/core';

@Injectable()
export class ValueService {

  private pomodoro: string;
  private shortBreak: string;
  private longBreak: string;
  private sound: string;
  private volume: string

  private params: any;
  private defaults: any = {pomodoro: 25, shortBreak: 5, longBreak: 10, sound: 'alarmclock', volume: '50%' };

  constructor() { }

  setParameters(params: any){
    this.params = params;
  }

  getParameters(){
    return this.params ? this.params : this.defaults;
  }

  getDefaults(){
    return this.defaults;
  }

}
