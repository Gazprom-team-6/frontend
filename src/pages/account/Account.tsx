import { useAuth } from '@/auth';
import { Page } from '@/ui';

export function Account() {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return false;
  }

  return (
    <Page title="Личный кабинет">
      <p>Имя пользователя: {user?.username}</p>
      <p>Электронная почта: {user?.email}</p>
    </Page>
  );
}
