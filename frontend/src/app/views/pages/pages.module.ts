// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';
import { PostsComponent } from './posts/posts.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
	declarations: [PostsComponent, UserManageComponent, AddPostComponent],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		CoreModule,
		PartialsModule,
		MailModule,
	],
	providers: []
})
export class PagesModule {
}
