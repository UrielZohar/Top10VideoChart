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
  private innerWidth;

  constructor(
    private embedService: EmbedVideoService,
    private appDetailsService: AppDetailsService) {
      
      if (appDetailsService.getIsMobile()) {
        this.innerWidth = appDetailsService.getInnerWidth();
        console.log(this.innerWidth);
        this.sizes = {
          width: this.innerWidth,
          height: 280
        }
      } else {
        appDetailsService.getInnerWidth
        this.sizes = {
          width: 500,
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
