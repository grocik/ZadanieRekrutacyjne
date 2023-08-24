import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private logged = new BehaviorSubject<boolean>(false);
  public isLogged = this.logged.asObservable();

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}

  // sprawdzenie czy dane logowania są poprawne i pobranie tokenu jwt
  GetToken(credentials: {login: string, password: string}): Observable<string>{
    return this.http.post<string>(this.baseApiUrl + '/api/login', credentials);
  }
  //ustawienie zmiennej logged 
  setLogged(isLogged: boolean){
    this.logged.next(isLogged);
  }
}
