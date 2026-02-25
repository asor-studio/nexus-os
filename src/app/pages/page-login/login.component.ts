import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseStorageComponent, TranslatePipe, RoutingUtility } from '@asor-studio/asor-core';
import { ClockWidgetMolecule } from '../../molecules/molecule-clock-widget/clock-widget.molecule';
import { LucideAngularModule } from 'lucide-angular';
import { NexusConfig } from '../../config/nexus.config';
import { INexusAuthProps, INexusUser } from '../../config/interfaces/nexus-state.interfaces';
import { ObjectUtils } from '@asor-studio/asor-core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'nx-login-page',
	standalone: true,
	imports: [CommonModule, FormsModule, TranslatePipe, ClockWidgetMolecule, LucideAngularModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})
export class PageLoginComponent extends BaseStorageComponent<INexusAuthProps> {
	public static override readonly className: string = 'PageLoginComponent';

	private _routing = inject(RoutingUtility);

	public password = '';
	public loginUsername = '';
	public isLoading = false;
	public errorMessage = '';
	public currentUser: INexusUser | null = null;
	public showRegister = false;
	public showUserSwitcher = false;

	// Register form
	public regUsername = '';
	public regFullName = '';
	public regPassword = '';

	public override baseCompViewEnter(): void {
		super.baseCompViewEnter();
		if (this.props.users.length === 0) {
			this.showRegister = true;
		} else {
			if (ObjectUtils.isNotEmpty(this.props.user)) {
				this.currentUser = ObjectUtils.cloneDeep(this.props.user);
			}
		}
	}

	public onLogin(): void {
		this.errorMessage = '';

		if (this.currentUser) {
			// ── User is preselected → validate password only ──
			if (!this.password) return;

			const storedUser = this.props.users.find((u) => u.id === this.currentUser?.id);

			if (!storedUser || storedUser.passwordHash !== btoa(this.password)) {
				this.errorMessage = 'LOGIN.ERROR_WRONG_PASSWORD';
				return;
			}

			this._doLogin(storedUser);
		} else {
			// ── No user selected → validate username + password ──
			if (!this.loginUsername.trim() || !this.password) return;

			const storedUser = this.props.users.find(
				(u) => u.username.toLowerCase() === this.loginUsername.trim().toLowerCase()
			);

			if (!storedUser) {
				this.errorMessage = 'LOGIN.ERROR_USER_NOT_FOUND';
				return;
			}

			if (storedUser.passwordHash !== btoa(this.password)) {
				this.errorMessage = 'LOGIN.ERROR_WRONG_PASSWORD';
				return;
			}

			this._doLogin(storedUser);
		}
	}

	public onRegister(): void {
		this.errorMessage = '';
		if (!this.regUsername.trim() || !this.regFullName.trim() || !this.regPassword) return;

		const newUser: INexusUser = {
			id: new Date().getTime().toString(),
			username: this.regUsername.trim(),
			fullName: this.regFullName.trim(),
			passwordHash: btoa(this.regPassword),
			status: 'offline',
			avatarUrl: NexusConfig.Assets.AVATAR_DEFAULT,
		};

		this.props.users.push(newUser);

		if (ObjectUtils.isNotEmpty(newUser)) {
			this.currentUser = ObjectUtils.cloneDeep(newUser);
		}

		this.showRegister = false;
	}

	public onSelectUser(user: INexusUser): void {
		this.currentUser = ObjectUtils.cloneDeep(user);
		this.showUserSwitcher = false;
		this.password = '';
		this.loginUsername = '';
		this.errorMessage = '';
	}

	public onDeselectUser(): void {
		this.currentUser = null;
		this.password = '';
		this.loginUsername = '';
		this.errorMessage = '';
	}

	public toggleUserSwitcher(): void {
		this.showUserSwitcher = !this.showUserSwitcher;
	}

	private _doLogin(user: INexusUser): void {
		this.isLoading = true;
		this.props.user = user;
		setTimeout(() => this._routing.navigate(NexusConfig.Url.DESKTOP), 800);
	}
}
