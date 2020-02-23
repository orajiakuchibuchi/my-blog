// Angular
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Components
import {BaseComponent} from './views/theme/base/base.component';
import {ErrorPageComponent} from './views/theme/content/error-page/error-page.component';
// Auth
import {AuthGuard} from './core/auth';
import {PostsComponent} from "./views/pages/posts/posts.component";
import {UserManageComponent} from "./views/pages/user-manage/user-manage.component";
import {AddPostComponent} from "./views/pages/add-post/add-post.component";
import {EditPostComponent} from "./views/pages/edit-post/edit-post.component";
import {UnpublishedComponent} from "./views/pages/unpublished/unpublished.component";
import {ClientComponent} from "./views/pages/client/client.component";
import {ReadPostComponent} from "./views/pages/client/read-post/read-post.component";

const routes: Routes = [
	{path: '',
	 component: ClientComponent
	},
	{path: 'post',
		component: ReadPostComponent
	},
	{path: 'auth', loadChildren: () => import('app/views/pages/auth/auth.module').then(m => m.AuthModule)},
	{
		path: 'admin',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'admin/posts',
				component: PostsComponent
			},
			{
				path: 'admin/unpublished',
				component: UnpublishedComponent
			},
			{
				path: 'addpost',
				component: AddPostComponent
			},
			{
				path: 'editpost/:id',
				component: EditPostComponent
			},
			{
				path: 'usermanagement',
				component: UserManageComponent
			},
			{
				path: 'dashboard',
				loadChildren: () => import('app/views/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
			},
			{
				path: 'mail',
				loadChildren: () => import('app/views/pages/apps/mail/mail.module').then(m => m.MailModule),
			},
			{
				path: 'error/403',
				component: ErrorPageComponent,
				data: {
					type: 'error-v6',
					code: 403,
					title: '403... Access forbidden',
					desc: 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator',
				},
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
			{path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
		],
	},

	{path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
