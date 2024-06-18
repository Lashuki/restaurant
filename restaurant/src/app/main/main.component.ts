import { Component, Inject, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CommonModule, NgFor } from '@angular/common';
import { foodCard } from '../foodCard';
import { FilterComponent } from '../filter/filter.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CardService } from '../services/card.service';
import { HeaderComponent } from '../header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HoverCardDirective } from '../hover-card.directive';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, CardComponent, NgFor, FormsModule, HeaderComponent, HttpClientModule, HoverCardDirective],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})


export class MainComponent implements OnInit {

  foodList: foodCard[] = []
  filteredList: foodCard[] = []


  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getData().subscribe(
      data => this.filteredList = this.foodList = data,
      error => console.error(error),
      () => console.log("complete")

    )

  }



  searchedText: string = '';

  searching(str: string) {

    this.filteredList = this.foodList.filter((el) => el.name.toLowerCase().includes(str.toLowerCase()))
  }


  filterHot() {
    this.filteredList = this.foodList.filter((el) => el.hot)
  }

  filterCold() {
    this.filteredList = this.foodList.filter((el) => el.cold)
  }

  filterJucy() {
    this.filteredList = this.foodList.filter((el) => el.jucy)
  }

  filterSalad() {
    this.filteredList = this.foodList.filter((el) => el.salad)
  }

  filterBeef() {
    this.filteredList = this.foodList.filter((el) => el.beef)
  }


  filterPig() {
    this.filteredList = this.foodList.filter((el) => el.pig)
  }

  filterVegan() {
    this.filteredList = this.foodList.filter((el) => el.veg)
  }

  filterNut() {
    this.filteredList = this.foodList.filter((el) => el.nut)
  }







}
