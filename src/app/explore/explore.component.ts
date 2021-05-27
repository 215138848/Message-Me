import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  colours = ['Red', 'Green', 'Blue', 'Yellow'];
  planets = ['Mars', 'Venus', 'Earth', 'Mercury'];
  message = "";

  public postMessage1(newItem1: string){
    this.colours.push(newItem1);
  }

  public postMessage2(newItem2: string){
    this.planets.push(newItem2);
  }

}
