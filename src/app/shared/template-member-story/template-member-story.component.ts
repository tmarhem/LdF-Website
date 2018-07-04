import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-member-story',
  templateUrl: './template-member-story.component.html',
  styleUrls: ['./template-member-story.component.scss']
})
export class TemplateMemberStoryComponent implements OnInit {

@Input() firstName : string;
@Input() lastName : string;
@Input() nickname : string;
@Input() title : string;
@Input() pictureName : string;
@Input() history : string;
pictureUrl : string;


  constructor() {
  	/**
  	if(pictureName!=null){
  		  pictureUrl= "../../assets/images/"+pictureName;
  	}
  	**/
   }

  ngOnInit() {
  }
}
