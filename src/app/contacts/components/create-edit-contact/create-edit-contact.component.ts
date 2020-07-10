import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/models/IContact';

@Component({
  selector: 'app-create-edit-contact',
  templateUrl: './create-edit-contact.component.html',
  styleUrls: ['./create-edit-contact.component.css']
})
export class CreateEditContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  isEdit = false;
  contactData: IContact;
  constructor(private fb: FormBuilder, private contactService: ContactsService, private ac: ActivatedRoute, private router: Router) {
    this.isEdit = !!this.ac.snapshot.paramMap.get('id');
    if (this.isEdit) {
      this.contactData = this.contactService.list[this.contactService.list.findIndex(c => c.id == Number(this.ac.snapshot.paramMap.get('id')))];
    }
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: [this.isEdit ? this.contactData.firstName : '', Validators.required],
      lastName: [this.isEdit ? this.contactData.lastName : '', Validators.required],
      email: [this.isEdit ? this.contactData.email : '', [Validators.required, Validators.email]],
      phoneNumber: [this.isEdit ? this.contactData.phoneNumber : '', Validators.required],
      status: [this.isEdit ? this.contactData.status : '', Validators.required]
    });
  }
  // get form controls
  get f() { return this.contactForm.controls; }

  contactSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.submitted = false;
      this.contactService.contactUpdate.next(
        { type: this.isEdit, data: this.isEdit ? { id: this.contactData.id, ...this.contactForm.value } : this.contactForm.value });
      this.contactForm.reset();
      this.router.navigate(['/contacts/dashboard']);
    }
  }
}
