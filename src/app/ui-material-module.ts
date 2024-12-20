
import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSliderModule} from '@angular/material/slider';
import {MatBadgeModule} from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({

    imports: [MatButtonModule,
              MatIconModule,
              MatFormFieldModule, 
              MatInputModule, 
              MatDatepickerModule,
              MatNativeDateModule, 
              MatCheckboxModule,
              MatSidenavModule,
              MatToolbarModule,
              MatListModule,
              MatTabsModule,
              MatCardModule,
              MatSelectModule,
              MatDialogModule,
              MatAutocompleteModule,
              MatSliderModule,
              MatBadgeModule,
              MatTableModule,
              ReactiveFormsModule 

            ],
            
    exports: [MatButtonModule, 
              MatIconModule, 
              MatFormFieldModule, 
              MatInputModule, 
              MatDatepickerModule, 
              MatNativeDateModule, 
              MatCheckboxModule,
              MatSidenavModule,
              MatToolbarModule,
              MatListModule,
              MatTabsModule,
              MatCardModule,
              MatSelectModule,
              MatDialogModule,
              MatAutocompleteModule,
              MatSliderModule,
              MatBadgeModule,
              MatTableModule,
              ReactiveFormsModule 
              
            ]
})

export class MaterialModule{ }