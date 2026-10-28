import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { ProductPipesComponent } from './product-pipes/product-pipes.component';
import { TruncatePipe } from './truncate.pipe';
import { ProductDirectivesComponent } from './product-directives/product-directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BootstrapDemoComponent } from './bootstrap-demo/bootstrap-demo.component';
import { DemodirectiveDirective } from './demodirective.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductPipesComponent,
    TruncatePipe,
    ProductDirectivesComponent,
    HighlightDirective,
    BootstrapDemoComponent,
    DemodirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
