import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = [];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messsageService: MessageService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros().subscribe(heros => this.heroes = heros);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;    
    this.messsageService.add(`Selected hero: ${hero.id}`);
  }

}
