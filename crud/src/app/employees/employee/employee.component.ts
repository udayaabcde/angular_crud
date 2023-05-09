import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
FullName: any;
EmployeeID : any;
constructor(public service:EmployeeService){}

ngOnInit(){
  this.resetForm();
}

resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.service.formData = {
    EmployeeID : null,
    FullName: '',
    Position:''

  }
}

 onSubmit(form: NgForm){
  if(form.value.EmployeeID == null)
    this.insertRecord(form);
    else
  this.updateRecord(form);
 }

 insertRecord(form:NgForm){
  this.service.postEmployee(form.value).subscribe(res=>{
    this.resetForm(form);
    this.service.refreshList();
  })
 }
 updateRecord(form:NgForm){
  this.service.putEmployee(form.value).subscribe(res=>{
    this.resetForm(form);
    this.service.refreshList();
  })
 }
}

