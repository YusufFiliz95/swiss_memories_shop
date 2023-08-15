import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements AfterViewInit {
  stars: any[] = [];

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.createStars(100);
  }

  ngAfterViewInit() {
/*     this.renderer.setStyle(
      this.el.nativeElement.ownerDocument.body,
      'overflow',
      'hidden'
    ); */

/*     setTimeout(() => {
      this.renderer.setStyle(
        this.el.nativeElement.ownerDocument.body,
        'overflow',
        'auto'
      );
    }, 3500); */
  }

  createStars(count: number) {
    for (let i = 0; i < count; i++) {
      this.stars.push({
        id: i,
        top: this.randomPosition(),
        left: this.randomPosition(),
      });
    }
  }

  randomPosition() {
    return Math.floor(Math.random() * 100) + '%';
  }
}
