import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from '../../services/page.service';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

declare var CKEDITOR: any;

@Component({
  selector: 'app-admin-edit-page',
  templateUrl: './admin-edit-page.component.html',
  styleUrls: ['./admin-edit-page.component.css']
})

export class AdminEditPageComponent implements OnInit {

  page: any;
  title: string;
  // content: string;
  id: string;
  successMsg: boolean = false;
  errorMsg: boolean = false;
  errorMsg2: boolean = false;
  param: any;
  public editorOptions: JsonEditorOptions;
  public content: any;
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pageService: PageService
  ) { 
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; ;
  }

  ngOnInit() {
    if (!localStorage.getItem("user")) {
      this.router.navigateByUrl('');
    } else {
        // CKEDITOR.replace('content');
    }
    // this.content = {
    //   'randomNumber': 10,
    //   'products': [
    //     {
    //       'name': 'car',
    //       'product':
    //         [
    //           {
    //             'name': 'honda',
    //             'model': [
    //               { 'id': 'civic', 'name': 'civic' },
    //               { 'id': 'accord', 'name': 'accord' }, { 'id': 'crv', 'name': 'crv' },
    //               { 'id': 'pilot', 'name': 'pilot' }, { 'id': 'odyssey', 'name': 'odyssey' }
    //             ]
    //           }
    //         ]
    //     }
    //   ]
    // }

    this.route.params.subscribe(params => {
      this.param = params['id'];
        this.pageService.getEditPage(this.param).subscribe(page => {
            this.page = page;
            this.title = page["title"];
            this.content = JSON.parse(page["content"]);
            this.id = page["_id"];
        });
    });
    
  }

  editPage({ value, valid}) {
    if (valid) {
      console.log(this.editor.get());
      value.content = JSON.stringify(this.editor.get());
      this.pageService.postEditPage(value, localStorage.getItem("user")).subscribe(res => {
          if (res == 'pageExists') {
              this.errorMsg = true;
              setTimeout(function() {
                  this.errorMsg = false;
              }.bind(this),2000);
          } else if (res == 'problem') {
              this.errorMsg2 = true;
              setTimeout(function() {
                  this.errorMsg2 = false;
              }.bind(this),2000);
          } else {
              this.successMsg = true;
              setTimeout(function() {
                  this.successMsg = false;
              }.bind(this),2000);

              this.pageService.getPages().subscribe(pages => {
                  this.pageService.pagesBS.next(pages);
              });
          }
      });
    } else {
        console.log('Form is not valid.');
    }
  }
}
