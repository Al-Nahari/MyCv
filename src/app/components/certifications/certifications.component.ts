import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {
  readonly recommended = [
    { name: 'AWS Certified Developer – Associate', provider: 'Amazon Web Services' },
    { name: 'Docker Certified Associate (DCA)', provider: 'Docker' },
    { name: 'Angular Certification', provider: 'Google / Angular' },
    { name: 'AWS Certified Solutions Architect', provider: 'Amazon Web Services' },
    { name: 'Flutter Certification', provider: 'Google' },
  ];
}
