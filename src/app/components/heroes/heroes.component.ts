import { Component, OnInit } from '@angular/core';

import { Hero } from '../../models/hero';
import { HEROES } from '../../models/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  uniqueHero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;
  name: string = '';

  selectedUniqueHero: Hero;

  constructor() {

  }

  ngOnInit() {

  }

  selectedHero(hero): void {
    this.selectedUniqueHero = hero;
  }

  onSave() {

  }

}
