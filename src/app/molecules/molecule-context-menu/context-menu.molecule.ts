import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMolecule, TranslatePipe } from '@asor-studio/asor-core';
import { LucideAngularModule } from 'lucide-angular';

export interface IContextMenuItem {
	id: string;
	label: string;
	icon?: string;
	divider?: boolean;
	disabled?: boolean;
}

@Component({
	selector: 'nx-context-menu',
	standalone: true,
	imports: [CommonModule, LucideAngularModule, TranslatePipe],
	templateUrl: './context-menu.molecule.html',
	styleUrl: './context-menu.molecule.scss',
})
export class ContextMenuMolecule extends BaseMolecule {
	public static override readonly className: string = 'ContextMenuMolecule';

	@Input() public items: IContextMenuItem[] = [];
	@Input() public x: number = 0;
	@Input() public y: number = 0;

	@Output() public itemClick = new EventEmitter<IContextMenuItem>();
	@Output() public close = new EventEmitter<void>();

	public onItemClick(item: IContextMenuItem): void {
		if (item.disabled || item.divider) return;
		this.itemClick.emit(item);
		this.close.emit();
	}
}
