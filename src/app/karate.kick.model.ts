import { DamagerAbstract } from './damager.abstract.model';

export class KarateKick extends DamagerAbstract {
	public name: string = "Karate kick";
	public icon: string = "fas fa-shoe-prints";
	public deteriorationPercentageRate: number = 15;
    public damageGiven: number = 800;
}