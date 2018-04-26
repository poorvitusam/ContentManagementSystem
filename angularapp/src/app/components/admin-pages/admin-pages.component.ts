import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admin-pages.component.html',
  styleUrls: ['./admin-pages.component.css']
})
export class AdminPagesComponent implements OnInit {

  pages: any;
  successMsg: boolean = false;
  errorMsg: boolean = false;
  constructor(
    private router: Router,
    private pageService: PageService
  ) { }

  ngOnInit() {
    if (!localStorage.getItem("user")) {
      this.router.navigateByUrl('');
    }
    this.pages = this.pageService.pagesBS;
  }

}
