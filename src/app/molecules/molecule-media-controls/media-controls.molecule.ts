import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMolecule } from '@asor-studio/asor-core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
	selector: 'nx-media-controls',
	standalone: true,
	imports: [CommonModule, LucideAngularModule],
	templateUrl: './media-controls.molecule.html',
	styleUrl: './media-controls.molecule.scss',
})
export class MediaControlsMolecule extends BaseMolecule {
	public static override readonly className: string = 'MediaControlsMolecule';

	@Input() isPlaying: boolean = false;
	@Output() play = new EventEmitter<void>();
	@Output() pause = new EventEmitter<void>();
	@Output() next = new EventEmitter<void>();
	@Output() previous = new EventEmitter<void>();

	constructor() {
		super();
	}

	public togglePlay(): void {
		this.isPlaying = !this.isPlaying;
		if (this.isPlaying) {
			this.play.emit();
		} else {
			this.pause.emit();
		}
	}
}
