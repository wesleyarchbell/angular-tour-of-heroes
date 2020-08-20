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
  
  constructor(private heroService: HeroService, private messsageService: MessageService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeroes().subscribe(heros => this.heroes = heros);
  }
}
