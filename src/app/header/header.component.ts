// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent {

// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeButton: string = 'home'; 

  constructor(private router: Router) { }

  ngOnInit(): void {

  }


  

  navigateToHome() {
    
      this.activeButton = 'home';
      this.router.navigate(['/home']);
    
  }
  
  navigateToServices() {
    
      this.activeButton = 'services';
      this.router.navigate(['/services']);
    
  }

  navigateToOurTeam() {
    
    this.activeButton = 'ourteam';
    this.router.navigate(['/ourteam']);
  
 }

  navigateToFaq() {
  
    this.activeButton = 'faq';
    this.router.navigate(['/faq']);
  
 }


}

