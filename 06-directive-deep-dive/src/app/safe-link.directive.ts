import { Directive, ElementRef, inject, input } from "@angular/core";
import { LogDirective } from "./log.directive";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host:{
        '(click)' : 'onConfirmLeavePage($event)'
    },
    hostDirectives: [LogDirective]
})

export class SafeLinkDirective{
    queryParam = input('mypp', {alias: 'appSafeLink'});
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

    constructor() {
        console.log('Safe Link Directive is  active')
    }

    onConfirmLeavePage(event: MouseEvent) {

        const wantToLeave = window.confirm('Do you want to leave the app?')

        if(wantToLeave) {
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address + '?from='+this.queryParam();
            return;
        }

        event.preventDefault();
    }

}