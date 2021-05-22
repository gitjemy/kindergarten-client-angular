import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Kid } from 'src/app/services/kid';
import { EmployeeService } from 'src/app/services/kid.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit, OnChanges {


  @Input() appName: string | undefined;

  headers: any;
  public employees: Kid[] = [];
  title = 'kindergartenapp';

  constructor(private employeeService: EmployeeService, private app: AppComponent) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  ngOnChanges(changes: SimpleChanges) {
    const modal: Kid = {
      id: 100,
      code: '25489797',
      name: 'Ahmed Gamal ' + this.appName,
      detail: {
        id: 12454,
        action: 'Action ' + this.appName,
        imageUrl: "file://////",
        phone: '0' + (1000000000 + this.app.timeM),
      }
    }
    this.employees.push(modal)
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Kid[]) => {
        this.employees = response;
        this.headers = Object.keys(response[0]);
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
