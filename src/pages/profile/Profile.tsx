import React, { useState } from 'react';
import { links } from './constants';

import { Panel, Page } from '@/ui';

import './Profile.style.css';

/**
 * Компонент Profile отображает стартовую страницу приложения - профиль сотрудника.
 */
export function Profile() {

  const [check, setCheckbox] = useState(false);

  const handleCheckboxChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox(evt.target.checked);
  };

  return (
    <Page title="Личный кабинет сотрудника">
      <div className="profile-navigate-block">
        <Panel/>
        <div className="profile__info">
          <p>ID 123456789</p>
          {/* тут будут тогглы */}
        </div>
      </div>
    </Page>
  );
}
