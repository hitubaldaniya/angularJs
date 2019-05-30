import { Component, OnInit, Input } from '@angular/core';
import { apiServices } from '../api.services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private _apiServices: apiServices) { }

  @Input() posts = []
  postCategory = '';
  
  ngOnInit() {
    
    this._apiServices.getPosts()
    .subscribe(
      data => {
        this.posts = data;
      }
    );

  }

  onChangeCategory(){
    this.posts = []
    this._apiServices.getFilteredPost(this.postCategory)
    .subscribe(
      data => {
        this.posts = data;
      }
    );
  }

}
