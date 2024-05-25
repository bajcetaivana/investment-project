import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestementResultsComponent } from "./investement-results/investement-results.component";

@Component({
	selector: "app-root",
	standalone: true,
	templateUrl: "./app.component.html",
	imports: [HeaderComponent, UserInputComponent, InvestementResultsComponent],
})
export class AppComponent {
	// resultsData = signal<
	// 	  {
	// 			year: number;
	// 			interest: number;
	// 			valueEndOfYear: number;
	// 			annualInvestment: number;
	// 			totalInterest: number;
	// 			totalAmountInvested: number;
	// 	  }[] | undefined
	// >(undefined);
	// resultsData?: {
	// 	year: number;
	// 	interest: number;
	// 	valueEndOfYear: number;
	// 	annualInvestment: number;
	// 	totalInterest: number;
	// 	totalAmountInvested: number;
	// }[];


}
