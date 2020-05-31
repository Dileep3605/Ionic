import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { expenses } from '../expenses.model';
import { SharedService } from '../Services/shared.service';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})
export class AddExpensePage implements OnInit {
  expenseDetails = {
    description: '',
    amount: 0
  }
  constructor(private shared: SharedService, private toastController: ToastController) { }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your expense have been saved.',
      duration: 1000,
      position: 'bottom',
      buttons: [
         {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
  ngOnInit() {
  }
  fnGetExpenseDetails(form: NgForm) {
    let dataObj = {
      id: "e" + ((Math.random() * 1000000) + 1).toFixed(0),
      description: form.value.description,
      date: new Date(),
      amount: form.value.amount,
      billImageUrl: "",
      group: []

    }
    this.shared.addNewActivities(dataObj);
    this.clearAddExpenseForm();
    this.presentToast();
  }

  clearAddExpenseForm() {
    this.expenseDetails = {
      description: '',
      amount: 0
    }
  }
}
