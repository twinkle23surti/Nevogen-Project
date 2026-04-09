import { Component } from '@angular/core';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrl: './installation.component.scss'
})
export class InstallationComponent {
openIndex: number = 0; // first card open by default

  toggleFaq(index: number): void {
    if (this.openIndex === index) return; // always keep one open
    this.openIndex = index;
  }
}
