import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent, RoutingUtility } from '@asor-studio/asor-core';
import {
	SystemLogLineMolecule,
	ILogEntry,
} from '../../molecules/molecule-system-log-line/system-log-line.molecule';
import { NexusConfig } from '../../config/nexus.config';

@Component({
	selector: 'nx-boot-page',
	standalone: true,
	imports: [CommonModule, SystemLogLineMolecule],
	templateUrl: './boot.component.html',
	styleUrl: './boot.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageBootComponent extends BaseComponent {
	public static override readonly className: string = 'PageBootComponent';

	private _routingUtility = inject(RoutingUtility);
	private _cdr = inject(ChangeDetectorRef);

	public logs: ILogEntry[] = [];
	public isBootStarted: boolean = false;

	override baseCompViewEnter(): void {
		super.baseCompViewEnter();
	}

	public startBoot(): void {
		this.isBootStarted = true;
		this._startBootSequence();
		this._cdr.markForCheck();
	}

	private _startBootSequence(): void {
		const bootLogs: ILogEntry[] = [
			{ timestamp: '0.000000', level: 'INFO', message: 'BOOT.KERNEL_LOADING' },
			{ timestamp: '0.012431', level: 'INFO', message: 'BOOT.INIT_MEMORY' },
			{ timestamp: '0.045122', level: 'INFO', message: 'BOOT.CPU_DETECT' },
			{ timestamp: '0.102341', level: 'INFO', message: 'BOOT.SECURE_BOOT' },
			{ timestamp: '0.234125', level: 'WARN', message: 'BOOT.LEGACY_GPU' },
			{ timestamp: '0.312211', level: 'INFO', message: 'SYS.VFS_INITIALIZE' },
			{ timestamp: '0.451234', level: 'INFO', message: 'BOOT.MOUNT_VFS' },
			{ timestamp: '0.521233', level: 'INFO', message: 'SYS.DRIVERS_LOAD' },
			{ timestamp: '0.671239', level: 'INFO', message: 'BOOT.NEURAL_LOAD' },
			{ timestamp: '1.203412', level: 'INFO', message: 'BOOT.STABLE' },
			{ timestamp: '1.451234', level: 'INFO', message: 'BOOT.READY' },
		];

		let index = 0;
		const interval = setInterval(() => {
			if (index < bootLogs.length) {
				this.logs.push(bootLogs[index]);
				index++;
			} else {
				clearInterval(interval);
				setTimeout(() => {
					this._routingUtility.navigate(NexusConfig.Url.LOGIN);
				}, 3000);
			}
			this._cdr.markForCheck();
		}, 300);
	}
}
