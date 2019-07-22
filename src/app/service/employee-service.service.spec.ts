import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee-service.service';

describe('EmployeeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const employeeService: EmployeeService = TestBed.get(EmployeeService);
    expect(employeeService).toBeTruthy();
  });
});
