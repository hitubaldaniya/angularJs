import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { apiServices } from '../api.services';
import { postsClass } from '../posts/posts';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent  implements OnInit {

  constructor(private _apiServices: apiServices) { }

  ngOnInit() {  }

  @Input() posts = []
  @Input() valid = []

  postTitle = '';
  postContent = '';
  postCategory = '';
  @Output() postCreated = new EventEmitter();

  onAddPost(){
    const post =  new postsClass();
    post.postCategory = this.postCategory;
    post.postTitle = this.postTitle;
    post.postContent = this.postContent;
    
    if(!this.postCategory || !this.postTitle || !this.postContent){
      alert("Please fill required field!");
      this.posts = [{status:false, msg:'Please fill require fields!'}];
    }else{
      this._apiServices.addPost(post)
      .subscribe(
        data => {
          this.posts = data;
          this.postCategory = '';
          this.postTitle = '';
          this.postContent = '';
        }
      );
    }
    //this.postCreated.emit(post);
  }

  formatDate(date) {
    var monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October","November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

}
