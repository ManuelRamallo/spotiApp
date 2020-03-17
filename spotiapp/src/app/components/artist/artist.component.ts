import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  loading: boolean;

  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) {
    this.router.params.subscribe( params => {
      this.getArtist(params.id);
    });
   }

  ngOnInit() {
  }

  getArtist(idArtist) {
    this.loading = true;
    this.spotifyService.getArtist(idArtist)
      .subscribe(res => {
        console.log('res', res);
        this.artist = res;
        this.loading = false;
    });
  }

}
