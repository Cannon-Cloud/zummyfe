import { Injectable } from '@angular/core';

const TOKEN = 'jwtToken';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  setToken(data: string | undefined) {
    if (!data) return;
    localStorage.setItem(TOKEN, data);
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  removeToken() {
    localStorage.removeItem(TOKEN);
  }
}
