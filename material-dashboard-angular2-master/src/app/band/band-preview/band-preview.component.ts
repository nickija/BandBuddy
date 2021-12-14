import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandFormComponent } from 'app/band/band-form/band-form.component';
import { AreaEnum } from 'app/models/area-enum';
import { Band } from 'app/models/band.model';
import { Musician } from 'app/models/musician.model';
import { SkillEnum } from 'app/models/skill-enum';
import { BandService } from 'app/services/band.service';
import * as Chartist from 'chartist';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-band-preview',
  templateUrl: './band-preview.component.html',
  styleUrls: ['./band-preview.component.css']
})
export class BandPreviewComponent implements OnInit {

  private itemId;
  private bandService: BandService;
  public itemModel: Band;

  constructor(bandService: BandService, private route: ActivatedRoute) { 
    this.bandService = bandService;
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      if (paramMap.has("id")){
        this.itemId = paramMap.get("id");
        this.getBandDetails(this.itemId);
      }
    })

  }

  getBandDetails(id: string){
    this.bandService.getSingle(id).subscribe(res => {
      console.log(res);
      this.itemModel = res;
    })
  } 

  edit(){

    
  }

}