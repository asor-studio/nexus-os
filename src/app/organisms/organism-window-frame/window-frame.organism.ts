import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '@asor-studio/asor-core';
import { NxWindowHeaderMolecule } from '../../molecules/molecule-window-header/window-header.molecule';

@Component({
	selector: 'nx-window-frame',
	standalone: true,
	imports: [CommonModule, NxWindowHeaderMolecule],
	templateUrl: './window-frame.organism.html',
	styleUrl: './window-frame.organism.scss',
})
export class WindowFrameOrganism extends BaseComponent {
	public static override readonly className: string = 'WindowFrameOrganism';

	@Input() title: string = '';
	@Input() isActive: boolean = false;
	@Input() zIndex: number = 100;
	@Input() initialX: number = 100;
	@Input() initialY: number = 100;
	@Input() initialWidth: number = 800;
	@Input() initialHeight: number = 600;
	@Input() isMinimized: boolean = false;

	@Output() close = new EventEmitter<void>();
	@Output() minimize = new EventEmitter<void>();
	@Output() maximize = new EventEmitter<void>();
	@Output() focus = new EventEmitter<void>();

	public x: number = 0;
	public y: number = 0;
	public width: number = 0;
	public height: number = 0;
	public isMaximized: boolean = false;

	private isDragging: boolean = false;
	private isResizing: boolean = false;
	private resizeHandle: string = '';
	private startX: number = 0;
	private startY: number = 0;
	private startWidth: number = 0;
	private startHeight: number = 0;
	private startPosX: number = 0;
	private startPosY: number = 0;

	constructor(private el: ElementRef) {
		super();
	}

	override baseCompViewEnter(): void {
		super.baseCompViewEnter();
		this.x = this.initialX;
		this.y = this.initialY;
		this.width = this.initialWidth;
		this.height = this.initialHeight;
	}

	public onMouseDown(): void {
		this.focus.emit();
	}

	public startDrag(event: MouseEvent): void {
		if (this.isMaximized) return;
		this.isDragging = true;
		this.startX = event.clientX;
		this.startY = event.clientY;
		this.startPosX = this.x;
		this.startPosY = this.y;
		event.preventDefault();
	}

	public startResize(event: MouseEvent, handle: string): void {
		if (this.isMaximized) return;
		this.isResizing = true;
		this.resizeHandle = handle;
		this.startX = event.clientX;
		this.startY = event.clientY;
		this.startWidth = this.width;
		this.startHeight = this.height;
		this.startPosX = this.x;
		this.startPosY = this.y;
		event.preventDefault();
		event.stopPropagation();
	}

	@HostListener('document:mousemove', ['$event'])
	public onMouseMove(event: MouseEvent): void {
		if (this.isDragging) {
			const dx = event.clientX - this.startX;
			const dy = event.clientY - this.startY;
			this.x = this.startPosX + dx;
			this.y = this.startPosY + dy;
		} else if (this.isResizing) {
			const dx = event.clientX - this.startX;
			const dy = event.clientY - this.startY;

			if (this.resizeHandle.includes('e')) {
				this.width = Math.max(400, this.startWidth + dx);
			}
			if (this.resizeHandle.includes('w')) {
				const newWidth = Math.max(400, this.startWidth - dx);
				if (newWidth > 400) {
					this.width = newWidth;
					this.x = this.startPosX + dx;
				}
			}
			if (this.resizeHandle.includes('s')) {
				this.height = Math.max(300, this.startHeight + dy);
			}
			if (this.resizeHandle.includes('n')) {
				const newHeight = Math.max(300, this.startHeight - dy);
				if (newHeight > 300) {
					this.height = newHeight;
					this.y = this.startPosY + dy;
				}
			}
		}
	}

	@HostListener('document:mouseup')
	public onMouseUp(): void {
		this.isDragging = false;
		this.isResizing = false;
		this.resizeHandle = '';
	}

	public toggleMaximize(): void {
		this.isMaximized = !this.isMaximized;
		this.maximize.emit();
	}
}
