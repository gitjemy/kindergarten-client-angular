import { Component, Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  opened = false;
  an = "Kindergarten";
  appName = "Kindergarten";

  timeM: number = 0;
  constructor() {
  }
  ngOnInit(): void {
    
  }
}



