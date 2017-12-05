import { Component } from '@angular/core';


@Component({
    selector: 'my-app3',
    templateUrl: 'app/styleExample/styleExample.component.html'
})
export class StyleComponent {
    isBold: boolean = true;
    fontSize: number = 40;
    isItalic: boolean = false;
    addStyles()  {
        let styles = {
            'font-weight': this.isBold ? 'bold' : 'normal',
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-size.px': this.fontSize
        };

        return styles;
    }


}