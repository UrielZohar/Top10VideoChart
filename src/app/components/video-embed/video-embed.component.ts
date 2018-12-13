import { AppDetailsService } from './../../services/app-details.service';
import { EmbedVideoService } from 'ngx-embed-video';
import { Component, OnInit, Input } from '@angular/core';
import { IVideo } from 'src/app/interfaces/video';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent implements OnInit {
  @Input('videoCfg') videoCfg: IVideo;
  @Input('index') index: IVideo;
  private embedHTML;
  private facebookLink;
  private sizes;

  constructor(
    private embedService: EmbedVideoService,
    private appDetailsService: AppDetailsService) {

      if (appDetailsService.getIsMobile) {
        this.sizes = {
          width: "100%",
          height: 280
        }
      } else {
        this.sizes = {
          width: 540,
          height: 280
        }
      }
  }

  ngOnInit() {
    // generate the embed code
    switch (this.videoCfg && this.videoCfg.source) {
      case("youtube"): {
        this.embedHTML = this.embedService.embed_youtube(this.videoCfg.videoId, {
          attr: { 
            width: this.sizes.width, 
            height: this.sizes.height 
          }
        });
        break;
      }

      case("facebook"): {
        this.facebookLink = `https://www.facebook.com/facebook/videos/${this.videoCfg.videoId}`;
        break;
      }
    }
  }

}
