import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome mesaj', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to dynamic-reactive-form!');
  });
});
