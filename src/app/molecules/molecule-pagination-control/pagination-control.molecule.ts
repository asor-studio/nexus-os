import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMolecule } from '@asor-studio/asor-core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
	selector: 'nx-pagination-control',
	standalone: true,
	imports: [CommonModule, LucideAngularModule],
	templateUrl: './pagination-control.molecule.html',
	styleUrl: './pagination-control.molecule.scss',
})
export class PaginationControlMolecule extends BaseMolecule {
	public static override readonly className: string = 'PaginationControlMolecule';

	@Input() currentPage: number = 1;
	@Input() totalPages: number = 1;
	@Output() pageChange = new EventEmitter<number>();

	constructor() {
		super();
	}

	public onPrev(): void {
		if (this.currentPage > 1) {
			this.pageChange.emit(this.currentPage - 1);
		}
	}

	public onNext(): void {
		if (this.currentPage < this.totalPages) {
			this.pageChange.emit(this.currentPage + 1);
		}
	}
}
