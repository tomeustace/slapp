import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Measuring Web Application Performance - @tomeustace';

  ngOnInit() {
    performance.mark('start');
    for (let i = 0; i < 100; i++) {
      // console.log("i: ", i);
    }
    performance.mark('stop');
    performance.measure('my-measure', 'start', 'stop');
  }
}
