import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-onefav",
  templateUrl: "./onefav.component.html",
  styleUrls: ["./onefav.component.scss"],
})
export class OnefavComponent implements OnInit {
  @Input() breed: string = "";
  isReady: boolean = false;
  image: string = "";

  constructor() {}

  apiUrl = "https://dog.ceo/api";
  intervalId: any = 0;

  ngOnInit(): void {
    this.loadImage();
  }

  async loadImage() {
    const selectedBreed = this.breed;
    let breed: string = "";

    if (selectedBreed.includes(" ")) {
      breed = selectedBreed.replace(" ", "/");
    } else {
      breed = selectedBreed;
    }

    this.image = await this.getRandomImageByBreed(breed);

    this.isReady = true;
  }

  getRandomImageByBreed(breed: string) {
    return fetch(`${this.apiUrl}/breed/${breed}/images/random`)
      .then((resp) => resp.json())
      .then((data) => data.message)
      .then((img) => img);
  }

  startInterval() {
    this.intervalId = setInterval(() => {
      this.loadImage();
    }, 1000);
  }

  clearIntervalId() {
    clearInterval(this.intervalId);
    console.log("działa");
  }
}
