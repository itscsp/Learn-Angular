import { Component, signal } from '@angular/core';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {


  initialInvestment = signal(0)
  annualInvestment = signal(0)
  expectedReturn = signal(5)
  duration = signal(10)

  constructor(private investmentService: InvestmentService){}

  onSubmit() {
    this.investmentService.calculateInvestmentResults( {initialInvestment: +this.initialInvestment(), annualInvestment: +this.annualInvestment(), expectedReturn:+this.expectedReturn(), duration:+this.duration()});
    // const data = {initialInvestment: +this.initialInvestment(), annualInvestment: +this.annualInvestment(), expectedReturn:+this.expectedReturn(), duration:+this.duration()}
  }

  
}
