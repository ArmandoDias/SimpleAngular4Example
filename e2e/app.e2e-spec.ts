import { SimpleExamplePage } from './app.po';

describe('simple-example App', () => {
  let page: SimpleExamplePage;

  beforeEach(() => {
    page = new SimpleExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
