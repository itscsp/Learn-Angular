import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})



export class RolesComponent {

  // String, Number, Boolean, object, array, null, undefined.
  firstname: string = "Angular Learning";
  angularVersion = "Version 19";
  version: number = 19
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = "checkbox";
  selectedState: string = "";


}
