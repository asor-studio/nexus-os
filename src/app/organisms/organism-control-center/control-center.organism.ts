import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseStorageMolecule, RoutingUtility, TranslatePipe } from '@asor-studio/asor-core';
import { INexusGlobalProps } from '../../config/interfaces/nexus-state.interfaces';
import { QuickActionTileMolecule } from '../../molecules/molecule-quick-action-tile/quick-action-tile.molecule';
import { SliderControlMolecule } from '../../molecules/molecule-slider-control/slider-control.molecule';
import { UserProfileBadgeMolecule } from '../../molecules/molecule-user-profile-badge/user-profile-badge.molecule';
import { LucideAngularModule } from 'lucide-angular';
import { NexusConfig } from '../../config/nexus.config';

@Component({
	selector: 'nx-control-center',
	standalone: true,
	imports: [
		CommonModule,
		TranslatePipe,
		LucideAngularModule,
		QuickActionTileMolecule,
		SliderControlMolecule,
		UserProfileBadgeMolecule,
	],
	templateUrl: './control-center.organism.html',
	styleUrl: './control-center.organism.scss',
})
export class ControlCenterOrganism extends BaseStorageMolecule<INexusGlobalProps> {
	public static override readonly className: string = 'ControlCenterOrganism';

	private _routingUtility: RoutingUtility = inject(RoutingUtility);

	@Input() isOpen: boolean = false;
	@Output() close = new EventEmitter<void>();

	constructor() {
		super();
	}

	public onVolumeChange(value: number): void {
		this.props.volume = value;
	}

	public onBrightnessChange(value: number): void {
		this.props.brightness = value;
	}

	public toggleWifi(active: boolean): void {
		this.props.wifiEnabled = active;
	}

	public toggleBluetooth(active: boolean): void {
		this.props.bluetoothEnabled = active;
	}

	public openSettingsApp(): void {
		const appId = 'settings';
		const existing = this.props.openApps.find((a) => a.appId === appId);

		if (existing) {
			// Focus existing app
			const maxZ = Math.max(...this.props.openApps.map((a) => a.zIndex), 10);
			this.props.openApps = this.props.openApps.map((a) =>
				a.id === existing.id ? { ...a, zIndex: maxZ + 1, isMinimized: false } : a
			);
		} else {
			// Launch new instance
			const newApp = {
				id: Math.random().toString(36).substring(7),
				appId,
				zIndex: this.props.openApps.length + 10,
				isMinimized: false,
			};
			this.props.openApps = [...this.props.openApps, newApp];
		}

		this.close.emit();
	}

	public clickLogOut(): void {
		this.props.user = {} as any;
		this._routingUtility.navigate(NexusConfig.Url.LOGIN);
	}

	public clickPowerOff(): void {
		this.props.user = {} as any;
		this._routingUtility.navigate(NexusConfig.Url.BOOT);
	}
}
