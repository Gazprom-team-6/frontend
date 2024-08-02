export type ChekboxProps = {

  /** Тип чекбокса для определения по классу. */
  type?: string;

  /** Функция, вызываемая при клике на чекбокс. */
  onCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** Меняет статус чекбокса. */
  checked?: boolean;

  /** Текст, отображаемый слева от чекбокса. */
  title?: string;
};
