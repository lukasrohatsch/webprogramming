import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { LocalSettings } from './types';

const KEY_LOCAL_SETTINGS = "KEY_LOCAL_SETTINGS";

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  private _localSettings: WritableSignal<LocalSettings> = signal({});
  public localSettings = this._localSettings.asReadonly();

  constructor() {
    this._localSettings.set(this.getLocalSettings());
  }

  clearLoginData() {
    let settings = this.getLocalSettings();
    settings.user = "";
    settings.password = "";
    this.saveLocalSettings(settings);
  }

  setLoginData(user: string, password: string) {
    let settings = this.getLocalSettings();
    settings.user = user;
    settings.password = password;
    this.saveLocalSettings(settings);
  }

  addKnownUserId(userId: string) {
    let settings = this.getLocalSettings();
    settings.knownUserIds = settings.knownUserIds || [];
    // settings.knownUserIds.push(userId);

    settings.knownUserIds = settings.knownUserIds.filter((id: string) => id !== userId);
    // aktuellen an die erste Stelle reihen
    settings.knownUserIds.unshift(userId);
    // nur die ersten 5
    settings.knownUserIds = settings.knownUserIds.slice(0, 5);

    this.saveLocalSettings(settings);
  }

  getKnownUserIds() {
    return this.getLocalSettings().knownUserIds || [];
  }

  getLocalSettings(): LocalSettings {
    let string = localStorage.getItem(KEY_LOCAL_SETTINGS);
    if (!string) {
      return {};
    }
    try {
      return JSON.parse(string);

    } catch { }
    return {};
  }

  private saveLocalSettings(settings: LocalSettings) {
    localStorage.setItem(KEY_LOCAL_SETTINGS, JSON.stringify(settings));
    this._localSettings.set(settings);
  }

}
