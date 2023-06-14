import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Estudantes } from '../estudante';

@Component({
  selector: 'app-estudantes-form',
  templateUrl: './estudantes-form.component.html',
  styleUrls: ['./estudantes-form.component.css']
})
export class EstudantesFormComponent implements OnChanges {
  @Input()
  estudante: Estudantes = {} as Estudantes;

  @Output()
  saveEvent = new EventEmitter<Estudantes>();

  @Output()
  exibirEvent = new EventEmitter<boolean>();

  formGroupEstudante: FormGroup;

  constructor (private formBuilder: FormBuilder) {
    this.formGroupEstudante = this.formBuilder.group({
      id: [''],
      nome: [''],
      idade: [''],
      telefone: [''],
      email: ['']
    });
  }
  ngOnChanges(chagnes: SimpleChanges): void {
    this.formGroupEstudante.setValue(this.estudante);
  }

  save() {
    this.saveEvent.emit(this.formGroupEstudante.value);
    this.formGroupEstudante.reset();
  }

  clean() {
    this.formGroupEstudante.reset();
  }
}
