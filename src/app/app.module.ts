import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Webpage2Component } from './webpage2/webpage2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { MatButtonModule } from '@angular/material/button';
import { AboutHospitalComponent } from './about-hospital/about-hospital.component';
import { HospitalTreatmentComponent } from './hospital-treatment/hospital-treatment.component';
import { OurDoctorsComponent } from './our-doctors/our-doctors.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Webpage2Component,
    NavbarComponent,
    ContactUsComponent,
    BookAppointmentComponent,
    AboutHospitalComponent,
    HospitalTreatmentComponent,
    OurDoctorsComponent,
    TestimonialComponent,
    GetInTouchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
