import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { IContact } from 'src/app/models/IContact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  public list: IContact[];
  constructor(private contactService: ContactsService) { }

  ngOnInit(): void {
    this.list = this.contactService.list;
  }

  public onActionStatus(index): void {
    this.list[index].status = this.list[index].status === 'Active' ? 'Inactive' : 'Active';
  }

  public onActionDelete(index): void {
    this.list.splice(index, 1);
  }

}
