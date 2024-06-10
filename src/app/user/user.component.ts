import {
  Component,
  Input,
  input,
  computed,
  signal,
  Output,
  output,
  EventEmitter,
} from '@angular/core';

import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
// import { type User } from './user.model';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

// import { DUMMY_USERS } from '../dummy-user';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // @Input({ required: true }) id!: string;
  // @Input({ required: true })
  // avatar!: string;
  // @Input({ required: true }) name!: string;

  // @Input({ required: true }) user!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // };

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  // @Output() select = new EventEmitter();
  // @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // avatar = input.required<string>();
  // name = input.required<string>();

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // });

  onSelectUser() {
    // console.log('clicked');
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex];

    this.select.emit(this.user.id);
  }
}
