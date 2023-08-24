import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // zmienna do wyświetlenia błedu danych
  invalidLogin: Boolean = false;

  constructor(private registerService: RegisterService, private router: Router) {}

  //metoda do rejestracji po wciśnięciu przycisku
  Register(form: NgForm){
    //stworzenie obiektu z danych z formularza
    const credentials=
    {
      'login': form.value.username,
      'password': form.value.password
    }

    //wywołanie metody rejestrującej użytkownika
    this.registerService.Register(credentials).subscribe(Response =>
     {
      this.invalidLogin = false;
      // nawigacja do componentu logowania
      this.router.navigate(["/login"]);
     }, erro => {
        this.invalidLogin = true;
      }
    )
    

  }
}
