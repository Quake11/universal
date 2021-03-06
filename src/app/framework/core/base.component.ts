// angular
import { Component, OnDestroy } from '@angular/core';

// libs
import { Subject } from 'rxjs';

// app
import { BaseDocument } from '~/app/framework/ngrx';

@Component({
  template: ''
})
export class BaseComponent implements OnDestroy {
  protected ngUnsubscribe: Subject<void>;

  constructor() {
    this.ngUnsubscribe = new Subject<void>();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  trackByFn(index: any): any {
    return index;
  }

  trackByIdFn(index: any, item: BaseDocument): any {
    return item._id;
  }
}
