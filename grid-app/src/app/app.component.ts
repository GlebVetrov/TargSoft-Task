import {ChangeDetectionStrategy, Component} from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import 'devextreme/data/odata/store';
import {PostsLoadService} from './posts-load.service';

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
export class AppComponent {
  dataSource: CustomStore;

  constructor(private postsLoad: PostsLoadService) {
    this.dataSource = new CustomStore({
      key: 'userId',
      load() {
        return postsLoad.getPosts()
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
