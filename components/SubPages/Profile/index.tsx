import React, { useState, FC } from 'react';
import Input from '../../Forms/Input/Input';
import styles from '../Signup/Signup.module.css';

const SubProfilePage: FC = () => {
  const [image, setImage] = useState(null);
  return (
    <div className={styles.signup__wrapper}>
      <h1 className="text-4xl mt-5 text-secondary font-bold text-center">
        Your Profile
      </h1>
      <div className="mt-8 mb-16 text-center">
        <form className="space-y-5">
          <div className="flex flex-col items-center justify-center ">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border border-gray-300">
              <img
                className="w-full h-full object-cover"
                src={
                  image
                    ? typeof window !== 'undefined'
                      ? window.URL.createObjectURL(image)
                      : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                    : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                }
                alt=""
              />
            </div>

            <input
              onChange={(e: any) => setImage(e.target.files[0])}
              className="hidden"
              type="file"
              name=""
              value=""
              id="image"
            />
            <label
              className="mt-3 bg-secondary text-primary text-sm px-3 py-2 font-semibold cursor-pointer"
              htmlFor="image"
            >
              Upload image
            </label>
          </div>

          <Input
            value={'Syket Bhattachergee'}
            placeholder={'Full Name'}
            type={'text'}
          />
          <Input value={'syketb'} placeholder={'Username'} type={'text'} />
          <Input
            value={'syketb@gmial.com'}
            readOnly={true}
            placeholder={'Email'}
            type={'email'}
          />
          <Input value={'Update'} type={'submit'} />
        </form>
      </div>
    </div>
  );
};

export default SubProfilePage;
