import { Injectable, inject } from '@angular/core';
import { StateService } from '@asor-studio/asor-core';
import { Observable, interval } from 'rxjs';
import { INexusNotification } from '../config/interfaces/nexus-state.interfaces';

@Injectable({
	providedIn: 'root',
})
export class SystemNotificationService {
	public static readonly className: string = 'SystemNotificationService';

	private _state = inject(StateService);

	/**
	 * Observable for notifications changes.
	 */
	public notifications$: Observable<INexusNotification[]> = new Observable((subscriber) => {
		this._state.registry<{ list: INexusNotification[] }>(
			'SystemNotificationServiceWatcher',
			{ list: 'nexus-system-status.notifications' },
			(props) => subscriber.next(props.list)
		);
	});

	public get notifications(): INexusNotification[] {
		return this._state.readDataSet('nexus-system-status.notifications') || [];
	}

	constructor() {
		this._startRandomNotifications();
	}

	public push(notification: Partial<INexusNotification>): void {
		const newNotif: INexusNotification = {
			title: 'System Notification',
			read: false,
			...notification,
			id: Math.random().toString(36).substring(2, 9),
			timestamp: new Date(),
		} as INexusNotification;

		const currentList = this.notifications;
		this._state.updateDataSet('nexus-system-status.notifications', [newNotif, ...currentList]);
		this._state.triggerChange('nexus-system-status.notifications');
	}

	public remove(id: string): void {
		const newList = this.notifications.filter((n) => n.id !== id);
		this._state.updateDataSet('nexus-system-status.notifications', newList);
		this._state.triggerChange('nexus-system-status.notifications');
	}

	private _startRandomNotifications(): void {
		const messages = [
			{
				type: 'info' as const,
				title: 'System',
				message: 'NOTIFICATION.SYSTEM_UPDATE',
				read: false,
			},
			{
				type: 'warn' as const,
				title: 'Hardware',
				message: 'NOTIFICATION.LOW_DISK',
				read: false,
			},
			{
				type: 'success' as const,
				title: 'Sync',
				message: 'NOTIFICATION.SYNC_COMPLETE',
				read: false,
			},
			{
				type: 'error' as const,
				title: 'Critical',
				message: 'NOTIFICATION.BACKUP_FAILED',
				read: false,
			},
		];

		/*interval(30000).subscribe(() => {
			const randomMsg = messages[Math.floor(Math.random() * messages.length)];
			this.push(randomMsg);
		});*/
	}
}
