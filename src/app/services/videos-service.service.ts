import { IVideo } from 'src/app/interfaces/video';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosServiceService {

  constructor(private http: HttpClient) { }

  getAllVideo() {
    return this.http.get(`http://localhost:8000/videos`)
    .pipe(
      map( (videos: IVideo[]) => {
        // check validity of all the videos and remove the bads 
        return videos.filter( (video: IVideo) => {
          if ( (video.source == "url" && video.url) || (video.source !== "url" && video.videoId) )  {
            return true;
          } else {
            console.warn(`One of the properties in missing in the video ${video.videoId}`);
            return false;
          }
        })
      }),
      catchError ((error) => {
        console.error(`Bad Promise: ${error}`);
        return of(null);
      } 
    ));
  }
}
