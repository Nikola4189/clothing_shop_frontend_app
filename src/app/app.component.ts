import { Component } from '@angular/core';
import { UserService } from './auth/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from './auth/profile/profile.component';

import { Router } from '@angular/router';
import { ShoppingService } from './shopping/shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClothShop';

  profileOpened: boolean = false;

  constructor (public userService: UserService, public shoppingService: ShoppingService, public dialog: MatDialog, public router: Router) {}

  // Broj proizvoda u korpi
  countItemsInOrder = this.shoppingService.getCountItemsInOrder();

  openProfile(userId: number) {
    this.profileOpened = true;

    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: '50vw',
      data: {user: this.userService.getUserById(userId)}
    });

    profileDialog.afterClosed().subscribe((r) => {
      this.profileOpened = false;
    });
  }

  onLogout(){
    var currentUser = this.userService.getLoggedUser();

    if (currentUser) {
      currentUser.is_logged = 0;
      this.router.navigate(['']);
  } else {
      console.log('Korisnik nije ulogovan.');
    }
  }
  }

