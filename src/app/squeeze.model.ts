import { DamagerAbstract } from './damager.abstract.model';

export class Squeeze extends DamagerAbstract {
	public name: string = "Squeeze";
	public icon: string = "fas fa-hand-lizard";
	public deteriorationPercentageRate: number = 1;
    public damageGiven: number = 5;
}