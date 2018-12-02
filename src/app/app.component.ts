import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'global-nav-demo';

  ngOnInit() {
    /*$('.nav-link').on('click', function() {
      $('#example1').collapse('hide');
      $('#example2').collapse('hide');
      $('#example3').collapse('hide');
      $('.glob-menu-icon').removeClass('active');
    });

    $('.glob-menu-icon').on('click', function () {
      $('.glob-menu-icon').removeClass('active');
      $(this).addClass('active');
    });*/
  }
}
