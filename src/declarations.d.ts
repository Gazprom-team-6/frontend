/// <reference types="vite/client" />
/// <reference types="vitest" />
/// <reference types="vite-plugin-svgr/client" />
type ImportMetaEnv = {
  /** Адрес API сервера */
  readonly VITE_API: string;VITE_API
};

type importmeta = {
  /** Данные окружения */
  readonly env: importmetaenv;env
}
