import { Component, Input, OnInit } from '@angular/core';

import { HEROES } from '../../models/mock-heroes';
import { Hero } from '../../models/hero';
import { HeroService } from './../../services/hero/hero.service';
import { MessageService } from './../../services/hero/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  @Input() hero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelectHero(hero): void {
    this.messageService.add(`HeroService: Selected hero id: ${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
