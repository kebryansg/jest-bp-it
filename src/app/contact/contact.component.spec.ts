import {ContactComponent} from './contact.component';
import {ContactsService} from '../services/contacts.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of, throwError} from "rxjs";


describe('ContactsComponent', () => {

  let component: ContactComponent;
  let fixture: any;
  let compiled: HTMLElement
  let contactService: ContactsService

  beforeAll(() => {
  })

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
    contactService = TestBed.inject(ContactsService)
    fixture = TestBed.createComponent(ContactComponent)
    component = fixture.componentInstance
    compiled = fixture.nativeElement
  })

  it('Created', () => {
    expect(component).toBeTruthy()
  })


  it('Init: debe cargar los contactos', () => {

    const contacts = ['Kevin', 'Juan', 'Pedro']

    jest.spyOn(contactService, 'getContacts')
      .mockImplementation(() => of(contacts))

    component.ngOnInit()
    expect(component.contacts.length).toBeGreaterThan(0);
  })


  it('Debe llamar al servidor para agregar un contacto', () => {

    const spy = jest.spyOn(contactService, 'addContact')
      .mockImplementation((contact) => {
        return of(null)
      })

    component.addContact()

    expect(spy).toHaveBeenCalled()
  })

  it('Debe llamar al servidor para agregar un contacto', () => {

    const spy = jest.spyOn(contactService, 'addContact')
      .mockImplementation((contact) => {
        return of(null)
      })

    component.addContact()

    expect(spy).toHaveBeenCalled()

  })

  it('Debe agregar un nuevo contacto al arreglo de contacts', () => {

    const contact = 'Kevin'

    jest.spyOn(contactService, 'addContact')
      .mockReturnValue(of(contact))

    component.addContact()

    expect(component.contacts.indexOf(contact)).toBeGreaterThanOrEqual(0)

  })

  it('Si falla el agregar, la propiedad mensajeError, debe ser igual al error que yo emita en el servicio', () => {

    const miError = "No se pudo agregar el contacto"

    jest.spyOn(contactService, 'addContact')
      .mockImplementation(() => throwError(() => miError))


    component.addContact()

    expect(component.mensajeError).toBe(miError)

  })

  it('Debe de llamar al servidor para borrar un contacto', () => {

    jest.spyOn(window, 'confirm').mockReturnValue(true)

    const spy = jest.spyOn(contactService, 'deleteContact')
      .mockReturnValue(of(null))

    component.deleteContact('1')

    expect(spy).toHaveBeenCalledWith('1')
  })

  it('No debe de llamar al servidor para borrar un contacto', () => {

    jest.spyOn(window, 'confirm').mockReturnValue(false)

    const spy = jest.spyOn(contactService, 'deleteContact')
      .mockReturnValue(of(null))

    component.deleteContact('1')

    expect(spy).not.toHaveBeenCalledWith('1')
  })

  it('debe renderizar el mensaje de error que envio el servidor', () => {

    const error = 'No se pudo agregar, falta edad.'
    jest.spyOn(contactService, 'addContact')
      .mockReturnValue(throwError(error))

    component.addContact()

    expect(component.mensajeError).toBe(error)

    fixture.detectChanges()

    expect(compiled.querySelector('.error')?.textContent).toBe(error)
  })

});
