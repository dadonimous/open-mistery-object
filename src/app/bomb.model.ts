import { DamagerAbstract } from './damager.abstract.model';

export class Bomb extends DamagerAbstract {
	public name: string = "Bomb it";
	public icon: string = "fas fa-bomb";
	public deteriorationPercentageRate: number = 100;
    public damageGiven: number = 100000;
}