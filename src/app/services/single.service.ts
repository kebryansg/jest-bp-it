import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleService {

  private nameApp = 'Angular-Test';

  constructor() {
  }

  getNameApp(): string {
    return this.nameApp; // Angular-Test
  }

  getDay(day: number): string {
    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    return days[day] ?? 'Nothing';
  }

}
