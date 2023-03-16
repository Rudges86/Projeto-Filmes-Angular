import { ServiceService } from 'src/app/services/service.service';
import { Results } from './../../share/filmes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  filmes !:Results[];
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    const minhaLista = localStorage.getItem("@minhaFlix")
    if(minhaLista){
      this.filmes = JSON.parse(minhaLista);
    }
  }
  excluir(id:number){
    let filtroFilmes = this.filmes.filter((item)=>{
      return item.id !== id;
    })
    this.filmes = filtroFilmes;
    localStorage.setItem("@minhaFlix",JSON.stringify(filtroFilmes));
    this.service.showMensage("Filme excluído com sucesso");
  }
}
