import { Component, OnInit } from '@angular/core';
import { expenses } from './expenses.model';
import { SharedService } from './Services/shared.service';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {
  activities: expenses[] = [];
  constructor(private shared: SharedService) { }

  ngOnInit() {
    this.activities = this.shared.getActivitiesData();
  }

}
