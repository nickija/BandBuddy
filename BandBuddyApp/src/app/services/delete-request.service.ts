import { Injectable } from '@angular/core';
import { DeleteRequest } from '../models/delete-request.model';

@Injectable({
  providedIn: 'root'
})
export class DeleteRequestService {

  constructor() { }
  deleteRequestData: DeleteRequest = new DeleteRequest();
}
