import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMolecule, TranslatePipe } from '@asor-studio/asor-core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
	selector: 'nx-quick-action-tile',
	standalone: true,
	imports: [CommonModule, TranslatePipe, LucideAngularModule],
	templateUrl: './quick-action-tile.molecule.html',
	styleUrl: './quick-action-tile.molecule.scss',
})
export class QuickActionTileMolecule extends BaseMolecule {
	public static override readonly className: string = 'QuickActionTileMolecule';

	@Input() icon: string = 'zap';
	@Input() label: string = '';
	@Input() isActive: boolean = false;
	@Output() toggle = new EventEmitter<boolean>();

	constructor() {
		super();
	}

	public onToggle(): void {
		this.isActive = !this.isActive;
		this.toggle.emit(this.isActive);
	}
}
