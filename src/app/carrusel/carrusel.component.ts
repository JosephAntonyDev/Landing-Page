import { Component, OnInit, Inject, PLATFORM_ID, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import { AnimeCardComponent } from '../anime-card/anime-card.component';
import { EstrenosAnimesComponent } from '../estrenos-animes/estrenos-animes.component';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [NgFor, NgIf, AnimeCardComponent, EstrenosAnimesComponent, SectionTitleComponent],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent implements OnInit, AfterViewInit {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;

  private isBrowser: boolean;
  
  canScrollPrev = false;
  canScrollNext = true;

  animes = [
    { title: 'Re:Zero', img: 'assets/carrusel/re.jpeg', genre: 'Isekai', rating: 8.8 },
    { title: 'Danmanchi', img: 'assets/carrusel/bell.jpg', genre: 'Fantasía', rating: 8.2 },
    { title: 'Tokyo Ghoul', img: 'assets/carrusel/GHOUL.jpeg', genre: 'Seinen', rating: 8.7 },
    { title: 'Kekkai Sensen', img: 'assets/carrusel/kekkai.jpeg', genre: 'Acción', rating: 8.1 },
    { title: 'Solo Leveling', img: 'assets/carrusel/solo-leveling-vol-02-gn-manga.jpg', genre: 'Acción', rating: 9.0 },
    { title: 'Frieren', img: 'assets/carrusel/Fieren.jpg', genre: 'Fantasía', rating: 9.3 },
    { title: 'To Your Eternity', img: 'assets/carrusel/eternity.jpeg', genre: 'Drama', rating: 8.9 },
    { title: 'Classroom of the Elite', img: 'assets/carrusel/R.jpg', genre: 'Psicológico', rating: 8.5 }
  ];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.checkScrollButtons();
  }

  scrollNext() {
    if (!this.isBrowser || !this.carouselTrack) return;
    const track = this.carouselTrack.nativeElement;
    const cardWidth = track.scrollWidth / this.animes.length;
    
    track.scrollBy({ left: cardWidth * 2, behavior: 'smooth' });
  }

  scrollPrev() {
    if (!this.isBrowser || !this.carouselTrack) return;
    const track = this.carouselTrack.nativeElement;
    const cardWidth = track.scrollWidth / this.animes.length;
    
    track.scrollBy({ left: -cardWidth * 2, behavior: 'smooth' });
  }

  onTrackScroll() {
    if (!this.isBrowser || !this.carouselTrack) return;
    this.checkScrollButtons();
  }

  checkScrollButtons() {
    if (!this.isBrowser || !this.carouselTrack) return;
    const track = this.carouselTrack.nativeElement;
    
    this.canScrollPrev = track.scrollLeft > 5;
    this.canScrollNext = Math.ceil(track.scrollLeft + track.clientWidth) < track.scrollWidth - 5;
  }
}
