import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMolecule, TranslatePipe } from '@asor-studio/asor-core';
import { LucideAngularModule } from 'lucide-angular';
import { INexusNotification } from '../../config/interfaces/nexus-state.interfaces';

@Component({
	selector: 'nx-notification-toast',
	standalone: true,
	imports: [CommonModule, TranslatePipe, LucideAngularModule],
	templateUrl: './notification-toast.molecule.html',
	styleUrl: './notification-toast.molecule.scss',
})
export class NotificationToastMolecule extends BaseMolecule {
	public static override readonly className: string = 'NotificationToastMolecule';

	@Input() public notification?: INexusNotification;
	@Output() public close = new EventEmitter<string>();

	public getIconName(): string {
		switch (this.notification?.type) {
			case 'success':
				return 'check-circle';
			case 'warn':
				return 'alert-triangle';
			case 'error':
				return 'alert-circle';
			default:
				return 'info';
		}
	}

	public onClose(): void {
		if (this.notification) {
			this.close.emit(this.notification.id);
		}
	}
}
