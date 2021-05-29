import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';
import { exception } from 'console';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // Pfeilfunktion mit "async" versehen und "await" vor page.navigateTo()
  // wegen diesem Issue: https://github.com/ionic-team/starters/issues/1669#issuecomment-784452288
  it('Auf Startseite ist alles da', async () => {

    await browser.get("/");

    const button1 = element(by.id("buttonFlughafensuche"));    
    const button1Angezeigt = await button1.isDisplayed();
    expect(button1Angezeigt).toBe(true);

    const button2 = element(by.id("buttonAirlineSuche"));    
    const button2Angezeigt = await button2.isDisplayed();
    expect(button2Angezeigt).toBe(true);


    const eingabeFeld = element(by.id("codeEingabe"));
    const eingabeFeldAngezeigt = await eingabeFeld.isDisplayed();
    expect(eingabeFeldAngezeigt).toBe(true);

    const platzhalterTextEingabefeld = await eingabeFeld.getAttribute("placeholder");
    expect(platzhalterTextEingabefeld).toEqual("Code für Flughafen oder Airline");

    const inhaltTextEingabefeld = await eingabeFeld.getText();
    expect(inhaltTextEingabefeld).toEqual("");
  });
});
