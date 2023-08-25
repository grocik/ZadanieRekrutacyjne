import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { LogedContactsService } from 'src/app/Services/loged-contacts.service';
import { SubcategoriesService } from 'src/app/Services/subcategories.service';
import { LoggedContact } from 'src/app/shared/models/Logged-Cotact.model';
import { Category } from 'src/app/shared/models/category.model';
import { SubCategory } from 'src/app/shared/models/subCategory.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  empty:boolean = false;

  //lista kategori
  categories: Category[] = [];
  //lista podkategori
  subCategories: SubCategory[] = [];

  // inicjalizacja kontaktu
  contactToAdd: LoggedContact = {
    contactId: '00000000-0000-0000-0000-000000000000',
    name: '',
    surename: '',
    email: '',
    password: '',
    phoneNumber: 0,
    birthDate: new Date,
    category: '',
    subcategory: ''

  }

  constructor(
    private loggedContactService: LogedContactsService,
    private router: Router,
    private categoriesService: CategoriesService, 
    private subCategoriesService: SubcategoriesService){}

    //zapełnianie danych o kategoriach i pod kategoriach z bazy danych
  ngOnInit(): void {

    //pobieranie kategori
    this.categoriesService.getCategories().subscribe({
      next: (category) => {
        this.categories = category;
      }
    })
    //pobieranie podkategori
    this.subCategoriesService.getCategories().subscribe({
      next: (subCategory) =>{
        this.subCategories = subCategory;
      }
    })
  }

  //po kliknięciu przycisku wyślij dodaje nowy kontakt
  addContact(){
    
    //sprawdzenie czy pola nie są puste jeżeli tak zwracamy błąd
    if(this.contactToAdd.name==='' ||
       this.contactToAdd.surename ==='' ||
       this.contactToAdd.email ==='' ||
       this.contactToAdd.password ==='' ||
       this.contactToAdd.phoneNumber == 0 ||
       this.contactToAdd.birthDate == new Date ||
       this.contactToAdd.category === '')
       {
        //zmienna do wyświetlenia błędu
        this.empty = true
        return
       }
       else{
        //zmienna do wyświetlenia błędu
        this.empty = false;
        //wywołanie dodania kontaktu do bazy danych
        this.loggedContactService.addContact(this.contactToAdd).subscribe({
          next: (contact) => 
          {
            console.log(contact);
          }
        })
       }
       //przekierowanie do componentu z listą kontaktów
       this.router.navigate(["/login/contacts"]).then(()=>
       {
        //odświerzenie componentu
        window.location.reload();
       });
  }


}
