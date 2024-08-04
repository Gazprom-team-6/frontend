import * as React from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { AccessPage } from '@/ui/accessPage';

import { useAuth } from '@/auth';
import { Button } from '@/ui';

import './Auth.style.css';

import { Checkbox, Input, Space, Form, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import type { CheckboxProps } from 'antd';
const { Text } = Typography;

/**
 * Компонент Auth отображает страницу аутентификации.
 * Начальная точка входа пользователя в приложение.
 */
export function Auth() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  React.useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <AccessPage title="Добро пожаловать">
      <Form className="auth__form">
        <div className="form__inputs">
          <Space direction="vertical" style={{ rowGap: '0' }}>
            <Form.Item help="Укажите, пожалуйста, ваш email корректно" validateStatus="error" style={{ textAlign: 'start', marginBottom: '0' }}>
              <Input placeholder="E-mail" style={{ fontFamily: 'Inter', padding: '9px 12px', borderRadius: '8px' }} />
            </Form.Item>
            <Form.Item help="Неверный пароль. Попробуйте ввести ещё раз" validateStatus="error" style={{ textAlign: 'start', marginBottom: '0', marginTop: '16px' }}>
              <Input.Password
                className="auth__password"
                placeholder="Пароль"
                style={{ padding: '9px 12px', borderRadius: '8px' }}
                iconRender={(visible) => (visible ? <EyeTwoTone style={{height: '16px', width: '16px', backgroundPosition: 'contain'}} /> : <EyeInvisibleOutlined style={{height: '16px', width: '16px'}} />)}
              />
            </Form.Item>
          </Space>
          <div className="form__password-block">
            <Checkbox onChange={onChange} style={{ fontFamily: 'Inter', lineHeight: '22px' }}>Запомнить пароль</Checkbox>
            <Link style={{ fontFamily: 'Inter' }} to="/forget-password" className="form__link"><Text style={{ fontFamily: 'Inter' }} >Забыли пароль?</Text></Link>
          </div>
        </div>
        <Button
          type="primary"
          onClick={login}
        >
          Войти
        </Button>
      </Form>
    </AccessPage>
  );
}
