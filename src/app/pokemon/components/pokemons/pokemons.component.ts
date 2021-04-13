import { Component, OnDestroy, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { getPokemons, State } from '../../state/pokemon.reducer';
import * as PokemonActions from '../../state/pokemon.actions'
import { MatDialog } from '@angular/material/dialog';
import { ModalComponentComponent as PokemonModalComponent } from '../modal-component/modal-component/modal-component.component';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  counter: number = 0;
  pokemons: Pokemon[] = [];
  displayCode: boolean = true;

  constructor(
    private store: Store<State>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getPokemonsFromStore();
    this.loadPokemonsApi();
  }

  getPokemonsFromStore() {
    this.store.select(getPokemons).subscribe(
      pokemons => {
        if (pokemons) {
          this.pokemons = pokemons
          console.log('Pokemons:', this.pokemons)
        }
      }
    )
  }

  // TODO: GET THE POKEMONS HERE
  checkChanged(): void {
    this.store.dispatch(PokemonActions.setModalView())
  }

  loadPokemonsApi(): void {
    this.store.dispatch(PokemonActions.loadPokemons())
  }

  selectPokemon(pokemon: Pokemon) {
    const dialogRef = this.dialog.open(PokemonModalComponent, {
      width: '512px'
    });
    // console.log(pokemon1Url)
    // localStorage.setItem('pokemon1Name', pokemon1Name)
    // localStorage.setItem('pokemon1Url', pokemon1Url)

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    this.store.dispatch(PokemonActions.setSelectedPokemons({ pokemon }))
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
