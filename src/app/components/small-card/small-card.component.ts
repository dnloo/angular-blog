import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input ()
  photoCover:string = "https://ih1.redbubble.net/image.453958487.1770/pp,840x830-pad,1000x1000,f8f8f8.u3.jpg"
  @Input ()
  cardTitle:string = "ccccccccc"
  constructor() { }

  ngOnInit(): void {
  }

}
