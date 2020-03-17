import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor( private http: HttpClient) {
  }

  getQuery(query) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQATQtWhblAdLAGRu1xXMxq1hjsOunETiK6H5MJUmso5F_GHdYE_TpTNxMnum13QtYY4TANghSeTSuplczE'
    });

    const url = `https://api.spotify.com/v1/${ query }`;

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe( map( (data: any) => {
          return data.albums.items;
       }));
  }

  getArtistsSearched( searchTerm: string) {

    return this.getQuery(`search?q=${searchTerm}&type=artist`)
      .pipe( map( (res: any) => {
            return res.artists.items;
      }));
  }

  getArtist(idArtist) {
    return this.getQuery(`artists/${idArtist}`);
      // .pipe(map( res => {
      //     console.log(res);
      // }));
  }

}
