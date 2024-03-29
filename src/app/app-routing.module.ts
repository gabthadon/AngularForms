import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: 'contact', component:ContactComponent},
{path: 'about', component: AboutComponent},
{path: 'form', component:FormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
