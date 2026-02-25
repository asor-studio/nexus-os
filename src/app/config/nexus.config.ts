import { ConfigConst, IPath, AsorGlobalEnum, ConsoleLogsUtility } from '@asor-studio/asor-core';

export class NexusConfig extends ConfigConst {
	public static readonly className: string = 'NexusConfig';

	static override BaseApi = '/api/v1';
	static override SiteBaseUrl = '/nexus-os';
	static override SiteAssetsUrl = '/nexus-os/assets';

	protected static override _routeExtensions = {
		BOOT: 'boot',
		LOGIN: 'login',
		DESKTOP: 'desktop',
	};

	protected static override _translationUrlExtensions = {
		DefaultLanguage: 'en',
		BOOT: '/nexus/boot',
		LOGIN: '/nexus/login',
		DESKTOP: '/nexus/desktop',
		SETTINGS: '/nexus/settings',
		COMMON: '/nexus/common',
	};

	protected static override _authCheckExtensions = {
		DESKTOP: 'desktop',
	};
	protected static override _urlExtensions = {
		BOOT: '/boot',
		LOGIN: '/login',
		DESKTOP: '/desktop',
		UNAUTHORIZED: '/login',
	};

	protected static override _cacheExtensions = {
		NEXUS_BASE_I18N: 'i18n/nexus',
	};

	protected static _assetsExtensions = {
		AVATAR_DEFAULT: 'assets/images/avatar-default.png',
	};

	static override get Route() {
		return { ...super.Route, ...this._routeExtensions };
	}
	static override get TranslationUrl() {
		return { ...super.TranslationUrl, ...this._translationUrlExtensions };
	}
	static override get AuthCheck() {
		return { ...super.AuthCheck, ...this._authCheckExtensions };
	}
	static override get Url() {
		return { ...super.Url, ...this._urlExtensions };
	}
	static override get Cache() {
		return { ...super.Cache, ...this._cacheExtensions };
	}
	static get Assets() {
		return { ...this._assetsExtensions };
	}

	static init() {
		ConsoleLogsUtility.info(NexusConfig, 'NexusConfig initialized');
	}

	static {
		ConfigConst.SetConfiguration(NexusConfig);
	}
}
