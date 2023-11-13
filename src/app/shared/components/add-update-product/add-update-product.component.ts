import { Component, OnInit, inject } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.scss'],
})
export class AddUpdateProductComponent  implements OnInit {

  utilSvc = inject (UtilsService);

  ngOnInit() {}

  dismissModal(){
    this.utilSvc.dismissModal();
  }

}
