import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMolecule, TranslatePipe } from '@asor-studio/asor-core';

@Component({
	selector: 'nx-progress-bar',
	standalone: true,
	imports: [CommonModule, TranslatePipe],
	templateUrl: './progress-bar.molecule.html',
	styleUrl: './progress-bar.molecule.scss',
})
export class ProgressBarMolecule extends BaseMolecule {
	public static override readonly className: string = 'ProgressBarMolecule';

	@Input() label: string = '';
	@Input() progress: number = 0; // 0 to 100
	@Input() status: string = '';

	constructor() {
		super();
	}
}
