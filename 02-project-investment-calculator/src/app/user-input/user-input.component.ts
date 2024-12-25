import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = 0
  annualInvestment = 0
  expectedReturn = 0
  duration = 0

  onSubmit() {
    console.log(this.initialInvestment, this.annualInvestment, this.expectedReturn, this.duration)
    let data = this.calculateInvestmentResults(this.initialInvestment, this.annualInvestment, this.duration, this.expectedReturn)
    console.log(data)
  }

  calculateInvestmentResults(initialInvestment:number, annualInvestment:number, duration:number, expectedReturn:number ) {
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  
    return annualData;
  }
}
