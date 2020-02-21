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
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ClientComponent } from './client/client.component';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { RelatedPostComponent } from './client/related-post/related-post.component';
import { GetInTouchComponent } from './client/get-in-touch/get-in-touch.component';

@NgModule({
	declarations: [PostsComponent, UserManageComponent, AddPostComponent, EditPostComponent, UnpublishedComponent, ConfirmationDialogComponent, ClientComponent, HeaderComponent, FooterComponent, RelatedPostComponent, GetInTouchComponent],
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
