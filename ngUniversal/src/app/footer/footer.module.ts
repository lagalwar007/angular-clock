import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[
    FooterComponent
  ]
})
export class FooterModule { }
