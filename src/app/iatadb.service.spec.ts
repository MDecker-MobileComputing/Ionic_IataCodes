import { TestBed } from '@angular/core/testing';

import { IatadbService } from './iatadb.service';

describe( 'IatadbService' , () => {

  /** Instanz von zu testendem Service (Class/Code under Test, CUT). */
  let service: IatadbService;


  /** Erzeugut die CUT-Instanz vor jeder Testmethode. */
  beforeEach(() => {

    TestBed.configureTestingModule({});
    service = TestBed.inject( IatadbService );
  });


  it( "should be created", () => {
    expect( service ).toBeTruthy();
  });


  describe( "Suche Flughafen", () => {

    it( "Flughafen \"FRA\" gefunden", () => {

      const flughafenErgebnis = service.sucheFlughafen( "FRA" );

      expect( flughafenErgebnis.gefunden ).toBeTrue();

      expect( flughafenErgebnis.flughafen ).toEqual( "Frankfurt a.M." );
      expect( flughafenErgebnis.land      ).toEqual( "Deutschland"    );
    });


    it( "Flughafen \"fRa\" gefunden", () => {

      const flughafenErgebnis = service.sucheFlughafen( "fRa" );

      expect( flughafenErgebnis.gefunden ).toBeTrue();

      expect( flughafenErgebnis.flughafen ).toEqual( "Frankfurt a.M." );
      expect( flughafenErgebnis.land      ).toEqual( "Deutschland"    );
    });


    it( "Flughafen \"xxx\" nicht gefunden", () => {

      const flughafenErgebnis = service.sucheFlughafen( "xxx" );

      expect( flughafenErgebnis.gefunden ).toBeFalse()

      expect( flughafenErgebnis.flughafen ).toEqual( "" );
      expect( flughafenErgebnis.land      ).toEqual( "" );
    });


    it("Flughafen \" fra  \" gefunden (Leerzeichen ignoriert)", () => {

      const flughafenErgebnis = service.sucheFlughafen( "  fra " );

      expect( flughafenErgebnis.gefunden ).toBeTrue();

      expect( flughafenErgebnis.flughafen ).toEqual( "Frankfurt a.M." );
      expect( flughafenErgebnis.land      ).toEqual( "Deutschland"    );
    });


    it( "Kein Flughafen für zu kurzen Code \"ab\" gefunden", () => {

      const flughafenErgebnis = service.sucheFlughafen( "ab" );

      expect( flughafenErgebnis.gefunden ).toBeFalse()

      expect( flughafenErgebnis.flughafen ).toEqual( "" );
      expect( flughafenErgebnis.land      ).toEqual( "" );
    });


    it( "Kein Flughafen für zu langen Code \"abcd\" gefunden", () => {

      const flughafenErgebnis = service.sucheFlughafen( "abcd" );

      expect( flughafenErgebnis.gefunden ).toBeFalse()

      expect( flughafenErgebnis.flughafen ).toEqual( "" );
      expect( flughafenErgebnis.land      ).toEqual( "" );
    });


    it( "Kein Flughafen für leeren String \"\" gefunden", () => {

      const flughafenErgebnis = service.sucheFlughafen( "" );

      expect( flughafenErgebnis.gefunden ).toBeFalse()

      expect( flughafenErgebnis.flughafen ).toEqual( "" );
      expect( flughafenErgebnis.land      ).toEqual( "" );
    });


    it( "Kein Flughafen für Leerzeichen-String \"  \" gefunden", () => {

      const flughafenErgebnis = service.sucheFlughafen( "  " );

      expect( flughafenErgebnis.gefunden ).toBeFalse()

      expect( flughafenErgebnis.flughafen ).toEqual( "" );
      expect( flughafenErgebnis.land      ).toEqual( "" );
    });

  });


  describe( "Suche Fluggesellschaft", () => {

    it( "Fluggesellschaft \"Lh\" gefunden", () => {

      const fluglinieErgebnis = service.sucheFluggesellschaft( "Lh" );

      expect( fluglinieErgebnis.gefunden ).toBeTrue();

      expect( fluglinieErgebnis.fluggesellschaft ).toEqual( "Lufthansa"   );
      expect( fluglinieErgebnis.land             ).toEqual( "Deutschland" );
    });


    it( "Fluggesellschaft \" LH  \" gefunden", () => {

      const fluglinieErgebnis = service.sucheFluggesellschaft( " LH  " );

      expect( fluglinieErgebnis.gefunden ).toBeTrue();

      expect( fluglinieErgebnis.fluggesellschaft ).toEqual( "Lufthansa"   );
      expect( fluglinieErgebnis.land             ).toEqual( "Deutschland" );
    });


    it( "Keine Fluggesellschaft für \"xx\" gefunden", () => {

      const fluglinieErgebnis = service.sucheFluggesellschaft( "xx" );

      expect( fluglinieErgebnis.gefunden ).toBeFalse();

      expect( fluglinieErgebnis.fluggesellschaft ).toEqual( "" );
      expect( fluglinieErgebnis.land             ).toEqual( "" );
    });


    it( "Keine Fluggesellschaft für leeren String \"\" gefunden", () => {

      const fluglinieErgebnis = service.sucheFluggesellschaft( "" );

      expect( fluglinieErgebnis.gefunden ).toBeFalse();

      expect( fluglinieErgebnis.fluggesellschaft ).toEqual( "" );
      expect( fluglinieErgebnis.land             ).toEqual( "" );
    });


    it( "Keine Fluggesellschaft für leeren String \"   \" gefunden", () => {

      const fluglinieErgebnis = service.sucheFluggesellschaft( "   " );

      expect( fluglinieErgebnis.gefunden ).toBeFalse();

      expect( fluglinieErgebnis.fluggesellschaft ).toEqual( "" );
      expect( fluglinieErgebnis.land             ).toEqual( "" );
    });

  });

});
