import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  isActive:boolean = false;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }
  toggle(){
    this.isActive = !this.isActive;
    this.service.isEnable.next(this.isActive);
  }

}
