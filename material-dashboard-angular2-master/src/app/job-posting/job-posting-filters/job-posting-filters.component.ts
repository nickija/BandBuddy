import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'job-posting-filters',
  templateUrl: './job-posting-filters.component.html',
  styleUrls: ['./job-posting-filters.component.scss']
})
export class JobPostingFiltersComponent implements OnInit {

  likeFormControl = new FormControl(null)

  @Output() changedLikeFilter = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  search(likeText : string){
     this.changedLikeFilter.emit(likeText);
  }

}
