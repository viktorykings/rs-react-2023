import React from 'react';
import { Link } from 'react-router-dom';
import { MyProps, MyState } from './types';

export default class Header extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      page: 'main',
    };
  }

  render() {
    return (
      <header className="header">
        <nav className="nav">
          <Link
            to="/"
            onClick={() => this.setState({ page: 'main' })}
            className={this.state.page === 'main' ? 'active' : ''}
          >
            Main
          </Link>
          <Link
            to="/about"
            onClick={() => this.setState({ page: 'about' })}
            className={this.state.page === 'about' ? 'active' : ''}
          >
            About Us
          </Link>
        </nav>
      </header>
    );
  }
}
