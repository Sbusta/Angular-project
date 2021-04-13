import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

const routes: Routes = [
    {
        path: '',
        component: PokemonsComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule { }