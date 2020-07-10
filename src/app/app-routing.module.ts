import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './layout/components/pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: '', redirectTo: '/contacts/dashboard', pathMatch: 'full' },
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsModule)},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
