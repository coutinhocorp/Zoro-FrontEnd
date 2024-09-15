import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-pages-layout',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './pages-layout.component.html',
  styleUrl: './pages-layout.component.scss',
})
export class PagesLayoutComponent {
  isOpen: boolean = false;

  toggleSidebar(){
    this.isOpen = !this.isOpen;
  }
}
