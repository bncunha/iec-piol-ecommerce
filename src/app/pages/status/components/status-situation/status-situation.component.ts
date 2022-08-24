import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-situation',
  templateUrl: './status-situation.component.html',
  styleUrls: ['./status-situation.component.scss']
})
export class StatusSituationComponent implements OnInit {
  @Input() isInvalid: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
