import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wait-for-observable-response';

  //will not wait for promise to resolve
  // onClickBtn(){
  //   this.resolveAfter2Seconds(20).then(value => {
  //     console.log(`promise result: ${value}`);
  //   });
  //   console.log('I will not wait until promise is resolved');
  // }
 
  //will wait for promise to resolve and then proceed
  async onClickBtn() {
    const value = <number>await this.resolveAfter2Seconds(20);
    console.log(`async result: ${value}`);
    console.log('I will wait until promise is resolved');
  }

  resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
}
