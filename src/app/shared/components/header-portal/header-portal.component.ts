import { CdkPortal, DomPortalOutlet } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Inject,
  Injector,
  OnDestroy,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'ap-header-portal',
  templateUrl: './header-portal.component.html'
})
export class HeaderPortalComponent implements AfterViewInit, OnDestroy {
  @ViewChild(CdkPortal) private headerPortal: CdkPortal;
  private host: DomPortalOutlet;
  private readonly OUTLET_ELEMENT_ID: string = 'ap-header-outlet';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) {}

  ngAfterViewInit() {
    this.host = new DomPortalOutlet(
      this.document.getElementById(this.OUTLET_ELEMENT_ID),
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
    );
    this.host.attach(this.headerPortal);
  }

  ngOnDestroy() {
    this.host.detach();
  }
}
