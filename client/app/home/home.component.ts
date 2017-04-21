import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Auth } from '../auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { DataService } from '../services/data.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [];
  // isLoading = true;

  product = {};
  isEditing = false;

  Submitted = false;

addProductForm: FormGroup;
  name = new FormControl('', Validators.required);
  email= new FormControl('', Validators.required);
  phone= new FormControl();
  product_invention_name= new FormControl();
  description = new FormControl('', Validators.required);
  benefits_features= new FormControl();
  difference_in_marketplace= new FormControl();
  similar_or_competing= new FormControl();
  being_sold_list= new FormControl();
  cost_to_manufacture= new FormControl();
  prototype_prod_peice_present= new FormControl();
  patent_status= new FormControl();
  other_protection= new FormControl();
  video_product_invention= new FormControl();
  photos_product_invention= new FormControl();
  sales_marketing_brochure= new FormControl();

  constructor(private http: Http,
              private dataService: DataService,
              public toast: ToastComponent,
              private formBuilder: FormBuilder,
              private auth: Auth) { }

  ngOnInit() {

    this.addProductForm = this.formBuilder.group({
      name: this.name,
      email: this.email,
      phone: this.phone,
      product_invention_name: this.product_invention_name,
      description: this.description,
      benefits_features: this.benefits_features,
      difference_in_marketplace: this.difference_in_marketplace,
      similar_or_competing: this.similar_or_competing,
      being_sold_list: this.being_sold_list,
      cost_to_manufacture: this.cost_to_manufacture,
      prototype_prod_peice_present: this.prototype_prod_peice_present,
      patent_status: this.patent_status,
      other_protection: this.other_protection,
      video_product_invention: this.video_product_invention,
      photos_product_invention: this.photos_product_invention,
      sales_marketing_brochure: this.sales_marketing_brochure
    });
  }

  getProducts() {
    this.dataService.getProducts().subscribe(
      data => this.products = data,
      // () => this.isLoading = false
    );
  }

  getProduct(product) {
    this.dataService.getProduct(product).subscribe(
      data => this.product = data,
      // () => this.isLoading = false
    )
  }
  addProduct() {
    this.dataService.addProduct(this.addProductForm.value).subscribe(
      res => {
        const newProduct = res.json();
        this.products.push(newProduct);
        this.Submitted = true;
        this.toast.setMessage('Thank You For Your Submission.', 'success');
      },
      error => console.log(error)
    );
  }

}
