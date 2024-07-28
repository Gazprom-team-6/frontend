import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';

import { useAuth } from '@/auth';
import { Dropdown } from '@/ui';
import type { DropdownItems } from '@/ui';

const avatarStyle = { backgroundColor: '#1677ff' };
const exitStyle = { color: '#f5222d' };

export function Account() {
  const { logout, user } = useAuth();
  const name = user?.fullname ?? 'Пользователь';

  const items: DropdownItems = [
    {
      key: '0',
      label: <span>{name}</span>,
      disabled: true,
    },
    { type: 'divider' },
    {
      key: '1',
      label: <Link to="/account">Профиль</Link>,
    },
    {
      key: '2',
      label: <a style={exitStyle} onClick={logout}>Выход</a>,
    },
  ];

  return (
    <Dropdown items={items}>
      <Avatar
        style={avatarStyle}
        icon={<UserOutlined />}
      />
    </Dropdown>
  );
}
