import { createAction, props } from "@ngrx/store";
import { Pokemon } from "src/app/core/models/pokemon.model";


export const loadPokemons = createAction(
  '[Pokemon] Load',
);

export const loadPokemonsSuccess = createAction(
  '[Pokemon] Load Success',
  props<{ pokemons: Pokemon[] }>()
);

export const loadPokemonsFailure = createAction(
  '[Pokemon] Load Fail',
  props<{ error: string }>()
);

export const setModalView = createAction(
  '[Pokemon] Set Modal View',
);

export const setSelectedPokemons = createAction(
  '[Poemon] Set Selected Pokemons',
  props<{ pokemon: Pokemon }>()
);

export const cleanSelectedPokemons = createAction(
  '[Poemon] Clean Selected Pokemons',
);