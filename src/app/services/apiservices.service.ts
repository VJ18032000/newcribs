import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {
  
   host="http://localhost:3000";
   

  constructor(private http: HttpClient) {
   }
 users(){
   return this.http.get(this.host+"/crib/cribs")
 }
 create(data:any){
   return this.http.post(this.host+"/crib/cribs",data)
 }
 delete1(id:any){
  return this.http.delete(this.host+"/crib/cribs/"+id)
}
getcrib(id:any){
  return this.http.get(this.host+"/crib/cribs/"+id)
}
update(id:any,data:any){
  return this.http.put(this.host+"/crib/cribs/"+id,data)
}

}
