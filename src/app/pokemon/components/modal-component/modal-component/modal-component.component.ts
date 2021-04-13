import { Component, InjectionToken, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { getSelectedPokemons, State } from '../../../state/pokemon.reducer';
import * as PokemonActions from '../../../state/pokemon.actions'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent implements OnInit {
  // MAT_DIALOG_DATA: InjectionToken<any>;
  name: string = '';
  url: string = '';
  image: string = '';
  cleanModalView: boolean = true;
  selectedPokemons: Pokemon[] = [];

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit(): void {
    this.getPokemonName();
    this.getSelectedPokemonsFromStore();
  }

  getSelectedPokemonsFromStore() {
    this.store.select(getSelectedPokemons).subscribe(
      pokemon => {
        if (pokemon) {
          this.selectedPokemons.push(...pokemon)
          this.image = `${environment.POKEMON_IMAGE_URL}${this.selectedPokemons[0].url.split('/')[6]}.png`;
          console.log('Pokemon:', this.selectedPokemons)
        }
      }
    )
  }

  getPokemonName() {
    this.name = localStorage.getItem('pokemon1Name') || ''
    this.url = localStorage.getItem('pokemon1Url') || ''

  }

  ngOnDestroy(): void {
    if (this.cleanModalView) {
      this.store.dispatch(PokemonActions.cleanSelectedPokemons())
    }
  }
}
