import { Component } from '@angular/core';

@Component({
    selector: 'my-app4',
    templateUrl: 'app/eventBinding/eventBinding.component.html'
})

export class EventComponent {
    onClick(): void {
        console.log("Button Clicked!!");
    }
}