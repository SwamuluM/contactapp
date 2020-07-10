import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { CreateEditContactComponent } from './components/create-edit-contact/create-edit-contact.component';
import { ContactsService } from './services/contacts.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactListComponent, CreateEditContactComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ ContactsService]
})
export class ContactsModule { }
