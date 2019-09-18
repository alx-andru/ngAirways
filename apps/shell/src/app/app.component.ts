import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-airways-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell';
  config = { flights: { 
    loaded: false, 
    path: 'http://localhost:4230/main.js', 
    element: 'airways-flights'
  }};
  ngOnInit() {
    this.load('flights');
  }
  load(name: string) {
    const configItem = this.config[name];
    if (configItem.loaded) {
      return;
    }
    const content = document.getElementById('content');
    const script = document.createElement('script');
    script.src = configItem.path;
    content.appendChild(script);
    const element: HTMLElement = document.createElement(configItem.element);
    content.appendChild(element);
  }
}
