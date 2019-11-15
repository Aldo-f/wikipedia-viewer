import { Component, OnInit } from "@angular/core";
import { WikiService } from "../wiki.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  results;
  objectKeys = Object.keys;
  data: any = {};

  constructor(private wikirestService: WikiService) {}

  doSearch(trigger: string, value: string) {
    console.log("do a search with trigger: " + trigger);
    if (value) {
      console.log("do a search with: " + value);
      this.wikirestService.getSearchResults(value).subscribe(
        data => {
          console.log(data);
          if (data.query) {
            this.results = data.query.pages;
          } else {
            this.results = 'error';
          }

          console.log(this.results);
          // for (var page in this.results) {
          //  console.log(this.results[page]);
          // }
        },
        err => {
          console.log("something went wrong");
          console.log(err);
        }
      );
    }
  }

  ngOnInit() {}
}
