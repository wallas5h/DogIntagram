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
  apiUrl = "https://dog.ceo/api";

  ngOnInit(): void {}

  async loadImage(selectedBreed: string) {
    let breed: string = "";

    if (selectedBreed.includes(" ")) {
      breed = selectedBreed.replace(" ", "/");
    } else {
      breed = selectedBreed;
    }

    const image = await this.getRandomImageByBreed(breed);

    console.log(image);

    return;
  }

  getRandomImageByBreed(breed: string) {
    return fetch(`${this.apiUrl}/breed/${breed}/images/random`)
      .then((resp) => resp.json())
      .then((data) => data.message)
      .then((img) => img);
  }
}
