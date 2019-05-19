import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DamagerAbstract } from '../damager.abstract.model';

@Component({
  selector: 'damager',
  templateUrl: './damager.component.html',
  styleUrls: ['./damager.component.css']
})
export class DamagerComponent {
	@Input() damager: DamagerAbstract;
	@Output() damageDone: EventEmitter<number>;
	
	constructor() {
		this.damageDone = new EventEmitter();
	}
	
	damagerClick(): void {
		this.damageDone.emit(this.damager.performDamage());
	}
}