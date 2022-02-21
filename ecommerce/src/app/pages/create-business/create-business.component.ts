import { Component, OnInit } from '@angular/core';


import { BusinessDetailsService } from 'src/app/services/business-details.service';

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.css']
})
export class CreateBusinessComponent {

  constructor(private service: BusinessDetailsService) { }

  ngOnInit(): void {
  }

  // i have defined the method and then i am capturing the form
  addNewBusiness(form: any) {
    console.log(form.value);

    // i created an object, assign all the values from the form to the object - newBusiness - 
    // passing  the object to the create method. In the create method, in the Service, we are doing 
    // a post, because we are creating a new resource
    let newBusiness = {
      'id': 7,
      'businessName': form.value.businessName,
      'assetType': form.value.assetType,
      'monthlyNetProfit': form.value.monthlyNetProfit,
      'price': form.value.businessPrice,
      'summary': form.value.description,
      'location': form.value.location

    };
    console.log(newBusiness);

    // i am calling the business service and then calling the create business and passing a newBusiness 
    // and then subscribing it to the data. once it loads the data should appear on the screen 
    this.service.createBusiness(newBusiness).subscribe(data => {
      console.log(data);
    });

  }
}

// i created an object, assign all the values from the form to the object - newBusiness - 
// passing  the object to the create method. in the create method, in the ServiceWorker, we are doing 
// a post, because we are creating a new resource