import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
export class CarruselComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;

  currentIndex: number = 0;
  private autoPlayInterval: any;
  private scrollTimeout: any;
  private isBrowser: boolean;
  isPaused = false;

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

  extendedAnimes: any[] = [];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.setupExtendedAnimes();
    if (this.isBrowser) {
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      // Set initial scroll position to the middle section
      setTimeout(() => {
        this.centerTrack();
        this.startAutoPlay();
      }, 300);
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
    if (this.isBrowser) {
      window.removeEventListener('resize', this.onResize.bind(this));
    }
  }

  private onResize() {
    this.centerTrack();
  }

  setupExtendedAnimes() {
    // Clone N items at start and end for a 3x layout buffer
    this.extendedAnimes = [...this.animes, ...this.animes, ...this.animes];
  }

  private centerTrack() {
    if (!this.isBrowser || !this.carouselTrack) return;
    const track = this.carouselTrack.nativeElement;
    const N = this.animes.length;
    const cardWidth = track.scrollWidth / 24;
    
    // Position perfectly at the start of the middle N items
    track.scrollLeft = N * cardWidth;
  }

  scrollNext() {
    if (!this.isBrowser || !this.carouselTrack) return;
    const track = this.carouselTrack.nativeElement;
    const cardWidth = track.scrollWidth / 24;
    
    // Slide by 2 card widths smoothly
    track.scrollBy({ left: cardWidth * 2, behavior: 'smooth' });
  }

  scrollPrev() {
    if (!this.isBrowser || !this.carouselTrack) return;
    const track = this.carouselTrack.nativeElement;
    const cardWidth = track.scrollWidth / 24;
    
    track.scrollBy({ left: -cardWidth * 2, behavior: 'smooth' });
  }

  onTrackScroll() {
    if (!this.isBrowser || !this.carouselTrack) return;

    // Update dot indicators in real-time during scroll
    this.updateCurrentIndex();

    // Debounce the boundary jump until the scrolling animation stops
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    this.scrollTimeout = setTimeout(() => {
      this.handleBoundaryJump();
    }, 150);
  }

  private updateCurrentIndex() {
    if (!this.isBrowser || !this.carouselTrack) return;
    const track = this.carouselTrack.nativeElement;
    const N = this.animes.length;
    const cardWidth = track.scrollWidth / 24;
    const middleStart = N * cardWidth;

    let relativeOffset = track.scrollLeft - middleStart;
    const totalOriginalWidth = N * cardWidth;

    // Normalize offset to range [0, totalOriginalWidth)
    relativeOffset = ((relativeOffset % totalOriginalWidth) + totalOriginalWidth) % totalOriginalWidth;

    this.currentIndex = Math.min(
      N - 1,
      Math.max(0, Math.round(relativeOffset / cardWidth))
    );
  }

  private handleBoundaryJump() {
    if (!this.isBrowser || !this.carouselTrack) return;
    const track = this.carouselTrack.nativeElement;
    const scrollLeft = track.scrollLeft;
    const N = this.animes.length;
    const cardWidth = track.scrollWidth / 24;

    const middleStart = N * cardWidth;
    const middleEnd = 2 * N * cardWidth;

    // Jump invisibly only when crossing the middle section boundaries and scrolling stops
    if (scrollLeft >= middleEnd) {
      track.scrollLeft = scrollLeft - middleStart;
    } else if (scrollLeft < middleStart) {
      track.scrollLeft = scrollLeft + middleStart;
    }
  }

  goToSlide(index: number) {
    if (!this.isBrowser || !this.carouselTrack) return;
    const track = this.carouselTrack.nativeElement;
    const cardWidth = track.scrollWidth / 24;
    const N = this.animes.length;
    
    track.scrollTo({ left: N * cardWidth + index * cardWidth, behavior: 'smooth' });
  }

  onMouseEnter() {
    this.isPaused = true;
    this.stopAutoPlay();
  }

  onMouseLeave() {
    this.isPaused = false;
    this.startAutoPlay();
  }

  onTouchStart() {
    this.isPaused = true;
    this.stopAutoPlay();
  }

  onTouchEnd() {
    this.isPaused = false;
    this.startAutoPlay();
  }

  private startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.scrollNext();
    }, 5000);
  }

  private stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
}
