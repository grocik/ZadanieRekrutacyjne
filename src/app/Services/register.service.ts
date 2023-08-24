import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  //sprawdzenia czy dane rejestracyjne są poprawne, zapisanie użytkownika w bazie
  Register(credentials: {login: string, password: string}): Observable<string>{
    return this.http.post<string>(this.baseApiUrl + '/api/register', credentials);
  }
}
