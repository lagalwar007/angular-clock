import { SidenavModule } from './../sidenav/sidenav.module';
import { LayoutComponent } from './layout.component';
import { FooterModule } from './../footer/footer.module';
import { HeaderModule } from './../header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    SidenavModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
