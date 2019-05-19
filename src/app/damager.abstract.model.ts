export abstract class DamagerAbstract {
	public deteriorationPercentage: number = 0;
	public abstract deteriorationPercentageRate: number;
	public abstract damageGiven: number;
	public abstract get name(): string;
	public abstract get icon(): string;
	
	public performDamage(): number {
		if (this.deteriorationPercentage >= 100)
			return 0;
		
		this.deteriorationPercentage = Math.min(100, this.deteriorationPercentage + this.deteriorationPercentageRate);
		
		return this.damageGiven;
	}
}