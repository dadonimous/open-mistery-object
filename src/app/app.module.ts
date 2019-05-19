import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { DamagerComponent } from './damager/damager.component';
import { HealthBarComponent } from './health-bar/health-bar.component';
import { HintComponent } from './hint/hint.component';

@NgModule({
  declarations: [
    AppComponent,
    DamagerComponent,
    HealthBarComponent,
    HintComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
