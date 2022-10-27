import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Product } from "../../../interface/interface";


@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      type: new FormControl('',[Validators.required]),
      name: new FormControl('', [Validators.required]),
      photo: new FormControl(null, [Validators.required]),
      info: new FormControl(null, [Validators.required]),
      price: new FormControl(0,[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  submit(){
    if (this.form.invalid) return;

    const product: Product = {
      type: this.form.value.type,
      name: this.form.value.name,
      photo: this.form.value.photo,
      information: this.form.value.info,
      price: this.form.value.price,
    }

//todo delete log
    console.log(this.form.value, "form.value");
  }

}
