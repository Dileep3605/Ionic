import { Injectable } from '@angular/core';
import { expenses } from '../expenses.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public expenses: expenses[] = [
    {
      id: 'e1',
      description: 'Ordered tea at paradise',
      date: new Date(),
      amount: 651,
      billImageUrl: 'assets/images/paradiseTeaBill.jpg',
      group: [{ userId: 101, name: 'Saurabh' }, { userId: 102, name: 'Dileep' }]

    },
    {
      id: 'e2',
      description: 'Goa trip',
      date: new Date(),
      amount: 2010,
      billImageUrl: 'assets/images/food-bill-for-4-adults.jpg',
      group: [{ userId: 101, name: 'Saurabh' }, { userId: 102, name: 'Dileep' }]

    }
  ]
  constructor() { }

  getActivitiesData() {
    return [...this.expenses];
  }

  addNewActivities(activities: any) {
    this.expenses.push(activities);
  }
}
