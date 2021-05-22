import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnChanges {

  @Input() appName: string | undefined;
  seamen = "";

  constructor(private app: AppComponent) { }

  todayDate: Date = new Date();

  ngOnChanges(changes: SimpleChanges): void {
    this.seamen = "Today is " + new Date().toTimeString();
  }

  ngOnInit(): void {
    var com = this;
    setInterval(function () {
      com.todayDate = new Date();
    }, 500)
  }
}
