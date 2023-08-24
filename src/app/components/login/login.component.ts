import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //błedne dane, do wyświetlenia błędu
  invalidLogin: boolean = false;

  constructor(private loginService: LoginService, private router: Router){}

  //metoda logowanie , sprawdzenie czy dany użytkownik istnieje w bazie danych, odebranie i przechowanie tokenu uwierzytelniającego logowanie
  login(form: NgForm){
    //pobranie danych z formularza i tworzenie obiektu
    const credentials =
     {
      'login': form.value.username,
      'password': form.value.password
    }

    //metoda sprawdzająca czy dane są zgodne, w odpowiedzi zapisanie tokenu jwt
    this.loginService.GetToken(credentials).subscribe(Response =>
      {
        const token = (<any>Response).token;
        //zapisanie tokenu
        localStorage.setItem("jwt", token)
        //zresetowanie błedu danych
        this.invalidLogin = false;
        //przeniesienie do componentu z kontaktami po zalogowaniu
        this.router.navigate(["/login/contacts"]);
        //ustawienie zmiennej na zalogowany
        this.loginService.setLogged(true);
        
      }, erro => {
        this.invalidLogin = true;
        this.loginService.setLogged(false);
      }
      );

  }
}
