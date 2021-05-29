import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // Pfeilfunktion mit "async" versehen und "await" vor page.navigateTo()
  // wegen diesem Issue: https://github.com/ionic-team/starters/issues/1669#issuecomment-784452288
  it('should be blank', async () => {

    await page.navigateTo();
    //expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
  });
});
