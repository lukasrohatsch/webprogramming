import { Injectable } from '@angular/core';
import { User } from './types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getUsers(): User[] {
    return [
      {
        id: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
        name: 'Alice Johnson',
        group_id: 'grp-admins-x7y8'
      },
      {
        id: 'b2c3d4e5-f6a7-8901-2345-67890abcdef0',
        name: 'Bob Williams',
        group_id: 'grp-editors-p5q6'
      },
      {
        id: 'c3d4e5f6-a7b8-9012-3456-7890abcdef01',
        name: 'Charlie Brown',
        group_id: 'grp-viewers-m3n4'
      },
      {
        id: 'd4e5f6a7-b8c9-0123-4567-890abcdef012',
        name: 'Diana Miller',
        group_id: 'grp-editors-p5q6'
      },
      {
        id: 'e5f6a7b8-c9d0-1234-5678-90abcdef0123',
        name: 'Ethan Rodriguez',
        group_id: 'grp-viewers-m3n4'
      },
      {
        id: 'f6a7b8c9-d0e1-2345-6789-0abcdef01234',
        name: 'Fiona Garcia',
        group_id: 'grp-viewers-m3n4'
      },
      {
        id: 'a7b8c9d0-e1f2-3456-7890-bcdef0123456',
        name: 'George Taylor',
        group_id: 'grp-admins-x7y8'
      },
      {
        id: 'b8c9d0e1-f2a3-4567-8901-cdef01234567',
        name: 'Hannah Martinez',
        group_id: 'grp-editors-p5q6'
      },
      {
        id: 'c9d0e1f2-a3b4-5678-9012-def012345678',
        name: 'Ian Anderson',
        group_id: 'grp-viewers-m3n4'
      },
      {
        id: 'd0e1f2a3-b4c5-6789-0123-ef0123456789',
        name: 'Jane Smith',
        group_id: 'grp-admins-x7y8'
      }
    ];
  }
}
