import { DamagerAbstract } from './damager.abstract.model';

export class Hammer extends DamagerAbstract {
	public name: string = "Hammer away";
	public icon: string = "fas fa-hammer";
	public deteriorationPercentageRate: number = 20;
    public damageGiven: number = 1000;
}