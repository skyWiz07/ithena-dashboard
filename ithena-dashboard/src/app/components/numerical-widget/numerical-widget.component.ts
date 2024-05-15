import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-numerical-widget',
  templateUrl: './numerical-widget.component.html',
  styleUrls: ['./numerical-widget.component.scss']
})
export class NumericalWidgetComponent {
  @Input() prefix: string | null = null;
  @Input() suffix: string | null = null;
value = '55,345';
calculated = '25%';
analysis = 'vs previous 30 days';
}
