import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService implements StorageService {
  getItem<T>(key: string): T {
    return JSON.parse(sessionStorage.getItem(key));
  }

  setItem<T>(key: string, value: any): void {
    return sessionStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    return sessionStorage.removeItem(key);
  }
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService implements StorageService {
  getItem<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key));
  }

  setItem<T>(key: string, value: any): void {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    return localStorage.removeItem(key);
  }
}

@Injectable({
  providedIn: 'root',
})
export abstract class StorageService {
  abstract getItem<T>(key: string): T;
  abstract setItem<T>(key: string, value: any): void;
  abstract removeItem(key: string): void;
}
