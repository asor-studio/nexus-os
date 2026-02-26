import { HttpHandler, HttpRequest, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AsorGlobalEnum, IAuth, MockRequestMapping, ObjectUtils } from '@asor-studio/asor-core';
import { NexusConfig } from '../config/nexus.config';
import { NexusStateConnectionLogin } from '../config/nexus-state.config';
import { StateService } from '@asor-studio/asor-core';

@Injectable({
	providedIn: 'root',
})
export class NexusMockAuthControllerService {
	static readonly className: string = 'NexusMockAuthControllerService';

	private _stateService: StateService = inject(StateService);

	@MockRequestMapping({
		path: '/api/v1/auth/flow/{auth_code}'.replace('{auth_code}', NexusConfig.AuthCheck.DESKTOP),
		method: AsorGlobalEnum.IHttpMethod.GET,
	})
	public authCheck(req: HttpRequest<any>, next: HttpHandler): HttpResponseBase {
		return new HttpResponse({
			url: req.url,
			status: AsorGlobalEnum.IHttpStatusCode.OK,
			body: {
				authorized: this.checkRequirementsRoutePermission()
					? AsorGlobalEnum.AuthStatus.Ok
					: AsorGlobalEnum.AuthStatus.NotAllow,
			} as IAuth,
		});
	}

	private checkRequirementsRoutePermission(): boolean {
		const user = this._stateService.readDataSet(NexusStateConnectionLogin.selectors['user']);
		return ObjectUtils.isNotEmpty(user);
	}
}
