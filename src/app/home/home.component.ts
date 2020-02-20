import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import * as $ from 'jquery';

import { Injectable } from '@angular/core';
import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { ViewChild, OnInit, ElementRef } from '@angular/core';

declare const Waypoint: any;

@Component({ templateUrl: 'home.component.html',
styleUrls: ['./css/vendor/animate.css', './css/vendor/icomoon.css', './fonts/font-awesome-4.7.0/css/font-awesome.min.css', './css/vendor/magnific-popup.css', './css/vendor/owl.carousel.min.css', './css/vendor/owl.theme.default.min.css', './css/vendor/lightbox.min.css', './css/main.css']

})
export class HomeComponent  {


    text:any = {
        Year: 'Jahre',
        Month: 'Monate',
        Weeks: "Wochen",
        Days: "Tage",
        Hours: "Stunden",
        Minutes: "Minuten",
        Seconds: "Sekunden",
        MilliSeconds: "Millisekunden"
      };


    loading = false;
    users: User[];

    
    name = 'Set iframe source';
    url: string = "https://wedding.kyma.schmitz.zone";
    url2: SafeUrl = this.sanitizer.bypassSecurityTrustUrl("https://wedding.kyma.schmitz.zone");
    urlSafe: SafeResourceUrl;
    src: SafeHtml;
   test: String;
   htmlStr2: String;
   to: Number;
   htmlStr: SafeHtml;
    
    constructor(private userService: UserService, private http: HttpClient, private sanitizer:DomSanitizer) { 
        
   
        //http.get("https://juliaraphael.de").map((html:any) => this.myTemplate = html);


        //var xhr = new XMLHttpRequest();

        //xhr.open('GET', 'https://wedding.kyma.schmitz.zone');
        //xhr.responseType = 'blob';
        //xhr.setRequestHeader('Authorization', 'Bearer ' );
        //xhr.send();
        
        

    }

    public getHTML() {
        return this.http.get(this.url, { responseType: 'text' });
      }


    ngOnInit() {

        

        this.htmlStr = '<strong>The 23332</strong> &amp; the Hare';

        //this.src= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

        //this.getHTML().subscribe((data)=>{
 
            //this.src = this.sanitizer.bypassSecurityTrustHtml(data);
            //this.src = this.sanitizer.bypassSecurityTrustHtml(data);
            
         // });
       

        this.loading = false;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });

		$('.loader').delay(400).fadeOut('slow');
		setTimeout(function() {
			$('.cover .display-tc').addClass('fadeInUp');
			
        }, 1500);

        var continuousElements = document.getElementsByClassName('animate-box')
        for (var i = 0; i < continuousElements.length; i++) {
        new Waypoint({
            element: continuousElements[i],
            handler: function(direction) {
                console.log('Scrolled to waypoint!' + direction)
                if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}
							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo' );
					});
				}, 0);
			}
            },
            offset: 400
        })
        }


        $( document ).ready(function() {
            var date1 = new Date(new Date("02/04/2012 20:00:00").toLocaleString("en-US", {timeZone: "Europe/Berlin"}));
            var date2 = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Berlin"}));
    
            
            //
            
    
            // To calculate the time difference of two dates 
            var Difference_In_Time = date2.getTime() - date1.getTime(); 
    
            
              
            // To calculate the no. of days between two dates 
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  
            $('.dayssince').attr('data-to', Difference_In_Days.toFixed(0));
            console.log(Difference_In_Days);
            $('.dayssince').text(Difference_In_Days.toFixed(0));

    
        });
            
            





        


        
        



        //this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

    }
}