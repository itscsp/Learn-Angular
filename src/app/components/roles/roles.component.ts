import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})



export class RolesComponent implements OnInit {

  // This is old way of doing HTTP request
  // constructor(private http: HttpClient) {

  // }

  // New way
  http = inject(HttpClient);

  roleList:IRole [] = []

  ngOnInit(): void {
    this.getAllRoles()
  }
  

  /** Get ALL Roles */

  getAllRoles() {
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any) => {
      this.roleList = res.data;
    })
  }










  /*Commenting code - Learn Basic:*/
  // String, Number, Boolean, object, array, null, undefined.
  firstname: string = "Angular Learning";
  angularVersion = "Version 19";
  version: number = 19
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = "checkbox";
  selectedState: string = "";

  //function

  showWelcomeAlert() {
    alert("Welcome to My Angular Learning.")
  }

  showMessage(message: string){
    alert(message)
  }

  /**/




}
