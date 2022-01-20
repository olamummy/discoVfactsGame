import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  check: number = 1;
  option: number = 0;
  money: number = 0;
  retweets: number = 0;
  likes: number = 0;
  comments:number = 0;
  followers:number = 0;
  share:number = 0;
  views:number = 0;
  repost:number = 0;

  nextGame(el: any, option: number, optional:number) {

    let messageId = el.getAttribute('data-message-id');
    //alert(messageId);
    

    if(optional != 0){
      this.check = optional;
      //alert("A" +  this.check);
    }else{
      this.check = parseInt(messageId) + 1;
      //alert("B" + this.check);
    }

    if (option != (0 || null)) {
      this.option = option;
    }
    //alert(this.check);
    this.followers++;
    this.likes++;
    this.repost++;
    this.share++;
    this.views++;
    this.comments++;
    this.money++;
    this.retweets++;

  }

  nextGamet(el: number, option: number) {
    alert(el);
  }

}
