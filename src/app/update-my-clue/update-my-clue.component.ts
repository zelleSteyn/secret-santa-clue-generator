import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Form, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { createClue, updateClue } from '../../graphql/mutations'
import { listClues, suggestClue } from '../../graphql/queries'
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-update-my-clue',
  templateUrl: './update-my-clue.component.html',
  styleUrls: ['./update-my-clue.component.scss']
})


export class UpdateMyClueComponent implements OnInit {
  @ViewChild('stepper')
  private myStepper!: MatStepper;
  myControl = new FormControl('');

  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  options: string[] = [
    'Zelle',
    'Bob',
    'Amy',
    'Jeremy',
    'Jane'
  ];
  filteredOptions!: Observable<string[]>;
  user: any = {};
  clue: string | null | undefined = "";
  backupClue: string | null | undefined= "";
  drawnName: string = "";
  aboutMe: string = "";
  showBedrockInputField = false;
  generating = false;
  clueEntry: any = undefined;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  async ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.user = await getCurrentUser();
    const client = generateClient();
    if (this.user) {
      const clues = await client.graphql({
        query: listClues
      });
      if (clues && clues.data && clues.data.listClues) {
        this.clueEntry = clues.data.listClues.items.find(clue => clue.santaId == this.user.userId);
        if (this.clueEntry) {
          this.clue = this.clueEntry.clue;
          this.drawnName = this.clueEntry.drawnName;
        }
      }
    }
  }

  displayFn(user: string): string {
    return user ? user : '';
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  async generateClue() {
    this.backupClue = this.clue;
    this.clue = "";
    this.generating = true;
    var input = { aboutMe: this.aboutMe, clueFormat: 'short poem' };
    const client = generateClient();
    try {
      const suggestedClue = await client.graphql({
        query: suggestClue,
        variables: input
      });

      if (suggestedClue && suggestedClue.data && suggestedClue.data.suggestClue) {
        this.clue = suggestedClue.data.suggestClue;
        this.showBedrockInputField = false;
        this.generating = false;
        this.myStepper.next();
      }
      else {
        this.clue = this.backupClue;
        this._snackBar.open("Failed to generate clue.",undefined,{verticalPosition:'top',horizontalPosition:'center',duration:3000});
        this.generating = false;
      }

    }
    catch (error) {
      this.clue = this.backupClue;
      this.generating = false;
    }
  }

  async saveClue() {
    const client = generateClient();
    const input:any = {
      santaId: this.user.userId,
      drawnName: this.drawnName,
      clue: this.clue
    }
    var clueExists = false;
    if(this.clueEntry)
    {
      input.id = this.clueEntry.id;
      clueExists = true;
    }

    const addClue:any = await client.graphql({
      query: clueExists ? updateClue : createClue,
      variables: { input:input }
    });
    if (addClue && addClue.data) {
      this.clueEntry = clueExists? addClue.data.updateClue:addClue.data.createClue;
      console.log(addClue.data)
      this._snackBar.open("Clue saved successfully", undefined, {verticalPosition:'top',horizontalPosition:'center', duration: 2000 })
    }
  }

  resetClueForm()
  {
    this.clue = "";
    this.drawnName = "";

  }

  constructor(private _snackBar: MatSnackBar,private _formBuilder: FormBuilder) { }

}
