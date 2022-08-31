import { Injectable } from '@angular/core';

const allTypes = [
    "element",
    "event",
    "first-input",
    "largest-contentful-paint",
    "layout-shift",
    "longtask",
    "mark",
    "measure",
    "navigation",
    "paint",
    "resource"
]

@Injectable({providedIn: 'root'})
export class PerformanceService {
  performanceObserver: PerformanceObserver;
  className: string;

  observerCallback = list => {
          list.getEntries().forEach(entry => {
            if (entry.entryType === "measure") {
              console.log(`
                ${this.className} - %c${entry.entryType}: %c${entry.name}, %cStart: ${entry.startTime}, Duration: ${entry.duration}`,
                'color: green', 'color: purple', 'color: blue'
              );
            } else {
              console.log(`
                ${this.className} - %c${entry.entryType}: %c${entry.name}`,
                'color: green', 'color: purple'
              );
            }

          });
        };

  startPerformanceObserver(className: string, entryTypes?: string[]) {
    console.log(`${className} PerformanceObserver Started`);
    this.className = className;
    if(PerformanceObserver) {
        this.performanceObserver = new PerformanceObserver(this.observerCallback);
        const types = entryTypes ?? allTypes;
        this.performanceObserver.observe({ entryTypes: types });
    }
  }

  stopPerformanceObserver() {
    console.log(`${this.className} PerformanceObserver Started`);
    this.performanceObserver.disconnect();
  }
}
