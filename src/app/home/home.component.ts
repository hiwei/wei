import { Component, OnInit } from '@angular/core';
import { trigger, transition, group, query, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

declare var $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s')
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('1s')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.navigate(['/home']);
    this.goLast();
  }

  goHome() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2000);
  }
  goLast() {
    window.addEventListener('popstate', function() {
      $('#routeContainer').hide();
      location.reload();
    });  
  }
  showItem: boolean = false;
  openItem() {
    $('#clickItemBan').show();
    this.showItem = true;
    $('#categoryLine-box').addClass('fadeOutEffect').fadeOut(1000);
    $('#closePage').removeClass('fadeOutEffect').show();
    $('#open-page-effect').addClass('openPageEffect');
    $('#close-page-effect').removeClass('closePageEffect');
  }
  closeItem() {
    $('#clickItemBan').hide();
    this.showItem = false;
    if($(window).width() > 1024) {
      $('#categoryLine-box').removeClass('fadeOutEffect').show();
    }
    $('#closePage').addClass('fadeOutEffect').fadeOut(1000);
    $('#open-page-effect').removeClass('openPageEffect');
    $('#close-page-effect').addClass('closePageEffect');
    $('html, body').animate({ scrollTop: 0 }, 500);
  }

  scroll() {
    for(let i=0; i < $('.categoryLine').length; i++) {
      if($('#category-' + i).offset().top < $(window).height() / 4) {
        this.clickCategory(i);
      }
    }
  }

  categoryLineStyleTop;
  categoryLineStyleLeft;
  clickCategory(categoryIndex: number) {
    if($(window).width() > 1024) {
      this.categoryLineStyleTop = 50*categoryIndex + 'px';
    } else {
      this.categoryLineStyleLeft = 50*categoryIndex + 'px';
    }
  }

  public webs = [
    {'webLink': '/lanka', 'webTitle': 'Sri Lanka', 'webCover': 'assets/img/lanka/lanka_cover.jpg'},
    {'webLink': '/sarah', 'webTitle': 'Sarah Connor', 'webCover': 'assets/img/sarah/sarah_cover.jpg'},
    {'webLink': '/bag', 'webTitle': 'Bags Shop', 'webCover': 'assets/img/bag/bag_cover.jpg'},
    {'webLink': '/mount', 'webTitle': 'Mountain Accident', 'webCover': 'assets/img/mount/mount_cover.jpg'},
    {'webLink': '/yading', 'webTitle': 'Ya Ding', 'webCover': 'assets/img/yading/yading_cover.jpg'},
    {'webLink': '/yunnan', 'webTitle': 'Wander in Yunnan', 'webCover': 'assets/img/yunnan/yunnan_cover.jpg'},
    {'webLink': '/tibet', 'webTitle': 'Independence of Tibet', 'webCover': 'assets/img/tibet/tibet_cover.jpg'},
    {'webLink': '/shape', 'webTitle': 'Shape Magazine', 'webCover': 'assets/img/shape/shape_cover.jpg'},
    {'webLink': '/spots', 'webTitle': '6 Spots', 'webCover': 'assets/img/spots/spots_cover.jpg'},
    {'webLink': '/view', 'webTitle': 'Some Views', 'webCover': 'assets/img/view/view_cover.jpg'}
  ];
  public projects = [
    {'projectLink': '/project01', 'projectTitle': 'Project 01', 'projectCover': 'assets/img/project01/project01_cover.png'},
    {'projectLink': '/project02', 'projectTitle': 'Project 02', 'projectCover': 'assets/img/project02/project02_cover.png'},
    {'projectLink': '/project03', 'projectTitle': 'Project 03', 'projectCover': 'assets/img/project03/project03_cover.png'},
    {'projectLink': '/project04', 'projectTitle': 'Project 04', 'projectCover': 'assets/img/project04/project04_cover.jpg'}
  ];
  public uis = [
    {'uiLink': '/uiairline', 'uiTitle': 'Budget Airline', 'uiCover': 'assets/img/ui01/ui01_cover.jpg'},
    {'uiLink': '/uiwebsite', 'uiTitle': 'Travel Website', 'uiCover': 'assets/img/ui02/ui02_cover.jpg'}
  ];
  public others = [
    {'otherLink': '/otherui', 'otherTitle': 'UI', 'otherCover': 'assets/img/other01/otherui_cover.png'},
    {'otherLink': '/otherdesign', 'otherTitle': 'Design', 'otherCover': 'assets/img/other02/otherdesign_cover.png'}
  ];
}
