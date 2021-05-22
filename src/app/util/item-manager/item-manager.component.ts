import { Component, Input, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.css']
})
export class ItemManagerComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() subTitle: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
