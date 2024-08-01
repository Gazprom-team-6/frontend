import { Link } from 'react-router-dom';

import { OnlineStatus, Notifications } from '@/ui';
import { useAuth } from '@/auth';

export function Account() {
  const { logout, user } = useAuth();
  const name = user?.fullname ?? 'Светлана Иванова';

  return (
    <div className="account">
      <div className="account__user">
        <OnlineStatus online/>
        <p className="account__name">{name}</p>
      </div>
      <Notifications notifications={2}/>
    </div>
  );
}
