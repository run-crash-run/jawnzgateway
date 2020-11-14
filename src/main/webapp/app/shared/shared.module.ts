import { NgModule } from '@angular/core';
import { JawnzgatewaySharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [JawnzgatewaySharedLibsModule],
  declarations: [AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective],
  exports: [JawnzgatewaySharedLibsModule, AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective],
})
export class JawnzgatewaySharedModule {}
