import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pdf';

  USERS = [
    {
      "id": 1,
      "nome": "João Silva",
      "email": "joao.angular@gmail.exemplo.com",
      "telefone": "+55 (00) 0 0000-0000"
    },
    {
      "id": 2,
      "nome": "Maria Sousa",
      "email": "maria.angular@gmail.exemplo.com",
      "telefone": "+55 (00) 0 0000-0000"
    },
    {
      "id": 3,
      "nome": "Júlia Martins",
      "email": "julia.angular@gmail.exemplo.com",
      "telefone": "+55 (00) 0 0000-0000"
    },
    {
      "id": 4,
      "nome": "Henrique Santos",
      "email": "henrique.angular@gmail.exemplo.com",
      "telefone": "+55 (00) 0 0000-0000"
    },
    {
      "id": 5,
      "nome": "Júnior Pereira",
      "email": "junior.angular@gmail.exemplo.com",
      "telefone": "+55 (00) 0 0000-0000"
    },
    {
      "id": 6,
      "nome": "Nicole Barbosa",
      "email": "nicole.angular@gmail.exemplo.com",
      "telefone": "+55 (00) 0 0000-0000"
    }
  ];

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
}
