import { AngbootPage } from './app.po';

describe('angboot App', () => {
  let page: AngbootPage;

  beforeEach(() => {
    page = new AngbootPage();
  });

  it('should display the navbar', () => {
    page.navigateTo();
    expect(page.getProjectName()).toEqual('Project name');
  });

  it('sould open the modal box', () => {
    let button = page.getModalButton();
    button.click();
    expect(page.getModal().isDisplayed()).toBeTruthy();
  });

  it('sould close the modal box', () => {
    let closeButton = page.getModalCloseButton();
    closeButton.click();
    expect(page.getModal().isDisplayed()).toBeFalsy();
  });
});
