import { Component, EventEmitter, NgModule, Output, output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule, CardComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {



  burgerMenu:boolean = false

  bergerB() {
    this.burgerMenu = !this.burgerMenu
  }

  refresh(): void {
    window.location.reload();
}



}
