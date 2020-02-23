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
import { EditPostComponent } from './edit-post/edit-post.component';
import { UnpublishedComponent } from './unpublished/unpublished.component';
import { ClientComponent } from './client/client.component';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { RelatedPostComponent } from './client/related-post/related-post.component';
import { GetInTouchComponent } from './client/get-in-touch/get-in-touch.component';
import { ReadPostComponent } from './client/read-post/read-post.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
	declarations: [PostsComponent, UserManageComponent, AddPostComponent, EditPostComponent, UnpublishedComponent, ClientComponent, HeaderComponent, FooterComponent, RelatedPostComponent, GetInTouchComponent, ReadPostComponent],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		CKEditorModule,
		ReactiveFormsModule,
		CoreModule,
		PartialsModule,
		MailModule,
	],
	providers: []
})
export class PagesModule {
}
