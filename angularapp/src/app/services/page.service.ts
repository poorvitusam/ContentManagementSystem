import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class PageService {

  constructor(private http: Http) { }

  public pagesBS = new BehaviorSubject<string>(null);

  getPages(){
    return this.http.get('http://localhost:3000/pages')
      .map(res => res.json());
  }

  getPage(slug){
    return this.http.get('http://localhost:3000/pages/' + slug)
      .map(res => res.json());
  }

  getEditPage(id){
    return this.http.get('http://localhost:3000/pages/edit-page/' + id)
      .map(res => res.json());
  }

  postEditPage(value) {
      return this.http.post('http://localhost:3000/pages/edit-page/'+value.id, value)
          .map(res => res.json());
      // return this.http.post('http://localhost:3000/pages/edit-page/'+value.id, value);
  }
  

}
