import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases: [] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    this.loading = true;

    this.spotify.getNewReleases()
      .subscribe( (res: any) => {
      this.newReleases = res;
      this.loading = false;
      }, (error) => {
        console.log(error);
      });
  }

  ngOnInit() {
  }


}
