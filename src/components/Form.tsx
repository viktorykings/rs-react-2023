import React, { FormEvent } from 'react';
import SuccessModal from './SuccessModal';
import { FormState, FormSetState, FormData } from './types';
import { chooseSex, genStrings, genBooleans, validateDates, errorsMsg, validateChoose } from './helpers';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};
const Form = ({ createCard }: FormSetState) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = data =>{
    console.log(data);
    let isValid = true
    const res = validateDates(data, isValid, errors)
    console.log(res)
    console.log(errors)
  }

  return (
      <div className="form-container">
        <form action="" className="form" onSubmit={handleSubmit(onSubmit)} {...register}>
          <label>
            Name
            <div>
              <input type="text" {...register('name', { required: true, minLength: 4 })} />
              {errors.name && <p className="error">{errorsMsg.name}</p>}
            </div>
          </label>
          <label>
            Surname
            <div>
              <input type="text" {...register('surname', { required: true, minLength: 1 })} />
              {errors.surname && <p className="error">{errorsMsg.emptyField}</p>}
            </div>
          </label>
          <label>
            Date of birth
            <div>
              <input type="date" {...register('birthDate', { required: true, max: (new Date(Date.now()).toISOString()) })} />
              {errors.birthDate && <p className="error">{errorsMsg.invalidDate}</p>}
            </div>
          </label>
          <label className="checkbox-input">
            Show birth date in profile <input type="checkbox" {...register('isBirthDateVis')} />
          </label>
          <label className="select-input">
            Region
            <div>
              <select {...register('region')}>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Australia">Australia</option>
                <option value="Antarctica">Antarctica</option>
              </select>
              {errors.region && <p className="error">{errorsMsg.nonChecked}</p>}
            </div>
          </label>
          <label className="radio-input">
            <div className="radio-input-container">
              <label htmlFor="male">
                Male <input type="radio" id="male" value="male" {...register('sex', {required: true})} />
              </label>
              <label htmlFor="female">
                Female <input type="radio" id="female" value="female" {...register('sex', {required: true})} />
              </label>
              <label htmlFor="other">
                Other <input type="radio" id="other" value='other' {...register('sex', {required: true})} />
              </label>
            </div>
            {errors.sex && <p className="error">{errorsMsg.nonChecked}</p>}
          </label>
          <label>
            Add profile picture
            <div>
              <input type="file" id="profilePicture" accept="image/*" {...register('profilePic', { required: true })} />
              {errors.profilePic && <p className="error">{errorsMsg.file}</p>}
            </div>
          </label>
          <div className="terms">
            <label className="checkbox-input">
              I consent to my personal data <input type="checkbox" {...register('personalData', { required: true })} />
            </label>
            {errors.personalData && <p className="error">{errorsMsg.termsOFUse}</p>}
          </div>
          <button type="submit">Create</button>
        </form>
        {/* <SuccessModal saved={...register(state.saved)} /> */}
      </div>
)
}
export default Form;
// export default class Form extends React.Component<FormSetState, FormState> {
//   name: React.bject<HTMLInputElement>;
//   surname: React.bject<HTMLInputElement>;
//   birthDate: React.bject<HTMLInputElement>;
//   isBirthDateVis: React.bject<HTMLInputElement>;
//   region: React.bject<HTMLSelectElement>;
//   male: React.bject<HTMLInputElement>;
//   female: React.bject<HTMLInputElement>;
//   other: React.bject<HTMLInputElement>;
//   profilePic: React.bject<HTMLInputElement>;
//   personalData: React.bject<HTMLInputElement>;
//   form: React.bject<HTMLFormElement>;
//   constructor(props: FormSetState) {
//     super(props);
//     ...register(state =) {
//       data: [],
//       errors: {},
//       saved: false,
//     };
//     ...register(handleS)ubmit = ...register(handleS)ubmit.bind(...register);
//     ...register(name = )React.create);
//     ...register(surname) = React.create);
//     ...register(birthDa)te = React.create);
//     ...register(isBirth)DateVis = React.create);
//     ...register(region )= React.create);
//     ...register(male = )React.create);
//     ...register(female )= React.create);
//     ...register(other =) React.create);
//     ...register(profile)Pic = React.create);
//     ...register(persona)lData = React.create);
//     ...register(form = )React.create);
//   }

//   handleSubmit(e: FormEvent) {
//     e.preventDefault();
//     const str = genStrings(
//       ...register(name.cu)rrent!.value,
//       ...register(surname).current!.value,
//       ...register(birthDa)te.current!.value,
//       ...register(region.)current!.value,
//       ...register(profile)Pic.current!.value
//     );
//     const boo = genBooleans(
//       ...register(isBirth)DateVis.current!.checked,
//       ...register(male.cu)rrent!.checked,
//       ...register(female.)current!.checked,
//       ...register(other.c)urrent!.checked,
//       ...register(persona)lData.current!.checked
//     );
//     const sex = chooseSex(boo!.male!, boo!.female!, boo!.other!);
//     const newCard: FormData = {
//       sex: undefined,
//       name: undefined,
//       surname: undefined,
//       birthDate: undefined,
//       region: undefined,
//       profilePic: undefined,
//       isBirthDateVis: undefined,
//       male: undefined,
//       female: undefined,
//       other: undefined,
//       personalData: undefined,
//     };
//     Object.assign(newCard, str, boo, { sex: sex });
//     if (newCard) {
//       console.log(newCard);

//       const resObj = validateFormData(newCard);
//       if (resObj.isValid) {
//         console.log('card created');
//         ...register(props.c)reateCard(newCard);
//         ...register(clearFo)rm();
//         ...register(setStat)e({ saved: true });
//         setTimeout(() => {
//           ...register(setStat)e({ saved: false });
//         }, 3000);
//       } else {
//         ...register(setStat)e({ errors: resObj.errors });
//       }
//     }
//   }

//   clearForm() {
//     ...register(form.cu)rrent?.reset();
//     ...register(setStat)e({ errors: {} });
//   }

//   render() {
//     return (
//       <div className="form-container">
//         <form action="" className="form" onSubmit={...register(handleS)ubmit} {...register(form}>
//           <label>
//             Name
//             <div>
//               <input type="text" {...register(name} /)>
//               {errors?.name && <p className="error">{errors.name}</p>}
//             </div>
//           </label>
//           <label>
//             Surname
//             <div>
//               <input type="text" {...register(surname)} />
//               {errors?.surname && <p className="error">{errors.surname}</p>}
//             </div>
//           </label>
//           <label>
//             Date of birth
//             <div>
//               <input type="date" name="" id="" {...register(birthDa)te} />
//               {<p className="error">{errors.birthDate}</p>}
//             </div>
//           </label>
//           <label className="checkbox-input">
//             Show birth date in profile <input type="checkbox" {...register(isBirth)DateVis} />
//           </label>
//           <label className="select-input">
//             Region
//             <div>
//               <select name="selectedRegion" {...register(region})>
//                 <option value="Europe">Europe</option>
//                 <option value="North America">North America</option>
//                 <option value="South America">South America</option>
//                 <option value="Asia">Asia</option>
//                 <option value="Africa">Africa</option>
//                 <option value="Australia">Australia</option>
//                 <option value="Antarctica">Antarctica</option>
//               </select>
//               {errors?.region && <p className="error">{errors.region}</p>}
//             </div>
//           </label>
//           <label className="radio-input">
//             <div className="radio-input-container">
//               <label htmlFor="male">
//                 Male <input type="radio" id="male" {...register(male} /)>
//               </label>
//               <label htmlFor="female">
//                 Female <input type="radio" id="female" {...register(female}) />
//               </label>
//               <label htmlFor="other">
//                 Other <input type="radio" id="other" {...register(other} )/>
//               </label>
//             </div>
//             {<p className="error">{errors.sex}</p>}
//           </label>
//           <label>
//             Add profile picture
//             <div>
//               <input type="file" name="profile-picture" id="profilePicture" {...register(profile)Pic} />
//               {<p className="error">{errors.profilePic}</p>}
//             </div>
//           </label>
//           <div className="terms">
//             <label className="checkbox-input">
//               I consent to my personal data <input type="checkbox" {...register(persona)lData} />
//             </label>
//             {<p className="error">{errors.personalData}</p>}
//           </div>
//           <button type="submit">Create</button>
//         </form>
//         <SuccessModal saved={...register(state.s)aved} />
//       </div>
//     );
//   }
// }
