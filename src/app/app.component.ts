import { Component } from '@angular/core';
import { ProdutoComponent } from './my-components/produto/produto.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Aponta para o template correto
  styleUrls: ['./app.component.css'], // Aponta para o estilo correto
  standalone: true,
  imports: [ProdutoComponent], // Importa ProdutoComponent para uso
})
export class AppComponent {
  title = 'Meu Projeto Angular';
}
