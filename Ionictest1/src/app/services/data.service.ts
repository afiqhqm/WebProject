import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public items : any[];
  constructor() {
    this.items=[
      {title: "Kuala Lumpur", pic: "assets/kualalumpur.png", page: "kualalumpur"},
      {title: "Selangor", pic: "assets/Selangor.png", page: "selangor"},
      {title: "Negeri Sembilan", pic: "assets/NegeriSembilan.png", page: "negerisembilan"},
      {title: "Melaka", pic: "assets/Melaka.png", page: "melaka"},
      {title: "Johor", pic: "assets/Johor.png", page: "johor"},
      {title: "Pahang", pic: "assets/Pahang.png", page: "pahang"},
      {title: "Terengganu", pic: "assets/Terengganu.png", page: "terengganu"},
      {title: "Kelantan", pic: "assets/Kelantan.png", page: "kelantan"},
      {title: "Perak", pic: "assets/Perak.png", page: "perak"},
      {title: "Kedah", pic: "assets/Kedah.png", page: "kedah"},
      {title: "Penang", pic: "assets/Penang.png", page: "penang"},
      {title: "Perlis", pic: "assets/Perlis.png", page: "perlis"},
      {title: "Sabah", pic: "assets/Sabah.png", page: "sabah"},
      {title: "Sarawak", pic: "assets/Sarawak.png", page: "sarawak"},
    ]
   }
   filterItems(searchTerm){
     return this.items.filter(item=>{
       return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
     });
   }
}
