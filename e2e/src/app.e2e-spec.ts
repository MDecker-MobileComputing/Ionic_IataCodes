import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // Pfeilfunktion mit "async" versehen und "await" vor page.navigateTo()
  // wegen diesem Issue: https://github.com/ionic-team/starters/issues/1669#issuecomment-784452288
  it('Auf leerer Seite ist alles da.', async () => {

    await browser.get("/");

    element(by.buttonText("Flughafen suchen"));
    element(by.buttonText("Fluggesellschaft suchen"));

    const eingabeFeld = element(by.binding("iataCode"));
    expect(eingabeFeld.getText()).toEqual("");
  });
});
