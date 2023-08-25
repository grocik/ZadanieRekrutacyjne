import { Component, OnInit } from '@angular/core';
import { BasicContactsService } from 'src/app/Services/basicContacts.service';
import { BasicContact } from 'src/app/shared/models/basic-contacts.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  isLogged: boolean = true;
  
  basicContacts: BasicContact[] = [];
  constructor(private basicContactsService: BasicContactsService ){}

  // przy inicjaci komponentu zaciągamy dane z bazy
  ngOnInit(): void {

    //wywołanie funkcji zaciągającej dane
    this.basicContactsService.getAllBasicContacts().subscribe(
      {
        //jeżeli sie powiedzie zapełnienie lokalnej zmiennej
        next: (contacts) =>{
          this.basicContacts = contacts;
        },
        error: (response) => {
          console.log(response);
        }
      }
    );

  }
}
