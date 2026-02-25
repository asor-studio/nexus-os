import { Component, ChangeDetectorRef, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMolecule, TranslatePipe } from '@asor-studio/asor-core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'nx-form-field',
	standalone: true,
	imports: [CommonModule, TranslatePipe, FormsModule],
	templateUrl: './form-field.molecule.html',
	styleUrl: './form-field.molecule.scss',
})
export class FormFieldMolecule extends BaseMolecule {
	public static override readonly className: string = 'FormFieldMolecule';

	@Input() label: string = '';
	@Input() type: string = 'text';
	@Input() placeholder: string = '';
	@Input() value: string = '';
	@Input() error: string = '';
	@Input() id: string = 'form-field-' + Math.random().toString(36).substr(2, 9);

	@Output() valueChange = new EventEmitter<string>();

	public isFocused: boolean = false;

	constructor() {
		super();
	}

	public onFocus(): void {
		this.isFocused = true;
	}

	public onBlur(): void {
		this.isFocused = false;
	}

	public onInput(event: Event): void {
		const input = event.target as HTMLInputElement;
		this.value = input.value;
		this.valueChange.emit(this.value);
	}
}
