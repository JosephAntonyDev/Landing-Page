import { Component, AfterViewInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TopMejoresAnimesComponent } from '../top-mejores-animes/top-mejores-animes.component';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { MasVistosComponent } from '../mas-vistos/mas-vistos.component';
import { CategoriasComponent } from '../categorias/categorias.component';
import { DondeVerComponent } from '../donde-ver/donde-ver.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    TopMejoresAnimesComponent,
    CarruselComponent,
    MasVistosComponent,
    CategoriasComponent,
    DondeVerComponent
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements AfterViewInit, OnDestroy {
  private isBrowser: boolean;
  private observer?: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.initScrollReveal();
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  scrollToRankings() {
    this.scrollToSection('top');
  }

  scrollToSection(sectionId: string) {
    if (this.isBrowser) {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  }

  private initScrollReveal() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach(el => this.observer!.observe(el));
  }
}
