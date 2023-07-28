import { Component, OnInit } from '@angular/core';
import DataTable from 'datatables.net-dt';
import Chart, { elements } from 'chart.js/auto';
import { ServiceService } from '../service.service';

// var $ = require( 'jquery' );

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  data = [
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Jan',sk:'41,65,5078',enrolment:'3,461'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Feb',sk:'38,12,3016',enrolment:'3,188'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Mar',sk:'5,21,6363',enrolment:'437'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Apr',sk:'18,11,0401',enrolment:'1,561'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'May',sk:'13,64,8446',enrolment:'1,182'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Jun',sk:'41,65,5078',enrolment:'3,461'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Jul',sk:'41,65,5078',enrolment:'3,461'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Aug',sk:'41,65,5078',enrolment:'3,461'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Sep',sk:'41,65,5078',enrolment:'3,461'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Oct',sk:'41,65,5078',enrolment:'3,461'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Nov',sk:'41,65,5078',enrolment:'3,461'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Dec',sk:'41,65,5078',enrolment:'3,461'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Jan',sk:'41,65,5078',enrolment:'3,461'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Jan',sk:'41,65,5078',enrolment:'3,461'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Jan',sk:'41,65,5078',enrolment:'3,461'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Jan',sk:'41,65,5078',enrolment:'3,461'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Jan',sk:'41,65,5078',enrolment:'3,461'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Jan',sk:'41,65,5078',enrolment:'3,461'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Jan',sk:'41,65,5078',enrolment:'3,461'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Jan',sk:'41,65,5078',enrolment:'3,461'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Jan',sk:'41,65,5078',enrolment:'3,461'},
    {name:'Piya Mukherjee',zone:'West',regin:'MUM',type:'Marketing', month:'Jan',sk:'41,65,5078',enrolment:'3,461'},
];
  ctx:any;
  isActive:boolean = true;
  constructor(private service: ServiceService) { 
    this.service.isEnable.subscribe((res: any) => {  
        this.isActive = res;
    })
  }

  ngOnInit(): void {
     this.ctx = document.getElementById('myChart');
    new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 61, 56, 55, 50,65, 59, 70, 65, 56],
          fill: true,
          borderColor: '#00afef',
          tension: 0.5,
          backgroundColor:'#00afef9e'
        }]
      }
    });
    
    setTimeout(() => {
      new DataTable('#example', {
        searching:false,
        pageLength:5,

  });
    }, 200);
   
          
   }
  }


