import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:9999/passengers'; // Update to your actual endpoint

  constructor(private http: HttpClient) {}

  deletePassenger(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  updatePassenger(id: number, passengerData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, passengerData);
  }

  // New method to add a passenger (book a bus)
  addPassenger(passengerData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, passengerData); // Ensure your API can handle this
  }
}
