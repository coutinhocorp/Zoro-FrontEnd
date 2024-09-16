import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-pages-layout',
  standalone: true,
  imports: [SidebarComponent, NzIconModule],
  templateUrl: './pages-layout.component.html',
  styleUrl: './pages-layout.component.scss',
})
export class PagesLayoutComponent {
  @Input() title: string ='';
  isOpen: boolean = false;

  toggleSidebar(){
    this.isOpen = !this.isOpen;
  }
}
