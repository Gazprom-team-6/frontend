import { links } from './constants';

import { Card, Page } from '@/ui';

import './Project.style.css';

/**
 * Компонент Project отображает стартовую страницу приложения.
 */
export function Project() {
  return (
    <Page title="Проект">
      <nav className="list">
        {links.map(link => (
          <Card
            key={link.url}
            url={link.url}
            title={link.title}
            description={link.description}
          />
        ))}
      </nav>
    </Page>
  );
}
