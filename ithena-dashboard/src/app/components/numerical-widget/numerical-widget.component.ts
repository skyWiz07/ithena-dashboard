import { Component } from '@angular/core';

@Component({
  selector: 'app-numerical-widget',
  templateUrl: './numerical-widget.component.html',
  styleUrls: ['./numerical-widget.component.scss']
})
export class NumericalWidgetComponent {
value = '55,345';
calculated = '25%';
analysis = '25% growth';
}
