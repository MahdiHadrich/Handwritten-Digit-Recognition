import { HandwrittenDigitRecognitionPage } from './app.po';

describe('handwritten-digit-recognition App', function() {
  let page: HandwrittenDigitRecognitionPage;

  beforeEach(() => {
    page = new HandwrittenDigitRecognitionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
