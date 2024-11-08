import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/CharacterService';
import { ICharacter } from '../../interfaces/ICharacter';
import { CharacterCardComponent } from '../CharacterCard/CharacterCardComponent';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters: ICharacter[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(page: number = 1): void {
    this.characterService.getAllCharacters(page).subscribe((data) => {
      this.characters = data;
      this.currentPage = page;
    }, (error) => {
      console.error('Error al cargar los personajes:', error);
    });
  }

  onCharacterClick(id: number) {
    this.characterService.getCharacterById(id).subscribe((character) => {
      if (character) {
        alert(`Character: ${character.name}\nRace: ${character.race}\nKI: ${character.ki}\nDescription: ${character.description}`);
      } else {
        alert('Error: No se pudo obtener la información del personaje.');
      }
    });
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.loadCharacters(this.currentPage + 1);
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.loadCharacters(this.currentPage - 1);
    }
  }
}