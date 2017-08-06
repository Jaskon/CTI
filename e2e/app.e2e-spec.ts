import { CTIPage } from './app.po';

describe('cti App', () => {
  let page: CTIPage;

  beforeEach(() => {
    page = new CTIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
