import { Injectable } from "@angular/core";
import { HttpClient ,HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getFromId(elId, query) {
    return this.http.get(query + '/'+elId);
  }
  getAll(query: string){
    return this.http.get(query);
  }
  update(el, query) {
    return this.http.put(query,el);
  }
  create(el, query) {
    return  this.http.post(query, el);
  }
  delete(query: string, id: number, ){
    return  this.http.delete(query, { params: { id: id.toString() } });
  }

}
