import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app.routing.module';
import { TestDataComponent } from './test-data/test-data.component';

@NgModule({
  declarations: [AppComponent, TestComponent, TestDataComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
