import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseMolecule, TranslatePipe } from '@asor-studio/asor-core';
import { INexusSettingsProps } from '../../config/interfaces/nexus-state.interfaces';

@Component({
	selector: 'nx-toggle-switch',
	standalone: true,
	imports: [CommonModule, FormsModule, TranslatePipe],
	templateUrl: './toggle-switch.molecule.html',
	styleUrl: './toggle-switch.molecule.scss',
})
export class ToggleSwitchMolecule extends BaseMolecule {
	public static override readonly className: string = 'ToggleSwitchMolecule';

	@Input() public props: INexusSettingsProps | any = {};
	@Input() public label: string = '';
	@Input() public propertyPath: keyof INexusSettingsProps = 'bluetoothEnabled';

	public get checked(): boolean {
		return !!this.props[this.propertyPath];
	}

	public set checked(val: boolean) {
		(this.props as any)[this.propertyPath] = val;
	}
}
