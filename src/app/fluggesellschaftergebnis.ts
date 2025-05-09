/**
 * Ein Objekt dieser Klasse kapselt Ergebnis für Abfrage nach Fluggesellschaft (Airline).
 */
export class Fluggesellschaftergebnis {

    /**
      * Konstruktor zur Erzeugung Objekt das Ergebnis einer Suchanfrage nach Flughafen anhand IATA-Code beschreibt.
      *
      * @param gefunden Wenn `false` (also nichts gefunden), dann sind die Felder `fluggesellschaft` und `land` leer.
      *
      * @param fluggesellschaft Name der Airline, z.B. "Lufthansa" für IATA-Code "LH"; muss für `gefunden=false` leer sein.
      *
      * @param land Land, in dem `fluggesellschaft` ihren Sitz hat; muss für `gefunden=false` leer sein.
      */
     constructor( public gefunden        : boolean,
                  public fluggesellschaft: string,
                  public land            : string
                ) {}

 }
