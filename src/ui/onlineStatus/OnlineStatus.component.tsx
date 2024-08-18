import type { OnlineStatusProps } from './OnlineStatus';

import avatar from '@/assets/images/avatar.png';
import './OnlineStatus.style.css';

/**
 * Отображает стандартный аватар пользователя с указанием статуса сети.
 * 
 * @param online - Определяет, в сети ли пользователь, по-умолчанию false.
 */
export function OnlineStatus({
  online,
}: OnlineStatusProps) {
  return (
    <div className="avatar">
      {online && <div className="avatar__status"/>}
      <img className="avatar__image" src={avatar} alt="аватар" />
    </div>
  );
}
