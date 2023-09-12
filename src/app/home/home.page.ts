import { Component, ElementRef, ViewChildren, ViewChild} from '@angular/core';
import type { QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mensaje: string = "";
  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  

  constructor(private animationCtrl: AnimationController, private rutaActiva: ActivatedRoute) {

    this.rutaActiva.queryParams.subscribe(params =>{
      if(params['nombreUsuario']){
        this.mensaje = params['nombreUsuario'];
      }
    })
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }

  play() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }

}
