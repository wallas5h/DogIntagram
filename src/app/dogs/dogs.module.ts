import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatSliderModule } from "@angular/material/slider";
import { DogsComponent } from "./dogs.component";
import { FavComponent } from './fav/fav.component';
import { OnefavComponent } from './fav/onefav/onefav.component';

@NgModule({
  declarations: [DogsComponent, FavComponent, OnefavComponent],
  imports: [CommonModule, MatSliderModule, FormsModule],
})
export class DogsModule {}
