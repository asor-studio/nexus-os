export interface INexusUser {
	id: string;
	username: string;
	fullName: string;
	avatarUrl: string;
	status: 'online' | 'offline' | 'away' | 'dnd';
	passwordHash: string;
}

export interface INexusAuthProps {
	users: INexusUser[];
	user: INexusUser;
}

export interface INexusSettingsProps {
	volume: number;
	brightness: number;
	bluetoothEnabled: boolean;
	wifiEnabled: boolean;
	theme: 'dark' | 'light' | 'holographic';
	isMuted: boolean;
	nightLight: boolean;
	showProfile: boolean;
	isAnonymous: boolean;
}

export interface INexusWeather {
	// Weather
	temperature: number;
	condition: string;
	city: string;
}

export interface INexusSystemStatus {
	// Metrics
	cpu: number;
	ram: number;
	network: number;
	battery: number;
	isCharging: boolean;

	// Notifications
	notifications: INexusNotification[];

	// Window Manager
	windows: any[];
	highestZIndex: number;

	// Desktop UI
	openApps: IAppInstance[];
	isSettingsOpen: boolean;
	contextMenu: {
		visible: boolean;
		x: number;
		y: number;
		items: any[];
	};
}

export interface INexusGlobalProps extends INexusSettingsProps, INexusSystemStatus {
	user: INexusUser;
}

// Redundant interfaces removed, consolidated into INexusSystemStatus

export interface INexusNotifications {
	notifications: INexusNotification[];
}

export interface INexusNotification {
	id: string;
	title: string;
	message: string;
	timestamp: Date;
	type: 'info' | 'success' | 'warning' | 'error' | 'warn';
	read: boolean;
}

export interface IAppInstance {
	id: string;
	appId: string;
	zIndex: number;
	isMinimized: boolean;
}

export interface INexusAppProps {
	theme: string;
}
