import { DamagerAbstract } from './damager.abstract.model';

export class KissItBetter extends DamagerAbstract {
	public name: string = "Kiss it better";
	public icon: string = "fas fa-kiss-beam";
	public deteriorationPercentageRate: number = 0;
    public damageGiven: number = 1;
}