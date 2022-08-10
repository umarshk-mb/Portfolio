import { Component, AfterViewInit } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {

  constructor() { }


  P="Projects"
  check='Checkout my recent works...'

  todo='assets/images/todo.jpg'
  sketch='assets/images/sketch.jpg'
  quote='assets/images/quote.jpg'
  calculator='assets/images/calculator.jpg'

  ngAfterViewInit(): void {
    var textWrapper = document.querySelector('.caption');
    textWrapper!.innerHTML = textWrapper!.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.caption',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el:any, i:any) => 70*i
  }).add({
    targets: '.caption',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 10000
  });

  var des = document.querySelector('.work');
  des!.innerHTML = des!.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '.work .letter',
  scale: [4,1],
  opacity: [0,1],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 1200,
  delay: (el:any, i:any) => 70*i
}).add({
  targets: '.work',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});

}
}
