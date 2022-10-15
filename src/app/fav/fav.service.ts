import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FavService {
  favourites: string[] = [];

  constructor() {}

  addToFavourites(breed: string) {
    if (this.favourites.find((b) => b === breed)) {
      return;
    }

    this.favourites.push(breed);
  }

  getFavourites() {
    return this.favourites;
  }
}
