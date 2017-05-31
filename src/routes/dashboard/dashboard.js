
import React from 'react';
import Link from '../../components/Link';
import {render} from 'react-dom';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Dashboard">
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">React workshop</NavbarBrand>
          <Collapse isOpen={this.state.isOpen}  navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to='/dashboard/' {...this.props}>Tab 1</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/dashboard/tab2' {...this.props}>Tab 2</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="container mt-5">{this.props.children}</div>
      </div>
    );
  }
}

export default Dashboard;
