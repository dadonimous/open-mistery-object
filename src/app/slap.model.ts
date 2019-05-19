import { DamagerAbstract } from './damager.abstract.model';

export class Slap extends DamagerAbstract {
	public name: string = "Bitch slap";
	public icon: string = "fas fa-hand-paper";
	public deteriorationPercentageRate: number = 2;
    public damageGiven: number = 50;
}