import { Component, OnInit } from '@angular/core';
import { PlatformService } from 'src/services/platform.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'iec-front';
  isHttps = false;

  constructor(private platformService: PlatformService) {

  }
  ngOnInit() {
    this.isHttps = this.platformService.isBrowser && window?.location?.protocol === 'https:';
  }
}
