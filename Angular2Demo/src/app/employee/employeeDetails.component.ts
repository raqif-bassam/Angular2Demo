import { Component } from '@angular/core';
@Component({
    selector: "my-employee",
    templateUrl: "app/employee/employeeDetails.component.html",
    styleUrls: ["app/employee/employeeDetails.component.css"]
})
export class EmployeeComponent {
    firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
    columnSpan: number = 2;
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}