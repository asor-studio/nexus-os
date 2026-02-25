import { Component, Input, Output, EventEmitter, ChangeDetectorRef, inject } from '@angular/core';
import { BaseMolecule, TranslatePipe } from '@asor-studio/asor-core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
	selector: 'nx-search-bar',
	standalone: true,
	imports: [CommonModule, TranslatePipe, LucideAngularModule],
	templateUrl: './search-bar.molecule.html',
	styleUrls: ['./search-bar.molecule.scss'],
})
export class NxSearchBarMolecule extends BaseMolecule {
	public static override readonly className: string = 'NxSearchBarMolecule';

	@Input() placeholder: string = 'COMMON.SEARCH';
	@Output() search = new EventEmitter<string>();

	public isFocused: boolean = false;
	private cdr = inject(ChangeDetectorRef);

	constructor() {
		super();
	}

	public onFocus(): void {
		this.isFocused = true;
		this.cdr.markForCheck();
	}

	public onBlur(): void {
		this.isFocused = false;
		this.cdr.markForCheck();
	}

	public onInput(event: Event): void {
		const input = event.target as HTMLInputElement;
		this.search.emit(input.value);
	}
}
