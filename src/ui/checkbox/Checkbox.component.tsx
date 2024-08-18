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
  onCheck,
  title,
  checked = false,
}: ChekboxProps) {
  return (
    <label className="toggle">
      {title}
      <input className="toggle__chechbox"
        type="checkbox"
        id={`chekbox-${type}`}
        onChange={onCheck}
        required
        checked={checked}
      />
      <span className="toggle__check"></span>
    </label>
  );
}
