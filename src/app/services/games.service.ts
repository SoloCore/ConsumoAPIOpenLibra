import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GamesService {

  // API_URI = 'http://localhost:3000/api';
    API_URI = 'https://www.etnassoft.com/api/v1/get';


  constructor(private http: HttpClient) { }

  getGames() { 
    return this.http.get(`${this.API_URI}/?category=all`)
  }

  getCategory(id: string) { 
    return this.http.get(`${this.API_URI}/?category=${id}&num_items=20`)
  }

  getCategories() { 
    return this.http.get(`${this.API_URI}/?get_categories=all&num_items=20`)
  }

  getSubCategories() { 
    return this.http.get(`${this.API_URI}/?get_subcategories_by_category_ID`)
  }

  getGame(id: string) { 
    return this.http.get(`${this.API_URI}/?id=${id}`);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/?games/${id}`);
  }

  saveGame(game: Game) {
    return this.http.post(`${this.API_URI}/?games/`, game);
  }

  updateGame(id: string, updatedGame: Game): Observable<Game> {
    return this.http.put(`${this.API_URI}/?games/${id}`, updatedGame);
  }

}
