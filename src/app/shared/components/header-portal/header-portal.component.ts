import { Component, ViewChild, AfterViewInit, OnDestroy, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import {CdkPortal, DomPortalOutlet} from '@angular/cdk/portal';

@Component({
    selector: 'ap-header-portal',
    templateUrl: './header-portal.component.html'
})
export class HeaderPortalComponent implements AfterViewInit, OnDestroy {
    @ViewChild(CdkPortal, {static: false}) private headerPortal: CdkPortal;
    private host: DomPortalOutlet;
    private readonly OUTLET_ELEMENT_ID: string = 'ap-header-outlet';

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private applicationRef: ApplicationRef,
                private injector: Injector) {}

    ngAfterViewInit() {
        this.host = new DomPortalOutlet(
            document.getElementById(this.OUTLET_ELEMENT_ID),
            this.componentFactoryResolver,
            this.applicationRef,
            this.injector
        ),
        this.host.attach(this.headerPortal);
    }

    ngOnDestroy() {
        this.host.detach();
    }
}
