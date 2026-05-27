import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './post-detail.component.html',
  //styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent implements OnInit {

  post: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      // Simulação de dados (depois você pode conectar com API ou JSON)
      const posts = [
        {
          id: 1,
          title: 'Inauguração do Campo de Águas Profundas no Pré-Sal',
          date: '15 MAR 26',
          image: '/foto1.jpg',
          content: `
            <p>A Petro Energy tem o orgulho de anunciar a inauguração do Campo Atlântico Sul, localizado a 280 km da costa brasileira, 
              em lâmina d'água de 2.200 metros. Este é o maior projeto de exploração em águas ultraprofundas do hemisfério sul.<br><br>
              O campo possui reservas estimadas em 3,2 bilhões de barris de petróleo de alta qualidade, com produção inicial prevista de 
              150 mil barris por dia. A operação emprega mais de 2.800 profissionais diretos e gera impacto econômico significativo para 
              as comunidades costeiras.<br><br>
              Com investimento total de R$ 28 bilhões, o projeto utiliza tecnologias proprietárias de perfuração direcional e sistemas de 
              separação submarina que reduzem em 40% as emissões operacionais comparadas a projetos convencionais.<br><br>
              A Petro Energy reafirma seu compromisso com a transição energética responsável, garantindo que o petróleo continue sendo uma 
              fonte confiável e eficiente para impulsionar o desenvolvimento global.
            </p>
            `
        },
        {
          id: 2,
          title: 'Nova Geração: Combustíveis Mais Limpos para o Futuro',
          date: '02 FEV 26',
          image: '/foto2.jpg',
          content: `
            <p>A Petro Energy inaugurou a Refinaria Nova Geração (RNG), um complexo industrial de última geração localizado no estado de Sergipe,
            com capacidade de refino de 400 mil barris por dia.<br><br>
            A RNG é a primeira refinaria da América Latina certificada para produzir combustíveis que atendem ao padrão Euro 6, resultando em 
            emissões veiculares até 80% menores que os combustíveis tradicionais. Isso demonstra como a indústria de petróleo pode ser parte 
            ativa da solução ambiental.<br><br>
            O complexo conta com unidades de hidrotratamento avançado, craqueamento catalítico de alta conversão e uma planta de cogeração que 
            torna a refinaria autossuficiente em energia elétrica.<br><br>
            O projeto gerou 12 mil empregos durante a construção e mantém 3.500 postos de trabalho permanentes, transformando a economia 
            regional.</p>
          `
        },

        {
          id: 3,
          title: 'Plataforma Horizonte Verde: Energia com Responsabilidade',
          date: '18 JAN 26',
          image: '/foto3.jpg',
          content: `
            <p>A Plataforma Horizonte Verde representa a visão da Petro Energy para o futuro da exploração de petróleo: produção eficiente 
            integrada com tecnologias ambientais de ponta.<br><br>
            Instalada na Bacia de Santos, a plataforma é a primeira do mundo a integrar um sistema completo de captura e armazenamento de 
            carbono (CCS) diretamente na unidade de produção, capturando 95% do CO₂ gerado nas operações.<br><br>
            Além disso, turbinas eólicas offshore instaladas ao redor da plataforma geram energia limpa suficiente para alimentar 30% das 
            operações, reduzindo a dependência de geradores a gás.<br><br>
            Com produção de 80 mil barris diários e pegada de carbono líquida próxima de zero, a Horizonte Verde prova que petróleo e 
            sustentabilidade podem caminhar juntos, garantindo energia acessível enquanto protegemos o planeta para as gerações futuras.</p>
          `
        }
      ];

      this.post = posts.find(p => p.id === Number(id)) || posts[0];
    });
  }
}
