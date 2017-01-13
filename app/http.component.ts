import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  moduleId:module.id,  
  selector: 'http-app',
  templateUrl: 'http.component.html',
  providers: [HttpService]
})
export class HttpAppComponent  {  
    constructor(private httpService : HttpService) {

    }

    ngOnInit() {
        this.httpService.getData()
            .subscribe(
                (data) => {
                    console.log("data from server :",data);
                }
            );
    }
    // post call
    onSubmit(username:string,email:string) {
        this.httpService.sendData({username:username, email:email})
        .subscribe((data:any) => console.log("data posted :",data),
        (error) => { console.log("error : ",error)}
        )
    }
}
