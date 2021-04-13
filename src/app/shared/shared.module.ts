import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
    InfiniteScrollModule
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
