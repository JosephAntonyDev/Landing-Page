import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TopAnimes } from '../interfaces/top-animes';

@Component({
  selector: 'app-estrenos-animes',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './estrenos-animes.component.html',
  styleUrl: './estrenos-animes.component.css'
})
export class EstrenosAnimesComponent {
  animesTop: TopAnimes[] = [
    {
      top: 1,
      name: 'Solo Leveling Season 2',
      sinopsis: 'Lo que no te mata te hace más fuerte. Después de ser brutalmente asesinado por monstruos en una mazmorra de alto rango, Jinwoo regresó con el Sistema, un programa que solo él puede ver y que eleva su nivel en todos los sentidos.',
      content: 'Enero 2025',
      img: 'assets/top/Solo-Level.jpg',
      fechaEstreno: new Date('2025-01-04'),
      rating: 9.2,
      episodes: 13,
      genre: 'Acción'
    },
    {
      top: 2,
      name: 'Danmanchi Season 5',
      sinopsis: 'Bell es un aventurero novato que sueña con hacerse rico y conocer chicas en la Mazmorra. Junto con la diosa Hestia, funda una familia y empieza sus días de exploración. Un día Aiz Wallenstein, la Princesa de la Espada, le salva y Bell decide ser tan fuerte como ella.',
      content: '2025',
      img: 'assets/top/DanManchi.png',
      fechaEstreno: new Date('2025-04-10'),
      rating: 8.4,
      episodes: 12,
      genre: 'Fantasía'
    },
    {
      top: 3,
      name: 'Re:Zero Season 3',
      sinopsis: 'Subaru Natsuki es arrancado de su vida diaria y cae en un mundo de fantasía. Armado con la habilidad de "Retorno por Muerte", enfrenta una y otra vez las amenazas más oscuras para proteger a quienes ama.',
      content: '2025',
      img: 'assets/top/zero.png',
      fechaEstreno: new Date('2025-08-08'),
      rating: 9.0,
      episodes: 25,
      genre: 'Isekai'
    }
  ];
}
