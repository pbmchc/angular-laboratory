import { CdkPortal, DomPortalOutlet } from '@angular/cdk/portal';
import {
  DOCUMENT,
  AfterViewInit,
  ApplicationRef,
  Component,
  Injector,
  OnDestroy,
  ViewChild,
  inject
} from '@angular/core';

@Component({
  selector: 'ap-header-portal',
  templateUrl: './header-portal.component.html',
  imports: [CdkPortal]
})
export class HeaderPortalComponent implements AfterViewInit, OnDestroy {
  private document = inject<Document>(DOCUMENT);
  private applicationRef = inject(ApplicationRef);
  private injector = inject(Injector);

  @ViewChild(CdkPortal) private headerPortal: CdkPortal;
  private host: DomPortalOutlet;
  private readonly OUTLET_ELEMENT_ID: string = 'ap-header-outlet';

  ngAfterViewInit() {
    this.host = new DomPortalOutlet(
      this.document.getElementById(this.OUTLET_ELEMENT_ID),
      this.applicationRef,
      this.injector
    );
    this.host.attach(this.headerPortal);
  }

  ngOnDestroy() {
    this.host.detach();
  }
}
