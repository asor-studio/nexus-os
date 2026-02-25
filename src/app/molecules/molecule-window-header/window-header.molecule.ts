import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMolecule, TranslatePipe } from '@asor-studio/asor-core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
	selector: 'nx-window-header',
	standalone: true,
	imports: [CommonModule, TranslatePipe, LucideAngularModule],
	templateUrl: './window-header.molecule.html',
	styleUrl: './window-header.molecule.scss',
})
export class NxWindowHeaderMolecule extends BaseMolecule {
	public static override readonly className: string = 'NxWindowHeaderMolecule';

	@Input() title: string = 'Application';
	@Output() close = new EventEmitter<void>();
	@Output() minimize = new EventEmitter<void>();
	@Output() maximize = new EventEmitter<void>();
}
