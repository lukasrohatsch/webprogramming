import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactListComponent } from './contact-list.component';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let localStorageServiceMock: any;
  let apiServiceMock: any;
  let routerMock: any;

  const mockUsers = [
    { id: '1', name: 'Sebastian' },
    { id: '2', name: 'Administrator' },
    { id: '3', name: 'Testuser' }
  ];

  beforeEach(async () => {
    localStorageServiceMock = {
      getKnownUserIds: jasmine.createSpy('getKnownUserIds').and.returnValue(['1', '3']),
      addKnownUserId: jasmine.createSpy('addKnownUserId')
    };
    apiServiceMock = {
      getUsers: jasmine.createSpy('getUsers').and.returnValue(mockUsers),
    };
    routerMock = {
      navigate: jasmine.createSpy('navigate')
    };

    await TestBed.configureTestingModule({
      imports: [ContactListComponent, CommonModule],
      providers: [
        { provide: LocalStorageService, useValue: localStorageServiceMock },
        { provide: ApiService, useValue: apiServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
  });

  it('should fetch users and knownUserIds on init', () => {
    localStorageServiceMock.getKnownUserIds.and.returnValue(['2', '3']);
    fixture.detectChanges();
    expect(localStorageServiceMock.getKnownUserIds).toHaveBeenCalled();
    expect(component.knownUserIds).toEqual(['2', '3']);
  });

  it('should compute knownUsers and otherUsers correctly', () => {
    fixture.detectChanges();
    const knownUsers = component.knownUsers();
    const otherUsers = component.otherUsers();
    expect(knownUsers.length).toBe(2);
    expect(knownUsers.map(u => u.id)).toEqual(['1', '3']);
    expect(otherUsers.length).toBe(1);
    expect(otherUsers[0].id).toBe('2');
  });

  it('should navigate to conversation and add user to knownUserIds on selectUser', () => {
    fixture.detectChanges();
    component.selectUser('2');
    expect(routerMock.navigate).toHaveBeenCalledWith(['/conversation', '2']);
    expect(localStorageServiceMock.addKnownUserId).toHaveBeenCalledWith('2');
  });


  it('should render user names in the template', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    //  <a>-Elemente innerhalb von <li>
    const links = compiled.querySelectorAll('li a');
    const names = Array.from(links).map(a => a.textContent?.trim());

    expect(names).toContain('Sebastian (1)');
    expect(names).toContain('Administrator (2)');
    expect(names).toContain('Testuser (3)');
  });
});