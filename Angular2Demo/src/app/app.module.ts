import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employeeDetails.component'
import { ClassComponent } from './ClassExample/ClassExample.component'
import { StyleComponent } from './styleExample/styleExample.component'
import { EventComponent } from './eventBinding/eventBinding.component'
import { twoWaytwoWayDataBindingComponent } from './twoWayDataBinding/twoWayDataBinding.component'
import { EmployeeListComponent } from './employee/employeeList.component'

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent, ClassComponent, StyleComponent, EventComponent, twoWaytwoWayDataBindingComponent, EmployeeListComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
