import type { NotificationsProps } from './Notifications';

import iconNotification from '@/assets/icons/iconNotification.svg';
import './Notifications.style.css';

/**
 * Отображает уоличество уведомлений.
 * 
 * @param notifications - Определяет количество уведомлений, по-умолчанию null.
 */
export function Notifications({
  notifications,
}: NotificationsProps) {
  return (
    <button className="notifications">
      {notifications && <div className="notifications__quantity">{notifications}</div>}
      <img className="notifications__image" src={iconNotification} alt="уведомления" />
    </button>
  );
}
