import { AppDetailsService } from './services/app-details.service';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'natuelIntelligence';

  constructor(
    private renderer: Renderer2,
    private appDetailsService: AppDetailsService) {

  }

  ngOnInit() {
    this.appDetailsService.checkDevice();
    if (this.appDetailsService.getIsMobile()) {
      // set a class on the body
      this.renderer.addClass(document.body, 'mobile-mode');
    } else {
      this.renderer.addClass(document.body, 'desktop-mode');
    }
  }
}
