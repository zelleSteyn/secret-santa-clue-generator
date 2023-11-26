import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatStepperModule} from '@angular/material/stepper'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { UpdateMyClueComponent } from './update-my-clue/update-my-clue.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateMyClueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
