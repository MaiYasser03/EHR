import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <Menu size='large' inverted>
      {/* Removed Home menu item */}
      <Menu.Menu position='right'>
        <Menu.Item as={Link} to='/dashboard'>
          Dashboard
        </Menu.Item>

        {/* Corrected the route path */}
        <Menu.Item as={Link} to='/patient-records'>
          Records List
        </Menu.Item>

        <Dropdown item text='Doctor'>
          {/* Dropdown items for Doctor */}
        </Dropdown>

        <Dropdown item text='Patient'>
          {/* Dropdown items for Patient */}
        </Dropdown>

        <Dropdown item text='Register'>
          {/* Dropdown items for Register */}
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
};

export default MenuBar;
