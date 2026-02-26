import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseStorageMolecule, TranslatePipe } from '@asor-studio/asor-core';
import { INexusGlobalProps, INexusUser } from '../../config/interfaces/nexus-state.interfaces';
import { NxAvatarComponent } from '../../atoms/atom-avatar/avatar.component';

@Component({
	selector: 'nx-user-profile-badge',
	standalone: true,
	imports: [CommonModule, TranslatePipe, NxAvatarComponent],
	templateUrl: './user-profile-badge.molecule.html',
	styleUrl: './user-profile-badge.molecule.scss',
})
export class UserProfileBadgeMolecule extends BaseStorageMolecule<INexusGlobalProps> {
	public static override readonly className: string = 'UserProfileBadgeMolecule';

	constructor() {
		super();
	}

	override storageHandlerDataChanges(prev: INexusGlobalProps, curr: INexusGlobalProps): void {}

	override baseCompViewEnter(): void {
		super.baseCompViewEnter();
	}
	override baseCompViewLeave(): void {
		super.baseCompViewLeave();
	}
}
