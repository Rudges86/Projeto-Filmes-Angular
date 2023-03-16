import { Ifilme, Results } from './../../share/filmes';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filmes !:Ifilme;
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.pegaFilmes().subscribe({
      next: (x)=> {
        this.filmes = x;
      },
      error:(e)=> console.log(e)
    })
  }

}
