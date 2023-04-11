import React, { useEffect, useState } from 'react';
import SuccessModal from './SuccessModal';
import { FormSetState, FormData } from './types';
import errorsMsg from './helpers';
import { useForm, SubmitHandler } from 'react-hook-form';

const Form = ({ createCard }: FormSetState) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    createCard({ ...data, image: URL.createObjectURL(data.picList![0]), id: Date.now() });
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setIsModalVisible(true);
      setTimeout(() => setIsModalVisible(false), 2000);
    }
  }, [reset, isSubmitSuccessful]);
  return (
    <div className="form-container">
      <form action="" className="form" data-testid="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Name
          <div>
            <input
              type="text"
              id="name"
              {...register('name', {
                required: true,
                minLength: 4,
                pattern: { value: /[A-Za-z]{3}/, message: 'Support strings only' },
              })}
            />
            {errors.name && <p className="error">{errorsMsg.name}</p>}
          </div>
        </label>
        <label htmlFor="surname">
          Surname
          <div>
            <input
              type="text"
              id="surname"
              {...register('status', { required: true, minLength: 1 })}
            />
            {errors.status && <p className="error">{errorsMsg.emptyField}</p>}
          </div>
        </label>
        <label>
          Date of birth
          <div>
            <input
              type="date"
              {...register('species', {
                required: true,
                max: new Date(Date.now()).toISOString(),
              })}
            />
            {errors.species && <p className="error">{errorsMsg.invalidDate}</p>}
          </div>
        </label>
        <label className="checkbox-input">
          Show birth date in profile <input type="checkbox" {...register('type')} />
        </label>
        <label className="select-input">
          Region
          <div>
            <select {...register('type')}>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="Australia">Australia</option>
              <option value="Antarctica">Antarctica</option>
            </select>
            {errors.type && <p className="error">{errorsMsg.nonChecked}</p>}
          </div>
        </label>
        <label className="radio-input">
          <div className="radio-input-container">
            <label htmlFor="male">
              Male{' '}
              <input
                type="radio"
                id="male"
                value="male"
                {...register('gender', { required: true })}
              />
            </label>
            <label htmlFor="female">
              Female{' '}
              <input
                type="radio"
                id="female"
                value="female"
                {...register('gender', { required: true })}
              />
            </label>
            <label htmlFor="other">
              Other{' '}
              <input
                type="radio"
                id="other"
                value="other"
                {...register('gender', { required: true })}
              />
            </label>
          </div>
          {errors.gender && <p className="error">{errorsMsg.nonChecked}</p>}
        </label>
        <label htmlFor="profilePicture">
          Add profile picture
          <div>
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              {...register('picList', { required: true })}
            />
            {errors.image && <p className="error">{errorsMsg.file}</p>}
          </div>
        </label>
        <div className="terms">
          <label className="checkbox-input" id="ckeckbox">
            I consent to my personal data{' '}
            <input type="checkbox" {...register('personalData', { required: true })} />
          </label>
          {errors.personalData && <p className="error">{errorsMsg.termsOFUse}</p>}
        </div>
        <button type="submit">Create</button>
      </form>
      <SuccessModal saved={isModalVisible} />
    </div>
  );
};
export default Form;
