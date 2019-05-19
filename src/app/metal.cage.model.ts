import { HardObjectState } from './enums.model';
import { HardObjectAbstract } from './hard.object.abstract.model';

export class MetalCage extends HardObjectAbstract {
	public name: string = "Metal cage";
	public totalHealth: number = 10000;
    public strength: number = 0;
	public hintList: string[] = [
		"It can be pretty big.",
		"It very sturdy.",
		"It sometimes contains people, sometimes animals.",
		"It's made of strong metal.",
		"It has bars.",
		"It's used in prisons and sex dungeons ;-). - Did I really say that?!"
	];
}