import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reduce';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [],
})
export class HijoComponent implements OnInit {
  // @Input() contador: number;
  // @Output() cambioContador = new EventEmitter<number>();
  contador: number;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('contador').subscribe((contador) => {
      this.contador = contador;
      console.log(contador);
    });
  }

  multiplicar(): void {
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
    const accion = new MultiplicarAction(5);
    this.store.dispatch( accion );
  }

  dividir(): void {
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
    const accion = new DividirAction(5);
    this.store.dispatch( accion );
  }

  resetNieto(nuevoContador: number): void {
    this.contador = nuevoContador;
    // this.cambioContador.emit(this.contador);
  }
}
