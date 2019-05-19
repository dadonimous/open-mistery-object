import { HardObjectState } from './enums.model';
import { HardObjectAbstract } from './hard.object.abstract.model';

export class HardFortuneCookie extends HardObjectAbstract {
	public name: string = "Hard fortune cookie";
	public totalHealth: number = 9;
    public strength: number = 0;
	public hintList: string[] = [
		"It's quite small.",
		"It's not very sturdy.",
		"It has a round but irregular shape.",
		"It was originally part of Japanese temple tradition.",
		"It's edible.",
		"It contains a message.",
		"You get them in Chinese restaurants."
	];
}