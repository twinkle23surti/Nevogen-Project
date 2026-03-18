import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { InstallationComponent } from './services/installation/installation.component';
import { SolarOandmComponent } from './services/solar-oandm/solar-oandm.component';
import { SolaradvisoryComponent } from './services/solaradvisory/solaradvisory.component';
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
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  {
    path: 'services',
    children: [
      { path: '', component: ServicesComponent},
      { path: 'service-installation', component: InstallationComponent},
      { path: 'service-advisory', component: SolaradvisoryComponent},
      { path: 'service-o-m', component: SolarOandmComponent },
      { path: 'service-monetring', component: SolarMonetringComponent},
      { path: 'service-software', component: SolarSoftwareComponent}

    ]
  },

  {
    path: 'products',
    children: [
      { path: '', component: ProductsComponent },
      { path: 'product-standard', component: NevogenStandardComponent },
      { path: 'product-enterprise', component: NevogenEnterpriseComponent },
      { path: 'product-royal', component: NevogenRoyalComponent },
      { path: 'product-supreme', component: NevogenSupremeComponent }

    ]
  },

  { path: 'news', component: NewsComponent},
  { path: 'careers', component: CareersComponent},
  { path: 'contact', component: ContactsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
