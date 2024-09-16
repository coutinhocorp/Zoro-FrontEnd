import { Component, Output } from '@angular/core';
import { PagesLayoutComponent } from '../../components/pages-layout/pages-layout.component';
import { MesasLayoutComponent } from '../../components/mesas-layout/mesas-layout.component';

@Component({
  selector: 'app-mesas',
  standalone: true,
  imports: [PagesLayoutComponent, MesasLayoutComponent],
  templateUrl: './mesas.component.html',
  styleUrl: './mesas.component.scss',
})
export class MesasComponent {
  title: string = 'Mesas';

}
