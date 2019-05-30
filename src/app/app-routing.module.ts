import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component:HomeComponent },
    { path: 'add-post', component:AddPostComponent },
    { path: 'posts', component:PostsComponent },
    { path: 'posts/:postCategory', component:PostsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [PostsComponent]