import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ICharacter } from '../interfaces/ICharacter';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) {}

  getAllCharacters(page: number = 1, limit: number = 10): Observable<ICharacter[]> {
    const url = `${this.apiUrl}?page=${page}&limit=${limit}`;
    return this.http.get<{ items: ICharacter[] }>(url).pipe(
      map(response => response.items),
      catchError(error => {
        console.error('Error al obtener personajes:', error);
        return of([]);
      })
    );
  }

  getCharacterById(id: number): Observable<ICharacter | null> {
    return this.http.get<ICharacter>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error(`Error al obtener el personaje con ID ${id}:`, error);
        return of(null);
      })
    );
  }
}