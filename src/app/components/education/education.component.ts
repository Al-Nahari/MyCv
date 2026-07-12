import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  readonly education = [
    {
      degree: 'Bachelor of Information Technology Engineering',
      institution: 'University',
      period: '2015 – 2019',
      description: 'Comprehensive degree covering software engineering, networks, databases, and systems design. Graduated with a strong focus on practical application and development.',
      highlights: [
        'Core focus on software engineering, algorithms, and data structures',
        'Database design, networks, and operating systems coursework',
        'Final-year project focused on full-stack web application development',
      ],
    },
  ];
}
