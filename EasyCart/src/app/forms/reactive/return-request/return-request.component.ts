import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-return-request',
  templateUrl: './return-request.component.html',
  styleUrls: ['./return-request.component.css'],
})
export class ReturnRequestComponent {
  returnForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.returnForm = this.fb.group({
      orderId: ['', Validators.required],
      reason: ['', Validators.required],
      comments: ['Enter the comment here', [Validators.maxLength(200)]],
      
      
    });
  }

   checkAge=(input:string)=>{
    //

  }

  submitReturnRequest() {
    if (this.returnForm.valid) {
      this.submitted = true; // Show submitted message only on valid submission
      console.log('Return Request Submitted:', this.returnForm.value);
    }
  }
}
