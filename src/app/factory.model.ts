import { DamagerAbstract } from './damager.abstract.model';
import { KissItBetter } from './kiss.it.better.model';
import { Squeeze } from './squeeze.model';
import { Slap } from './slap.model';
import { KarateKick } from './karate.kick.model';
import { Hammer } from './hammer.model';
import { Bomb } from './bomb.model';
import { HardObjectState } from './enums.model';
import { HardObjectAbstract } from './hard.object.abstract.model';
import { HardFortuneCookie } from './hard.fortune.cookie.model';
import { MetalCage } from './metal.cage.model';

export class Factory {
	public getDamagers(): DamagerAbstract[] {
		return [ new KissItBetter(), new Squeeze(), new Slap(), new KarateKick(), new Hammer(), new Bomb() ];
	}
	
	public getRandomHardObject(): HardObjectAbstract {
		return new MetalCage();
	}
}