import { Component, ElementRef, ViewChildren, ViewChild, inject} from '@angular/core';

import { UtilsService } from '../services/utils.service';
import { FirebaseService } from '../services/firebase.service';
import { AddUpdateProductComponent } from '../shared/components/add-update-product/add-update-product.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  firebaseSvc = inject(FirebaseService);
  utilSvc = inject (UtilsService);


  ngOnInit() {
  }
     signOut(){
       this.firebaseSvc.signOut();
     }
  addUpdateProduct(){
    this.utilSvc.presentModal({
      component: AddUpdateProductComponent
    })
  } 
  // mensaje: string = "";
  // @ViewChild(IonCard, { read: ElementRef })
  // card!: ElementRef<HTMLIonCardElement>;

  // private animation!: Animation;

  

  // constructor(private animationCtrl: AnimationController, private rutaActiva: ActivatedRoute) {

    
  // }

  // ngAfterViewInit() {
  //   this.animation = this.animationCtrl
  //     .create()
  //     .addElement(this.card.nativeElement)
  //     .duration(1500)
  //     .iterations(Infinity)
  //     .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
  //     .fromTo('opacity', '1', '0.2');
  // }

  // play() {
  //   this.animation.play();
  // }

  // pause() {
  //   this.animation.pause();
  // }

  // stop() {
  //   this.animation.stop();
  // }

}
