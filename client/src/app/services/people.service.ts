import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person } from '../models/Person'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPeople(){
    return this.http.get(`${this.API_URI}/people`);
  }

  getPerson(id: string){
    return this.http.get(`${this.API_URI}/people/${id}`)
  }

  deletePerson(id: string){
    return this.http.delete(`${this.API_URI}/people/${id}`)
  }

  savePerson(person: Person){
    return this.http.post(`${this.API_URI}/people`, person);
  }

  updatePerson(person: Person, id: string){
    return this.http.put(`${this.API_URI}/people/${id}`, person);
  }
}
