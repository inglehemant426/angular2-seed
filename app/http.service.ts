import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class HttpService{
    constructor(private http: Http) {}
    getData() {
        // here we are returning the observable
        return this.http.get('https://angular2-course-4ab63.firebaseio.com/title.json').map((response: Response) => response.json());
        //https://angular2-course-4ab63.firebaseio.com/title - this is firebase url , so 
        // to get the value append .json at the end of url
    }

    //post call
    sendData(user:any) {
        let body = JSON.stringify(user); // only string text can be sent with post request 
        // return an observable
        return this.http.post('https://angular2-course-4ab63.firebaseio.com/data.json',body,null)
        .map((response: Response) => response.json())
        .catch(this.handleError);
    }

    private handleError(error:any) {
        console.log(error);
        return Observable.throw(error.json());
    }

}