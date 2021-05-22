import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Kid } from './kid';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private api_url = environment.apiBaseUrl;

  constructor(private http: HttpClient) { 
    
  }

  public getEmployees(): Observable<Kid[]> {
    return this.http.get<Kid[]>(`${this.api_url}/kids/all`)
  }


  public addEmployee(employee: Kid): Observable<Kid> {
    return this.http.post<Kid>(`${this.api_url}/kids/add`, employee)
  }


  public updateEmployee(employee: Kid): Observable<Kid> {
    return this.http.put<Kid>(`${this.api_url}/kids/update`, employee)
  }


  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.api_url}/kids/delete/${employeeId}`)
  }

}