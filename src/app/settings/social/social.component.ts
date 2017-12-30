import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {

  private images: string[] = [
    'facebook.png',
    'twitter.png',
    'ok.png'
  ];

  constructor() { }
}
