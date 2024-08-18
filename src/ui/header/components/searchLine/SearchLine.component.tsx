import iconSearch from '@/assets/icons/iconSearch.svg';

/**
 * Отображает поисковую строку.
 */
export function SearchLine() {
  return (
    <label className="search">
      <img className="search__image" src={iconSearch} alt="лупа"/>
      <input className="search__input" type="search" placeholder="Искать сотрудника, проект, компонент"></input>
    </label>
  );
}
