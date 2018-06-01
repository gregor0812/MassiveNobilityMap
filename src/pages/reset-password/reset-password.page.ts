import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NavController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service';
import { LoginPage } from '../login/login.page';

@Component({
	selector: 'as-page-reset-password',
	templateUrl: './reset-password.page.html'
})
export class ResetPasswordPage {
	signupError: string;
	form: FormGroup;

	constructor(
		fb: FormBuilder,
		private navCtrl: NavController,
		private auth: AuthService,
		private toastCtrl: ToastController
	) {
		this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])]
		});
	}

	resetPassword() {
		let data = this.form.value;
		this.auth.resetPassword(data.email)
			.then(
				() => {
					this.toastCtrl.create({
						message: 'Check your email for further instructions',
						duration: 3000,
						position: 'bottom'
					}).present();

					this.navCtrl.setRoot(LoginPage);
				},
				error => this.signupError = error.message
			);
	}
}
