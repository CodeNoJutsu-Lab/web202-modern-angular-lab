import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hello {
  protected title = "Welcome to Modern Angular"

  protected isDisabled = false;

  protected onClick(){
    this.isDisabled = true;
    alert("Button clicked");
  }
}
