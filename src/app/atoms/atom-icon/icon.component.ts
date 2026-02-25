import { Component, Input } from '@angular/core';
import { BaseComponent } from '@asor-studio/asor-core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import * as icons from 'lucide-angular';

@Component({
	selector: 'nx-icon',
	standalone: true,
	imports: [CommonModule, LucideAngularModule],
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.scss'],
})
export class NxIconComponent extends BaseComponent {
	public static override readonly className: string = 'NxIconComponent';

	/** Name of the Lucide Icon */
	@Input() name: string = 'Circle';

	/** Size of the icon */
	@Input() size: number = 24;

	/** Color of the icon */
	@Input() color: string = 'currentColor';

	constructor() {
		super();
	}
}
