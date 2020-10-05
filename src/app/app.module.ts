import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Ngrx
import { StoreModule } from '@ngrx/store';
// Reducer
import { contadorReducer } from './contador/contador.reducer';
// DevTools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { environment } from '../environments/environment.prod';




@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Aca le pasamos el reducer
    // { Estado : Reducer }
    StoreModule.forRoot({ contador: contadorReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Mantenga los ultimos 25 estados
      logOnly: environment.production // Para que los usuarios no puedan ver los estados
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
