import { Component, computed, inject, input} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  // standalone: true,
  // imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);;

  // get results() {
  //   return this.investmentService.resultData;
  // }

  results = computed(() => this.investmentService.resultData());
}