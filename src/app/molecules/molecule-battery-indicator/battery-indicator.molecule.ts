import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseStorageMolecule } from '@asor-studio/asor-core';
import { INexusSystemStatus } from '../../config/interfaces/nexus-state.interfaces';
import { LucideAngularModule } from 'lucide-angular';

@Component({
	selector: 'nx-battery-indicator',
	standalone: true,
	imports: [CommonModule, LucideAngularModule],
	templateUrl: './battery-indicator.molecule.html',
	styleUrl: './battery-indicator.molecule.scss',
})
export class BatteryIndicatorMolecule extends BaseStorageMolecule<INexusSystemStatus> {
	public static override readonly className: string = 'BatteryIndicatorMolecule';

	public get batteryIcon(): string {
		const { isCharging, battery } = this.props;
		if (isCharging) return 'battery-charging';
		if (battery > 90) return 'battery-full';
		if (battery > 50) return 'battery-medium';
		if (battery > 20) return 'battery-low';
		return 'battery';
	}

	public get batteryColor(): string {
		const { isCharging, battery } = this.props;
		if (isCharging) return '#10b981'; // Green
		if (battery < 20) return '#ef4444'; // Red
		if (battery < 40) return '#f59e0b'; // Amber
		return '#ffffff';
	}

	constructor() {
		super();
	}
}
