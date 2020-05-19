import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateOrReadBatchesService {

  constructor() { }


  //batches 
  batches:string[]=["B-1","B-2","B-3","B-4"];

  //createing new batch
  createBatch(batchName)
  {

  }

  //return batches
  getbatches(){
    return this.batches;
  }

  //remove batch
  removeBatch(batchName){
    
  }
}
