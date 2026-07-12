import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly highlights = [
    'Full-Stack & Mobile Developer',
    'Information Technology Engineer',
    'Next.js and Modern Frontend Specialist',
    'Scalable System Architect',
  ];
}
