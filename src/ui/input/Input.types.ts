export type InputProps = {

  /** Название инпута. */
  title: string;

  /** Тип инпута. */
  type?: 'date' | 'email';

  /** Id инпута. */
  id: string;

  /** Текст ошибки инпута. */
  error: string;

  /** Функция, вызываемая при вводе символов. */
  onChange?: () => void;

  /** Отключает инпут. */
  disabled?: boolean;

  /** Содержимое, отображаемое внутри инпута. */
  value: string;
};
