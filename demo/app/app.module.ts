import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIRouterModule, BlockUIPreventNavigation } from 'ng-block-ui/router';

import { BlockElementModule } from './block-element/block-element.module';
import { BlockTemplateComponent } from './block-template/block-template.component';
import { AppComponent } from './app.component';
import { DeafultComponent } from './default/default.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
  { path: '', canActivateChild: [BlockUIPreventNavigation], children: [
    { path: '', component: DeafultComponent },
    { path: 'landing-page', component: LandingPageComponent }
  ]}
];

@NgModule({
  imports: [
    BrowserModule,
    BlockElementModule,
    BlockUIModule.forRoot({
      message: 'Global Default Message',
      delayStart: 500,
      delayStop: 500,
      template: BlockTemplateComponent
    }),
    BlockUIRouterModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    BlockTemplateComponent,
    AppComponent,
    DeafultComponent,
    LandingPageComponent
  ],
  providers: [],
  entryComponents: [
    BlockTemplateComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
