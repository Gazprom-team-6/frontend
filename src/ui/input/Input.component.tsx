import type { InputProps } from './Input.types';

import './Input.style.css';

/**
 * Отображает стандартный инпут с указанными типом, названием, содержимым и текстом ошибки.
 * При клике на кнопку вызывается функция onClick.
 *
 * @param title - Название, отображаемое над инпутом.
 * @param type - Тип инпута.
 * @param value - Текст инпута.
 * @param id - Id инпута.
 * @param error - Текст ошибки.
 * @param disabled - Определяет, отключен ли инпут, по-умолчанию false.
 * @param onChange - Определяет, отключен ли инпут, по-умолчанию false.
 */
export function Input({
  title,
  type,
  value,
  id,
  error,
  disabled = false,
  onChange,
}: InputProps) {
  return (
    <div className="input__block">
      <label className="input__label" htmlFor={type}>
          {title}
        </label>
        <input
          className="form__field"
          type={type}
          id={id}
          required
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        <div className="form__field-error">{error}</div>
      </div>
  );
}
