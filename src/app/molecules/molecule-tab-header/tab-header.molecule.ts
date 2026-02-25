import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMolecule, TranslatePipe } from '@asor-studio/asor-core';

export interface INxTab {
	id: string;
	label: string;
	icon?: string;
}

@Component({
	selector: 'nx-tab-header',
	standalone: true,
	imports: [CommonModule, TranslatePipe],
	templateUrl: './tab-header.molecule.html',
	styleUrl: './tab-header.molecule.scss',
})
export class TabHeaderMolecule extends BaseMolecule {
	public static override readonly className: string = 'TabHeaderMolecule';

	@Input() tabs: INxTab[] = [];
	@Input() activeTabId: string = '';
	@Output() tabChange = new EventEmitter<string>();

	constructor() {
		super();
	}

	public onTabClick(tabId: string): void {
		this.tabChange.emit(tabId);
	}
}
