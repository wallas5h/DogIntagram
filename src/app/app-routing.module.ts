import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DogsComponent } from "./dogs/dogs.component";
import { FavComponent } from "./dogs/fav/fav.component";

const routes: Routes = [
  { path: "", component: DogsComponent },
  { path: "favourites", component: FavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
