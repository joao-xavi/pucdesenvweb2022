import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public clienteForm!: FormGroup;
  public titulo = 'Clientes';
  public clienteSelected: Cliente;
  public addCliente = false;
  public modeSave = 'post';

  public clientes: Cliente[];

  constructor(private fb: FormBuilder, private clienteService: ClienteService) 
  {
    this.Form();
  }

 ngOnInit(){
  this.carregarClientes();
 }

 carregarClientes(){
  this.clienteService.getAll().subscribe(
    (clientes: Cliente[]) => {
      this.clientes = clientes;
    },
    (erro: any) => {
      console.error(erro);
    }
  );
 }

  Form() {
    this.clienteForm = this.fb.group({
      id: [''],
      nome: [''],
      login: [''],
      senha: ['']
    });
  }
  
  createCliente(cliente: Cliente) {
    this.clienteService.post(cliente).subscribe(
      (cliente) => {
        console.log(cliente);
        this.carregarClientes();
      },
      (erro: any) => {
        console.log(erro)
      }
    );
  }

  clienteAdd() {
    this.createCliente(this.clienteForm.value);
  }

  saveCliente(cliente: Cliente) {
    this.clienteService.put(cliente.id, cliente).subscribe(
      (cliente) => {
        console.log(cliente);
        this.carregarClientes();
      },
      (erro: any) => {
        console.log(erro)
      }
    );
  }

  async deleteCliente(cliente: Cliente) {
    this.clienteService.delete(cliente.id).subscribe(
      (cliente) => {
        console.log(cliente);
        this.carregarClientes();
      },
      (erro: any) => {
        console.log(erro)
      }
    );
  }

  clienteSubmit() {
    this.saveCliente(this.clienteForm.value);
  }

  clienteSelect(cliente: Cliente) {
    this.modeSave = 'put';
    this.addCliente = false;
    this.clienteSelected = cliente;
    this.clienteForm.patchValue(cliente);
  }

  async clienteDelete(cliente: Cliente) {
    this.deleteCliente(cliente);
    this.clienteForm.patchValue(cliente);
  }

  voltar() {
    this.clienteSelected = null;
  }

  voltarAdd() {
    this.addCliente = false;
  }

  addClienteTela() {
    this.modeSave = 'post';
    this.addCliente = true;
    this.clienteSelected = null;
  }

  

}
