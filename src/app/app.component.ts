import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DamagerAbstract } from './damager.abstract.model';
import { HardObjectAbstract } from './hard.object.abstract.model';
import { Factory } from './factory.model';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'open-mistery-object';
	factory: Factory;
	damagers: DamagerAbstract[];
	generatedHardObject: HardObjectAbstract;
	hint: string = null;
  
	constructor(private toastr: ToastrService) {
		this.factory = new Factory();
		this.damagers = this.factory.getDamagers();
		this.generatedHardObject = this.factory.getRandomHardObject();
	}
	
	damageReceived(damage: number) {
		this.generatedHardObject.receiveDamage(damage);
		
		this.hint = this.generatedHardObject.getHint();
		if (this.hint != null && this.hint != undefined && this.hint.length > 0) {
			this.toastr.info(this.hint);
		}
	}
  
	ngOnInit() {
	  $(function() {
		  //alert("jQuery properly initialized!");
	  });
	}
}
