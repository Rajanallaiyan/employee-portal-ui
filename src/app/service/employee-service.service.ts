import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl: string;
  private addemployeeUrl: string;

  
  constructor(private http: HttpClient) {
    this.employeesUrl = 'http://localhost:8888/employeeportal/employees';
    this.addemployeeUrl = 'http://localhost:8888/employeeportal/employee';
  }

  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl);
  }
 
  public save(employees: Employee) {
    return this.http.post<Employee>(this.addemployeeUrl, employees);
  }

}
