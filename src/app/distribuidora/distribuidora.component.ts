
import { Component, OnInit } from '@angular/core';
import { NgbModal,  ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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

  closeResult = '';

  constructor(
    private distService: DistribuidoraService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.listarDistribuidoras();
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
    //console.log(this.distribuidora)
    this.distService.cadastrarDistribuidora(this.distribuidora)
    .subscribe(distribuidora => {

      this.distribuidora = new DistribuidoraModel();
      this.listarDistribuidoras();

    }, err => {
      console.log('Error cannot POST',err)
    });
  }

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
}
