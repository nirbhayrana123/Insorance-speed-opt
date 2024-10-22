import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './layout/main/about/about.component';
import { BlogComponent } from './layout/main/blog/blog.component';
import { ContactComponent } from './layout/main/contact/contact.component';
import { DetailsComponent } from './layout/main/details/details.component';
import { EstateplanningComponent } from './layout/main/estateplanning/estateplanning.component';
import { HomeComponent } from './layout/main/home/home.component';
import { InsuranceComponent } from './layout/main/insurance/insurance.component';
import { InvestmentComponent } from './layout/main/investment/investment.component';
import { GetaquoteComponent } from './layout/main/getaquote/getaquote.component';
import { PrivacyComponent } from './layout/main/privacy/privacy.component';
import { EthicsComponent } from './layout/main/ethics/ethics.component';
import { TermsComponent } from './layout/main/terms/terms.component';
import { NotfoundComponent } from './layout/main/notfound/notfound.component';
import { QuotePageComponent } from './layout/main/quote-page/quote-page.component';
import { QuoteBasicInfoComponent } from './layout/main/quote-basic-info/quote-basic-info.component';
import { HealthProfileComponent } from './layout/main/health-profile/health-profile.component';
import { CalculatorComponent } from './layout/main/calculator/calculator.component';
import { NeedAnalysisComponent } from './layout/main/need-analysis/need-analysis.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent, pathMatch: 'full',
    data: {
      "pageTitle": "Estate Nest",
      "description": "Instant no obligation quote: Life insurance | Group Benefits | No-Medical Exam Coverage | Supervisa Insurance"
    }
  },
  {
    path: 'about', component: AboutComponent,

    data: {
      "pageTitle": "About",
      "description": "Estate Nest ties insurance, and investments to protect your family and your lifestyle throughout with coverage and retirement plan"
    }


  },
  {
    path: 'insurance', component: InsuranceComponent,
    data: {
      "pageTitle": "Insurance",
      "description": "Get Free affordable online quotes | Protect your assets | Calculate in Minutes| Life insurance made easy & pleasant"
    }


  },
  {
    path: 'investment', component: InvestmentComponent,
    data: {
      "pageTitle": "Investment",
      "description": "Investments are stressful | Build your plan today | Grow your wealth"
    }
  },
  {
    path: 'estateplanning', component: EstateplanningComponent,

    data: {
      "pageTitle": "Estate Planning",
      "description": "Protect family assets: Will | Power of Attorney | Personal Directive"
    }
  },
  {
    path: 'blog', component: BlogComponent,
    data: {
      "pageTitle": "Blog",
      "description": "Your go-to source for information on estate planning, insurance, and personal finance subjects"
    }

  },
  {
    path: 'contact', component: ContactComponent,
    data: {
      "pageTitle": "Contact",
      "description": "Honest | Keep it simple | Client focussed approach |Positive impact on our partners"
    }

  },
  { path: 'getaquote', component: GetaquoteComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'ethics', component: EthicsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'quote', component: QuotePageComponent },
  { path: 'quoteBasicInfo', component: QuoteBasicInfoComponent },
  { path: 'health-profile', component: HealthProfileComponent },
  { path: 'quote/calculator', component: CalculatorComponent },
  { path: 'quote/insuranceAssesment', component: NeedAnalysisComponent },
  { path: '**', pathMatch: 'full', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }