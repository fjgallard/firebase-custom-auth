import { Injectable } from '@angular/core';
import { Auth, signInWithCustomToken, signOut, User } from '@angular/fire/auth';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $user = new BehaviorSubject<User | null>(null);

  constructor(
    private auth: Auth,
    private functions: Functions
  ) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.$user.next(user);
      } else {
        this.$user.next(null);
      }
    })
  }

  get user$() {
    return this.$user.asObservable();
  }

  signInWithPhoneNumber(mobile: string) {
    const command = httpsCallable(this.functions, 'mobileLogin');
    return command({mobile});
  }

  async verifyOtp(otp: string) {
    const command = httpsCallable<any, string>(this.functions, 'verifyOtp');
    const token = await command({ otp });

    this.login(token.data);
  }

  async login(token: string) {
    const { user } = await signInWithCustomToken(this.auth, token);
    this.$user.next(user);
  }

  logout() {
    signOut(this.auth);
  }
}
