import {PostsLoadService} from './posts-load.service';
import {ComponentFixture, TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {DxDataGridModule} from 'devextreme-angular';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let service: PostsLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [ PostsLoadService ],
      imports: [
        HttpClientModule,
        DxDataGridModule
      ]
    });


    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.get(PostsLoadService);
  });


  it('should get posts on dataSource (promise)', async(() => {
    const posts = [
      {
        body: `quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵
               reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto`,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        userId: 1,
      },
      {
        body: `est rerum tempore vitae↵sequi sint nihil reprehenderit dolor beatae ea dolores neque↵
               fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis↵qui aperiam non debitis possimus qui neque nisi nulla`,
        id: 2,
        title: 'qui est esse',
        userId: 1,
      },
      {
        body: `ullam et saepe reiciendis voluptatem adipisci↵sit amet autem assumenda provident rerum culpa↵
                quis hic commodi nesciunt rem tenetur doloremque ipsam iure↵quis sunt voluptatem rerum illo velit`,
        id: 4,
        title: 'eum et est occaecati',
        userId: 1,
      }
    ];
    spyOn(service, 'getPosts').and.returnValue(Promise.resolve(posts));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.dataSource.key()).toBe('userId');
      console.log('EXPECT CALLED');
    });
  }));
});
