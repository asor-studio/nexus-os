import { Component, Input } from '@angular/core';
import { BaseComponent } from '@asor-studio/asor-core';

@Component({
	selector: 'nx-typography',
	standalone: true,
	templateUrl: './typography.component.html',
	styleUrls: ['./typography.component.scss'],
})
export class NxTypographyComponent extends BaseComponent {
	public static override readonly className: string = 'NxTypographyComponent';

	/** Weight of the font */
	@Input() weight: 'light' | 'regular' | 'medium' | 'semibold' = 'regular';

	/** Color of the text */
	@Input() color: 'white' | 'accent-primary' | 'accent-secondary' | 'error' | 'warning' = 'white';

	/** Apply letter spacing and uppercase */
	@Input() tracking: boolean = false;

	constructor() {
		super();
	}
}
