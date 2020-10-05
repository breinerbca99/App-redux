import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reduce';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [],
})
export class NietoComponent implements OnInit {
  // @Input() contador: number;
  // @Output() contadorCambio = new EventEmitter<number>();
  contador: number;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('contador').subscribe((contador) => {
      this.contador = contador;
    });
  }

  reset(): void {
    // this.contador = 0;
    // this.contadorCambio.emit(0);
    const accion = new ResetAction();
    this.store.dispatch( accion );
  }
}
