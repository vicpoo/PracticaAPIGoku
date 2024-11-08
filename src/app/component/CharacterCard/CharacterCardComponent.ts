// src/app/components/CharacterCard/character-card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICharacter } from '../../interfaces/ICharacter';

@Component({
  selector: 'app-character-card',
  standalone: true,
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {
  @Input() character!: ICharacter;
  @Output() characterClicked = new EventEmitter<number>();

  onClick() {
    this.characterClicked.emit(this.character.id);
  }
}
