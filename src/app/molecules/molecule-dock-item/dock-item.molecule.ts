import { Component, Input, Output, EventEmitter, ChangeDetectorRef, inject } from '@angular/core';
import { BaseMolecule, TranslatePipe } from '@asor-studio/asor-core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
	selector: 'nx-dock-item',
	standalone: true,
	imports: [CommonModule, TranslatePipe, LucideAngularModule],
	templateUrl: './dock-item.molecule.html',
	styleUrls: ['./dock-item.molecule.scss'],
})
export class NxDockItemMolecule extends BaseMolecule {
	public static override readonly className: string = 'NxDockItemMolecule';

	@Input() appId: string = '';
	@Input() iconName: string = 'AppWindow';
	@Input() label: string = '';
	@Input() color: string = 'white';
	@Input() isOpen: boolean = false;
	@Input() isFocused: boolean = false;

	@Output() appLaunch = new EventEmitter<string>();

	public showTooltip: boolean = false;
	private cdr = inject(ChangeDetectorRef);

	constructor() {
		super();
	}

	public onClick(): void {
		if (this.appId) {
			this.appLaunch.emit(this.appId);
		}
	}

	public onMouseEnter(): void {
		this.showTooltip = true;
		this.cdr.markForCheck();
	}

	public onMouseLeave(): void {
		this.showTooltip = false;
		this.cdr.markForCheck();
	}
}
