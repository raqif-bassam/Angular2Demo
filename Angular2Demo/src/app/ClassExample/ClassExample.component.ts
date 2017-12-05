import { Component } from '@angular/core';

@Component({     
    selector: 'my-app2',
    templateUrl: 'app/ClassExample/ClassExample.html'
})                                                                  
export class ClassComponent {
    classesToApply: string = 'italicsClass boldClass';
    applyBoldClass: boolean = false; 
    applyItalicsClass: boolean = true;

    
    addClasses() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        };

        return classes;
    }
}
