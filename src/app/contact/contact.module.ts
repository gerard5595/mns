import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactComponent } from './components/contact/contact.component';


import { ReactiveFormsModule } from '@angular/forms';
import { ContactMapComponent } from './components/contact-map/contact-map.component';
import { GMapModule } from 'primeng/gmap';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';

import { RippleModule } from 'primeng/ripple';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' }
  }];

@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent,
    ContactMapComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GMapModule,
    SharedModule, // To use shared function .ie. Title
    InputTextModule,
    CheckboxModule,
    DialogModule,
    ButtonModule,
    RippleModule,
    TabViewModule,
    InputTextareaModule,
    RouterModule.forChild(routes)
  ],

  exports: [ContactFormComponent]

})
export class ContactModule { }
