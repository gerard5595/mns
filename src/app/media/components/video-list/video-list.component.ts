import { Component, OnInit } from '@angular/core';
import { AppVideo } from 'src/app/shared/models/app-video';
import { VideoService } from 'src/app/shared/services/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {


  videos: AppVideo[];

  constructor(private videoService: VideoService) { }


  ngOnInit(): void {

    this.getVideos();
  }

  getVideos(): void {
    this.videoService.getVideos()
      .subscribe(videos => this.videos = videos);
  }

}
