import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseStorageMolecule } from '@asor-studio/asor-core';
import { LucideAngularModule } from 'lucide-angular';
import { INexusSystemStatus } from '../../config/interfaces/nexus-state.interfaces';

@Component({
	selector: 'nx-weather-widget',
	standalone: true,
	imports: [CommonModule, LucideAngularModule],
	templateUrl: './weather-widget.molecule.html',
	styleUrl: './weather-widget.molecule.scss',
})
export class WeatherWidgetMolecule extends BaseStorageMolecule<INexusSystemStatus> {
	public static override readonly className: string = 'WeatherWidgetMolecule';

	public get weatherIcon(): string {
		const condition = this.props.condition;
		switch (condition) {
			case 'sunny':
				return 'sun';
			case 'cloudy':
				return 'cloud-sun';
			case 'rainy':
				return 'cloud-rain';
			case 'stormy':
				return 'cloud-lightning';
			default:
				return 'sun';
		}
	}

	constructor() {
		super();
	}
}
