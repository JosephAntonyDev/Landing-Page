import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-donde-ver',
  standalone: true,
  imports: [NgFor, NgIf, SectionTitleComponent],
  templateUrl: './donde-ver.component.html',
  styleUrl: './donde-ver.component.css'
})

export class DondeVerComponent {
  currentIndex: number = 0;
  animes = [
    { title: 'Crunchyroll', img: 'assets/streaming/Crunch.jpeg', desc: 'El servicio líder mundial en streaming de anime oficial y simulcasts.' },
    { title: 'AnimeFLV', img: 'assets/streaming/flv.jpg', desc: 'Una de las plataformas comunitarias de anime en español más populares.' },
    { title: 'Funimation', img: 'assets/streaming/Fun.png', desc: 'Distribuidora líder de anime, conocida por sus doblajes y estrenos rápidos.' },
    { title: 'Anime Planet', img: 'assets/streaming/planet2.jpeg', desc: 'Recomendaciones, listas de seguimiento y streaming legal de anime.' },
    { title: 'MagisTV', img: 'assets/streaming/magis.jpg', desc: 'Plataforma multimedia con acceso a canales y contenido variado de anime.' },
    { title: 'HiAnime', img: 'assets/streaming/HiAnime.jpeg', desc: 'Sitio web moderno con un amplio catálogo de anime doblado y subtitulado.' },
    { title: 'Netflix', img: 'assets/streaming/netflix.jpeg', desc: 'Catálogo global de anime, incluyendo producciones exclusivas y películas.' },
    { title: 'PlutoTV', img: 'assets/streaming/pluto.jpeg', desc: 'Televisión en streaming gratuita con canales dedicados al anime 24/7.' }
  ];

  goNext() {
    this.currentIndex = (this.currentIndex + 4) % this.animes.length;
  }
  
  goPrevious() {
    this.currentIndex = (this.currentIndex - 4 + this.animes.length) % this.animes.length;
  }
  

  getVisibleAnimes() {
    return this.animes.slice(this.currentIndex, this.currentIndex + 4);
  }
  
}
