import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
   isScrolled = false;
  isSidebarOpen = false;

  openServices = false;
  openProducts = false;

  get navText() {
    return this.isScrolled
      ? 'text-gray-700 hover:text-secondary transition'
      : 'text-white hover:text-secondary transition';
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleServices() {
    this.openServices = !this.openServices;
  }

  toggleProducts() {
    this.openProducts = !this.openProducts;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 120;
  }
}
