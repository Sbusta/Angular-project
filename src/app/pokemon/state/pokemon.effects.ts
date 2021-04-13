import { Injectable } from '@angular/core';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';
import * as PokemonActions from './pokemon.actions'

@Injectable()
export class PokemonEffects {
    constructor(
        private actions$: Actions,
        private pokemonService: PokemonService
    ) { }

    loadPokemons$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(PokemonActions.loadPokemons),
                mergeMap(() => this.pokemonService.getPokemons()
                    .pipe(
                        map(pokemons => PokemonActions.loadPokemonsSuccess({ pokemons })),
                        catchError(error => of(PokemonActions.loadPokemonsFailure({ error })))
                    )
                )
            );
    });
}