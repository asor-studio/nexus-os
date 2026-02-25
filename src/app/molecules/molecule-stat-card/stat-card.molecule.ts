import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMolecule, TranslatePipe } from '@asor-studio/asor-core';

@Component({
	selector: 'nx-stat-card',
	standalone: true,
	imports: [CommonModule, TranslatePipe],
	templateUrl: './stat-card.molecule.html',
	styleUrl: './stat-card.molecule.scss',
})
export class NxStatCardMolecule extends BaseMolecule {
	public static override readonly className: string = 'NxStatCardMolecule';

	@Input() label: string = 'STAT';
	@Input() value: string | number = '0';
	@Input() unit: string = '';
	@Input() progress: number = 0; // 0 to 100
}
