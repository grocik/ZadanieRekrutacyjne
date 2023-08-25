import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  // zmienna do wyświetlenia elementów login i logout
  logged: boolean = false;
  private loggedSubscription: Subscription;
  
  constructor(private loginService : LoginService) {
    this.loggedSubscription = this.loginService.isLogged.subscribe(logged =>
      {
        this.logged = logged;
      })
  }

  //przy zniszczeniu komponentu odubskrybowanie zmiennej
  ngOnDestroy() {
    this.loggedSubscription.unsubscribe();
  }

  //przy inicjacji sprawdzenie stanu zalogowania
  ngOnInit(): void {
    this.checkIfLogged();
  }

  //po wciśnięciu logout usunięcie tokenu z local storage
  logout(){
    localStorage.removeItem("jwt");
    this.loginService.setLogged(false);
  }

  //metoda sprawdzająca czy użytkownik posiada token jwt
  private checkIfLogged(){
    if(localStorage.getItem("jwt")){
      this.logged = true;
    }
    else{
      this.logged = false;
    }
  }
}
