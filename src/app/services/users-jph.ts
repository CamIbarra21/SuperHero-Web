import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersJph {
  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor () {}

  async getUsers(): Promise<{ success: boolean; data?: any[]; error?: string }> {
    try {
      const res = await fetch(`${this.baseUrl}/users`);

      if (!res.ok)
        throw new Error(`Error en GET: ${res.status}`);

      const data = await res.json();

      return {
        success: true,
        data: data
      }

    } catch (err: any) {
      return {
        success: false,
        error: err.message
      }
    }
  }


  async getUserById(id: number): Promise<{ success: boolean; data?: any; error?: string }> {

    try {
      const res = await fetch(`${this.baseUrl}/users/${id}`);

      if (!res.ok)
        throw new Error(`Error en GET BY ID: ${res.status}`);

      const data = res.json();

      return {
        success: true,
        data: data
      }

    } catch (err: any) {
      return {
        success: false,
        error: err.message
      }
    }
  }


  async updateUser(id: number, updateUser: any): Promise<any> {
    try {
      const res = await fetch(`${this.baseUrl}/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateUser)
      });

      if (!res.ok)
        throw new Error(`Error en PUT: ${res.status}`);

      const data = res.json();

      return {
        success: true,
        data: data
      }

    } catch (err: any) {
      return {
        success: false,
        error: err.message
      }
    }
  }


  async deleteUser(id: number): Promise<any> {
    try {
      const res = await fetch(`${this.baseUrl}/users/${id}`, {
        method: 'DELETE'
      });

      if (!res.ok)
        throw new Error(`Error en DELETE: ${res.status}`);

      const data = res.json();

      return {
        success: true,
        data: data
      }

    } catch (err: any) {
      return {
        success: false,
        error: err.message
      }
    }
  }


  async createUser(newUser: any): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      const res = await fetch(`${this.baseUrl}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      });

      if (!res.ok)
        throw new Error(`Error en POST: ${res.status}`);

      const data = await res.json();

      return {
        success: true,
        data: data
      };
    } catch (err: any) {
      return {
        success: false,
        error: err.message
      };
    }
  }
}
