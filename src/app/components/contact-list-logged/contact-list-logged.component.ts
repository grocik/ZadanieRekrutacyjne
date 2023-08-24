import { Component, OnInit } from '@angular/core';
import { LogedContactsService } from 'src/app/Services/loged-contacts.service';
import { LoggedContact } from 'src/app/shared/models/Logged-Cotact.model';

@Component({
  selector: 'app-contact-list-logged',
  templateUrl: './contact-list-logged.component.html',
  styleUrls: ['./contact-list-logged.component.css']
})
export class ContactListLoggedComponent implements OnInit{
  // lista kontaktów
  contacts: LoggedContact[] = [];


  constructor(private contactsService: LogedContactsService ){}

  //zapełnianie listy kontaktów z bazy danych
  ngOnInit(): void {
    //wywołanie metody zaciągającej wszystkie kontakty z bazy
    this.contactsService.getAllLoggedContacts().subscribe(
      {
        next: (contacts) =>
        {
          this.contacts = contacts;
        },
        error: (response) => {
          console.log(response);
        }
      })
  }
  // metoda usuwająca kontakt z bazy względem id po wciśnięciu przycisku delete
  deleteContact(id: string){
    //wywołanie metody usuwającej kontakt
    this.contactsService.deleteContact(id).subscribe(
      {
        //jeżeli się powiedzie ponowne zaciągnięcie danych z bazy
      next:(response) => 
      {
        this.ngOnInit();
      }
    });
  }

}
