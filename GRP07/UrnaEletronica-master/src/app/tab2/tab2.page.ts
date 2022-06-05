/* eslint-disable id-blacklist */
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  searchCandidates: string;
  candidates = [
    {
      name: 'Homer',
      number: '17',
      image: 'assets/img/17.jpg'
    },
    {
      name: 'Lisa',
      number: '10',
      image: 'assets/img/10.jpg'
    },
    {
      name: 'Bart',
      number: '33',
      image: 'assets/img/33.jpg'
    },

  ];

  totalvoto  = 0;
  count      = 0;
  candidate1 = 0;
  candidate2 = 0;
  candidate3 = 0;
  blank = 0;
  c1=0;
  c2=0;
  c3=0;
  b4=0;
  vencedor=0;
  nomeVencendor='';

  constructor(private alertController: AlertController) { }


  async avisosAlert(mensagem) {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Eleicões 2022!',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }


  ngOnInit() { }

  clearSearch() {
    this.searchCandidates = '';
  }

  inputBranco() {
      this.searchCandidates = '0';
      this.calculateVotes();
    }

  calculateVotes() {

    if(this.totalvoto === 5){
      this.avisosAlert('Votacão Encerrada!');

      console.log(Math.max(this.candidate1, this.candidate2, this.candidate3));

      if(this.candidate1 > this.candidate2){
        this.vencedor = this.candidate1;
        this.nomeVencendor='Homer';
      }else{
        this.vencedor = this.candidate2;
        this.nomeVencendor='Lisa';
      }

      if(this.candidate3 > this.vencedor){
        this.vencedor = this.candidate3;
        this.nomeVencendor='Bart';
      }

      if(this.vencedor < this.blank ){
        this.avisosAlert('Votação terá 2 turno!');
      }else{
      this.avisosAlert('O nomeado para presidente é ' + this.nomeVencendor +' com a quantidade de votos:' +this.vencedor);
     }
      return null;

    }else if( this.searchCandidates === ''|| this.searchCandidates === null|| this.searchCandidates === undefined){
      this.avisosAlert('Digite o número do candidato.');
   }
   else if(this.searchCandidates !== '0' && this.searchCandidates !== '17'
    && this.searchCandidates !== '10' && this.searchCandidates !== '33'){
      this.avisosAlert('Candidato inexistente!');
   }
   else{
    this.avisosAlert('Voto Computado!');
  }


   if(this.searchCandidates === '0'){
    this.blank++ ;
    this.totalvoto++;
    console.log('em branco: ', this.blank );
  }

  if(this.searchCandidates === '17'){
    this.candidate1++;
    this.totalvoto++;
  }

  if(this.searchCandidates === '10'){
    this.candidate2++;
    this.totalvoto++;
  }

  if(this.searchCandidates === '33'){
    this.candidate3++;
    this.totalvoto++;
  }


  this.count = ((this.candidate1 + this.candidate2 + this.candidate3 + this.blank) * 100)/5;
  this.c1 =(this.candidate1 * 100) /5;
  this.c2 =(this.candidate2 * 100) /5;
  this.c3 =(this.candidate3 * 100) /5;
  this.b4 =(this.blank * 100) /5;
  this.clearSearch();
  }
}


