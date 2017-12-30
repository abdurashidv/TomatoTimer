import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  public faqs: any = [
    {question: "What is Tomato Timer?",
    answer: "Tomato Timer is a time management web application to stay focused on a task. It is developed by Abdurashid Vakhobov."},
    {question: "Why use TomatoTimer?",
    answer: "Clean and Crisp interface with a Mobile friendly layout. Ability to Pause or Reset the timer intervals.Audio notifications at the end of a timer period. Desktop notifications. (Only supported in Google Chrome) Keyboard shortcuts. Ability to change the alert sound + volume via Settings. Custom Timer Intervals. A history of your activity. (Coming soon.)"},
    {question: "Can you tell me the story without having to visit the website?",
    answer: `Well, it comprises of the following basic steps:
    Decide on the task at hand
    Set the Pomodoro (timer) to 25 minutes
    Work on the task until the timer expires; Record with an X
    Take a Short Break (5 minutes)
    Every four "pomodoros", take a Long Break (10 minutes)`},
    {question: "Does Tomato Timer make me productive?",
    answer: "It does make you productive if you are consistent with timings of Tomato Timer."},];
    
  constructor() { }

  ngOnInit() {
  }

}
