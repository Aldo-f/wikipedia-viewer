import { Component, OnInit, Input } from "@angular/core";
import { Lightbox } from "ngx-lightbox";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() data: any;
  @Input() i: number;
  _albums: any = [];

  private _album: any = [];
  constructor(private _lightbox: Lightbox) {
    console.log(1);
    if (typeof this.data !== "undefined") {
      console.log(2);
      if (typeof this.data.thumbnail !== "undefined") {
        console.log(3);
        const src = this.data.thumbnail.source;
        const caption = "test";
        const thumb = this.data.thumbnail.source;
        const album = {
          src: src,
          caption: caption,
          thumb: thumb
        };

        this._albums.push(album);
      }
    }
  }
  ngOnInit() {
    //console.log(this.data);
    console.log(this.i);
  }

  open(index: number): void {
    //create lightbox
    const src = this.data.thumbnail.source;
    const caption = this.data.title;
    const thumb = this.data.thumbnail.source;
    const album = {
      src: src,
      caption: caption,
      thumb: thumb
    };
     this._albums.push(album);
    // console.log(album);
    
    // open lightbox
    // console.log(this._albums);
    this._lightbox.open(this._albums, 0);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
