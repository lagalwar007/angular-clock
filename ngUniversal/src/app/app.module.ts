import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';  // <-- NgModel lives here
import {AppComponent} from './app.component';
import {ClockComponent} from './clock.component';
import { NumberComponent } from './number.component';
import { DotComponent } from './dot.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule  // <-- import the FormsModule before binding with [(ngModel)]
	],
	declarations: [
	  AppComponent,
	  ClockComponent,
	  NumberComponent,
	  DotComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
