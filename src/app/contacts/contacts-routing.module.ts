import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { CreateEditContactComponent } from './components/create-edit-contact/create-edit-contact.component';


const routes: Routes = [
  {path: 'dashboard', component: ContactListComponent},
  {path: 'create', component: CreateEditContactComponent},
  {path: 'edit/:id', component: CreateEditContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
