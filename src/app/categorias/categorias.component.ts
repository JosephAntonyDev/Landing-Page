import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TopAnimes } from '../interfaces/top-animes';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  animesTop: TopAnimes[] = [
    {
      top: 1,
      name: 'Shonen',
      sinopsis: 'Enfocado en un público juvenil masculino, suele incluir acción, aventuras, amistad y superación de límites personales. Ejemplos clásicos: Naruto, Dragon Ball, One Piece.',
      content: 'Género Demográfico',
      img: 'assets/categorys/shone.jpg',
      fechaEstreno: new Date('2024-12-01')
    },
    {
      top: 2,
      name: 'Shojo',
      sinopsis: 'Dirigido principalmente a un público femenino joven. Se centra en las relaciones interpersonales, romance, drama y el desarrollo emocional de los personajes. Ejemplos: Sailor Moon, Fruits Basket.',
      content: 'Género Demográfico',
      img: 'assets/categorys/shojo.jpeg',
      fechaEstreno: new Date('2024-10-10')
    },
    {
      top: 3,
      name: 'Seinen',
      sinopsis: 'Dirigido a hombres jóvenes y adultos. Aborda tramas más complejas, realistas y temas maduros, con un enfoque psicológico profundo o dilemas morales. Ejemplos: Berserk, Tokyo Ghoul, Monster.',
      content: 'Género Demográfico',
      img: 'assets/categorys/seinen.jpeg',
      fechaEstreno: new Date('2024-08-08')
    },
    {
      top: 4,
      name: 'Josei',
      sinopsis: 'Dirigido a mujeres adultas. Explora las relaciones amorosas de una manera más madura y realista, y aborda la vida cotidiana y profesional de los personajes. Ejemplos: Nodame Cantabile, Honey and Clover.',
      content: 'Género Demográfico',
      img: 'assets/categorys/josei.jpg',
      fechaEstreno: new Date('2024-11-15')
    },
    {
      top: 5,
      name: 'Mecha',
      sinopsis: 'Centrado en robots gigantes de combate, pilotos con dilemas existenciales y tecnología militar futurista. Combina ciencia ficción profunda con acción bélica. Ejemplos: Neon Genesis Evangelion, Mobile Suit Gundam.',
      content: 'Subgénero Temático',
      img: 'assets/categorys/mecha.jpeg',
      fechaEstreno: new Date('2024-09-09')
    }
  ];
}
