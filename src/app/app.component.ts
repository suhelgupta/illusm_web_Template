import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view: any[] = [700, 400];
  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    }];

    

  // options
  tooltipDisabled = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showLabels: boolean = false;
  isDoughnut: boolean = true;
  legendPosition: string = "below";

  colorScheme = {
    domain: ['#0072bc', '#00d5a9', '#efefef', '#AAAAAA']
  };

  title = 'demoPage';
  constructor() {

    
  }
}
