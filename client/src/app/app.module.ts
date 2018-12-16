import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';

import { AppComponent } from './app.component';
import { ShowVideosComponent } from './components/show-videos/show-videos.component';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';

import { AppDetailsService } from './services/app-details.service';
import { ThousandSuffixesPipe } from './pipes/thousand-suffixes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ShowVideosComponent,
    VideoEmbedComponent,
    ThousandSuffixesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EmbedVideo.forRoot()
  ],
  providers: [
    AppDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
