import {Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {environment } from 'src/app/Environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ReciepeService {
  baseUrl = 'http://localhost:3000/recips' ;
  constructor(private http: HttpClient) {}
  getAllRecipes()
  {
    return this.http.get(`${this.baseUrl}`)
  }
  AddRecipe(model :any)
  {
    return this.http.post(this.baseUrl,model)
  }
  DeleteRecipe(id:number)
  {
    console.log(id)
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
  GetRecipeById(id:number)
  {
    this.http.get(`${this.baseUrl}/${id}`)
  }
  UpdateRecipe(id:number,model:any){
    return  this.http.put(`${this.baseUrl}/${id}`,model);
  }
}
