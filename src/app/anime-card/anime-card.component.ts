import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { EstrenosAnimes } from '../interfaces/estrenos-animes';

@Component({
  selector: 'app-anime-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './anime-card.component.html',
  styleUrl: './anime-card.component.css'
})
export class AnimeCardComponent {
  @Input() animes!: EstrenosAnimes;
}
