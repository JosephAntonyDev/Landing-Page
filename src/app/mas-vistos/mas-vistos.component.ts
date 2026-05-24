import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TopAnimes } from '../interfaces/top-animes';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-mas-vistos',
  standalone: true,
  imports: [NgFor, NgIf, SectionTitleComponent],
  templateUrl: './mas-vistos.component.html',
  styleUrl: './mas-vistos.component.css'
})
export class MasVistosComponent {
  animesTop: TopAnimes[] = [
    {
      top: 1,
      name: 'Dragon Ball Z',
      sinopsis: 'Dragon Ball Z es uno de los animes pioneros de la demográfica shounen. Además de haberse convertido en un clásico querido en todo el mundo, ha aumentado considerablemente la popularidad del género. La historia de Goku es explosiva y está llena de acción y aventura. Y mientras que la franquicia comenzó como una aventura de fantasía siguiendo a un joven que aprende las artes marciales en busca de las siete esferas del dragón, Dragon Ball Z se especializa en un entorno de acción y ciencia ficción digno de atención.',
      content: 'Fecha de estreno: 2024',
      img: 'assets/top/goku.png',
      fechaEstreno: new Date('2024-10-10'),
      rating: 9.3,
      episodes: 519,
      genre: 'Shonen'
    },
    {
      top: 2,
      name: 'One Piece',
      sinopsis: 'One Piece tiene que ofrecernos cientos de episodios de acción con momentos cómicos y emocionales para un excelente balance. La historia sigue a Monkey D. Luffy que sueña con convertirse en el Rey Pirata. Para hacer esto, decide ir en busca del mayor tesoro de la historia, el One Piece. Sin embargo, necesita su propia tripulación pirata para lograr esto. Y así comienza una aventura en alta mar con monstruos gigantes, piratas y marineros peligrosos.',
      content: 'Fecha de estreno: Finales de 2024',
      img: 'assets/top/one-piece.jpg',
      fechaEstreno: new Date('2024-12-01'),
      rating: 9.5,
      episodes: 1100,
      genre: 'Shonen'
    },
    {
      top: 3,
      name: 'Naruto Shippuden',
      sinopsis: 'Naruto es visto como un marginal en su propia aldea debido al hecho de que nació con un "demonio" dentro de su cuerpo. Cansado de ser discriminado, comienza a entrenar para convertirse en el líder ninja más fuerte de la aldea. Es cierto que Naruto es un anime que abusa de los episodios de relleno, pero si puedes ignorarlos y divertirte con su energía y peleas increíbles, encontrarás en los episodios principales una de las mejores tramas en la historia del anime.',
      content: 'Fecha de estreno: 2024',
      img: 'assets/top/naruto.jpg',
      fechaEstreno: new Date('2024-08-08'),
      rating: 9.1,
      episodes: 500,
      genre: 'Shonen'
    },
    {
      top: 4,
      name: 'Hunter x Hunter',
      sinopsis: 'Gon Freecs es un chico de 12 años que desea encontrar a su padre desaparecido, por lo que decide convertirse en Cazador, al igual que él. En su búsqueda, se encontrará con multitud de peligros, pero también entablará una gran amistad con otros tres aspirantes a Cazador que le acompañarán en sus aventuras: Leorio, Kurapika y Killua. Hunter X Hunter, en original es un anime con una trama muy interesante, un gran desarrollo de personajes y enormes dosis de acción y emoción. Goza de un gran éxito mundial y ha dado lugar a un montón de productos derivados, como películas, videojuegos, libros, musicales y hasta una obra de teatro.',
      content: 'Fecha de estreno: 2024',
      img: 'assets/top/Hunter.jpg',
      fechaEstreno: new Date('2024-11-15'),
      rating: 9.4,
      episodes: 148,
      genre: 'Shonen'
    },
    {
      top: 5,
      name: 'Fairy Tail',
      sinopsis: 'Lucy Heartfilia es una bruja de 17 años que busca un gremio de magos para unirse. Por supuesto, termina siendo parte de la infame Fairy Tail, conocida por causar caos donde quiera que vayan. Fairy Tail es un anime lleno de fantasía, aventura, comedia y, por supuesto, magia. Nunca te aburrirás con la acción explotando en la pantalla y la trama bien construida. ¡Vive una aventura con un asesino de dragones, un gato volador y un conjunto de magos diferentes y verás cómo pasan las horas!',
      content: 'Fecha de estreno: 2024',
      img: 'assets/top/Fairy_Tail.jpg',
      fechaEstreno: new Date('2024-09-09'),
      rating: 8.6,
      episodes: 328,
      genre: 'Shonen'
    }
  ];
}
