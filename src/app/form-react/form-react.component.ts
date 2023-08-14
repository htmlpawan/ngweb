import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form-react',
  templateUrl: './form-react.component.html',
  styleUrls: ['./form-react.component.scss']
})
export class FormReactComponent implements OnInit {
  reactForm:FormGroup;
  firstname=  'Pawan';
  secondname='Kumar';
  fullname='';
  constructor(private formBuilder: FormBuilder) { 
   this.reactForm = formBuilder.group({
    item:['',[Validators.required]],
    price:['',[Validators.required]]
   });
  }

  ngOnInit(): void {
    this.fullname = this.firstname+" "+ this.secondname;
  }
  submit(){
    console.log(this.reactForm.value);
  }

  firstcall(val:any){
    console.log(val);
   this.firstname = val;
  }
  secondcall(val:any){
    this.secondname = val;
   }

}
