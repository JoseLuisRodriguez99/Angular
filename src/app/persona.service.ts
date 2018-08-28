import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { PERSONAS } from './mock-personas';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  getPersonas():Observable<Persona[]>  {
    this.messageService.add('PersonaService: fetched personas');
    return of( PERSONAS);
  }
  getPersona(id: number): Observable<Persona> {
    // TODO: send the message _after_ fetching theh
    this.messageService.add(`PersonaService: fetched persona id=${id}`);
    return of(PERSONAS.find(persona => persona.id === id));
  }
  constructor(private messageService: MessageService) { }
}
