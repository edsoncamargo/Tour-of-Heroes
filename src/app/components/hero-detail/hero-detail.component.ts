import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
// Models
import { Hero } from './../../models/hero';
import { HeroService } from './../../services/hero/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(+id).subscribe((hero: Hero) => {
      this.hero = hero;
    });
  }

  onBack(): void {
    this.location.back();
  }

}
