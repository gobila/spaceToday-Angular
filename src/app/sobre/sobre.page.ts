import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  //navegação do footer
  navigate(){
    this.router.navigate(['/home']);
    this.router.navigate(['/sobre'])
  }
}
