import { Component, Input, inject, input } from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { InvestementService } from "../investement.service";

@Component({
	selector: "app-investement-results",
	standalone: true,
	imports: [CurrencyPipe],
	templateUrl: "./investement-results.component.html",
	styleUrl: "./investement-results.component.css",
})
export class InvestementResultsComponent {

	private investmentService = inject(InvestementService);

	get results() {
		return this.investmentService.resultsData;
	}
}

