import { Component } from '@angular/core';
import { Employee } from './employee.type';
import {NgForm} from '@angular/forms';
@Component({
    moduleId: module.id,
    selector: 'employee-form',
    templateUrl: 'employee.form.html',
    styles:[`
        .ng-valid[required], .ng-valid.required  {
        border-left: 5px solid #42A948;
        }

        .ng-invalid:not(form)  {
        border-left: 5px solid #a94442;
        }
        table{
            border:1px solid #ccc;
        }
    `]
})
export class EmployeeFormComponent {
    // Initialize empty array  
    employeeData: any = [];

    model = new Employee(18, 'Hemant Ingle', 'Software Engg.','male');
    genders:any = ['male','female'];
    
    submitted = false;
    onSubmit(form:NgForm) {
        this.submitted = true;
        console.log("employeeForm : ",form);
        console.log("employeeForm Details : ",form.value);
        this.employeeData.push(form.value);
        console.log("this.employeeData : ",this.employeeData);
    }

    public designations: any = [
        "Software Engg.",
        "Web developer",
        "Web designer",
        "Dev Ops"
    ]
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}
