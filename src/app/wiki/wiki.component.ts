import { Component, Input, OnInit } from "@angular/core";
import { WikiService } from "../wiki.service";

@Component({
  selector: "app-wiki",
  templateUrl: "./wiki.component.html",
  styleUrls: ["./wiki.component.css"]
})
export class WikiComponent implements OnInit {
  results = Object;
  objectKeys = Object.keys;
  pageid = 26573;

  constructor(private wikirestService: WikiService) {}

  ngOnInit() {
    this.wikirestService.getWikiByPageid(this.pageid).subscribe(
      data => {
        console.log("HIERONDER:");
        console.log(data);

        let pages = data.query.pages;
        for (var pageid in pages) {
          console.log(pages[pageid]);
          console.log(pages[pageid].pageimage);
          
          if (pages.hasOwnProperty(pageid)) {
            // Do things here
      
          }
        }
        // const entries = Object.entries(pages);
        // console.log(entries);

        //this.results = data.query.pages[this.pageid];
        //console.log(this.results);
      },
      err => {
        console.error("something went wrong");
        console.error(err);
      }
    );
  }
}
