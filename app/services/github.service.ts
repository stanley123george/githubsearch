import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
    private username='stanley123george';
    private client_id ='d5e4b436e508322fdc1a';
    private client_secret ='70f3ed407ca6f1dae64631ad932ff5acea3ea4de';
   constructor(private _http: Http){
       console.log('smaranje');
   }
   getUser(){
     return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
     .map(res => res.json());
   }
   getRepos(){
     return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
     .map(res => res.json());
   }
     updateUsername(username:any){
        this.username = username;
    }
   
   
}