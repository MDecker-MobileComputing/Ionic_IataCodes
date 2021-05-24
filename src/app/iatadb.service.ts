import { Injectable } from '@angular/core';
import { Flughafenergebnis } from './flughafenergebnis';


/**
 * Dieser Service kapselt die Logik für die eigentliche Abfrage
 * der IATA-Codes für Flughäfen und Fluggesellschaften.
 * 
 * Siehe auch die folgende URL für offizielle DB der IATA: https://www.iata.org/publications/Pages/code-search.aspx
 */
@Injectable({
  providedIn: 'root'
})
export class IatadbService {

  /**
   * Nach Flughafen anhand von dreistelligem Code suchen.
   * <br>
   * Referenzen:
   * * https://de.wikipedia.org/wiki/IATA-Flughafencode 
   * * https://de.wikipedia.org/wiki/Liste_der_IATA-Flughafen-Codes
   * 
   * @param code Dreistelliger Flughafencode, wird intern auf Großbuchstaben normiert.
   * 
   * @returns Ergebnisobjekt mit Attribut `gefunden=true` genau dann wenn ein Flughafen mit 
   *          `code` gefunden wurde.
   */
  public sucheFlughafen(code: string): Flughafenergebnis {

    switch ( code.toUpperCase() ) {

      case "FKB": return new Flughafenergebnis(true, "Karlsruhe/Baden-Baden", "Deutschland");
      case "FRA": return new Flughafenergebnis(true, "Frankfurt a.M."       , "Deutschland");  
      case "LHR": return new Flughafenergebnis(true, "London Heathrow"      , "GB"         ); 
      case "PEK": return new Flughafenergebnis(true, "Peking"               , "VR China"   ); 
      case "STR": return new Flughafenergebnis(true, "Stuttgart"            , "Deutschland"); 
      
      default: return new Flughafenergebnis(false, "", "");        
    }    
  }

  /**
   * Nach Fluggesellschaft (Airline) anhand von zweistelligem Code suchen.
   * 
   * @param code Zweistelliger Code für Airline; wird intern auf Großbuchstaben normiert.
   * 
   * @return  Ergebnisobjekt mit Attribut `gefunden=true` genau dann wenn eine Airline mit `code`
   *          gefunden wurde.
   */
  public sucheFluggesellschaft(code: string) {

  }
}
