import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';
import { TestDataComponent } from './test-data/test-data.component';
const Routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'home',
    component: TestDataComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
