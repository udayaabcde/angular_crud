import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    constructor(public service:EmployeeService){}

    ngOnInit(): void {
      this.service.refreshList()
    }

    populateForm(emp:Employee){
        this.service.formData= Object.assign({},emp);
    }

    onDelete(id:number){
      if(confirm('Are u sure to delete')){
      this.service.deleteEmployee(id).subscribe(res=>{
        this.service.refreshList();
      })
    }
  }
}
