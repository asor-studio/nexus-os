import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMolecule } from '@asor-studio/asor-core';

@Component({
	selector: 'nx-color-picker-swatch',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './color-picker-swatch.molecule.html',
	styleUrl: './color-picker-swatch.molecule.scss',
})
export class ColorPickerSwatchMolecule extends BaseMolecule {
	public static override readonly className: string = 'ColorPickerSwatchMolecule';

	@Input() color: string = '#38bdf8';
	@Input() isSelected: boolean = false;
	@Output() colorSelect = new EventEmitter<string>();

	constructor() {
		super();
	}

	public onSelect(): void {
		this.colorSelect.emit(this.color);
	}
}
