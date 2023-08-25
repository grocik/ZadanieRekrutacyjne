import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicContact } from '../shared/models/basic-contacts.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BasicContactsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  //zapytanie do api pobranie wszystkich podstawowych kontaktów
  getAllBasicContacts(): Observable<BasicContact[]>{
    return this.http.get<BasicContact[]>(this.baseApiUrl + '/api/BasicContacts');
  }
}
