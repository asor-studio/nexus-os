import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMolecule, TranslatePipe } from '@asor-studio/asor-core';

export interface ILogEntry {
	timestamp: string;
	level: 'INFO' | 'WARN' | 'ERR';
	message: string;
}

@Component({
	selector: 'nx-system-log-line',
	standalone: true,
	imports: [CommonModule, TranslatePipe],
	templateUrl: './system-log-line.molecule.html',
	styleUrl: './system-log-line.molecule.scss',
})
export class SystemLogLineMolecule extends BaseMolecule {
	public static override readonly className: string = 'SystemLogLineMolecule';

	@Input({ required: true }) entry!: ILogEntry;
}
