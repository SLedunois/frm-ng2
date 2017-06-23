import { browser, by, element } from 'protractor';

export class AngbootPage {
  navigateTo() {
    return browser.get('/');
  }

  getProjectName() {
    return element(by.css('nav.navbar a.navbar-brand')).getText();
  }

  getModalButton() {
    return element(by.css('div.starter-template > button'));
  }  

  getModal() {
    return element(by.css('.modal-content'));
  }

  getModalCloseButton() {
    return element(by.css('.modal-content button.close'));
  }
}
