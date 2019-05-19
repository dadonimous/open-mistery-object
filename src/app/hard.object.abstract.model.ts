import { HardObjectState } from './enums.model';

export abstract class HardObjectAbstract {
	private _hintIndex: number = 0;
	
	public abstract get name(): string;
	
	/**
	* Current health
	*/
	private _currentHealth: number = Number.MAX_VALUE;
	get currentHealth(): number {
		if (this._currentHealth == Number.MAX_VALUE) {
			this._currentHealth = this.totalHealth;
		}
		return this._currentHealth;
	}
	set currentHealth(newCurrentHealth: number) {
		this._currentHealth = newCurrentHealth;
	}
	
	/**
	* Get current health in percentage
	*/
	public get currentHealthPercentage():number {
		return this.currentHealth * 100 / this.totalHealth;
	}
	
	/**
	* State of the object
	*/
	private _objectState:HardObjectState = HardObjectState.New;
    get objectState():HardObjectState {
        return this._objectState;
    }
    set objectState(newObjectState:HardObjectState) {
        this._objectState = newObjectState;
    }
	
	/**
	Object discovery
	*/
	get objectDiscovery(): string {
		return this.objectState == HardObjectState.Opened ? this.name : "Unidentified";
	}
	
	/**
	* Total health to be set in derived class
	*/
	public abstract get totalHealth(): number;
	
	/**
	* Strength to be set in derived class
	*/
	public abstract get strength(): number;
	
	/**
	* Hints
	*/
	public abstract get hintList(): string[];
	
	/**
	Gets status message
	*/
	public getStatusMessage(): string {
		if (this._objectState == HardObjectState.New)
            return "Object is still intact!";
		else if (this._objectState == HardObjectState.Damaged)
			return "Object got damaged, current health: " + this.currentHealthPercentage.toString() + "%!";
		else if (this._objectState == HardObjectState.Opened)
			return "Congratulations, you opened the object!";
		else if (this._objectState == HardObjectState.Ruined)
			return "Unfortunatelly, the object received too much damage and is completely ruined!";
		
		return "";
	}
	
	/**
	Gets a hint
	*/
	public getHint(): string {
		let hint: string = "";
		if (this.hintList != null && this.hintList.length > 0 && this.hintList.length > this._hintIndex)
		{
			hint = "Here's a hint: " + this.hintList[this._hintIndex];			
			this._hintIndex = this._hintIndex + 1;
		}
		
		return hint;
	}
	
	/**
	Receives damage
	*/
	public receiveDamage(damage: number): void {
		if (this.currentHealthPercentage > 0)
		{
			let newHealth = this.currentHealth - damage * (100 - this.strength) / 100;
			if (newHealth == this.totalHealth)
			{
				this._objectState = HardObjectState.New;
			}
			else if (newHealth < this.totalHealth && newHealth > 0)
			{
				this._objectState = HardObjectState.Damaged;
			}
			else if (newHealth == 0)
			{
				this._objectState = HardObjectState.Opened;
			}
			else if (newHealth < 0)
			{
				this.objectState = HardObjectState.Ruined;
			}

			this.currentHealth = Math.max(0, newHealth);
		}
	}
}