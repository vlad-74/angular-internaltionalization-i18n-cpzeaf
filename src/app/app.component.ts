import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Translation';

  constructor(public translate: TranslateService) {

  }

  ngOnInit(): void {
    this.translate.addLangs(['en', 'fr', 'vi']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|vi/) ? browserLang : 'en');

    console.log(browserLang);
  }
}
