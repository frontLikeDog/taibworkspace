describe('taib-ui: TaibUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=taibui--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to TaibUi!');
    });
});
