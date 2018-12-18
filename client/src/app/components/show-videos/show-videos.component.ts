import { Component, OnInit, NgZone } from '@angular/core';
import { VideosServiceService } from 'src/app/services/videos-service.service';
import { IVideo } from 'src/app/interfaces/video';

@Component({
  selector: 'app-show-videos',
  templateUrl: './show-videos.component.html',
  styleUrls: ['./show-videos.component.scss']
})
export class ShowVideosComponent implements OnInit {
  public videosToShow: IVideo[];
  private selectedVideoType = "all";

  constructor(
    private videosService: VideosServiceService,
    private _ngZone: NgZone) { 

  }

  ngOnInit() {
    
    let myWindow = window as any;
    // In your onload handler
    //myWindow.FB.Event.subscribe('xfbml.render', finished_rendering);
    
    // callback the the FB to be loaded -
    myWindow.fbAsyncInit = () => {
      if (myWindow.FB) {
        console.log("I have FB");
        this.videosService.getAllVideo().subscribe((videos: IVideo[]) => {
          this._ngZone.run(() => {
            this.videosToShow = videos;
          });
        });
      } 
    };
  }

  onVideoTypeChange(newSelectedVideoType: string) {
    this.selectedVideoType = newSelectedVideoType.toLowerCase();
  }

  ngAfterViewInit() {
    let myWindow = window as any;
    if (myWindow.FB) {
      myWindow.FB.XFBML.parse();
    }
  }

}
