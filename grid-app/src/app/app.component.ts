import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import CustomStore from 'devextreme/data/custom_store';
import 'devextreme/data/odata/store';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  {
  dataSource: any = {};

  constructor(httpClient: HttpClient) {
    this.dataSource = new CustomStore({
      key: 'userId',
      load() {
        return httpClient.get('https://jsonplaceholder.typicode.com/posts')
          .toPromise()
          .then((data: IPost[]) => {
            return {
              data
            };
          })
          .catch(error => { throw Error ('Data Loading Error');
          });
      }
    });
  }
}
