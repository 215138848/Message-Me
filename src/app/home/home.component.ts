import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  theTime = "";

  ngOnInit(): void {
  }
  
    function( $interval) {
    this.theTime = new Date().toLocaleTimeString();
    $interval(function () {
        this.theTime = new Date().toLocaleTimeString();
    }, 1000);
    };


  messages = [""];
  colours = ['Red', 'Green', 'Blue', 'Yellow'];
  planets = ['Mars', 'Venus', 'Earth', 'Mercury'];
  num=0;

  public postMessage(newMessage: string){
    this.messages[0] = newMessage;
    this.messageField.nativeElement.value = '';
  }

  public postMessageReply(newMessage: string){
    this.messages.push(newMessage);
    this.replyField.nativeElement.value = '';
  }

  public postMessage1(newColours: string){
    this.colours.push(newColours);
    this.replyField.nativeElement.value = '';
  }

  public postMessage2(newPlanets: string){
    this.planets.push(newPlanets);
    this.replyField.nativeElement.value = '';
  }

@ViewChild('messageField') messageField:ElementRef;
@ViewChild('replyField') replyField:ElementRef;


}
