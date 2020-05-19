import { Component, OnInit } from '@angular/core';
import { CreateOrReadBatchesService } from '../create-or-read-batches.service';

@Component({
  selector: 'app-read-batches',
  templateUrl: './read-batches.component.html',
  styleUrls: ['./read-batches.component.css']
})
export class ReadBatchesComponent implements OnInit {


  batches:string[]=[];
  constructor(private readBatches:CreateOrReadBatchesService) { }

  ngOnInit(): void {
    this.batches=this.readBatches.getbatches();
  }

}
