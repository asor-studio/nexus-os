import { Component, Input } from '@angular/core';
import { BaseComponent } from '@asor-studio/asor-core';

@Component({
	selector: 'nx-button',
	standalone: true,
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class NxButtonComponent extends BaseComponent {
	public static override readonly className: string = 'NxButtonComponent';

	@Input() variant: 'primary' | 'secondary' | 'ghost' = 'secondary';
	@Input() size: 'sm' | 'md' | 'lg' = 'md';
	@Input() disabled: boolean = false;

	constructor() {
		super();
	}
}
