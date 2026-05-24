import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TopAnimes } from '../interfaces/top-animes';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-top-mejores-animes',
  standalone: true,
  imports: [NgFor, NgIf, SectionTitleComponent],
  templateUrl: './top-mejores-animes.component.html',
  styleUrl: './top-mejores-animes.component.css'
})
export class TopMejoresAnimesComponent {
  animesTop: TopAnimes[] = [
    {
      top: 1,
      name: 'One Piece',
      sinopsis: 'La historia sigue a Monkey D. Luffy que sueña con convertirse en el Rey Pirata. Cientos de episodios de acción con momentos cómicos y emocionales para un excelente balance. Una aventura en alta mar con monstruos gigantes, piratas y marineros peligrosos.',
      content: 'Desde 1999',
      img: 'assets/top/one-piece.jpg',
      fechaEstreno: new Date('1999-10-20'),
      rating: 9.5,
      episodes: 1100,
      genre: 'Shonen'
    },
    {
      top: 2,
      name: 'Dragon Ball',
      sinopsis: 'Dragon Ball Z es uno de los animes pioneros de la demográfica shounen. La historia de Goku es explosiva y está llena de acción y aventura. Una aventura de fantasía siguiendo a un joven que aprende las artes marciales en busca de las siete esferas del dragón.',
      content: 'Desde 1986',
      img: 'assets/top/goku.png',
      fechaEstreno: new Date('1986-02-26'),
      rating: 9.3,
      episodes: 519,
      genre: 'Shonen'
    },
    {
      top: 3,
      name: 'Naruto Shippuden',
      sinopsis: 'Naruto es visto como un marginal en su propia aldea debido a que nació con un demonio dentro de su cuerpo. Cansado de ser discriminado, comienza a entrenar para convertirse en el líder ninja más fuerte de la aldea.',
      content: 'Desde 2007',
      img: 'assets/top/naruto.jpg',
      fechaEstreno: new Date('2007-02-15'),
      rating: 9.1,
      episodes: 500,
      genre: 'Shonen'
    },
    {
      top: 4,
      name: 'Hunter x Hunter',
      sinopsis: 'Gon Freecs es un chico de 12 años que desea encontrar a su padre desaparecido, por lo que decide convertirse en Cazador. Un anime con una trama interesante, gran desarrollo de personajes y enormes dosis de acción y emoción.',
      content: 'Desde 2011',
      img: 'assets/top/Hunter.jpg',
      fechaEstreno: new Date('2011-10-02'),
      rating: 9.4,
      episodes: 148,
      genre: 'Shonen'
    },
    {
      top: 5,
      name: 'Fairy Tail',
      sinopsis: 'Lucy Heartfilia es una bruja de 17 años que busca un gremio de magos para unirse. Termina siendo parte de la infame Fairy Tail. Un anime lleno de fantasía, aventura, comedia y magia.',
      content: 'Desde 2009',
      img: 'assets/top/Fairy_Tail.jpg',
      fechaEstreno: new Date('2009-10-12'),
      rating: 8.6,
      episodes: 328,
      genre: 'Shonen'
    }
  ];
}
