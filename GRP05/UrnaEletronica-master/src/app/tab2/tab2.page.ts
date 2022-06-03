/* eslint-disable id-blacklist */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  searchCandidates: string;
  candidates = [
    {
      name: 'Ciro Gomes',
      number: '12',
      image: 'assets/img/12.jpg'
    },
    {
      name: 'Luiz Inacio',
      number: '13',
      image: 'assets/img/13.jpg'
    },
    {
      name: 'Jair Bolsonaro',
      number: '17',
      image: 'assets/img/17.jpg'
    },

  ];
  i=0;
  cat1= 0;
  cat2= 0;
  cat3= 0;
  count = 0;
  candidate1 = 0;
  candidate2 = 0;
  candidate3 = 0;
  blank = 0;
  c1 = 0;
  c2 = 0;
  c3 = 0;



  ngOnInit() { }

  clearSearch() {
    this.searchCandidates = '';
  }

  inputBranco() {
    this.searchCandidates = '0';
    this.calculateVotes();
  }


  calculateVotes() {
   if( this.searchCandidates === ''|| this.searchCandidates === null|| this.searchCandidates === undefined){
    alert('Digite o número do candidato.');
   }
   else if(this.searchCandidates !== '0' && this.searchCandidates !== '12'
    && this.searchCandidates !== '13' && this.searchCandidates !== '17'){
    alert('O candidato informado não existe! Insira o número correto.');
   }
   else{
    alert('FIM!');
   }


   if(this.searchCandidates === '0'){
    this.blank++ ;
    console.log('em branco: ', this.blank );
  }

  if(this.searchCandidates === '12'){
    this.candidate1++;
  }

  if(this.searchCandidates === '13'){
    this.candidate2++;
  }

  if(this.searchCandidates === '17'){
    this.candidate3++;
  }

    do(this.i == 5 ) {
    this.i++;

    while(this.count < this.i){
      alert('fim votação');
    };
  } 
  this.count = ((this.candidate1 + this.candidate2 + this.candidate3 + this.blank) * 100)/5;
  this.cat1 =(this.candidate1 * 100) /5;
  this.cat2 =(this.candidate2 * 100) /5;
  this.cat3 =(this.candidate3 * 100) /5;
  this.clearSearch();
  }

}
