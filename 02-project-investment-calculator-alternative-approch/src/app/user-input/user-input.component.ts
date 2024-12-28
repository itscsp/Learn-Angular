import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
calculate = output<InvestmentInput>()

  initialInvestment = signal(0)
  annualInvestment = signal(0)
  expectedReturn = signal(5)
  duration = signal(10)

  onSubmit() {
    console.log("Submitting")
    const data = {initialInvestment: +this.initialInvestment(), annualInvestment: +this.annualInvestment(), expectedReturn:+this.expectedReturn(), duration:+this.duration()}
    this.calculate.emit(data)
  }

  
}
