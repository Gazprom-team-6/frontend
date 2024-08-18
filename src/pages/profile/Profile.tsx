import { useState } from 'react';
import more from '@/assets/icons/iconMore.svg';
import avatar from '@/assets/images/Avatar.jpg';
import { Panel, Page, Tags, UploadAvatar } from '@/ui';
import dayjs from 'dayjs';
import { Form, Input, Switch, Typography, Select, DatePicker, Image, Tag } from 'antd';
import type { DatePickerProps } from 'antd';
const { TextArea } = Input;
const { Title } = Typography;
import styled from '@emotion/styled';
import './Profile.style.css';

/**
 * Компонент Profile отображает стартовую страницу приложения - профиль сотрудника.
 */
export function Profile() {

  const [isActive, setIsActive] = useState(false);
  const [checkTrainee, setCheckTrainee] = useState(false);
  const [checkOutsource, setCheckOutsource] = useState(false);

  const handleCheckboxTraineeChange = (checked: boolean) => {
    setCheckTrainee(checked);
  };

  const handleCheckboxOutsourceChange = (checked: boolean) => {
    setCheckOutsource(checked);
  };

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  const [valueAbout, setValueAbout] = useState('');

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const dateFormat = 'YYYY/MM/DD';

  const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const customFormat: DatePickerProps['format'] = (value) =>
  `${value.format(dateFormat).split('/').reverse().join('.')}г.`;

  const customStartFormat: DatePickerProps['format'] = (value) =>
  `${value.format(dateFormat).split('/').reverse().join('.')}`;

  const StyledFormItem = styled(Form.Item)`
  .ant-form-item-row {
    flex-wrap: nowrap;
    margin: 0;
    align-items: center;
  }

  label {
    margin-right: 12px;
    font-family: 'Inter';
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }

  label::after {
    display: none;
  }

  :where(.css-dev-only-do-not-override-1uq9j6g).ant-form-item {
    margin-bottom: 0;
  }
`;

const StyledFormField = styled(Form.Item)`
  .ant-select-selector {
    padding: 5px 12px !important;
    height: '32px';
  }

  .ant-form-item-label {
    padding-bottom: 4px !important;
  }

  label {
    font-family: 'Inter';
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }

  label::after {
    display: none;
  }

  .ant-picker {
    width: 100%;
  }
`;

const StyledFormImage = styled(Image)`
  
  :where(.css-dev-only-do-not-override-1uq9j6g).ant-image .ant-image-mask {
    border-radius: 179px !important;
  }

  :where(.css-dev-only-do-not-override-1uq9j6g).ant-image-preview-root .ant-image-preview-img {
    width: 300px !important;
  }
`;

  return (
    <Page title="Личный кабинет сотрудника">
      <div className="profile-navigate-block">
        <Panel/>
        <div className="profile__info">
          <p className="profile__id">ID 123456789</p>
          <StyledFormItem
          name="traineeSwitch"
          label="Стажёр"
          valuePropName="checked"
          >
            <Switch size="small" checked={checkTrainee} onChange={handleCheckboxTraineeChange} />
          </StyledFormItem>
          <StyledFormItem 
            name="OutsourceSwitch"
            label="Outsource"
            valuePropName="checked"
          >
            <Switch size="small" checked={checkOutsource} onChange={handleCheckboxOutsourceChange} />
          </StyledFormItem>
          <button
            className={`profile__button ${isActive ? 'profile__button_current' : ''}`}
            onClick={handleButtonClick}>
              <img
                className="profile__button-image"
                src={more} alt="узнать больше"
              />
          </button>
        </div>
      </div>
      <Form layout="vertical" className="profile__block">
        <div className="profile__block-element profile__block-element_avatar">
          <Tag color="blue" style={{ position: 'absolute', top: '8px', left: '12px' }}>Администратор</Tag>
          <StyledFormImage
            width={179}
            height={179}
            style={{
              borderRadius: '50%',
            }}
            src={avatar}
          />
          <UploadAvatar />
        </div>
        <div className="profile__block-element">
        <Title
          type="secondary"
          style={{
            fontFamily: 'Inter',
            margin: '0 0 12px'
          }}
          level={5}>
            Общая информация
        </Title>
          <div className="profile__info-fields">
            <div className="profile__info-column">
              <StyledFormField
                label="ФИО"
                style={{
                  textAlign: 'start',
                  marginBottom: '0'
                }}
                rules={[{
                  required: true,
                  message: 'Заполните поле!'
                }]}>
                <Input 
                  value="Иванова Светлана Александровна"
                  style={{
                    height: '32px',
                    fontFamily: 'Inter',
                    padding: '5px 12px'
                  }}
                  disabled
                />
              </StyledFormField>
              <StyledFormField
                label="Статус"
                style={{
                  textAlign: 'start',
                  marginBottom: '0'
                }}>
                <Select
                  defaultValue="Активен"
                  style={{ height: '32px', fontFamily: 'Inter' }}
                  onChange={handleChange}
                  options={[
                    { value: 'Уволен', label: 'Уволен' },
                    { value: 'Активен', label: 'Активен' },
                    { value: 'На больничном', label: 'На больничном' },
                    { value: 'В отпуске', label: 'В отпуске' },
                  ]}
                  />
              </StyledFormField>
              <StyledFormField
                label="Дата рождения"
                style={{
                  textAlign: 'start',
                  marginBottom: '0'
                }}>
                <DatePicker
                  onChange={onDateChange}
                  style={{
                    height: '32px',
                    fontFamily: 'Inter',
                    padding: '5px 12px'
                  }}
                  defaultValue={dayjs('1991/01/31', dateFormat)}
                  format={customFormat}
                  disabled
                />
              </StyledFormField>
              <StyledFormField
                label="Город"
                style={{
                  textAlign: 'start',
                  marginBottom: '0'
                }}>
                <Select
                  defaultValue="Москва"
                  showSearch
                  style={{ height: '32px', fontFamily: 'Inter' }}
                  onChange={handleChange}
                  optionFilterProp="label"
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                  }
                  options={[
                    {
                      value: '1',
                      label: 'Москва',
                    },
                    {
                      value: '2',
                      label: 'Санкт-Петербург',
                    },
                    {
                      value: '3',
                      label: 'Новосибирск',
                    },
                    {
                      value: '4',
                      label: 'Южно-Сахалинск',
                    },
                    {
                      value: '5',
                      label: 'Сочи',
                    },
                    {
                      value: '6',
                      label: 'Калининград',
                    },
                  ]}
                  />
              </StyledFormField>
            </div>
            <div className="profile__info-column">
              <StyledFormField
                label="Телефон"
                style={{
                  textAlign: 'start',
                  marginBottom: '0'
                }}
                rules={[{
                  required: true,
                  message: 'Заполните поле!'
                }]}>
                <Input
                  value="+7 999 111-00-00"
                  style={{
                    height: '32px',
                    fontFamily: 'Inter',
                    padding: '5px 12px'
                  }}
                />
              </StyledFormField>
              <StyledFormField
                label="E-mail"
                style={{
                  textAlign: 'start',
                  marginBottom: '0'
                }}
                rules={[{
                  required: true,
                  message: 'Заполните поле!'
                }]}
              >
                <Input
                  value="name@example.com"
                  style={{
                    height: '32px',
                    fontFamily: 'Inter',
                    padding: '5px 12px'
                  }}
                  disabled
                />
              </StyledFormField>
              <StyledFormField
                label="Telegram"
                style={{
                  textAlign: 'start',
                  marginBottom: '0'
                }}
                rules={[{
                  required: true,
                  message: 'Заполните поле!'
                }]}
              >
                <Input
                  value="@Ivanova_Svetlana"
                  style={{
                    fontFamily: 'Inter',
                    height: '32px',
                    padding: '5px 12px'
                  }}
                />
              </StyledFormField>
              <StyledFormField
                label="Часовой пояс"
                style={{
                  textAlign: 'start',
                  marginBottom: '0'
                }}>
                <Select
                  defaultValue="Москва UTC +3"
                  showSearch
                  style={{ height: '32px', fontFamily: 'Inter' }}
                  onChange={handleChange}
                  optionFilterProp="label"
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                  }
                  options={[
                    {
                      value: '1',
                      label: 'Москва UTC +3',
                    },
                    {
                      value: '2',
                      label: 'Санкт-Петербург UTC +3',
                    },
                    {
                      value: '3',
                      label: 'Новосибирск UTC +7',
                    },
                    {
                      value: '4',
                      label: 'Южно-Сахалинск UTC +11',
                    },
                    {
                      value: '5',
                      label: 'Сочи UTC +3',
                    },
                    {
                      value: '6',
                      label: 'Калининград UTC +2',
                    },
                  ]}
                  />
              </StyledFormField>
            </div>
            <div className="profile__info-column">
              <StyledFormField
                label="Должность"
                style={{
                  textAlign: 'start',
                  marginBottom: '0'
                }}>
                <Select
                  style={{ height: '32px', fontFamily: 'Inter' }}
                  defaultValue="UX/UI-дизайнер"
                  showSearch
                  onChange={handleChange}
                  optionFilterProp="label"
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                  }
                  options={[
                    {
                      value: '1',
                      label: 'UX/UI-дизайнер',
                    },
                    {
                      value: '2',
                      label: 'Менеджер',
                    },
                    {
                      value: '3',
                      label: 'Digital Designer',
                    },
                    {
                      value: '4',
                      label: '3D художник',
                    },
                    {
                      value: '5',
                      label: 'Специалист базы данных',
                    },
                    {
                      value: '6',
                      label: 'Специалист службы поддержки',
                    },
                  ]}
                  disabled
                  />
              </StyledFormField>
              <StyledFormField
                label="Грейд"
                style={{
                  textAlign: 'start',
                  marginBottom: '0'
                }}>
                <Select
                  style={{ height: '32px', fontFamily: 'Inter' }}
                  defaultValue="L7"
                  showSearch
                  onChange={handleChange}
                  optionFilterProp="label"
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                  }
                  options={[
                    {
                      value: '1',
                      label: 'L1',
                    },
                    {
                      value: '2',
                      label: 'L2',
                    },
                    {
                      value: '3',
                      label: 'L3',
                    },
                    {
                      value: '4',
                      label: 'L4',
                    },
                    {
                      value: '5',
                      label: 'L5',
                    },
                    {
                      value: '6',
                      label: 'L6',
                    },
                    {
                      value: '7',
                      label: 'L7',
                    },
                    {
                      value: '8',
                      label: 'L8',
                    },
                    {
                      value: '9',
                      label: 'L9',
                    },
                  ]}
                  disabled
                  />
              </StyledFormField>
              <StyledFormField
                label="Тип занятости"
                style={{
                  textAlign: 'start',
                  marginBottom: '0'
                }}>
                <Select
                  style={{ height: '32px', fontFamily: 'Inter' }}
                  defaultValue="Полная"
                  showSearch
                  onChange={handleChange}
                  optionFilterProp="label"
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                  }
                  options={[
                    {
                      value: '1',
                      label: 'Полная',
                    },
                    {
                      value: '2',
                      label: 'Частичная',
                    },
                    {
                      value: '3',
                      label: 'Проектная',
                    },
                    {
                      value: '4',
                      label: 'Волонтёрство',
                    },
                  ]}
                  disabled
                  />
              </StyledFormField>
              <StyledFormField
                label="Начало работы"
                style={{
                  textAlign: 'start',
                  marginBottom: '0'
                }}>
                <DatePicker
                  onChange={onDateChange}
                  style={{
                    height: '32px',
                    fontFamily: 'Inter',
                    padding: '5px 12px'
                  }}
                  defaultValue={dayjs('2020/01/01', dateFormat)}
                  format={customStartFormat}
                  disabled
                />
              </StyledFormField>
            </div>
          </div>
        </div>
        <div className="profile__block-element">
          <Title
            type="secondary"
            style={{
              fontFamily: 'Inter',
              margin: '0 0 12px'
            }}
            level={5}>
              Обо мне
          </Title>
          <TextArea
            value={valueAbout}
            onChange={(e) => setValueAbout(e.target.value)}
            style={{ resize: 'none', height: '72px' }}
            required/>
        </div>
        <div className="profile__block-element">
          <Title
            type="secondary"
            style={{
              fontFamily: 'Inter',
              margin: '0 0 12px'
            }}
            level={5}>
              Навыки
          </Title>
          <Tags />
        </div>
      </Form>
    </Page>
  );
}
