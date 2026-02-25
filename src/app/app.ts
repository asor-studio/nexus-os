import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsorWidgetComponent, RoutingUtility, StateService } from '@asor-studio/asor-core';
import { NexusStateAppConnection, SystemStateCreateDataSet } from './config/nexus-state.config';
import { INexusAppProps } from './config/interfaces/nexus-state.interfaces';
import { NgClass } from '@angular/common';
import { NexusConfig } from './config/nexus.config';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, AsorWidgetComponent, NgClass],
	template: `<div [ngClass]="'nexus-container ' + theme">
					<router-outlet />
					<asor-core-widget mode="on" />
				</div>`,
	styleUrl: './app.scss',
})
export class App implements OnInit {
	protected readonly title = 'nexus-os';
	private _stateService = inject(StateService);
	private _routingUtility = inject(RoutingUtility);

	get theme() {
		return this._routingUtility.currentNavPass(NexusConfig.Route.DESKTOP) ? this.props.theme : 'holographic';
	}

	props: INexusAppProps = {
		theme: 'holographic',
	};

	ngOnInit(): void {
		this._stateService.registry(NexusStateAppConnection.name, NexusStateAppConnection.selectors, this.propsFromRegistry.bind(this));
		this.props.theme = this._stateService.readDataSet(NexusStateAppConnection.selectors['theme']);
	}

	private propsFromRegistry(props: any) {
		this.props = props[SystemStateCreateDataSet.name] as INexusAppProps;
	}


}
