import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
@Injectable()
export class HttpService {
 
    constructor( private http:Http) { 

    }
    
    createHeadersAndOptions(el : any){
      let headers = new Headers({  'Accept': 'application/json',
      'Content-Type': 'application/json'  });
      return {
        headers : headers,
        options : new RequestOptions({ headers: headers }),
        body : JSON.stringify(el)
      }
    }
    getFromId( elId , query ) {
      return this.http.get( query + elId).map((res:Response) => res.json());
    }
    getAll( query ){
      return this.http.get(query).map((res:Response) => res.json());
    }
    update( el, query ) {
      let response = this.createHeadersAndOptions(el);
      return this.http.put( query , response.body , response.options ).map((res: Response) => res.json());
    }
    create( el, query ) {
      let response = this.createHeadersAndOptions(el);
      return this.http.post(query, response.body , response.options ).map((res: Response) => res.json());
    }
    delete(el, query){
      let response = this.createHeadersAndOptions(el);
      return this.http.delete(query , response.options ).map((res: Response) => res.json())
    }
}