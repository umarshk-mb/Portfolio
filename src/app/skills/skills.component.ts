import { Component, AfterViewInit } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements AfterViewInit {


  public skills = [ {'tech':"HTML"},
                    {'tech':"CSS"},
                    {'tech':"JavaScript / ES6"},
                    {'tech':"Angular"},
                    {'tech':"Material UI"},
                    {'lang':"Python"},
                    {'lang':"Git / Github"},
                    {'lang':"Data Structures"},
                    {'lang':"Problem Solving"},
                    {'lang':"Machine Learning (Basics)"}]

    ngAfterViewInit(): void {
    var textWrapper = document.querySelector('.technologies');
textWrapper!.innerHTML = textWrapper!.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.technologies',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el:any, i:any) => 70*i
  }).add({
    targets: '.technologies',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 100000
  });

  var des = document.querySelector('.des1');
  des!.innerHTML = des!.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '.des1 .letter',
  scale: [4,1],
  opacity: [0,1],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 1200,
  delay: (el:any, i:any) => 70*i
}).add({
  targets: '.des1',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});
}
}
