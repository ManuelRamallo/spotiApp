import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  releasesArtists: [] = [];
  loading: boolean;

  constructor( private spotifyService: SpotifyService) {
  }

  ngOnInit() {
  }

  search(searchTerm) {
    console.log(searchTerm);
    this.loading = true;
    this.spotifyService.getArtistsSearched(searchTerm)
      .subscribe( (res: any) => {
         this.releasesArtists = res;
         this.loading = false;
      });
  }

}
