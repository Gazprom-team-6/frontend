import type { ButtonProps } from './Button.types';

import './Button.style.css';

/**
 * Отображает стандартную кнопку с указанными типом и содержимым.
 * При клике на кнопку вызывается функция onClick.
 *
 * @param onClick - Функция, вызываемая при клике на кнопку.
 * @param children - Содержимое, отображаемое внутри кнопки.
 * @param type - Тип кнопки, по-умолчанию 'secondary'.
 * @param disabled - Определяет, отключена ли кнопка, по-умолчанию false.
 */
export function Button({
  onClick,
  children,
  type = 'secondary',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`button button-${type}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
