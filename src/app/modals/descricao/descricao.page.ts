import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.page.html',
  styleUrls: ['./descricao.page.scss'],
})
export class DescricaoPage implements OnInit {

  modalTitle: string;
  modalDesc:string;


  constructor( private modalController: ModalController,
              private navParams: NavParams) { }
  //Passando os dados para a page 
  ngOnInit() {
    console.table(this.navParams);
    this.modalTitle = this.navParams.data.paramTitle; //caso eu decida colocar o titulo junto
    this.modalDesc = this.navParams.data.paramDesc;
  }

  async closeModal(){
    await this.modalController.dismiss();
  }

}
