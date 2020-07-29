import { Injectable } from '@angular/core';

class StorageService {
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  getItem<T>(key: string): T {
    return JSON.parse(this.storage.getItem(key));
  }

  setItem<T>(key: string, value: any): void {
    return this.storage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    return this.storage.removeItem(key);
  }
}

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService extends StorageService {
  constructor() {
    super(sessionStorage);
  }
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends StorageService {
  constructor() {
    super(localStorage);
  }
}
