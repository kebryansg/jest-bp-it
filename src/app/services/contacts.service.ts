import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) {
  }


  getContacts(): Observable<any[]> {
    return this.http.get<any>('...');
  }

  addContact(contact: any): Observable<any> {
    return this.http.post<any>('...', contact);
  }

  deleteContact(id: string): Observable<any> {
    return this.http.delete<any>('...');
  }

}
