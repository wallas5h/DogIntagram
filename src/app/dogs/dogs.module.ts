import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatSliderModule } from "@angular/material/slider";
import { DogsComponent } from "./dogs.component";
import { FavComponent } from './fav/fav.component';

@NgModule({
  declarations: [DogsComponent, FavComponent],
  imports: [CommonModule, MatSliderModule, FormsModule],
})
export class DogsModule {}
