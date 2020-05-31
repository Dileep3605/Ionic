import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ActionSheetController } from "@ionic/angular";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  BudgetSet: number = 4000;
  BudgetRemaining: number = 2000;
  BudgetSpending: number = 2000;
  userDefaultImage: string =
    "https://ionicframework.com/docs/demos/api/avatar/avatar.svg";
  constructor(
    private router: Router,
    public actionSheetController: ActionSheetController
  ) {}
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Actions",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Share",
          icon: "share",
          handler: () => {
            console.log("Share clicked");
          },
        },
        {
          text: "Favorite",
          icon: "heart",
          handler: () => {
            console.log("Favorite clicked");
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }
  gnAddNewExpenses() {
    this.router.navigate(["/add-expense"]);
  }
}
