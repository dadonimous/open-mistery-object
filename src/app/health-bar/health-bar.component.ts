import { Component, Input } from '@angular/core';
import { HardObjectAbstract } from '../hard.object.abstract.model';

@Component({
  selector: 'health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.css']
})
export class HealthBarComponent {
	@Input() hardObject: HardObjectAbstract;
}
