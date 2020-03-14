import { HEROES } from './../../models/mock-heroes';
import { Hero } from './../../models/hero';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  hero: Hero;
  HEROES = HEROES;

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id: ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
