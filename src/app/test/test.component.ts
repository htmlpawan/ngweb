import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  reactiveFrom:any;
  getVal:string = '';
  constructor(private formBuilder:FormBuilder) { 
    this.reactiveFrom = formBuilder.group({
      email: ['',[Validators.email, Validators.required]],
      mobile: ['',[Validators.required, Validators.pattern('^[0-9]{10}$')]],
      age:['', [Validators.required, Validators.min(18), Validators.max(100)]]
    });
  }
  ngOnInit(): void {
    // Initialize the form with default values and validators

  //  const myPromise = new Promise((resolve, reject)=>{
  //   setTimeout(() => {
  //     const randomValue = Math.random();
  //     if (randomValue < 0.5) {
  //       // Task successful
  //       resolve(`Success! Random value: ${randomValue}`);
  //     } else {
  //       // Task failed
  //       reject(new Error(`Error! Random value: ${randomValue}`));
  //     }
  //   }, 2000);
  //  });

  //  myPromise.then(function(data){
  //      console.log(data,"pawan");
  //  });

}

submit(){
  console.log(this.reactiveFrom.value);
}
}


