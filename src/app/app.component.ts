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
  
	constructor(private toastr: ToastrService) {
		this.factory = new Factory();
		this.damagers = this.factory.getDamagers();
		this.generatedHardObject = this.factory.getRandomHardObject();
	}
	
	damageReceived(damage: number) {
		this.generatedHardObject.receiveDamage(damage);
	}
	
	handleNewHint(message: string): void {
		this.toastr.success(message);
	}
  
	ngOnInit() {
	  $(function() {
		  //alert("jQuery properly initialized!");
	  });
	}
}
