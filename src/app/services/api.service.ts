import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: string = 'https://api.nasa.gov/planetary/apod?api_key=v1hq9QBJCJ0KMFnCL9soFRgPWfbluwHXhJyrkTC2';
  constructor(private http: HttpClient) { }

  readData(){
    return this.http.get(`${this.api}`);

  }

  //Salvando imagem
  saveImage(){
    return this.http.get(`${this.api}`,{
      responseType: 'blob',
      reportProgress:true,
      observe:'events'
    })
  }

}
