/**
 * Ein Objekt dieser Klasse kapselt Ergebnis für Abfrage nach Flughafen.
 */
export class Flughafenergebnis {

    /**
     * Konstruktor zur Erzeugung Objekt das Ergebnis einer Suchanfrage nach Flughafen anhand IATA_Code beschreibt.
     * 
     * @param gefunden Wenn `false` (also nichts gefunden), dann sind die Felder `flughafen` und `land` leer.
     * @param flughafen Name/Stadt Flughafen, z.B. "Frankfurt a.M." für IATA-Code "FRA"; ; muss für `gefunden=false` leer sein.
     * @param land Land, in dem sich `flughafen` befindet, z.B. `Deutschland` für IATA-Code "FRA"; muss für `gefunden=false` leer sein.
     */
    constructor(public gefunden: boolean, 
                public flughafen: string,
                public land: string
                ) {}

}
