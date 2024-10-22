import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './layout/main/about/about.component';
import { BlogComponent } from './layout/main/blog/blog.component';
import { ContactComponent } from './layout/main/contact/contact.component';
import { DetailsComponent } from './layout/main/details/details.component';
import { EstateplanningComponent } from './layout/main/estateplanning/estateplanning.component';
import { InsuranceComponent } from './layout/main/insurance/insurance.component';
import { InvestmentComponent } from './layout/main/investment/investment.component';
import { HomeComponent } from './layout/main/home/home.component';
import { NotfoundComponent } from './layout/main/notfound/notfound.component';
import { GetaquoteComponent } from './layout/main/getaquote/getaquote.component';
import { PrivacyComponent } from './layout/main/privacy/privacy.component';
import { TermsComponent } from './layout/main/terms/terms.component';
import { EthicsComponent } from './layout/main/ethics/ethics.component';
import { RouterModule, Routes } from '@angular/router';
import { QuotePageComponent } from './layout/main/quote-page/quote-page.component';
import { QuoteBasicInfoComponent } from './layout/main/quote-basic-info/quote-basic-info.component';
import { HealthProfileComponent } from './layout/main/health-profile/health-profile.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastrModule } from 'ngx-toastr';
import { CalculatorComponent } from './layout/main/calculator/calculator.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NeedAnalysisComponent } from './layout/main/need-analysis/need-analysis.component';
import { NgxSpinnerModule } from 'ngx-spinner';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      pageTitle: 'Estate Nest',
      description:
        'Instant no obligation quote: Life insurance | Group Benefits | No-Medical Exam Coverage | Supervisa Insurance',
    },
  },
  {
    path: 'about',
    component: AboutComponent,

    data: {
      pageTitle: 'About',
      description:
        'Estate Nest ties insurance, and investments to protect your family and your lifestyle throughout with coverage and retirement plan',
    },
  },
  {
    path: 'insurance',
    component: InsuranceComponent,
    data: {
      pageTitle: 'Insurance',
      description:
        'Get Free affordable online quotes | Protect your assets | Calculate in Minutes| Life insurance made easy & pleasant',
    },
  },
  {
    path: 'investment',
    component: InvestmentComponent,
    data: {
      pageTitle: 'Investment',
      description:
        'Investments are stressful | Build your plan today | Grow your wealth',
    },
  },
  {
    path: 'estateplanning',
    component: EstateplanningComponent,

    data: {
      pageTitle: 'Estate Planning',
      description:
        'Protect family assets: Will | Power of Attorney | Personal Directive',
    },
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      pageTitle: 'Blog',
      description:
        'Your go-to source for information on estate planning, insurance, and personal finance subjects',
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      pageTitle: 'Contact',
      description:
        'Honest | Keep it simple | Client focussed approach |Positive impact on our partners',
    },
  },
  { path: 'getaquote', component: GetaquoteComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'ethics', component: EthicsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'quote', component: QuotePageComponent },
  { path: '**', pathMatch: 'full', component: NotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    DetailsComponent,
    EstateplanningComponent,
    InsuranceComponent,
    InvestmentComponent,
    HomeComponent,
    NotfoundComponent,
    GetaquoteComponent,
    PrivacyComponent,
    TermsComponent,
    EthicsComponent,
    QuotePageComponent,
    QuoteBasicInfoComponent,
    HealthProfileComponent,
    CalculatorComponent,
    NeedAnalysisComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      useHash: false,
    }),
    TabsModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
