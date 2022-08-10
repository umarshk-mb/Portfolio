import { Component, AfterViewInit } from '@angular/core';

declare var anime: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  constructor() { }

  des1='I am a Computer Science Undergraduate, and I am also working as a Front-end intern in Novaitech.'
  des2= 'I have a deep interest in Web development and Python.'


  ngAfterViewInit(): void{
    const textWrapper = document.querySelector('.des1,.des2');
    textWrapper!.innerHTML = textWrapper!.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: true})
    .add({
      targets: '.des1,.des2',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el:any, i:any) => 70*i
    }).add({
      targets: '.des1,.des2',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 100000
    });


  }

}
