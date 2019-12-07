import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';


@NgModule({
    declarations: [

    ],
    imports: [
        BrowserModule,
        AdminLayoutRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],

})
export class AdminLayoutModule { }
