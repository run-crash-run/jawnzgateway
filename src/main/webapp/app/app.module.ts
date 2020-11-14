import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JawnzgatewaySharedModule } from 'app/shared/shared.module';
import { JawnzgatewayCoreModule } from 'app/core/core.module';
import { JawnzgatewayAppRoutingModule } from './app-routing.module';
import { JawnzgatewayHomeModule } from './home/home.module';
import { JawnzgatewayEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JawnzgatewaySharedModule,
    JawnzgatewayCoreModule,
    JawnzgatewayHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JawnzgatewayEntityModule,
    JawnzgatewayAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JawnzgatewayAppModule {}
