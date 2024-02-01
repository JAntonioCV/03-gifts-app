import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';
import { Onclick } from '../../../gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsservice: GifsService) {}

  get tags(){
    return this.gifsservice.tagsHistory;
  }

  searchTag( tag: string): void {
    this.gifsservice.searchTag(tag);
  }
}
