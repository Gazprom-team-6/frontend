export type ButtonProps = {
  /** Тип кнопки, по-умолчанию 'secondary'. */
  type?: 'primary' | 'secondary' | 'danger';

  /** Функция, вызываемая при клике на кнопку. */
  onClick?: () => void;

  /** Отключает кнопку. */
  disabled?: boolean;

  /** Содержимое, отображаемое внутри кнопки. */
  children: React.ReactNode;
};
