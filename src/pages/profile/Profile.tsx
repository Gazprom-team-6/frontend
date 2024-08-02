import React, { useState } from 'react';
import { links } from './constants';
import more from '@/assets/icons/iconMore.svg';

import { Panel, Page, Checkbox } from '@/ui';

import './Profile.style.css';

/**
 * Компонент Profile отображает стартовую страницу приложения - профиль сотрудника.
 */
export function Profile() {

  const [isActive, setIsActive] = useState(false);
  const [checkTrainee, setCheckTrainee] = useState(false);
  const [checkOutsource, setCheckOutsource] = useState(false);

  const handleCheckboxTraineeChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCheckTrainee(evt.target.checked);
  };

  const handleCheckboxOutsourceChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOutsource(evt.target.checked);
  };

  const handleButtonClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setIsActive(!isActive);
  };

  return (
    <Page title="Личный кабинет сотрудника">
      <div className="profile-navigate-block">
        <Panel/>
        <div className="profile__info">
          <p className="profile__id">ID 123456789</p>
          <Checkbox type="trainee" onCheck={handleCheckboxTraineeChange} title="Стажёр" checked={checkTrainee} />
          <Checkbox type="outsource" onCheck={handleCheckboxOutsourceChange} title="Outsource" checked={checkOutsource} />
          <button className={`profile__button ${isActive ? 'profile__button_current' : ''}`} onClick={handleButtonClick}><img className="profile__button-image" src={more} alt="узнать больше" /></button>
        </div>
      </div>
      <div className="profile__block">
        <div className="profile__block-element"></div>
        <div className="profile__block-element"></div>
        <div className="profile__block-element"></div>
        <div className="profile__block-element"></div>
      </div>
    </Page>
  );
}
