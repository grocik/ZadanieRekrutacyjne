import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactListLoggedComponent } from './components/contact-list-logged/contact-list-logged.component';
import { LoginComponent } from './components/login/login.component';
import { authGuardGuard } from './guard/auth-guard.guard';
import { RegisterComponent } from './components/register/register.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';


const routes: Routes = 
[
  {
  path: '',
  component: ContactsListComponent
  },
  {
    path: 'contacts',
    component: ContactsListComponent
  },
  {
    path: 'login/contacts',
    component: ContactListLoggedComponent,
    canActivate: [authGuardGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login/contacts/addcontact', 
    component: AddContactComponent,
    canActivate: [authGuardGuard]
  },
  {
    path: 'login/contacts/editcontact/:id',
    component: EditContactComponent,
    canActivate: [authGuardGuard]
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
