import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EstabelecimentosComponent } from './pages/estabelecimentos/estabelecimentos.component';
import { MesasComponent } from './pages/mesas/mesas.component';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'estabelecimentos',
    component: EstabelecimentosComponent,
  },
  {
    path: 'mesas',
    component: MesasComponent,
  },
];
