export const apiurl = `${import.meta.env.VITE_API}/api/v1`

class apiservice {
  private readonly token: string | null = null;

  constructor() {
    this.token = window.localStorage.getItem('token');
  }

  /**
   * Отправляет GET запрос на указанный URL.
   * Получает данные в формате JSON.
   *
   * @param url - URL адрес.
   */
  public async get<T>(url: string): Promise<T> {
    return this.request<T>(url, { method: 'GET' })
  }

  /**
   * Отправляет POST запрос на указанный URL.
   * Отправляет и получает данные в формате JSON, в зависимости от параметров.
   *
   * @param url - URL адрес.
   * @param data - Данные для отправки.
   */
  public async post<T,
 D>(url: string,
 data: D): Promise<T> {
    const body = JSON.stringify(data)

    return this.request<T>(url, {
      method: 'POST',
      body
    })
  }

  /**
   * Отправляет PUT запрос на указанный URL.
   * Отправляет и получает данные в формате JSON, в зависимости от параметров.
   *
   * @param url - URL адрес.
   * @param data - Данные для отправки.
   */
  public async put<T,
 D>(url: string,
 data: D): Promise<T> {
    const body = JSON.stringify(data)

    return this.request<T>(url, {
      method: 'PUT',
      body
    })
  }

  /**
   * Отправляет PATCH запрос на указанный URL.
   * Отправляет и получает данные в формате JSON, в зависимости от параметров.
   *
   * @param url - URL адрес.
   * @param data - Данные для отправки.
   */
  public async patch<T,
 D>(url: string,
 data: D): Promise<T> {
    const body = JSON.stringify(data)

    return this.request<T>(url, {
      method: 'PATCH',
      body
    })
  }

  /**
   * Отправляет DELETE запрос на указанный URL.
   * Удаляет данные, исходя из параметров запроса.
   *
   * @param url - URL адрес.
   */
  public async delete<T>(url: string): Promise<T> {
    return this.request<T>(url, { method: 'DELETE' })
  }

  private async request<T>(url: string,
 options: RequestInit): Promise<T> {
    const token = this.token ?? window.localStorage.getItem('token')

    options.headers = {
      ...options.headers,
      ...token ? { authorization: token; } : {},
      'Content-Type': "application/json",;
    }

    const response = await fetch(`${apiUrl}${url}`, options);
    const json = await response.json();

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return json as T
  }
}

export const api = new ApiService()
