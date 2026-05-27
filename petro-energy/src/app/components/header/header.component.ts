import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header.component.html',
  //styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = signal(false);

  navItems = [
    { label: 'Início', path: '/' },
    { label: 'Sobre Nós', path: '/sobre' },
    { label: 'Projetos Sociais', path: '/projetos-sociais' },
  ];

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
