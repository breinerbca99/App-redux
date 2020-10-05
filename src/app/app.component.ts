import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from './app.reduce';
// import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import * as fromContador from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AppRedux';
  contador: number;

  constructor(private store: Store<AppState>) {
    /* this.contador = 10; */
    this.store.select('contador').subscribe((contador) => {
      // Asignamos el estado al contador
      this.contador = contador;
      console.log(contador);
    });
  }

  incrementar(): void {
    /* this.contador++; */
    /* const accion: Action = {
      type: 'INCREMENTAR',
    }; */
    const accion = new fromContador.IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar(): void {
    /*  this.contador--; */
    /* const accion: Action = {
      type: 'DECREMENTAR',
    }; */
    const accion = new fromContador.DecrementarAction();
    this.store.dispatch(accion);
  }
}
