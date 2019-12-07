import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule, FormsModule, BrowserModule, ReactiveFormsModule, RouterModule
  ],
  exports: [
    NavbarComponent, SidebarComponent, FooterComponent
  ]
})
export class ComponentsModule { }
