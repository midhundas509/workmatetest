import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']); 
  }

}
