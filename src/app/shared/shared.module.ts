import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NavbarComponent, ProductComponent, SearchbarComponent } from './components';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutRoutingModule } from '../layouts/main-layout/main-layout-routing.module';

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      FormsModule,
      MainLayoutRoutingModule
    ],
    declarations: [
      ProductComponent,
      NavbarComponent,
      SearchbarComponent,
      FooterComponent,
    ],
    providers: [
    ],
    exports: [
      ProductComponent,
      NavbarComponent,
      SearchbarComponent,
      FooterComponent
    ],
})
export class SharedModule {}
