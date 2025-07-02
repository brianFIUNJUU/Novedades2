import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '@coreui/angular';

@Component({
    selector: 'app-default-footer',
    templateUrl: './default-footer.component.html',
    styleUrls: ['./default-footer.component.scss'],
    standalone: true,
})
export class DefaultFooterComponent extends FooterComponent implements OnInit {
    currentYear: number;

    constructor() {
        super();
        this.currentYear = new Date().getFullYear(); // Asignar el año actual
    }

    ngOnInit(): void {
        // Si en algún momento necesitas hacer alguna acción al iniciar el componente, puedes usar ngOnInit.
    }
}
