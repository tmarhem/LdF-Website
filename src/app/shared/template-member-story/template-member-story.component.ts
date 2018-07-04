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
  @Input() history : string;
  pictureUrl : string;

  constructor() {
   this.pictureUrl="../../../assets/images/";
 }

 ngOnInit() {
    //Si les noms et prénoms sont renseignés
    if(typeof this.firstName !== 'undefined' && typeof this.lastName !== 'undefined'){
      //concaténation et formatage sans espaces-sans accents de prénom + nom
      this.pictureUrl = "\"../../../assets/images/" + (this.firstName + this.lastName).normalize('NFD').replace(/\s+/g, '').replace(/[\u0300-\u036f]/g, "") + ".jpg";
      console.log(this.pictureUrl);
    }
  }
}
