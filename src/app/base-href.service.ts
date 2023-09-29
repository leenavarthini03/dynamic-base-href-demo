import { Component } from '@angular/core';
import { BaseHrefService } from './base-href.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private baseHrefService: BaseHrefService) {
    const isProduction = (window as any).appEnvironment.production;
    if (isProduction) {
      this.baseHrefService.setBaseHref('/production-path/');
    } else {
      this.baseHrefService.setBaseHref('/development-path/');
    }
  }
}
