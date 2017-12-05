import { Component } from '@angular/core';

@Component({
    selector: "my-app",
    templateUrl: "app/app.component.html"
})

export class AppComponent {             
    pageHeader: string = null;
    imagePath: string = "/Images/Logo.JPG";
    firstName: string = "Raqif";
    lastName: string = "Bassam";
    isDisabled: boolean = true;
    getFullName(): string {                              
        return this.firstName + " " +this.lastName;
    }
}
                                                                    