
import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusServiceService {
  private apiUrl = 'http://localhost:8100/buses';

  constructor(private http: HttpClient) {}

  // Method to get all buses
  getAllBuses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBusByRoute(route: string): Observable<any> {
    const params = new HttpParams().set('route', route); // Set query parameter for route
    return this.http.get<any>(`${this.apiUrl}/route`, { params });
  }

  // Other methods...
}

