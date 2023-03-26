import React, { FormEvent } from 'react';
import SuccessModal from './SuccessModal';
import { FormState, FormSetState, FormData } from './types';
import { chooseSex, genStrings, genBooleans, validateFormData } from './helpers';

export default class Form extends React.Component<FormSetState, FormState> {
  name: React.RefObject<HTMLInputElement>;
  surname: React.RefObject<HTMLInputElement>;
  birthDate: React.RefObject<HTMLInputElement>;
  isBirthDateVis: React.RefObject<HTMLInputElement>;
  region: React.RefObject<HTMLSelectElement>;
  male: React.RefObject<HTMLInputElement>;
  female: React.RefObject<HTMLInputElement>;
  other: React.RefObject<HTMLInputElement>;
  profilePic: React.RefObject<HTMLInputElement>;
  personalData: React.RefObject<HTMLInputElement>;
  form: React.RefObject<HTMLFormElement>;
  constructor(props: FormSetState) {
    super(props);
    this.state = {
      data: [],
      errors: {},
      saved: false,
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
    this.personalData = React.createRef();
    this.form = React.createRef();
  }

  handleSubmit(e: FormEvent) {
    e.preventDefault();
    const str = genStrings(
      this.name.current!.value,
      this.surname.current!.value,
      this.birthDate.current!.value,
      this.region.current!.value,
      this.profilePic.current!.value
    );
    const boo = genBooleans(
      this.isBirthDateVis.current!.checked,
      this.male.current!.checked,
      this.female.current!.checked,
      this.other.current!.checked,
      this.personalData.current!.checked
    );
    const sex = chooseSex(boo!.male!, boo!.female!, boo!.other!);
    const newCard: FormData = {
      sex: undefined,
      name: undefined,
      surname: undefined,
      birthDate: undefined,
      region: undefined,
      profilePic: undefined,
      isBirthDateVis: undefined,
      male: undefined,
      female: undefined,
      other: undefined,
      personalData: undefined,
    };
    Object.assign(newCard, str, boo, { sex: sex });
    if (newCard) {
      const resObj = validateFormData(newCard);
      if (resObj.isValid) {
        console.log('card created');
        this.props.createCard(newCard);
        this.clearForm();
        this.setState({ saved: true });
        setTimeout(() => {
          this.setState({ saved: false });
        }, 3000);
      } else {
        this.setState({ errors: resObj.errors });
      }
    }
  }

  clearForm() {
    this.form.current?.reset();
    this.setState({ errors: {} });
  }

  render() {
    return (
      <div className="form-container">
        <form action="" className="form" onSubmit={this.handleSubmit} ref={this.form}>
          <label>
            Name
            <div>
              <input type="text" ref={this.name} />
              {this.state.errors?.name && <p className="error">{this.state.errors.name}</p>}
            </div>
          </label>
          <label>
            Surname
            <div>
              <input type="text" ref={this.surname} />
              {this.state.errors?.surname && <p className="error">{this.state.errors.surname}</p>}
            </div>
          </label>
          <label>
            Date of birth
            <div>
              <input type="date" name="" id="" ref={this.birthDate} />
              {<p className="error">{this.state.errors.birthDate}</p>}
            </div>
          </label>
          <label className="checkbox-input">
            Show birth date in profile <input type="checkbox" ref={this.isBirthDateVis} />
          </label>
          <label className="select-input">
            Region
            <div>
              <select name="selectedRegion" ref={this.region}>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Australia">Australia</option>
                <option value="Antarctica">Antarctica</option>
              </select>
              {this.state.errors?.region && <p className="error">{this.state.errors.region}</p>}
            </div>
          </label>
          <label className="radio-input">
            <div className="radio-input-container">
              <label htmlFor="male">
                Male <input type="radio" name="sex" id="male" ref={this.male} />
              </label>
              <label htmlFor="female">
                Female <input type="radio" name="sex" id="female" ref={this.female} />
              </label>
              <label htmlFor="other">
                Other <input type="radio" name="sex" id="other" ref={this.other} />
              </label>
            </div>
            {<p className="error">{this.state.errors.sex}</p>}
          </label>
          <label>
            Add profile picture
            <div>
              <input type="file" name="profile-picture" id="profilePicture" ref={this.profilePic} />
              {<p className="error">{this.state.errors.profilePic}</p>}
            </div>
          </label>
          <div className="terms">
            <label className="checkbox-input">
              I consent to my personal data <input type="checkbox" ref={this.personalData} />
            </label>
            {<p className="error">{this.state.errors.personalData}</p>}
          </div>
          <button type="submit">Create</button>
        </form>
        <SuccessModal saved={this.state.saved} />
      </div>
    );
  }
}
