import React from 'react';
import { Pagination } from 'semantic-ui-react';

const DogParkMenu = () => (
  <Pagination
    defaultActivePage={1}
    firstItem={1}
    lastItem={6}
    pointing
    secondary
    totalPages={10}
  />
)

export default DogParkMenu;
