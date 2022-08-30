import { Component, AfterViewInit } from '@angular/core';

declare var anime: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  constructor() { }

  des1='I am from Davangere district, Karnataka, India. I completed my Bachelor Of Engineering in Computer Science and achieved a GPA of 7.5 and work experience as a front-end developer intern in Novaitech Company, Bengaluru. Knee to learn new technologies and having a deep interest in Web development and Python programming language.'


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
