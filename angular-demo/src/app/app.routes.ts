import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { FromsComponent } from './component/froms/froms.component';

export const routes: Routes = [
    {
        path:'emp',
        component:AddEmployeeComponent
    },
    {
        path:'data',
        component:DataBindingComponent
    },
    {
        path:'forms',
        component:FromsComponent
    }
];
