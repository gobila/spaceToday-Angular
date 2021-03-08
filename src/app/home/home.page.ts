import { Component } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { DescricaoPage } from '../modals/descricao/descricao.page';
import { ApiService } from '../services/api.service';
import {Plugins, FilesystemDirectory} from '@capacitor/core';
import { HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

const {Filesystem, Storage} = Plugins;
const FILE_KEY ='files'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  constructor(private apiService:ApiService,
              private modalController:ModalController,
              private router:Router) {
    this.readData();
    this.saveImage()
  }
  space:any=[];
  imgUrl:string;
  myFiles=[];
  downlodProgress=0;

  //Pegando dados da API
  readData(){
    this.apiService.readData().subscribe(data=>{
      //console.log(data);
      this.space = data;
    })
  }

  //MODAL
  dataReturn: any;
  async openModal(){
    const modal = await this.modalController.create({
      component: DescricaoPage,
      componentProps:{
        "ParamTitle":this.space.title,
        "paramDesc":this.space.explanation,
      }
    });

    modal.onDidDismiss().then((dataReturned)=>{
      if (dataReturned !== null) {
        this.dataReturn = dataReturned;
      }
    });
    return await modal.present();
  }
//Salvando imagem
 saveImage(){
  this.imgUrl=this.space.url;
  this.apiService.saveImage().subscribe(async event=>{
    if(event.type ===HttpEventType.Response){
      this.downlodProgress = 0;

      const name = this.imgUrl.substr(this.imgUrl.lastIndexOf('/')+1);
      const base64 = await this.convertBlobToBase64(event.body) as string;

      const save = await Filesystem.writeFile({
        path:name,
        data:base64,
        directory:FilesystemDirectory.Documents,
      });
      console.log('save', save)

      const path = save.uri;

      this.myFiles.unshift(path);

      Storage.set({
        key:FILE_KEY,
        value:JSON.stringify(this.myFiles)
      })
    }
  })
}
  
  //convertendo arquivos
  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  //navegação do footer
  navigate(){
    this.router.navigate(['/home']);
    this.router.navigate(['/sobre'])
  }
}