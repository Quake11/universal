// angular
import { Component, Input } from '@angular/core';

// app
import { BaseComponent } from '~/app/framework/core';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent extends BaseComponent {
  @Input() isProcessing: boolean;
}
