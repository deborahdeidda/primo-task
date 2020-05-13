import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primo task - Button';

  btnConfig = {
    styles: {
      position: 'relative',
      width: '100px',
      height: '40px',
      backgroundColor: '#eda6c0',
      color: 'black',
      fontSize: '15px'
    },
    text: 'Button'
  };

}
