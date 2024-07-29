export type buttonprops = {
  /** Содержимое, отображаемое внутри кнопки. */
  children: react.reactnode;

  /** Отключает кнопку. */
  disabled?: boolean;

  /** Функция, вызываемая при клике на кнопку. */
  onclick?: () => void;

  /** Тип кнопки, по-умолчанию 'secondary'. */
  type?: "primary" | "secondary" | "danger";
}
