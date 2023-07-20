import { Component } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'drag-drop-simple';

  items = ['Football', 'Tennis', 'Basketball', 'Rugby', 'Golf']

  title = 'dropzone';

  incomingGoods = ['Tomatoes', 'Carrots', 'Onions', 'Pepper']

  availableGoods = ['Cucumber']

  soldGoods = ['Orange', 'Apple', 'Banana']


  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(
  //     this.items,
  //     event.previousIndex,
  //     event.currentIndex);
  // }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  dropped(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
    event.container.data,
    event.previousIndex,
    event.currentIndex
      );
     } else {
       transferArrayItem(
    event.previousContainer.data,
    event.container.data,
    event.previousIndex,
    event.currentIndex
      );
    }
   }
}
