import { ConfigCache, AsorGlobalEnum, ConsoleLogsUtility } from '@asor-studio/asor-core';
import { NexusConfig } from './nexus.config';

export class NexusCacheConfig extends ConfigCache {
	public static readonly className: string = 'NexusCacheConfig';

	protected static override _pathsExtensions = [
		{
			pathValue: '/api/mock/filesystem/root',
			persistenceType: AsorGlobalEnum.CacheType.SESSION,
			encriptType: AsorGlobalEnum.CacheEncriptType.NONE,
			reqPayloadCache: false,
			resctrictRoute: NexusConfig.Route.NONE,
			clearOn: ['/api/mock/filesystem/createDir'],
		},
		{
			pathValue: NexusConfig.Cache.NEXUS_BASE_I18N,
			persistenceType: AsorGlobalEnum.CacheType.SESSION,
			encriptType: AsorGlobalEnum.CacheEncriptType.NONE,
			reqPayloadCache: false,
			resctrictRoute: NexusConfig.Route.NONE,
			clearOn: [],
		},
	];

	static init() {
		ConsoleLogsUtility.info(NexusCacheConfig, 'NexusCacheConfig initialized');
	}

	static {
		ConfigCache.SetConfiguration(NexusCacheConfig);
	}
}
