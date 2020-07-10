import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { IContact } from 'src/app/models/IContact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contactUpdate = new Subject();
  list: IContact[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Miller',
      email: 'john@gmail.com',
      phoneNumber: 9898989898,
      status: 'Active'
    },
    {
      id: 2,
      firstName: 'Arnold',
      lastName: 'Wallce',
      email: 'arnold@gmail.com',
      phoneNumber: 9797979797,
      status: 'Active'
    },
    {
      id: 3,
      firstName: 'Kohli',
      lastName: 'Virat',
      email: 'virat@gmail.com',
      phoneNumber: 9696969696,
      status: 'Active'
    },
    {
      id: 4,
      firstName: 'Rohit',
      lastName: 'Sharma',
      email: 'rohit@gmail.com',
      phoneNumber: 9595959595,
      status: 'Inactive'
    }
  ];
  constructor(private http: HttpClient) {
    this.contactUpdate.subscribe(res => {
      if (!res['type']) {
        this.list.push({ id: Number(this.list[this.list.length - 1].id) + 1, ...res['data'] });
      } else {
        this.list[this.list.findIndex(c => c.id === Number(res['data'].id))] = { ...res['data'] };
      }
    })
  }

}
