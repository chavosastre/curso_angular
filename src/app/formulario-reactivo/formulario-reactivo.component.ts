import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.css'
})
export class FormularioReactivoComponent {

  constructor(private fb: FormBuilder){

  }

  get name(){
    return this.formUser.get('name') as FormControl;
  }

  get email(){
    return this.formUser.get('email') as FormControl;
  }

  // formUser = new FormGroup({
  //   'name' : new FormControl('', Validators.required),
  //   'email' : new FormControl('', [Validators.required, Validators.email]),
  // });
  formUser = this.fb.group({
    'name' : ['', Validators.required],
    'email' : ['', [Validators.required, Validators.email]],
  });

  procesar(){
    console.log(this.formUser.value);
  }
  // name = new FormControl('', Validators.required);
  // email = new FormControl('', [Validators.required, Validators.email]);

}
