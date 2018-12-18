import { Component, OnInit } from '@angular/core';
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

  constructor(private videosService: VideosServiceService) { 

    }

  ngOnInit() {
    this.videosService.getAllVideo().subscribe((videos: IVideo[]) => {
      this.videosToShow = videos;
    });
  }

  onVideoTypeChange(newSelectedVideoType: string) {
    this.selectedVideoType = newSelectedVideoType.toLowerCase();
  } 

}
