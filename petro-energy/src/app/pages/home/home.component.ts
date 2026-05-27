import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor, NgClass, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, NgClass, JsonPipe],   // ← Adicionado NgFor e NgClass
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private http = inject(HttpClient);

  featuredPosts = [
    {
      id: 1,
      title: 'Inauguração do Campo de Águas Profundas no Pré-Sal',
      excerpt: 'A Petro Energy iniciou a operação do maior campo de águas profundas do hemisfério sul, consolidando nossa liderança em exploração offshore com tecnologia de ponta.',
      date: '15 MAR 26',
      image: '/foto1.jpg'
    },
    {
      id: 2,
      title: 'Nova Geração: Combustíveis Mais Limpos para o Futuro',
      excerpt: 'Nossa nova refinaria em Sergipe produzirá combustíveis com padrão Euro 6, representando um avanço significativo na qualidade dos derivados de petróleo nacionais.',
      date: '02 FEV 26',
      image: '/foto2.jpg'
    },
    {
      id: 3,
      title: 'Plataforma Horizonte Verde: Energia com Responsabilidade',
      excerpt: 'A nova plataforma da Petro Energy integra sistemas de captura de carbono e geração eólica offshore, redefinindo os padrões da indústria petroleira mundial.',
      date: '18 JAN 26',
      image: '/foto3.jpg'
    }
  ];

  isLoading = false;
  backendData: any[] = []; //array
  errorMessage = '';

  carregarDadosDoBackend() {
    this.isLoading = true;
    this.errorMessage = '';
    this.backendData = [];

    const url = 'http://localhost:3000/projetos';   //Ajuste conforme sua rota

    this.http.get<any[]>(url).pipe(
      catchError(err => {
        this.errorMessage = 'Erro ao carregar dados: ' + (err.message || err);
        return of([]);
      })
    ).subscribe({
      next: (response) => {
        this.backendData = response;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
