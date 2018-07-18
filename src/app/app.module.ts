import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComputeInterestComponent } from './compute-interest/compute-interest.component';
import { ComputeInterest2Component } from './compute-interest2/compute-interest2.component';
import { IfAndForDemoComponent } from './if-and-for-demo/if-and-for-demo.component';
import { TodayDirective } from './today.directive';
import { GreetDirective } from './greet.directive';
import { BuiltinPipesDemoComponent } from './builtin-pipes-demo/builtin-pipes-demo.component';
import { CustomPipeDemoPipe } from './custom-pipe-demo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComputeInterestComponent,
    ComputeInterest2Component,
    IfAndForDemoComponent,
    TodayDirective,
    GreetDirective,
    BuiltinPipesDemoComponent,
    CustomPipeDemoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
