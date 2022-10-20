import { Component, OnInit } from "@angular/core";
import { FavService } from "src/app/fav/fav.service";

@Component({
  selector: "app-fav",
  templateUrl: "./fav.component.html",
  styleUrls: ["./fav.component.scss"],
})
export class FavComponent implements OnInit {
  constructor(private favService: FavService) {}

  favourites: string[] = this.favService.getFavourites();

  ngOnInit(): void {}
}
