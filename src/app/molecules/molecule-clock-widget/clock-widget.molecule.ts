import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMolecule, IBaseMolecule } from '@asor-studio/asor-core';

@Component({
	selector: 'nx-clock-widget',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './clock-widget.molecule.html',
	styleUrl: './clock-widget.molecule.scss',
})
export class ClockWidgetMolecule extends BaseMolecule implements IBaseMolecule {
	public static override readonly className: string = 'ClockWidgetMolecule';

	public currentTime = new Date();
	private _intervalId?: any;

	override baseMoleculeViewWillEnter(): void {
		this._startClock();
	}

	override baseMoleculeViewWillLeave(): void {
		if (this._intervalId) clearInterval(this._intervalId);
	}

	private _startClock(): void {
		this._intervalId = setInterval(() => {
			this.currentTime = new Date();
		}, 1000);
	}
}
