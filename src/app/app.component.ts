import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  jobs=[
    {
      
      imgname: "./src/5555.png",
      compan: "Software Engineer",
      company: "Krinati Solution Pvt Ltd.Full-time",
      startDate: "Mar 2021 - Present. 10 mos",
      localtion: "Mumbai Maharashtra,India"

    },
    {
      compan: "ChatGen",
      company: "",
      startDate: "Full -time 1 yr 6mos",
      loca:"Full- Stack Engineer",
      endDate: "Mar-2020 - Apr 2021 1 yr 2mos",
       state: "Mumbai Maharashtra",
      sift:"Frontend Developer",
      date:"Nov 2019-Mar 2020 5 mos",
      area:"Mumbai Area India",
    },
    {
      compan: "Contributor",
      company: "Mattermost part-time",
      startDate: "Aug 2020-Dec 2020 5 mos",
      loction: "Mumbai Maharashtra,India",

     
    },

    
  ]
}
