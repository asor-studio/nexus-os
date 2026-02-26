import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseStorageComponent, TranslatePipe } from '@asor-studio/asor-core';
import { NxDockItemMolecule } from '../../molecules/molecule-dock-item/dock-item.molecule';
import { NotificationToastMolecule } from '../../molecules/molecule-notification-toast/notification-toast.molecule';
import { ContextMenuMolecule } from '../../molecules/molecule-context-menu/context-menu.molecule';
import { TaskbarOrganism } from '../../organisms/organism-taskbar/taskbar.organism';
import { ControlCenterOrganism } from '../../organisms/organism-control-center/control-center.organism';
import { WindowFrameOrganism } from '../../organisms/organism-window-frame/window-frame.organism';
import { SettingsPanelMolecule } from '../../molecules/molecule-settings-panel/settings-panel.molecule';
import { NxIconComponent } from '../../atoms/atom-icon/icon.component';
import { IAppInstance, INexusSystemStatus } from '../../config/interfaces/nexus-state.interfaces';

@Component({
	selector: 'nx-desktop-page',
	standalone: true,
	imports: [
		CommonModule,
		TranslatePipe,
		NxDockItemMolecule,
		NotificationToastMolecule,
		ContextMenuMolecule,
		TaskbarOrganism,
		ControlCenterOrganism,
		WindowFrameOrganism,
		SettingsPanelMolecule,
		NxIconComponent,
	],
	templateUrl: './desktop.component.html',
	styleUrl: './desktop.component.scss',
})
export class PageDesktopComponent extends BaseStorageComponent<INexusSystemStatus> {
	public static override readonly className: string = 'PageDesktopComponent';

	public dockItems = [
		{ id: 'terminal', iconName: 'Terminal', label: 'DOCK.TERMINAL', color: '#10B981' },
		{ id: 'settings', iconName: 'Settings', label: 'DOCK.SETTINGS', color: '#10B981' },
		{ id: 'explorer', iconName: 'Folder', label: 'DOCK.EXPLORER', color: '#10B981' },
	];

	constructor() {
		super();
	}

	public showContextMenu(event: MouseEvent): void {
		event.preventDefault();
		this.props.contextMenu = {
			visible: true,
			x: event.clientX,
			y: event.clientY,
			items: [
				{ id: 'refresh', label: 'CONTEXT.REFRESH', icon: 'refresh-ccw' },
				{ id: 'wallpaper', label: 'CONTEXT.CHANGE_WALLPAPER', icon: 'image' },
				{ id: 'divider-1', label: '', divider: true },
				{ id: 'settings', label: 'CONTEXT.SYSTEM_SETTINGS', icon: 'settings' },
			],
		};
	}

	public closeContextMenu(): void {
		this.props.contextMenu = { ...this.props.contextMenu, visible: false };
	}

	public removeNotification(id: string): void {}

	public toggleSettings(): void {
		this.props.isSettingsOpen = !this.props.isSettingsOpen;
	}

	public onLaunchApp(appId: string): void {
		const existing = this.props.openApps.find((a) => a.appId === appId);
		if (existing) {
			this.focusApp(existing.id);
		} else {
			const newApp: IAppInstance = {
				id: Math.random().toString(36).substring(7),
				appId,
				zIndex: this.props.openApps.length + 10,
				isMinimized: false,
			};
			this.props.openApps = [...this.props.openApps, newApp];
		}
	}

	public closeApp(instanceId: string): void {
		this.props.openApps = this.props.openApps.filter((a) => a.id !== instanceId);
	}

	public minimizeApp(instanceId: string): void {
		this.props.openApps = this.props.openApps.map((a) =>
			a.id === instanceId ? { ...a, isMinimized: true } : a
		);
	}

	public maximizeApp(instanceId: string): void {
		this.props.openApps = this.props.openApps.map((a) =>
			a.id === instanceId ? { ...a, isMinimized: false } : a
		);
		this.focusApp(instanceId);
	}

	public focusApp(instanceId: string): void {
		const apps = this.props.openApps;
		if (apps.length === 0) return;
		const maxZ = Math.max(...apps.map((a) => a.zIndex), 10);
		this.props.openApps = apps.map((a) =>
			a.id === instanceId ? { ...a, zIndex: maxZ + 1, isMinimized: false } : a
		);
	}

	public isAppOpen(appId: string): boolean {
		return this.props.openApps.some((a) => a.appId === appId);
	}

	override storageHandlerDataChanges(prev: INexusSystemStatus, curr: INexusSystemStatus): void {}

	override baseCompViewEnter(): void {
		super.baseCompViewEnter();
	}
	override baseCompViewLeave(): void {
		super.baseCompViewLeave();
	}
}
