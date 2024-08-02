import type { ChekboxProps } from './Checkbox.types';

import './Checkbox.style.css';

/**
 * Отображает стандартный чекбокс с указанным статусом и текстом.
 * При клике на кнопку вызывается функция onClick.
 *
 * @param type - Тип чекбокса.
 * @param onClick - Функция, вызываемая при клике на чекбокс.
 * @param title - Текст, отображаемый слева от чекбокса.
 * @param checked - Определяет  статус чекбокса, по-умолчанию false.
 */
export function Checkbox({
  type,
  onClick,
  title,
  checked = false,
}: ChekboxProps) {
  return (
    <label className="connect-form__label">
      {title}
      <input className="connect-form__checkbox-hide"
        type="checkbox"
        name="agreement"
        id="agreement"
        onChange={onClick}
        required
      />
      <span className="connect-form__checkbox"></span>
    </label>
  );
}
