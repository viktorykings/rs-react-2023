import React, { FormEvent } from 'react';
import { FormState, FormData, FormSetState } from './types';

export default class Form extends React.Component<FormSetState, FormData> {
  name: React.RefObject<HTMLInputElement>;
  surname: React.RefObject<HTMLInputElement>;
  birthDate: React.RefObject<HTMLInputElement>;
  isBirthDateVis: React.RefObject<HTMLInputElement>;
  region: React.RefObject<HTMLSelectElement>;
  male: React.RefObject<HTMLInputElement>;
  female: React.RefObject<HTMLInputElement>;
  other: React.RefObject<HTMLInputElement>;
  profilePic: React.RefObject<HTMLInputElement>;
  constructor(props: FormSetState) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      birthDate: '',
      isBirthDateVis: false,
      region: '',
      profilePic: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = React.createRef();
    this.surname = React.createRef();
    this.birthDate = React.createRef();
    this.isBirthDateVis = React.createRef();
    this.region = React.createRef();
    this.male = React.createRef();
    this.female = React.createRef();
    this.other = React.createRef();
    this.profilePic = React.createRef();
  }
  handleSubmit(e: FormEvent){
    e.preventDefault();
    console.log(this.isBirthDateVis.current?.checked)
    const newCard = {
        name: this.name.current?.value ? this.name.current?.value : '',
        surname: this.surname.current?.value ? this.surname.current?.value : '',
        birthDate: this.birthDate.current?.value ? this.birthDate.current?.value : '',
        isBirthDateVis: this.isBirthDateVis.current?.checked ? this.isBirthDateVis.current?.checked : false,
        region: this.region.current?.value ? this.region.current?.value : '',
        profilePic: this.profilePic.current?.value ? this.profilePic.current?.value : '',
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
            <input type="text" ref={this.surname} />
        </label>
        <label>
            Date of birth:
            <input type="date" name="" id="" ref={this.birthDate} />
        </label>
        <label className="checkbox-input">
          Show birth date <input type="checkbox" ref={this.isBirthDateVis} />
        </label>
        <label>
            Region
            <select name="selectedRegion" ref={this.region}>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Australia">Australia</option>
                <option value="Antarctica">Antarctica</option>
            </select>
        </label>
        <label className="radio-input">
            Sex
            <label htmlFor="male">Male <input type="radio" name="sex" id="male" ref={this.male} /></label>
            <label htmlFor="female">Female <input type="radio" name="sex" id="female" ref={this.female} /></label>
            <label htmlFor="other">Other <input type="radio" name="sex" id="other" ref={this.other} /></label>
        </label>
        <label>
            Add profile picture
            <input type="file" name="profile-picture" id="profilePicture" ref={this.profilePic} />
        </label>
        <button type="submit">Create</button>
      </form>
    );
  }
}
