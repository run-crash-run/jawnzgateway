import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JawnzgatewaySharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [JawnzgatewaySharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class JawnzgatewayHomeModule {}
