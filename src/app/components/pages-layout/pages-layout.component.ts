import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-pages-layout',
  standalone: true,
  imports: [SidebarComponent],
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
