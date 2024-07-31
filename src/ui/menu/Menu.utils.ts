export function isCurrentPage(url: string, path: string) {
  return url === '/'
    ? path === url
    : path.startsWith(url);
}
