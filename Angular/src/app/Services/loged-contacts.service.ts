import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggedContact } from '../shared/models/Logged-Cotact.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LogedContactsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  //pobranie wszystkich kontaktów dostępnych po zalogowaniu
  getAllLoggedContacts(): Observable<LoggedContact[]>{
    return this.http.get<LoggedContact[]>(this.baseApiUrl + '/api/Contacts');
  }
  // usunięcie kontaktu po id
  deleteContact(id: string): Observable<LoggedContact> {
    return this.http.delete<LoggedContact>(this.baseApiUrl+ '/api/Contacts/delete/'+ id);

  }
  //dodanie kontaktu z danymi z formularza
  addContact(contact: LoggedContact): Observable<LoggedContact>{
    return this.http.post<LoggedContact>(this.baseApiUrl + '/api/Contacts', contact);
  }

  //pobranie kontaktu po id
  getContact(id: string): Observable<LoggedContact>{
    return this.http.get<LoggedContact>(this.baseApiUrl + '/api/contacts/' + id)
  }

  //aktualizacja kontaktu 
  updateContact(id: string, contact: LoggedContact): Observable<LoggedContact>{
    
      return this.http.put<LoggedContact>(this.baseApiUrl + '/api/Contacts/' + id, contact);
  }
}
