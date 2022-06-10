import {Injectable} from '@angular/core';
import {SingleService} from './single.service';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private singleService: SingleService) {
  }

  getNameApp(): string {
    return this.singleService.getNameApp(); // Angular-Testing
  }

  getWorkDays(): string[] {
    return new Array(5)
      .map((day, i) =>
        this.singleService.getDay(i)
      );
  }
}
