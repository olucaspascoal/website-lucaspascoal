import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  todayMonth: any;
  semestreAtual: any;
  today = new Date();
  mes = this.today.getMonth() + 1;
  ano = this.today.getFullYear();

  constructor() { }

  ngOnInit(): void {
    if (this.mes < 10) {
      this.todayMonth = '0' + this.mes;
    } else {
      this.todayMonth = this.mes.toString();
    }
    this.semestre()
  }
  semestre(){
    this.semestreAtual = (((this.ano + 1) - 2020) * 2);
    if(this.todayMonth <= 6){
      this.semestreAtual = this.semestreAtual - 1;
    }
  }
}
