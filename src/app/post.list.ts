
import { Component } from '@angular/core';

@Component({
    selector: 'posts',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let post of posts">
                {{ post }}
            </li>
        </ul>
    `
})
export class PostListComponent{
    title = "List of Posts";
    posts = ["Post 1", "Post 2", "Post 3"]
}