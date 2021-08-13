import { Injectable } from '@angular/core';

import { NgbModal,  ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DistribuidoraModel } from './distribuidora/distribuidora.model';

@Injectable({
  providedIn: 'root'
})
export class DistribuidoraService {


  constructor(private http: HttpClient) { }

  listarDistribuidoras(): Observable<any> {
    return this.http.get("http://localhost:3000/distribuidoras/");
  }

  cadastrarDistribuidora(distribuidora: DistribuidoraModel): Observable<any> {
    return this.http.post("http://localhost:3000/distribuidoras/", distribuidora);
  }

  ataulizarDistribuidora(id: any, distribuidora: DistribuidoraModel): Observable<any> {
    return this.http.put("http://localhost:3000/distribuidoras/".concat(id), distribuidora);
  }

  removerDistribuidora(id: any) {
    return this.http.delete("http://localhost:3000/distribuidoras/".concat(id));
  }
  
}
