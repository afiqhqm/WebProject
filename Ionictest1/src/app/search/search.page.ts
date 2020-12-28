import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
public searchTerm: String=""
public items: any;
  constructor(
    private ds: DataService
    ) { }
  
  ngOnInit() {
    this.filteredItems()
  }

  filteredItems(){
    this.items = this.ds.filterItems(this.searchTerm)
  }

}
