import { ICreateDataSet, IConnectDataSet, AsorStorage } from '@asor-studio/asor-core';
import {
	INexusUser,
	INexusAuthProps,
	INexusSettingsProps,
	INexusSystemStatus,
} from './interfaces/nexus-state.interfaces';

export const SystemStateCreateDataSet: ICreateDataSet = {
	name: 'nexus-system-state',
	data: {
		volume: 75,
		brightness: 80,
		bluetoothEnabled: true,
		wifiEnabled: true,
		theme: 'holographic',
		isMuted: false,
		nightLight: false,
		showProfile: true,
		isAnonymous: false,
	} as INexusSettingsProps,
	option: {
		storeType: AsorStorage.StateConst.StoreType.LOCAL,
		encrypt: false,
	},
};

export const AuthCreateDataSet: ICreateDataSet = {
	name: 'nexus-auth',
	data: {
		users: [],
		user: {} as INexusUser,
	} as INexusAuthProps,
	option: {
		storeType: AsorStorage.StateConst.StoreType.SESSION,
		encrypt: true,
	},
};

export const SystemStatusCreateDataSet: ICreateDataSet = {
	name: 'nexus-system-status',
	data: {
		// Metrics
		cpu: 12,
		ram: 4.2,
		network: 0.5,
		battery: 85,
		isCharging: false,
		// Weather
		temperature: 22,
		condition: 'sunny',
		city: 'Neo Tokyo',
		// Notifications
		notifications: [],
		// Window Manager
		windows: [],
		highestZIndex: 100,
		// Desktop UI
		openApps: [],
		isSettingsOpen: false,
		contextMenu: {
			visible: false,
			x: 0,
			y: 0,
			items: [],
		},
	} as INexusSystemStatus,
	option: {
		storeType: AsorStorage.StateConst.StoreType.VOLATILE,
		encrypt: false,
	},
};

export const DesktopConnectDataSet: IConnectDataSet = {
	name: 'DesktopConnection',
	selectors: {
		openApps: 'nexus-system-status.openApps',
		isSettingsOpen: 'nexus-system-status.isSettingsOpen',
		contextMenu: 'nexus-system-status.contextMenu',
		cpu: 'nexus-system-status.cpu',
		ram: 'nexus-system-status.ram',
		battery: 'nexus-system-status.battery',
		isCharging: 'nexus-system-status.isCharging',
		notifications: 'nexus-system-status.notifications',
		theme: 'nexus-system-state.theme',
	},
};

export const NexusGlobalConnection: IConnectDataSet = {
	name: 'NexusGlobalConnection',
	selectors: {
		volume: 'nexus-system-state.volume',
		brightness: 'nexus-system-state.brightness',
		bluetoothEnabled: 'nexus-system-state.bluetoothEnabled',
		wifiEnabled: 'nexus-system-state.wifiEnabled',
		theme: 'nexus-system-state.theme',
		isMuted: 'nexus-system-state.isMuted',
		nightLight: 'nexus-system-state.nightLight',
		showProfile: 'nexus-system-state.showProfile',
		isAnonymous: 'nexus-system-state.isAnonymous',
		user: 'nexus-auth.user',
		battery: 'nexus-system-status.battery',
		isCharging: 'nexus-system-status.isCharging',
		openApps: 'nexus-system-status.openApps',
	},
};

export const NexusSystemMetricsConnection: IConnectDataSet = {
	name: 'NexusSystemMetricsConnection',
	selectors: {
		cpu: 'nexus-system-status.cpu',
		ram: 'nexus-system-status.ram',
		network: 'nexus-system-status.network',
		battery: 'nexus-system-status.battery',
		isCharging: 'nexus-system-status.isCharging',
	},
};

export const NexusWeatherConnection: IConnectDataSet = {
	name: 'NexusWeatherConnection',
	selectors: {
		temperature: 'nexus-system-status.temperature',
		condition: 'nexus-system-status.condition',
		city: 'nexus-system-status.city',
	},
};

export const NexusNotificationsConnection: IConnectDataSet = {
	name: 'NexusNotificationsConnection',
	selectors: {
		notifications: 'nexus-system-status.notifications',
	},
};

export const LoginConnectDataSet: IConnectDataSet = {
	name: 'LoginConnectDataSet',
	selectors: {
		users: 'nexus-auth.users',
		user: 'nexus-auth.user',
	},
};

export const NexusStateAppConnection: IConnectDataSet = {
	name: 'NexusStateAppConnection',
	selectors: {
		theme: 'nexus-system-state.theme',
	},
};
