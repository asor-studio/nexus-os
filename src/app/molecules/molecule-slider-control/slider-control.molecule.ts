import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseStorageMolecule, TranslatePipe } from '@asor-studio/asor-core';
import { LucideAngularModule } from 'lucide-angular';
import { INexusSettingsProps } from '../../config/interfaces/nexus-state.interfaces';

@Component({
	selector: 'nx-slider-control',
	standalone: true,
	imports: [CommonModule, FormsModule, LucideAngularModule, TranslatePipe],
	templateUrl: './slider-control.molecule.html',
	styleUrl: './slider-control.molecule.scss',
})
export class SliderControlMolecule extends BaseStorageMolecule<INexusSettingsProps> {
	public static override readonly className: string = 'SliderControlMolecule';

	@Input() public icon: string = 'activity';
	@Input() public label: string = '';
	@Input() public propertyPath: keyof INexusSettingsProps = 'volume';
	@Input() public min: number = 0;
	@Input() public max: number = 100;
	@Input() public step: number = 1;

	public get value(): number {
		return (this.props[this.propertyPath] as number) ?? 0;
	}

	public set value(val: number) {
		(this.props as any)[this.propertyPath] = val;
	}
}
