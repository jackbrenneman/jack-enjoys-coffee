import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {allowedPages} from '../consts';

const {Item, Link} = Nav;
const {Brand} = Navbar;

function TopNav({history}) {
  const pathname = history.location.pathname;
  // The user is trying to access the initial page
  const initialPage = pathname ? pathname.replace('/', '') : 'home';
  // Determine if it's a page they're allowed to access; this will determine which tab is active
  let defaultActiveKey = initialPage;
  if (!allowedPages.includes(initialPage)) {
    defaultActiveKey = '';
    history.replace('');
  }
  return (
    <Navbar expand fixed='top' variant='light'>
      <Brand>
        <img
          src='../media/icons/coffee-icon.svg'
          width='30'
          height='30'
          className='d-inline-block align-top'
          alt='coffee logo'
        />
      </Brand>
      <Nav
        defaultActiveKey={defaultActiveKey}
        fill
        className='justify-content-center'
        onSelect={(selectedKey) => history.push(selectedKey)}
        variant='tabs'
      >
        <Item>
          <Link eventKey=''>Home</Link>
        </Item>
        <Item>
          <Link eventKey='about'>About</Link>
        </Item>
        <Item>
          <Link eventKey='coffee'>Coffee</Link>
        </Item>
        <Item>
          <Link eventKey='pictures'>Pictures</Link>
        </Item>
        <Item>
          <Link eventKey='equipment'>Equipment</Link>
        </Item>
        <Item>
          <Link eventKey='blog'>Blog</Link>
        </Item>
      </Nav>
    </Navbar>
  );
}

TopNav.propTypes = {
  history: PropTypes.object.isRequired,
};

export default TopNav;
