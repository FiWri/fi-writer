import { mount } from '@cypress/react';

import { Home } from './Home';

it('renders learn react link', () => {
  mount(<Home />);
  cy.get('h1').contains('FiWri');
});
