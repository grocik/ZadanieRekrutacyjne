import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { LogedContactsService } from 'src/app/Services/loged-contacts.service';
import { SubcategoriesService } from 'src/app/Services/subcategories.service';
import { LoggedContact } from 'src/app/shared/models/Logged-Cotact.model';
import { Category } from 'src/app/shared/models/category.model';
import { SubCategory } from 'src/app/shared/models/subCategory.model';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{

    //lista kategori
    categories: Category[] = [];
    //lista podkategori
    subCategories: SubCategory[] = [];
    
  //inicjalizacja pustego kontaktu
  contactToShow: LoggedContact = {
    contactId: '0',
    name: '',
    surename: '',
    email: '',
    password: '',
    phoneNumber: 0,
    birthDate: new Date(),
    category: '',
    subcategory: ''

  }

  constructor(
    private route: ActivatedRoute,
    private logedContactsService: LogedContactsService,
    private router: Router,
    private categoriesService: CategoriesService, 
    private subCategoriesService: SubcategoriesService) {}

  //zapełnianie edytowanego kontaktu danymi z bazy
  ngOnInit(): void {
    //pobranie danych z route
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        //jeżeli id w route istnieje
        if (id){
          //wywołanie pobrania danych
          this.logedContactsService.getContact(id).subscribe({
            //zapisanie danych do zmiennej 
            next: (response) =>
            {
              
              this.contactToShow.contactId = response.contactId;
              this.contactToShow.name = response.name;
              this.contactToShow.surename = response.surename;
              this.contactToShow.email = response.email;
              this.contactToShow.password = response.password;
              this.contactToShow.phoneNumber = response.phoneNumber;
              this.contactToShow.birthDate = response.birthDate;
              this.contactToShow.category = response.category;
              this.contactToShow.subcategory = response.subcategory;
            }
          })
        }
      }
      
    })
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
  // edycja kontaktu po zatwierdzniu
  editContact(id: string,contact: LoggedContact){
    // sprawdzenie czy pola nie są puste
    if(this.contactToShow.name==='' ||
       this.contactToShow.surename ==='' ||
       this.contactToShow.email ==='' ||
       this.contactToShow.password ==='' ||
       this.contactToShow.phoneNumber == 0 ||
       this.contactToShow.birthDate == new Date ||
       this.contactToShow.category === '')
       {
        return
       }
       // jeżeli wybrano kategorie private nie pokazuje podkategori
     if(this.contactToShow.category === 'private'){
      this.contactToShow.subcategory = '';
     }
     // wywołanie metody aktualizującej kontakt
    this.logedContactsService.updateContact(id,contact).subscribe({
      next: (response) =>
      {
        console.log(response);
      }
    });
    // przekierowanie do componentu contact-list-logged
    this.router.navigate(["/login/contacts"]).then(()=>
       {
        window.location.reload();
       });

  }
}
