import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../../models/hero';
import { HEROES } from '../../models/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  @Input() hero: Hero;

  heroes = HEROES;
  name: string = '';

  selectedUniqueHero: Hero;

  constructor() { }

  ngOnInit() { }

  selectedHero(hero): void {
    this.selectedUniqueHero = hero;
  }

  onSave() {

  }

}
