import React from 'react';
import { MyProps, SearchState } from './types';
import Icon from '../assets/search-icon.png';

export default class Search extends React.Component<MyProps, SearchState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('search') ?? '',
    };
  }
  componentWillUnmount(): void {
    localStorage.setItem('search', this.state.value);
  }
  render() {
    return (
      <div className="search">
        <label htmlFor="search">
          <img src={Icon} alt="Search" className="icon" />
        </label>
        <input
          id="search"
          type="search"
          value={this.state.value}
          onChange={(e) => {
            this.setState({ value: e.target.value });
            console.log(this.state);
          }}
        />
      </div>
    );
  }
}
