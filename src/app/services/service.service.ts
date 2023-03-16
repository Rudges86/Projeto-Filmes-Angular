import { Ifilme, Results } from './../share/filmes';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{MatSnackBar} from '@angular/material/snack-bar'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl: string = "https://api.themoviedb.org/3/movie/now_playing";
  testeUrl:string = "https://api.themoviedb.org/3/";
  params:HttpParams = new HttpParams();
  
  constructor(private http: HttpClient,private snackBar: MatSnackBar) { }

  pegaFilmes(): Observable<Ifilme> {
     this.addParams();
    return this.http.get<Ifilme>(this.baseUrl,{params:this.params});
    
  }

  pegaUm(id:string):Observable<Results>{
    this.addParams();
    return this.http.get<Results>(`${this.testeUrl}movie/${id}`,{params:this.params});
  }

   private addParams(){
     this.params = this.params.set("api_key","7e2a22cf4a08c0b8c1211e0560cc5809")
     this.params = this.params.set("language","pt-BR"),
     this.params = this.params.set("page",1)
   }


   showMensage(msg:string):void{

    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top",
    })
  }
}
