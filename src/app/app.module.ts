import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ManClothingComponent } from './clothing/man-clothing/man-clothing.component';
import { WomanClothingComponent } from './clothing/woman-clothing/woman-clothing.component';
import { ChildClothingComponent } from './clothing/child-clothing/child-clothing.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableDataSource } from '@angular/material/table';


import { MaterialModule } from './ui-material-module';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { FormsModule } from '@angular/forms';
import { UserService } from './auth/user.service';
import { ClothingService } from './clothing/clothing.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingService } from './shopping/shopping.service';
import { ShoppingCartComponent } from './shopping/shopping-cart.component';
import { AddInfoDialogComponent } from './clothing/add-info-dialog/add-info-dialog.component';
import { ArticleInfoDialogComponent } from './clothing/article-info-dialog/article-info-dialog.component';






@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    ClothingComponent,
    ManClothingComponent,
    WomanClothingComponent,
    ChildClothingComponent,
    ProfileComponent,
    ShoppingCartComponent,
    AddInfoDialogComponent,
    ArticleInfoDialogComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    UserService,
    ClothingService,
    ShoppingService,
    MatTableDataSource
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
