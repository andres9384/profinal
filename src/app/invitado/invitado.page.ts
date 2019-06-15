import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitado',
  templateUrl: './invitado.page.html',
  styleUrls: ['./invitado.page.scss'],
})
export class InvitadoPage implements OnInit {

  title : String;  
  number: number;
  constructor() { }

  ngOnInit() {
    this.title = 'My first AGM project';
    this.number = 51.678418;
    this.number = 7.809007;
  }

}
