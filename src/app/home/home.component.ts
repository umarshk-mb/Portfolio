import { Component, AfterViewInit } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  img1='assets/images/background.jpg'
  myimage='assets/images/myimage.jpg'
  name="MOHAMMED UMER M B"
  d1='I AM A COMPUTER SCIENCE ENGINEER AND A WEB DEVELOPER.'
  insta='assets/images/instagram.png'
  linkedin='assets/images/linkedin.png'
  tweet='assets/images/twiiter.png'
  github='assets/images/github.png'
  gmail='assets/images/mail.png'
  resume='https://drive.google.com/file/d/1wTUQ0a32aYegAoxfoz0v_lvf4CZkmTKs/view'

  ngAfterViewInit(): void {
    var textWrapper = document.querySelector('.name');
textWrapper!.innerHTML = textWrapper!.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.name .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el:any, i:any) => 70*i
  }).add({
    targets: '.name',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 100000
  });


  }

}
