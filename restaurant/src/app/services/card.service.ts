import { Injectable } from '@angular/core';
import { foodCard } from '../foodCard';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {









  // HttpClient-ის მეშვეობით მოგვაქვს მონაცემები ბაზიდან
  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return this.http.get('https://664f91a8ec9b4a4a602f3d57.mockapi.io/food')
  }








  // constructor() { }



  // url = 'https://664f91a8ec9b4a4a602f3d57.mockapi.io/food'

  // //  აქ ვუთითებთ რა ტიპის არის ფუნქცია, ამ შემთხვევაში promise ტიპია, ასევე ვუთითებთ foodCard-ის მასივს, სადაც მკაცრად გვაქვს გაწერილი ტიპები და გატანილი app-ში (ან გამოაქვს foodCard-ების მასივი ზუსტად ვერ მივხვდი)
  // async getFoods(): Promise<foodCard[]> {

  //   const response = await fetch(this.url)
  //   // გვიბრუნებს jason-ს და jason მეთოდი გვიბრუნებს მასივს (ან სავსე მასივს ან ცარიელს)
  //   return await response.json() ?? []
  // }













  // // ეს ასინქრონული ფუნქცია დაგვიბრუნრბს მთლიანი მასივის მაგივრად კონკრეტულ პროდუცტებს
  // //ამ ფუნქციას id უნდა გადმოეცეს პარამეტრად, რომელიც არის ნამბერ ტიპის. foodcard[] მასივი აღარ არის ან ერთი ტიპია ან არის ანდეფაინდი


   url = 'https://664f91a8ec9b4a4a602f3d57.mockapi.io/food'


  async getFoodsId(foodId:number): Promise<foodCard | undefined> {
    
    const response = await fetch(`${this.url}/${foodId}`)
    return await response.json() ?? {}

  }

}
