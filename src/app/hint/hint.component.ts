import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HardObjectAbstract } from '../hard.object.abstract.model';

@Component({
  selector: 'hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent {
	private hint: string = "Welcome to our guessing game!";
	@Input() hardObject;
	@Output() hintAsked: EventEmitter<string>;
	
	constructor() {
		this.hintAsked = new EventEmitter();
	}
	
	getNewHint(): void {
		debugger;
		this.hint = this.hardObject.getHint();
		this.hintAsked.emit(this.hint);
	}
}