import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(public userProfileService : UserProfileService) { }

  ngOnInit(): void {
  }

}
