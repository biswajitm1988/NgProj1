import { NgProj1Page } from './app.po';

describe('ng-proj1 App', function() {
  let page: NgProj1Page;

  beforeEach(() => {
    page = new NgProj1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
