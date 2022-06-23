import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListProductComponent} from "./components/list/list.component";
import {EditComponent} from "./components/edit/edit.component";

const routes: Routes = [
  {
    path: '',
    component: ListProductComponent
  },
  {
    path: 'edit',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
