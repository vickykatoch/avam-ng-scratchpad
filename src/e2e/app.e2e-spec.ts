import { ScratchpadPage } from './app.po';

describe('scratchpad App', function() {
  let page: ScratchpadPage;

  beforeEach(() => {
    page = new ScratchpadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
