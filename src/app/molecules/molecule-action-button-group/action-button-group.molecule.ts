import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMolecule } from '@asor-studio/asor-core';

@Component({
	selector: 'nx-action-button-group',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './action-button-group.molecule.html',
	styleUrl: './action-button-group.molecule.scss',
})
export class ActionButtonGroupMolecule extends BaseMolecule {
	public static override readonly className: string = 'ActionButtonGroupMolecule';

	@Input() alignment: 'left' | 'center' | 'right' = 'right';
	@Input() gap: string = '12px';

	constructor() {
		super();
	}
}
