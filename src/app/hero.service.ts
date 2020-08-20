import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Hero } from './hero';
import { HEROS } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {  

  constructor(private messageService: MessageService) { }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROS.find(hero => id === hero.id));
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Fetched the heros data.');
    return of(HEROS);
  }
}
