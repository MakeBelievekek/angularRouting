import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FirstComponent} from './component/first/first.component';
import {SecondComponent} from './component/second/second.component';
import {ThirdComponent} from './component/common/third/third.component';
import {CommonComponent} from './component/common/common.component';


const routes: Routes = [
  {path: '', redirectTo: 'first', pathMatch: 'full'},
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: 'third', component: ThirdComponent},
  {path: 'common', component: CommonComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
