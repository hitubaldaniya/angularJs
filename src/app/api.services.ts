import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { postsClass } from './posts/posts';

@Injectable()
export class apiServices{
    
    constructor(private httpclient: HttpClient) { }

    getPosts(): Observable<any>{
        return this.httpclient.get('http://localhost:3000/posts');
    }

    getFilteredPost(cat): Observable<any>{
        //let postCategory = new HttpParams().set("postCategory", cat);
        return this.httpclient.get('http://localhost:3000/posts/' + cat)
    }

    addPost(posts:postsClass): Observable<any>{
        return this.httpclient.post('http://localhost:3000/addposts', posts)
    }

}