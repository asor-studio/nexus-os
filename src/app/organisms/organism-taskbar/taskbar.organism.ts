import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent, TranslatePipe } from '@asor-studio/asor-core';
import { ClockWidgetMolecule } from '../../molecules/molecule-clock-widget/clock-widget.molecule';
import { BatteryIndicatorMolecule } from '../../molecules/molecule-battery-indicator/battery-indicator.molecule';
import { WeatherWidgetMolecule } from '../../molecules/molecule-weather-widget/weather-widget.molecule';
import { UserProfileBadgeMolecule } from '../../molecules/molecule-user-profile-badge/user-profile-badge.molecule';
import { NxSearchBarMolecule } from '../../molecules/molecule-search-bar/search-bar.molecule';
import { LucideAngularModule } from 'lucide-angular';

@Component({
	selector: 'nx-taskbar',
	standalone: true,
	imports: [
		CommonModule,
		TranslatePipe,
		LucideAngularModule,
		ClockWidgetMolecule,
		BatteryIndicatorMolecule,
		WeatherWidgetMolecule,
		UserProfileBadgeMolecule,
		NxSearchBarMolecule,
	],
	templateUrl: './taskbar.organism.html',
	styleUrl: './taskbar.organism.scss',
})
export class TaskbarOrganism extends BaseComponent {
	public static override readonly className: string = 'TaskbarOrganism';

	@Input() activeAppTitle: string = '';
	@Output() menuToggle = new EventEmitter<void>();
	@Output() controlCenterToggle = new EventEmitter<void>();

	constructor() {
		super();
	}
}
