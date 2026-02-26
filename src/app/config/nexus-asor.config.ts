import { inject } from '@angular/core';
import {
	StateService,
	CacheInterceptor,
	ErrorInterceptor,
	ConsoleLogsConfig,
	AuthGuard,
	NotifyErrorService,
	HttpRequestHandler,
	LogLevel,
	MockOrchestratorService,
} from '@asor-studio/asor-core';
import { NexusConfig } from './nexus.config';
import { NexusCacheConfig } from './nexus-cache.config';
import {
	NexusStateCreateSystemDataSet,
	NexusStateCreateAuthDataSet,
	NexusStateCreateSystemStatusDataSet,
} from './nexus-state.config';

// Atoms
import { NxAvatarComponent } from '../atoms/atom-avatar/avatar.component';
import { NxButtonComponent } from '../atoms/atom-button/button.component';
import { NxIconComponent } from '../atoms/atom-icon/icon.component';
import { NxTypographyComponent } from '../atoms/atom-typography/typography.component';

// Molecules
import { ActionButtonGroupMolecule } from '../molecules/molecule-action-button-group/action-button-group.molecule';
import { BatteryIndicatorMolecule } from '../molecules/molecule-battery-indicator/battery-indicator.molecule';
import { ClockWidgetMolecule } from '../molecules/molecule-clock-widget/clock-widget.molecule';
import { ColorPickerSwatchMolecule } from '../molecules/molecule-color-picker-swatch/color-picker-swatch.molecule';
import { ContextMenuMolecule } from '../molecules/molecule-context-menu/context-menu.molecule';
import { NxDockItemMolecule } from '../molecules/molecule-dock-item/dock-item.molecule';
import { FormFieldMolecule } from '../molecules/molecule-form-field/form-field.molecule';
import { MediaControlsMolecule } from '../molecules/molecule-media-controls/media-controls.molecule';
import { NotificationToastMolecule } from '../molecules/molecule-notification-toast/notification-toast.molecule';
import { PaginationControlMolecule } from '../molecules/molecule-pagination-control/pagination-control.molecule';
import { ProgressBarMolecule } from '../molecules/molecule-progress-bar/progress-bar.molecule';
import { QuickActionTileMolecule } from '../molecules/molecule-quick-action-tile/quick-action-tile.molecule';
import { NxSearchBarMolecule } from '../molecules/molecule-search-bar/search-bar.molecule';
import { SliderControlMolecule } from '../molecules/molecule-slider-control/slider-control.molecule';
import { NxStatCardMolecule } from '../molecules/molecule-stat-card/stat-card.molecule';
import { SystemLogLineMolecule } from '../molecules/molecule-system-log-line/system-log-line.molecule';
import { TabHeaderMolecule } from '../molecules/molecule-tab-header/tab-header.molecule';
import { ToggleSwitchMolecule } from '../molecules/molecule-toggle-switch/toggle-switch.molecule';
import { UserProfileBadgeMolecule } from '../molecules/molecule-user-profile-badge/user-profile-badge.molecule';
import { WeatherWidgetMolecule } from '../molecules/molecule-weather-widget/weather-widget.molecule';
import { NxWindowHeaderMolecule } from '../molecules/molecule-window-header/window-header.molecule';

// Pages
import { PageBootComponent } from '../pages/page-boot/boot.component';
import { PageDesktopComponent } from '../pages/page-desktop/desktop.component';
import { PageLoginComponent } from '../pages/page-login/login.component';
import { NexusMockAuthControllerService } from '../services/nexus-mock-auth-controller.service';

export function initializeAsorCoreApp(
	stateService: StateService,
	mockOrchestratorService: MockOrchestratorService
) {
	return () => {
		const levels: LogLevel[] = ['INFO', 'WARNING', 'ERROR'];
		// Console Logs Configuration
		ConsoleLogsConfig.silent = false;
		ConsoleLogsConfig.defaultLevels = [];

		ConsoleLogsConfig.setClassLevels(StateService.className, levels);
		ConsoleLogsConfig.setClassLevels(AuthGuard.className, levels);
		ConsoleLogsConfig.setClassLevels(CacheInterceptor.className, levels);
		ConsoleLogsConfig.setClassLevels(ErrorInterceptor.className, levels);
		ConsoleLogsConfig.setClassLevels(NotifyErrorService.className, levels);
		ConsoleLogsConfig.setClassLevels(HttpRequestHandler.className, levels);

		// Atoms
		ConsoleLogsConfig.setClassLevels(NxAvatarComponent.className, levels);
		ConsoleLogsConfig.setClassLevels(NxButtonComponent.className, levels);
		ConsoleLogsConfig.setClassLevels(NxIconComponent.className, levels);
		ConsoleLogsConfig.setClassLevels(NxTypographyComponent.className, levels);

		// Molecules
		ConsoleLogsConfig.setClassLevels(ActionButtonGroupMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(BatteryIndicatorMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(ClockWidgetMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(ColorPickerSwatchMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(ContextMenuMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(NxDockItemMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(FormFieldMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(MediaControlsMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(NotificationToastMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(PaginationControlMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(ProgressBarMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(QuickActionTileMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(NxSearchBarMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(SliderControlMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(NxStatCardMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(SystemLogLineMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(TabHeaderMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(ToggleSwitchMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(UserProfileBadgeMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(WeatherWidgetMolecule.className, levels);
		ConsoleLogsConfig.setClassLevels(NxWindowHeaderMolecule.className, levels);

		// Pages
		ConsoleLogsConfig.setClassLevels(PageBootComponent.className, levels);
		ConsoleLogsConfig.setClassLevels(PageDesktopComponent.className, levels);
		ConsoleLogsConfig.setClassLevels(PageLoginComponent.className, levels);

		// Services
		ConsoleLogsConfig.setClassLevels(NexusMockAuthControllerService.className, levels);

		ConsoleLogsConfig.setClassLevels(NexusConfig.className, levels);
		ConsoleLogsConfig.setClassLevels(NexusCacheConfig.className, levels);

		// Init Configs
		NexusConfig.init();
		NexusCacheConfig.init();

		// Initialize Mock Orchestrator Service
		mockOrchestratorService.registryController(
			NexusMockAuthControllerService.className,
			inject(NexusMockAuthControllerService)
		);

		// Initialize ASOR State Service
		stateService.initialize();

		// Create Global DataSets
		stateService.createDataSet(
			NexusStateCreateSystemDataSet.name,
			NexusStateCreateSystemDataSet.data,
			NexusStateCreateSystemDataSet.option!
		);
		stateService.createDataSet(
			NexusStateCreateAuthDataSet.name,
			NexusStateCreateAuthDataSet.data,
			NexusStateCreateAuthDataSet.option!
		);
		stateService.createDataSet(
			NexusStateCreateSystemStatusDataSet.name,
			NexusStateCreateSystemStatusDataSet.data,
			NexusStateCreateSystemStatusDataSet.option!
		);

		return true;
	};
}
