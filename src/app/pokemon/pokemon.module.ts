import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { ToastViewComponent } from './components/toast-view/toast-view.component';
import { MaterialModule } from '../material/material.module';
import { ModalComponentComponent } from './components/modal-component/modal-component/modal-component.component';
import { ReactiveFormsModule } from '@angular/forms';

/*  NgRx */
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './state/pokemon.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PokemonEffects } from './state/pokemon.effects';
import { ChartComponent } from './components/chart/chart/chart.component';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonsComponent,
    ToastViewComponent,
    ModalComponentComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PokemonRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('pokemons', pokemonReducer),
    EffectsModule.forFeature([PokemonEffects])
  ]
})
export class PokemonModule { }
