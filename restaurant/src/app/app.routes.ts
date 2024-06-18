import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [

    {
        path:'',
        component:MainComponent,
        title:'მთავარი'
    },
    {
        path:'about',
        component:AboutComponent,
        title:'ჩვენს შესახებ'
    },
    {
        path:'cart',
        component:CartComponent,
        title:'კალათა'
    },
    {
        path:'contact',
        component:ContactComponent,
        title:'კონტაქტი'
    },
    {
        // დეტალების კომპონენტთან ერთად გადაეცემა id-იც 
        path:'details/:id',
        component:DetailsComponent,
        title:'დეტალ'

    }
    
];
