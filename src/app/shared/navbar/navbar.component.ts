import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PokemonsActions from '../../pokemons/state/pokemons.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  links = [{
    label: 'Home', path: 'home'
  },
  {
    label: 'Pokemons', path: 'pokemons'
  }];
  activeLink = this.links[0];
  
  constructor(private store: Store) { }

  private _filter = '';

  get filter(): string {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value.toLowerCase();
    if (this._filter !== '') {
      this.store.dispatch(PokemonsActions.enableFiltering({ filter: this._filter }));
    } else {
      this.store.dispatch(PokemonsActions.disableFiltering());
    }
  }

}
