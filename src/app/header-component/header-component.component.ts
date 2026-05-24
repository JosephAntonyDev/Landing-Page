import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {
  isScrolled = false;
  isMenuOpen = false;
  activeSection = 'hero';
  private isBrowser: boolean;

  private readonly navItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'top', label: 'Top Animes' },
    { id: 'estrenos', label: 'Estrenos' },
    { id: 'vistos', label: 'Más Vistos' },
    { id: 'categorias', label: 'Categorías' },
    { id: 'ver', label: 'Dónde Ver' }
  ];

  get menuItems() {
    return this.navItems;
  }

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener('window:scroll')
  onScroll() {
    if (this.isBrowser) {
      this.isScrolled = window.scrollY > 50;
      this.updateActiveSection();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isBrowser) {
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }
  }

  scrollToSection(sectionId: string) {
    this.isMenuOpen = false;
    if (this.isBrowser) {
      document.body.style.overflow = '';
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  }

  private updateActiveSection() {
    const sections = ['ver', 'categorias', 'vistos', 'estrenos', 'top', 'hero'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          this.activeSection = id;
          break;
        }
      }
    }
  }
}
