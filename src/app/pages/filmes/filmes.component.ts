import { Results } from './../../share/filmes';
import { ServiceService } from 'src/app/services/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  filme !:Results
  
  constructor(private router:Router,private route:ActivatedRoute, private service: ServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next:(params)=>{
        this.service.pegaUm(params['id']).subscribe({
          next:(filmeSelecionado)=>{
            this.filme = filmeSelecionado;
            this.filme.vote_average = Math.round(this.filme.vote_average);
          }   
        })
      }
    })
  }

  salvar(){
    const minhaLista = localStorage.getItem("@minhaFlix");
    let filmesSalvos:Results[] = [];
    if(minhaLista){
       filmesSalvos = JSON.parse(minhaLista) ;
    }
    const hasFilme = filmesSalvos.some((filme)=>filme.id === this.filme.id)

    if(hasFilme){
       this.service.showMensage("Filme já existe");
      return ;
    }

    filmesSalvos.push(this.filme);
    localStorage.setItem("@minhaFlix",JSON.stringify(filmesSalvos));
     this.service.showMensage("Salvo com sucesso");

  }
 
}
