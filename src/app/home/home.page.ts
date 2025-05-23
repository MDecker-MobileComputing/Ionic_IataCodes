import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IatadbService } from '../iatadb.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {

  /** Variable ist an UI-Element für Eingabe Flughafen/Airline-Code gebunden (Two-way Binding). */
  public iataCode: string = "";

  /**
   * Konstruktor für Dependency Injection.
   */
  constructor( private alertCtrl: AlertController,
               private iataDb: IatadbService ) {}


  /**
   * Event-Handler-Methode für Button "Flughafen suchen".
   */
  public onFlughafenSuchen() {

    const iataCodeTrimmed = this.iataCode.trim();
    const laengeEingabe   = iataCodeTrimmed.length;

    if ( laengeEingabe === 0 ) {

      this.zeigeDialog( "Ungültige Eingabe", "Kein Code eingegeben." );
      return;
    }
    if ( laengeEingabe !== 3 ) {

      this.zeigeDialog( "Ungültige Eingabe",
                        `Eingegebener Code "${iataCodeTrimmed}" hat nicht genau drei Zeichen.` );
      return;
    }

    const ergebnis = this.iataDb.sucheFlughafen(iataCodeTrimmed);
    if ( ergebnis.gefunden ) {

      this.zeigeDialog( "Flughafen gefunden",
                        `Flughafen ${ergebnis.flughafen} in ${ergebnis.land}.` );
      this.iataCode = "";

    } else {

      this.zeigeDialog( "Ergebnis", `Kein Flughafen mit Code "${iataCodeTrimmed}" gefunden.` );
    }
  }


  /**
   * Event-Handler-Methode für Button "Fluggesellschaft suchen".
   */
  public onFluggesellschaftSuchen() {

    const iataCodeTrimmed = this.iataCode.trim();
    const laengeEingabe   = iataCodeTrimmed.length

    if ( iataCodeTrimmed.length === 0 ) {

      this.zeigeDialog( "Ungültige Eingabe", "Kein Code eingegeben." );
      return;
    }
    if ( laengeEingabe !== 2 ) {

      this.zeigeDialog( "Ungültige Eingabe",
                        `Eingegebener Code "${iataCodeTrimmed}" hat nicht genau zwei Zeichen.` );
      return;
    }

    const ergebnis = this.iataDb.sucheFluggesellschaft( iataCodeTrimmed );
    if ( ergebnis.gefunden ) {

      this.zeigeDialog( "Fluggesellschaft gefunden",
                        `Fluggesellschaft ${ergebnis.fluggesellschaft} (${ergebnis.land}).` );
      this.iataCode = "";

    } else {

      this.zeigeDialog( "Ergebnis", `Keine Fluggesellschaft mit Code "${iataCodeTrimmed}" gefunden.` );
    }
  }


  /**
   * Hilfsmethode: Alert anzeigen, siehe auch https://ionicframework.com/docs/api/alert
   *
   * @param titel Titel des Dialogs
   * @param nachricht Im Dialog anzuzeigender Text
   */
   private async zeigeDialog(titel: string, nachricht: string) {

    const meinAlert =
          await this.alertCtrl.create({
              header  : titel,
              message : nachricht,
              buttons : [ "Ok" ]
          });

    await meinAlert.present();
  }

}
