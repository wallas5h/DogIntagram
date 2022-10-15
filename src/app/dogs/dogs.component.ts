import { Component, OnInit } from "@angular/core";
type breed = {
  name: string;
  type: string;
};

@Component({
  selector: "app-dogs",
  templateUrl: "./dogs.component.html",
  styleUrls: ["./dogs.component.scss"],
})
export class DogsComponent implements OnInit {
  apiUrl = "https://dog.ceo/api";
  breeds: breed[] = [];
  favourites: string[] = [];
  selectedBreed: string = "affenpinscher";
  imageUrl: string = "";

  constructor() {
    this.init();
  }

  ngOnInit(): void {}

  init() {
    this.showAllBreeds();
    this.getRandomImageByBreed(this.selectedBreed);
  }

  handleSelect() {
    let breed: string = "";

    if (this.selectedBreed.includes(" ")) {
      breed = this.selectedBreed.replace(" ", "/");
    } else {
      breed = this.selectedBreed;
    }

    this.getRandomImageByBreed(breed);
  }

  listBreeds() {
    return fetch(`${this.apiUrl}/breeds/list/all`)
      .then((resp) => resp.json())
      .then((data) => data.message);
  }

  getRandomImage() {
    return fetch(`${this.apiUrl}/breeds/image/random`)
      .then((resp) => resp.json())
      .then((data) => data.message)
      .then((img) => this.showImageWhenReady(img));
  }

  getRandomImageByBreed(breed: string) {
    return fetch(`${this.apiUrl}/breed/${breed}/images/random`)
      .then((resp) => resp.json())
      .then((data) => data.message)
      .then((img) => this.showImageWhenReady(img));
  }

  addBreed(breed: string, subBreed?: string) {
    let name: string;
    let type: string;

    if (!subBreed) {
      name = breed;
      type = breed;
    } else {
      name = `${breed} ${subBreed}`;
      type = `${breed}/${subBreed}`;
    }
    this.breeds.push({ name, type });
  }

  showAllBreeds() {
    this.listBreeds().then((breeds) => {
      for (const breed in breeds) {
        if (breeds[breed].length === 0) {
          this.addBreed(breed);
        } else {
          for (const subBreed of breeds[breed]) {
            this.addBreed(breed, subBreed);
          }
        }
      }
    });
  }

  showImageWhenReady(image: string) {
    this.imageUrl = image;
  }

  addToFav() {
    this.favourites.push(this.selectedBreed);
  }
}
