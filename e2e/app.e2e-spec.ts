import { Ng2SimpleNeonPage } from './app.po';

describe('ng2-simple-neon App', function() {
  let page: Ng2SimpleNeonPage;

  beforeEach(() => {
    page = new Ng2SimpleNeonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
