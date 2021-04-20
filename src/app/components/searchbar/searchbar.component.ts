import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  data = '';
  @Output() onSearchTyping = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onTextChange(e): void{
    this.onSearchTyping.next(e);
  }

}
