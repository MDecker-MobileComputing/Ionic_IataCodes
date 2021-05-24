/**
 * Ein Objekt dieser Klasse kapselt Ergebnis für Abfrage nach Flughafen.
 */
export class Flughafenergebnis {

    /**
     * 
     * @param gefunden Wenn `false` (also nichts gefunden), dann sind die Felder `flughafen` und `land` leer.
     * @param flughafen Name/Stadt Flughafen, z.B. "Frankfurt a.M." für IATA-Code "FRA"; leerer String wenn nichts gefunden.
     * @param land Land, in dem sich `flughafen` befindet, z.B. `Deutschland` für IATA-Code "FRA"; leerer String wenn nichts gefunden.
     */
    constructor(public gefunden: boolean, 
                public flughafen: string,
                public land: string
                ) {}

}
