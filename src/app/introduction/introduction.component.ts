import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
  stars: any[] = [];

  constructor() {
    this.createStars(100);
  }

  createStars(count: number) {
    for (let i = 0; i < count; i++) {
      this.stars.push({
        id: i,
        top: this.randomPosition(),
        left: this.randomPosition()
      });
    }
  }

  randomPosition() {
    return Math.floor(Math.random() * 100) + '%';
  }
}
