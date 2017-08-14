import { PieBoxPage } from './app.po';

describe('pie-box App', () => {
  let page: PieBoxPage;

  beforeEach(() => {
    page = new PieBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
