/* NgRx */
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { Pokemon } from 'src/app/core/models/pokemon.model';

import * as PokemonActions from './pokemon.actions'
import * as AppState from '../../state/app.state';

// Extends the app state to include the pokemon feature.
// This is required because pokemons are lazy loaded.
// So the reference to PokemonState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
    pokemons: PokemonState;
}

// State for this feature (User)
export interface PokemonState {
    pokemons: Pokemon[],
    originalPokemons: Pokemon[],
    selectedPokemons: Pokemon[],
    showModalView: boolean,
    error: string,
}

const initialState: PokemonState = {
    pokemons: [],
    originalPokemons: [],
    selectedPokemons: [],
    showModalView: true,
    error: ''
}

// Selector functions
const getPokemonFeatureState = createFeatureSelector<PokemonState>('pokemons');

export const getPokemons = createSelector(
    getPokemonFeatureState,
    state => state.pokemons
);

export const getSelectedPokemons = createSelector(
    getPokemonFeatureState,
    state => state.selectedPokemons
);

export const pokemonReducer = createReducer<PokemonState>(
    initialState,
    on(PokemonActions.loadPokemonsSuccess, (state, action: any): PokemonState => {
        return {
            ...state,
            pokemons: [
                ...state.pokemons,
                ...action.pokemons.results,
            ],
            error: ''
        }
    }),
    on(PokemonActions.loadPokemonsFailure, (state, action): PokemonState => {
        return {
            ...state,
            pokemons: [],
            error: action.error
        };
    }),
    on(PokemonActions.setModalView, (state): PokemonState => {
        return {
            ...state,
            showModalView: !state.showModalView
        };
    }),
    on(PokemonActions.setSelectedPokemons, (state, action): PokemonState => {
        return {
            ...state,
            selectedPokemons: [
                ...state.selectedPokemons,
                action.pokemon,
            ]
        }
    }),
    on(PokemonActions.cleanSelectedPokemons, (state): PokemonState => {
        return {
            ...state,
            selectedPokemons: []
        }
    })
);

