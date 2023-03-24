import React, { FormEvent } from 'react';
import SuccessModal from './SuccessModal';
import { FormState, FormData, FormSetState, Errors } from './types';

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
  constructor(props: FormSetState) {
    super(props);
    this.state = {
      data:[],
      errors: {},
      saved: false
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
    this.personalData = React.createRef()
  }

  handleSubmit(e: FormEvent) {
    console.log(this.state.data);
    e.preventDefault();
    const newCard = {
      name: this.name.current?.value ? this.name.current?.value : '',
      surname: this.surname.current?.value ? this.surname.current?.value : '',
      birthDate: this.birthDate.current?.value ? this.birthDate.current?.value : '',
      isBirthDateVis: this.isBirthDateVis.current?.checked
        ? this.isBirthDateVis.current?.checked
        : false,
      region: this.region.current?.value ? this.region.current?.value : '',
      profilePic: this.profilePic.current?.value ? this.profilePic.current?.value : '',
      sex: this.chooseSex() ? this.chooseSex() : '',
      personalData: this.personalData.current?.checked ? this.personalData.current?.checked : false
    };

    const isValid = this.validateFormData(newCard);
    if (isValid) {
      console.log('card created')
      this.props.createCard(newCard);
      this.clearForm()
      this.setState({saved: true})
      setTimeout(() => {
        this.setState({saved: false})
      }, 3000)
    }
  }
  validateFormData(newCard: FormData) {
    const errors: Errors = {};
    let isValid = true;
    isValid = this.validateEmpty(newCard, isValid, errors)
    isValid = this.validateChoose(newCard, isValid, errors)
    isValid = this.validateDates(newCard, isValid, errors)
    console.log('err', errors);
    this.setState({ errors: errors });
    return isValid;
  }
  validateEmpty(newCard: FormData, isValid: boolean, errors: Errors){
    const { name, surname, birthDate, profilePic} = newCard;
    if (name.trim().length < 4) {
      errors.name = 'Name must have length of 4 or higher!';
      isValid = false;
    }
    if (surname.trim().length < 1) {
      errors.surname = 'Field must not be empty!';
      isValid = false;
    }
    if (birthDate.trim().length < 1) {
      errors.birthDate = 'Field must not be empty!';
      isValid = false;
    }
    if(!profilePic){
      errors.profilePic = 'Add file';
      isValid = false;
    }

    return isValid;
  }
  validateChoose(newCard: FormData, isValid: boolean, errors: Errors){
    const { region, personalData } = newCard;
    const sex = this.chooseSex();
    if (!sex) {
      errors.sex = 'Value must be choosen';
      isValid = false;
    }
    if(!region){
      errors.region = 'Value must be choosen';
      isValid = false;
    }
    if(!personalData){
      errors.personalData = 'You must accept the terms of use';
      isValid = false;
    }
    return isValid;
  }
  validateDates(newCard: FormData, isValid: boolean, errors: Errors){
    const { birthDate } = newCard;
    const currDate = Date.now()
    const inputDate = Date.parse(birthDate)
    if(currDate < inputDate){
      errors.birthDate = 'Enter correct date';
      isValid = false;
    }
    return isValid
  }
  chooseSex() {
    const male = this.male.current ? this.male.current : null;
    const female = this.female.current ? this.female.current : null;
    const other = this.other.current ? this.other.current : null;
    if (!male?.checked && !female?.checked && !other?.checked) {
      return null;
    }
    if (male?.checked) {
      return male?.id;
    }
    if (female?.checked) {
      return female?.id;
    }
    if (other?.checked) {
      return other?.id;
    }
  }
  clearForm(){
    this.name.current!.value = '';
    this.surname.current!.value = '';
    this.birthDate.current!.value = '';
    this.isBirthDateVis.current!.value = '';
    this.region.current!.value = '';
    this.male.current!.checked = false;
    this.female.current!.checked = false;
    this.other.current!.checked = false;
    this.profilePic.current!.value = '';
    this.personalData.current!.checked = false;
  }

  render() {
    return (
      <div className="form-container">
              <form action="" className="form"  onSubmit={this.handleSubmit}>
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
            {this.state.errors?.birthDate && <p className="error">{this.state.errors.birthDate}</p>}
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
          {this.state.errors?.sex && <p className="error">{this.state.errors.sex}</p>}
        </label>
        <label>
          Add profile picture
          <div>
                      <input type="file" name="profile-picture" id="profilePicture" ref={this.profilePic} />
          {this.state.errors?.profilePic && <p className="error">{this.state.errors.profilePic}</p>}
          </div>
        </label>
        <div className="terms">
        <label className="checkbox-input">
        I consent to my personal data <input type="checkbox" ref={this.personalData} />
        </label>
        {this.state.errors?.personalData && <p className="error">{this.state.errors.personalData}</p>}
        </div>
        <button type="submit">Create</button>
      </form>
      <SuccessModal saved={this.state.saved} />
      </div>

    );
  }
}
