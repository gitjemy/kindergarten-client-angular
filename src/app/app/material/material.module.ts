import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button"
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

const MatLibs = [
  MatButtonModule,
  MatToolbarModule,
  MatSliderModule,
  BrowserAnimationsModule,
  MatSidenavModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
]

@NgModule({
  exports: MatLibs,
  imports: MatLibs
})

export class MaterialModule {


}
