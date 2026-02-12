import { LocalStorageService } from './local-storage.service';
import { LocalSettings } from './types';

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  let store: { [key: string]: string } = {};

  beforeEach(() => {
    store = {};
    spyOn(localStorage, 'getItem').and.callFake((key: string) => store[key] || null);
    spyOn(localStorage, 'setItem').and.callFake((key: string, value: string) => { store[key] = value; });
    service = new LocalStorageService();
  });

  it('should initialize with empty settings if nothing is stored', () => {
    expect(service.localSettings()).toEqual({});
  });

  it('should save login data and retrieve it', () => {
    service.setLoginData('sebastian', 'geheim');
    const settings = service.getLocalSettings();
    expect(settings.user).toBe('sebastian');
    expect(settings.password).toBe('geheim');
  });

  it('should clear login data', () => {
    service.setLoginData('sebastian', 'geheim');
    service.clearLoginData();
    const settings = service.getLocalSettings();
    expect(settings.user).toBe('');
    expect(settings.password).toBe('');
  });

  it('should add known user IDs and keep only last 5, newest first', () => {
    for (let i = 1; i <= 6; i++) {
      service.addKnownUserId('user' + i);
    }
    const known = service.getKnownUserIds();
    expect(known.length).toBe(5);
    expect(known).toEqual(['user6', 'user5', 'user4', 'user3', 'user2']);
  });

  it('should move existing user ID to the front', () => {
    ['a', 'b', 'c', 'd', 'e'].forEach(id => service.addKnownUserId(id));
    service.addKnownUserId('c');
    const known = service.getKnownUserIds();
    expect(known[0]).toBe('c');
    expect(known.length).toBe(5);
    expect(known).toEqual(['c', 'e', 'd', 'b', 'a']);
  });

  it('should handle corrupted JSON gracefully', () => {
    (localStorage.getItem as jasmine.Spy).and.returnValue('{invalid json');
    expect(service.getLocalSettings()).toEqual({});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
