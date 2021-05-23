import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertCtrl: AlertController) {}

  /**
   * Event-Handler-Methode für Button "Flughafen suchen".
   */
  public onFlughafenSuchen() {

    this.zeigeDialog("Info", "Not implemented yet :-(");
  }

  /**
   * Event-Handler-Methode für Button "Fluggesellschaft suchen".
   */
  public onFluggesellschaftSuchen() {

    this.zeigeDialog("Info", "Not implemented yet :-(");
  }

  /**
   * Hilfsmethode: Alert anzeigen, siehe auch https://ionicframework.com/docs/api/alert
   *
   * @param titel Titel des Dialogs
   * @param nachricht Im Dialog anzuzeigender Text
   */
   async zeigeDialog(titel: string, nachricht: string) {

    const meinAlert =
          await this.alertCtrl.create({
              header  : titel,
              message : nachricht,
              buttons : [ "Ok" ]
          });

    await meinAlert.present();
  }

}
