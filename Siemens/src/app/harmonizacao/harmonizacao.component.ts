import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HarmonizacaoService } from './harmonizacao.service';
import { Harmonizacao } from '../models/harmonizacao';


@Component({
  selector: 'app-harmonizacao',
  templateUrl: './harmonizacao.component.html',
  styleUrls: ['./harmonizacao.component.css']
})
export class HarmonizacaoComponent implements OnInit {

  public harmonizacaoForm!: FormGroup;
  public titulo = 'Harmonizacao';
  public harmonizacaoSelected: Harmonizacao;
  public addHarmonizacao = false;
  public modeSave = 'post';

  public harmonizacoes : Harmonizacao[];

  constructor(private fb: FormBuilder, private harmonizacaoService: HarmonizacaoService) 
  {
    this.Form();
  }

 ngOnInit(){
  this.carregarHarmonizacao();
 }

 carregarHarmonizacao(){
  this.harmonizacaoService.getAll().subscribe(
    (harmonizacao: Harmonizacao[]) => {
      this.harmonizacoes = harmonizacao;
    },
    (erro: any) => {
      console.error(erro);
    }
  );
 }

  Form() {
    this.harmonizacaoForm = this.fb.group({
      id: [''],
      nome: [''],
      descricao: [''],
      bebida: [''],
      imagem: [''],

    });
  }
  
  createHarmonizacao(harmonizacao: Harmonizacao) {
    this.harmonizacaoService.post(harmonizacao).subscribe(
      (harmonizacao) => {
        console.log(harmonizacao);
        this.addHarmonizacao = null;
        this.carregarHarmonizacao();
      },
      (erro: any) => {
        console.log(erro)
      }
    );
  }

  saveHarmonizacao(harmonizacao: Harmonizacao) {
    this.harmonizacaoService.update(harmonizacao.id, harmonizacao).subscribe(
      (harmonizacao) => {
        console.log(harmonizacao);
        this.carregarHarmonizacao();
      },
      (erro: any) => {
        console.log(erro)
      }
    );
  }

  async deleteHarmonizacao(harmonizacao: Harmonizacao) {
    this.harmonizacaoService.delete(harmonizacao.id).subscribe(
      (harmonizacao) => {
        console.log(harmonizacao);
        this.carregarHarmonizacao();
      },
      (erro: any) => {
        console.log(erro)
      }
    );
  }

  harmonizacaoSubmit() {
    this.saveHarmonizacao(this.harmonizacaoForm.value);
  }

  
  harmonizacaoAdd() {
    this.createHarmonizacao(this.harmonizacaoForm.value);
  }


  harmonizacaoSelect(harmonizacao: Harmonizacao) {
    this.modeSave = 'put';
    this.harmonizacaoSelected = harmonizacao;
    this.addHarmonizacao = false;
    this.harmonizacaoForm.patchValue(harmonizacao);
  }

  // async harmonizacaoDelete(harmonizacao: Harmonizacao) {
  //   this.harmonizacaoDelete(harmonizacao);
  //   this.harmonizacaoForm.patchValue(harmonizacao);
  // }

  voltar() {
    this.addHarmonizacao = false;
  }

  voltarAdd() {
    this.addHarmonizacao = null;
  }

  addHarmonizacaoTela() {
    this.modeSave = 'post';
    this.addHarmonizacao = true;
    this.harmonizacaoSelected = null;
  }
  

}
