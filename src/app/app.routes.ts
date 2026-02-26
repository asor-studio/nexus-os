import { Routes } from '@angular/router';
import { AuthGuard, IAsorRoute } from '@asor-studio/asor-core';
import { NexusConfig } from './config/nexus.config';
import { PageBootComponent } from './pages/page-boot/boot.component';
import { PageLoginComponent } from './pages/page-login/login.component';
import { PageDesktopComponent } from './pages/page-desktop/desktop.component';
import {
	NexusStateConnectionDesktop,
	NexusStateConnectionGlobal,
	NexusStateConnectionWeather,
	NexusStateConnectionNotifications,
	NexusStateConnectionLogin,
} from './config/nexus-state.config';
import { SystemLogLineMolecule } from './molecules/molecule-system-log-line/system-log-line.molecule';
import { ClockWidgetMolecule } from './molecules/molecule-clock-widget/clock-widget.molecule';
import { NxDockItemMolecule } from './molecules/molecule-dock-item/dock-item.molecule';
import { NxSearchBarMolecule } from './molecules/molecule-search-bar/search-bar.molecule';
import { NxStatCardMolecule } from './molecules/molecule-stat-card/stat-card.molecule';
import { NxWindowHeaderMolecule } from './molecules/molecule-window-header/window-header.molecule';
import { SliderControlMolecule } from './molecules/molecule-slider-control/slider-control.molecule';
import { ToggleSwitchMolecule } from './molecules/molecule-toggle-switch/toggle-switch.molecule';
import { UserProfileBadgeMolecule } from './molecules/molecule-user-profile-badge/user-profile-badge.molecule';
import { NotificationToastMolecule } from './molecules/molecule-notification-toast/notification-toast.molecule';
import { BatteryIndicatorMolecule } from './molecules/molecule-battery-indicator/battery-indicator.molecule';
import { SettingsPanelMolecule } from './molecules/molecule-settings-panel/settings-panel.molecule';
import { ControlCenterOrganism } from './organisms/organism-control-center/control-center.organism';
import { QuickActionTileMolecule } from './molecules/molecule-quick-action-tile/quick-action-tile.molecule';
import { WeatherWidgetMolecule } from './molecules/molecule-weather-widget/weather-widget.molecule';
import { ContextMenuMolecule } from './molecules/molecule-context-menu/context-menu.molecule';
import { NxButtonComponent } from './atoms/atom-button/button.component';
import { NxIconComponent } from './atoms/atom-icon/icon.component';
import { NxTypographyComponent } from './atoms/atom-typography/typography.component';
import { FormFieldMolecule } from './molecules/molecule-form-field/form-field.molecule';

export const routes: Routes = [
	{
		path: '',
		redirectTo: NexusConfig.Route.BOOT,
		pathMatch: 'full',
	},
	{
		path: NexusConfig.Route.BOOT,
		component: PageBootComponent,
		data: {
			I18nPath: [NexusConfig.TranslationUrl.BOOT],
			Molecules: [
				{
					Molecule: SystemLogLineMolecule,
					I18nPath: [NexusConfig.TranslationUrl.BOOT],
				},
			],
			Components: [
				{
					Component: NxTypographyComponent,
					I18nPath: [NexusConfig.TranslationUrl.COMMON],
				},
			],
		} as IAsorRoute,
	},
	{
		path: NexusConfig.Route.LOGIN,
		component: PageLoginComponent,
		data: {
			I18nPath: [NexusConfig.TranslationUrl.LOGIN, NexusConfig.TranslationUrl.COMMON],
			ConnectDataSet: NexusStateConnectionLogin,
			Molecules: [
				{
					Molecule: ClockWidgetMolecule,
					I18nPath: [NexusConfig.TranslationUrl.LOGIN],
				},
			],
			Components: [
				{
					Component: NxTypographyComponent,
					I18nPath: [NexusConfig.TranslationUrl.COMMON],
				},
				{
					Component: NxButtonComponent,
					I18nPath: [NexusConfig.TranslationUrl.COMMON],
				},
			],
		} as IAsorRoute,
	},
	{
		path: NexusConfig.Route.DESKTOP,
		component: PageDesktopComponent,
		canActivate: [AuthGuard],
		data: {
			I18nPath: [NexusConfig.TranslationUrl.DESKTOP, NexusConfig.TranslationUrl.COMMON],
			ConnectDataSet: NexusStateConnectionDesktop,
			AuthCheck: NexusConfig.AuthCheck.DESKTOP,
			Molecules: [
				{
					Molecule: ClockWidgetMolecule,
					I18nPath: [NexusConfig.TranslationUrl.DESKTOP],
				},
				{ Molecule: NxDockItemMolecule, I18nPath: [NexusConfig.TranslationUrl.DESKTOP] },
				{
					Molecule: NxSearchBarMolecule,
					I18nPath: [NexusConfig.TranslationUrl.COMMON],
				},
				{
					Molecule: NxStatCardMolecule,
					I18nPath: [NexusConfig.TranslationUrl.COMMON],
				},
				{
					Molecule: NxWindowHeaderMolecule,
					I18nPath: [NexusConfig.TranslationUrl.COMMON],
				},
				{
					Molecule: UserProfileBadgeMolecule,
					I18nPath: [NexusConfig.TranslationUrl.COMMON],
					ConnectDataSet: NexusStateConnectionGlobal,
				},
				{
					Molecule: NotificationToastMolecule,
					I18nPath: [NexusConfig.TranslationUrl.COMMON],
					ConnectDataSet: NexusStateConnectionNotifications,
				},
				{
					Molecule: BatteryIndicatorMolecule,
					I18nPath: [NexusConfig.TranslationUrl.COMMON],
					ConnectDataSet: NexusStateConnectionGlobal,
				},
				{
					Molecule: ControlCenterOrganism,
					I18nPath: [NexusConfig.TranslationUrl.COMMON],
					ConnectDataSet: NexusStateConnectionGlobal,
				},
				{
					Molecule: WeatherWidgetMolecule,
					I18nPath: [NexusConfig.TranslationUrl.COMMON],
					ConnectDataSet: NexusStateConnectionWeather,
				},
				{
					Molecule: ContextMenuMolecule,
					I18nPath: [NexusConfig.TranslationUrl.COMMON],
				},
				{
					Molecule: ToggleSwitchMolecule,
					I18nPath: [NexusConfig.TranslationUrl.COMMON],
				},
				{
					Molecule: QuickActionTileMolecule,
					I18nPath: [NexusConfig.TranslationUrl.COMMON],
				},
				{
					Molecule: SliderControlMolecule,
					I18nPath: [NexusConfig.TranslationUrl.COMMON],
					ConnectDataSet: NexusStateConnectionGlobal,
				},
				{
					Molecule: SettingsPanelMolecule,
					I18nPath: [
						NexusConfig.TranslationUrl.COMMON,
						NexusConfig.TranslationUrl.SETTINGS,
					],
					ConnectDataSet: NexusStateConnectionGlobal,
				},
				{
					Molecule: FormFieldMolecule,
					I18nPath: [
						NexusConfig.TranslationUrl.COMMON,
						NexusConfig.TranslationUrl.SETTINGS,
					],
				},
			],
			Components: [
				{
					Component: NxIconComponent,
					I18nPath: [NexusConfig.TranslationUrl.COMMON],
				},
				{
					Component: NxTypographyComponent,
					I18nPath: [NexusConfig.TranslationUrl.COMMON],
				},
			],
		} as IAsorRoute,
	},
];
