import { Component , ViewChild} from '@angular/core';
import { BxmodalComponent } from './bxmodal/bxmodal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('bxmodal') private bxModal: BxmodalComponent;
  
  constructor(){}

   public clickBt() {
      this.bxModal.showModal();
  }
 
}
