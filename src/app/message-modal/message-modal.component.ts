import { Component, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HardObjectState } from '../enums.model';

@Component({
  selector: 'message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent {
	@ViewChild('content') content: ElementRef;
	@Output() modalClosed: EventEmitter<number>;
	
	private _objectState: number;
	get objectState(): number {
		return this._objectState;
	}
	@Input() set objectState(newObjectState: number) {
		this._objectState = newObjectState;
		
		if (this._objectState == HardObjectState.Opened ||
			this._objectState == HardObjectState.Ruined) {
			setTimeout(() => this.openPopup());
		}
	};
	
	constructor(private modalService: NgbModal) {
		this.modalClosed = new EventEmitter();
	}
	
	openPopup() {
		this.modalService.open(this.content, {}).result.then(
			(reason) => { this.modalClosed.emit(this.objectState); },
			(reason) => { this.modalClosed.emit(this.objectState); }
		);
	}
}