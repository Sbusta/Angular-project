import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: any;
  image: string = ''
  constructor() {
  }

  ngOnInit(): void {
    this.image = `${environment.POKEMON_IMAGE_URL}${this.pokemon.url.split('/')[6]}.png`;
  }

  selectPokemon() {
    alert(`${this.pokemon.name} was selected`);
  }
}
