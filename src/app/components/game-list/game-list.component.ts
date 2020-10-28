import { Component, HostBinding, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent implements OnInit {

  @HostBinding('class') clasess = 'row';

  games: any = [];
  id = '';

  constructor(private GamesService: GamesService, private router: Router, private activateddRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    const params = this.activateddRoute.snapshot.params;

    if (!params.id) {
      this.id = 'all';
    }else{
      this.id = params.id;
    }
    
    this.GamesService.getCategory(this.id)
    .subscribe(
      res => {
        console.log(res);
        this.games = res;
      },
      err => console.error(err)
    )
    
  }

  // editGame(id: string) {
  //   this.GamesService
  //   console.log(id);
  // }

  // deleteGame(id: string) {
  //   this.GamesService.deleteGame(id).subscribe(
  //     res => {
  //       this.getGames();
  //       console.log(res)
  //     },
  //     err => console.log(err)
  //   )
  // }

}
