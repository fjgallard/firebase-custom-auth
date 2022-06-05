import { Injectable } from '@angular/core';
import { Auth, signInWithCustomToken, signOut, User } from '@angular/fire/auth';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $user = new BehaviorSubject<User | null>(null);
  constructor(private auth: Auth) {
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

  async login(token: string) {
    const { user } = await signInWithCustomToken(this.auth, token);
    this.$user.next(user);
  }

  logout() {
    signOut(this.auth);
  }
}
