import { Component, Input } from '@angular/core';
import { BaseComponent } from '@asor-studio/asor-core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'nx-avatar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.scss'],
})
export class NxAvatarComponent extends BaseComponent {
	public static override readonly className: string = 'NxAvatarComponent';

	@Input() src?: string;
	@Input() altText: string = 'User avatar';
	@Input() size: 'sm' | 'md' | 'lg' = 'md';
	@Input() status: 'online' | 'offline' | 'dnd' | 'away' | 'none' = 'none';

	constructor() {
		super();
	}
}
