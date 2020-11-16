import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.css']
})
export class PanelMenuComponent implements OnInit {

  categories: any = [];
  subCategories: any = [];

  constructor(private GamesService: GamesService) { }

  ngOnInit(): void {
    this.getCategories();
    // this.getSubCategories();
  }

  getCategories() {
    this.GamesService.getCategories().subscribe(
      res => {
        console.log(res);
        this.categories = res;
      },
      err => console.error(err)
    )
  }

  getSubCategories() {
    this.GamesService.getSubCategories().subscribe(
      res => {
        console.log(res);
        this.subCategories = res;
      },
      err => console.error(err)
    )
  }

}
