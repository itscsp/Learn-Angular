import { Directive, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host:{
        '(click)' : 'onConfirmLeavePage($event)'
    }
})

export class SafeLinkDirective{
    queryParam = input('mypp', {alias: 'appSafeLink'});

    constructor() {
        console.log('Safe Link Directive is  active')
    }

    onConfirmLeavePage(event: MouseEvent) {

        const wantToLeave = window.confirm('Do you want to leave the app?')

        if(wantToLeave) {
            const address = (event.target as HTMLAnchorElement).href;
            (event.target as HTMLAnchorElement).href = address + '?from='+this.queryParam();
            return;
        }

        event.preventDefault();
    }

}