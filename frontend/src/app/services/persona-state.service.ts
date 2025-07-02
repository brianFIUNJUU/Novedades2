import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaStateService {
  private personasEstado: { [key: number]: 'victima' | 'victimario' } = {};

  setEstado(personaId: number, estado: 'victima' | 'victimario'): void {
    this.personasEstado[personaId] = estado;
  }

  getEstado(personaId: number): 'victima' | 'victimario' | undefined {
    return this.personasEstado[personaId];
  }

  clearEstado(personaId: number): void {
    delete this.personasEstado[personaId];
  }

  clearAll(): void {
    this.personasEstado = {};
  }
}