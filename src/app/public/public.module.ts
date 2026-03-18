import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { InstallationComponent } from './services/installation/installation.component';
import { SolaradvisoryComponent } from './services/solaradvisory/solaradvisory.component';
import { SolarOandmComponent } from './services/solar-oandm/solar-oandm.component';
import { SolarMonetringComponent } from './services/solar-monetring/solar-monetring.component';
import { SolarSoftwareComponent } from './services/solar-software/solar-software.component';
import { ProductsComponent } from './products/products.component';
import { NevogenStandardComponent } from './products/nevogen-standard/nevogen-standard.component';
import { NevogenEnterpriseComponent } from './products/nevogen-enterprise/nevogen-enterprise.component';
import { NevogenRoyalComponent } from './products/nevogen-royal/nevogen-royal.component';
import { NevogenSupremeComponent } from './products/nevogen-supreme/nevogen-supreme.component';
import { NewsComponent } from './news/news.component';
import { CareersComponent } from './careers/careers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    InstallationComponent,
    SolaradvisoryComponent,
    SolarOandmComponent,
    SolarMonetringComponent,
    SolarSoftwareComponent,
    ProductsComponent,
    NevogenStandardComponent,
    NevogenEnterpriseComponent,
    NevogenRoyalComponent,
    NevogenSupremeComponent,
    NewsComponent,
    CareersComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
     SharedModule,
     FormsModule
  ]
})
export class PublicModule { }
