import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sidebar-left-nav',
  templateUrl: './sidebar-left-nav.component.html',
  styleUrls: ['./sidebar-left-nav.component.scss']
})
export class SidebarLeftNavComponent implements OnInit {

  isActive: boolean = true;
  constructor(private service: ServiceService) {
    this.service.isEnable.subscribe((res: any) => {
      this.isActive = res;
    })
  }

  ngOnInit(): void {
  }

}
