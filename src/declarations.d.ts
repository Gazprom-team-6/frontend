/// <reference types="vite/client" />
/// <reference types="vitest" />
/// <reference types="vite-plugin-svgr/client" />

type ImportMetaEnv = {
  /** Адрес API сервера */
  readonly VITE_API: string;
};

type ImportMeta = {
  /** Данные окружения */
  readonly env: ImportMetaEnv;
};
