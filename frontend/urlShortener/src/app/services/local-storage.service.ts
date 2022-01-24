import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
   }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  get(key: string) {
    return this.storage.getItem(key);
  }

  getAll() {
    return this.storage;
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  

}
