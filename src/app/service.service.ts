import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  isEnable =new BehaviorSubject<boolean>(false);
  constructor() { }

  
}
