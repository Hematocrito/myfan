type HttpMethods = 'POST' | 'PUT' | 'GET' | 'DELETE';

export abstract class Service {
  private URI = '';
  constructor(URI: string) {
    this.URI = URI;
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request(endpoint, 'GET');
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    console.log('data :>> ', data);
    return this.request(endpoint, 'POST', data);
  }

  async put<T>(endpoint: string, data = {}): Promise<T> {
    return this.request(endpoint, 'PUT', data);
  }

  async delete<T>(endpoint: string, data = {}): Promise<T> {
    return this.request(endpoint, 'DELETE', data);
  }

  private async request(uri: string, method: HttpMethods, data?: any) {
    console.log('data :>> ', data);
    const body = JSON.stringify(data);
    console.log('body :>> ', body);
    const response = await fetch(this.URI + uri, { method, body });
    console.log('response :>> ', response);
    return response.json();
  }
}
