import { Injectable } from '@angular/core';

import 'prismjs';
// import 'prismjs/plugins/toolbar/prism-toolbar';
// import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
// import 'prismjs/components/prism-css';
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-typescript';
// import 'prismjs/components/prism-scss';

declare var Prism: any;

@Injectable({providedIn: 'root'})
export class HighlightService {
    constructor() { }

    highlightAll() {
        Prism.highlightAll();
    }
}
