import React, { FormEvent } from 'react';
import { FormState, FormData, FormSetState } from './types';
// import { CardProps, SearchState } from './types';

export default class Form extends React.Component<FormSetState, FormData> {
  name: React.RefObject<HTMLInputElement>;
  constructor(props: FormSetState) {
    super(props);
    this.state = {name: 'a'};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = React.createRef();
  }
  handleSubmit(e: FormEvent){
    e.preventDefault();
    const newCard = {
        name: this.name.current?.value ? this.name.current?.value : ''
    }
    this.props.createCard(newCard)
  }
  render() {
    return (
      <form action="" className="form" onSubmit={this.handleSubmit}>
        <label>
            Name
            <input type="text" ref={this.name} />
        </label>
        <label >
            Surname
            <input type="text" />
        </label>
        <label>
            Date of birth:
            <input type="date" name="" id="" />
        </label>
        <label>
            Region
            <select name="selectedRegion">
                <option value="europe">Europe</option>
                <option value="north-america">North America</option>
                <option value="south-america">South America</option>
                <option value="asia">Asia</option>
                <option value="africa">Africa</option>
                <option value="australia">Australia</option>
                <option value="antarctica">Antarctica</option>
            </select>
        </label>
        <label className="radio-input">
            Sex
            <label htmlFor="male">Male <input type="radio" name="sex" id="male" /></label>
            <label htmlFor="female">Female <input type="radio" name="sex" id="female" /></label>
            <label htmlFor="other">Other <input type="radio" name="sex" id="other" /></label>
        </label>
        <label>
            Add profile picture
            <input type="file" name="profile-picture" id="profilePicture" />
        </label>
        <button type="submit">Create</button>
      </form>
    );
  }
}
