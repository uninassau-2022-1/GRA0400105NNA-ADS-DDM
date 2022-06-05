/* eslint-disable id-blacklist */
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  searchCandidates: string;
  candidates = [{
      name: 'Cabo Daciolo',
      number: '51',
      image: 'assets/img/51.jpg'
    },
    {
      name: 'Marina Silva',
      number: '21',
      image: 'assets/img/21.jpg'
    },
    {
      name: 'Levy Fidelix',
      number: '20',
      image: 'assets/img/20.jpg'
    },

  ];

  cat1 = 0
  cat2 = 0
  cat3 = 0
  vencedor = "";
  catblank = 0
  count = 0;

  candidate1 = 0;
  candidate2 = 0;
  candidate3 = 0;
  blank = 0;
  totalvoto = 0;

  constructor() {}

  ngOnInit() {}

  clearSearch() {
    this.searchCandidates = '';
  }

  while (cont) {

  }

  inputBranco() {
    this.searchCandidates = '0';
    this.calculateVotes();
  }

  calculateVotes() {

    if (this.totalvoto === 5) {

      if (this.candidate1 > this.candidate2 && this.candidate1 > this.candidate3) {

        this.vencedor = "O Candidato vencedor é Cabo Daciolo com " + this.cat1 + "% dos votos!";
   
      }else if(this.candidate2 > this.candidate1 && this.candidate2 > this.candidate3) {
        this.vencedor = "O Candidato vencedor é Marina Silva com " + this.cat2 + "% dos votos!";

      }else if(this.candidate3 > this.candidate1 && this.candidate3 > this.candidate2) {

        this.vencedor = "O Candidato vencedor é Levy Fidelix com " + this.cat3 + "% dos votos!";
      }

      
      alert('Votação encerrada! ' + this.vencedor);

      return null;
    } else if (this.searchCandidates === '' || this.searchCandidates === null || this.searchCandidates === undefined) {
      alert('Digite o número do candidato.');
    } else if (this.searchCandidates !== '0' && this.searchCandidates !== '51' &&
      this.searchCandidates !== '21' && this.searchCandidates !== '20') {
      alert('O candidato informado inexistente! Insira um candidato válido.');
    } else {
      alert('FIM!');
    }


    if (this.searchCandidates === '0') {
      this.blank++;
      this.totalvoto++;
      console.log('em branco: ', this.blank);
    }

    if (this.searchCandidates === '51') {
      this.candidate1++;
      this.totalvoto++;
    }

    if (this.searchCandidates === '21') {
      this.candidate2++;
      this.totalvoto++;
    }

    if (this.searchCandidates === '20') {
      this.candidate3++;
      this.totalvoto++;
    }

    this.count = ((this.candidate1 + this.candidate2 + this.candidate3 + this.blank) * 100) / 5;
    this.cat1 = (this.candidate1 * 100) / 5;
    this.cat2 = (this.candidate2 * 100) / 5;
    this.cat3 = (this.candidate3 * 100) / 5;
    this.catblank = (this.blank * 100) / 5;

    this.clearSearch();
  }

}