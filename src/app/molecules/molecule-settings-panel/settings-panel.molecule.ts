import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseStorageMolecule, TranslatePipe } from '@asor-studio/asor-core';
import { SliderControlMolecule } from '../molecule-slider-control/slider-control.molecule';
import { ToggleSwitchMolecule } from '../molecule-toggle-switch/toggle-switch.molecule';
import { FormFieldMolecule } from '../molecule-form-field/form-field.molecule';
import { NxAvatarComponent } from '../../atoms/atom-avatar/avatar.component';
import { LucideAngularModule } from 'lucide-angular';
import { INexusGlobalProps } from '../../config/interfaces/nexus-state.interfaces';

@Component({
	selector: 'nx-settings-panel',
	standalone: true,
	imports: [
		CommonModule,
		TranslatePipe,
		SliderControlMolecule,
		ToggleSwitchMolecule,
		FormFieldMolecule,
		NxAvatarComponent,
		LucideAngularModule,
	],
	templateUrl: './settings-panel.molecule.html',
	styleUrl: './settings-panel.molecule.scss',
})
export class SettingsPanelMolecule extends BaseStorageMolecule<INexusGlobalProps> {
	public static override readonly className: string = 'SettingsPanelMolecule';

	public activeSection: string = 'section-system';

	constructor() {
		super();
	}

	public selectSection(sectionId: string): void {
		this.activeSection = sectionId;
	}

	override storageHandlerDataChanges(
		prev: INexusGlobalProps,
		curr: INexusGlobalProps
	): void { }

	override baseCompViewEnter(): void {
		super.baseCompViewEnter();
	}
	override baseCompViewLeave(): void {
		super.baseCompViewLeave();
	}
}
