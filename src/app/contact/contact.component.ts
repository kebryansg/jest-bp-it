import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../services/contacts.service";

@Component({
  selector: 'app-contact',
  template: `
    <p>
      Contacts works!
    </p>
    <span class="error">{{mensajeError}}</span>
  `,
  styles: []
})
export class ContactComponent implements OnInit {

  public contacts: any[] = [];
  public mensajeError!: string;

  constructor(public contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contactsService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  addContact() {
    const contact = {nombre: 'Juan Carlos'};

    this.contactsService.addContact(contact)
      .subscribe(
        contactDB => this.contacts.push(contactDB),
        err => this.mensajeError = err
      );
  }

  deleteContact(id: string) {
    const confirmar = confirm('Estas seguro que desea borrar este contacto');

    if (confirmar) {
      this.contactsService.deleteContact(id);
    }

  }

}
