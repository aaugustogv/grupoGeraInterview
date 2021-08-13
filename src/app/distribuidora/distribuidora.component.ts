import { Component, OnInit } from '@angular/core';

import { NgbModal,  ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DistribuidoraService } from '../distribuidora.service';
import { DistribuidoraModel } from './distribuidora.model';



@Component({
  selector: 'app-distribuidora',
  templateUrl: './distribuidora.component.html',
  styleUrls: ['./distribuidora.component.scss']
})
export class DistribuidoraComponent implements OnInit {

  distribuidora: DistribuidoraModel = new DistribuidoraModel();
  distribuidoras: Array<any> = new Array;

  formValue: FormGroup;

  closeResult = '';
  
  constructor(
    private distService: DistribuidoraService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.listarDistribuidoras();

    this.formValue = this.formBuilder.group({
      distribuidora:[''],
      endereco:[''],
      nome:[''],
      numero:[''],
      aberto: false
    })
  }

  listarDistribuidoras() {
    this.distService.listarDistribuidoras()
    .subscribe(distribuidoras => {

      this.distribuidoras = distribuidoras;

    }, err => {
      console.log('Error cannot GET', err)
    });
  }

  cadastrar() {
    // console.log(this.distribuidora)
    this.distService.cadastrarDistribuidora(this.distribuidora)
    .subscribe(distribuidora => {

      this.distribuidora = new DistribuidoraModel();
      this.listarDistribuidoras();

    }, err => {
      console.log('Error cannot POST',err)
    });
  }

  //Form 
  postDistribuidoraForm() {

    this.distribuidora.distribuidora = this.formValue.value.distribuidora;
    this.distribuidora.endereco = this.formValue.value.endereco;
    this.distribuidora.nome = this.formValue.value.nome;
    this.distribuidora.numero = this.formValue.value.numero;
    
    this.cadastrar();
  }

   onEdit(distribuidora: any) {
    this.distribuidora.id = distribuidora.id;
    
    this.formValue.controls['distribuidora'].setValue(distribuidora.distribuidora);
    this.formValue.controls['endereco'].setValue(distribuidora.endereco);
    this.formValue.controls['nome'].setValue(distribuidora.nome);
    this.formValue.controls['numero'].setValue(distribuidora.numero);
   }

   updateDistribuidoraFrom() {
    this.distribuidora.distribuidora = this.formValue.value.distribuidora;
    this.distribuidora.endereco = this.formValue.value.endereco;
    this.distribuidora.nome = this.formValue.value.nome;
    this.distribuidora.numero = this.formValue.value.numero;

    this.distService.ataulizarDistribuidora(this.distribuidora, this.distribuidora.id);

    this.atualizar(this.distribuidora.id)
   }
  // fecha form

  atualizar(id:any) {

    this.distService.ataulizarDistribuidora(id, this.distribuidora)
    .subscribe(distribuidora => {

      this.distribuidora = new DistribuidoraModel();
      this.listarDistribuidoras();

    },err => {
      console.log('Error cannot PUT', err)
    });
  }

  remover(id:number) {
    this.distService.removerDistribuidora(id)
    .subscribe(distribuidora => {
      
      this.distribuidora = new DistribuidoraModel();
      this.listarDistribuidoras();

    },err => {
      console.log('Error cannot DELETE', err)
    });
  }


  // Modal
  openCadastrar(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openAtualizar(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //Fatura !!

  openDiv(distribuidora): void {
    let index = this.distribuidoras.findIndex(item => {
      return distribuidora.id === item.id;
    });

    //console.log(index)
    this.distribuidoras[index].aberto = !this.distribuidoras[index].aberto;

    console.table(this.distribuidoras)
  }

}
