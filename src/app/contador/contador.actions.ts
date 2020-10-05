import { Action } from '@ngrx/store';

export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';
export const MULTIPLICAR = '[Contador] Multiplicar';
export const DIVIDIR = '[Contador] Dividir';
export const RESET = '[Contador] Reset';

export class IncrementarAction implements Action {
  // Solo Lectura
  readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action {
  // Solo Lectura
  readonly type = DECREMENTAR;
}

export class MultiplicarAction implements Action {
  // Solo Lectura
  readonly type = MULTIPLICAR;

  // Le damos el constructor al multiplicar para que sepa que es multiplicar
  constructor(public payload: number) {}
}

export class DividirAction implements Action {
  // Solo Lectura
  readonly type = DIVIDIR;

  // Le damos el constructor al multiplicar para que sepa que es multiplicar
  constructor(public payload: number) {}
}

export class ResetAction implements Action {
    // Solo Lectura
    readonly type = RESET;
  }

// Esto reemplazaria al Action
export type actions = IncrementarAction | DecrementarAction | MultiplicarAction | DividirAction | ResetAction;
