import { Component, computed, signal } from '@angular/core';

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

  protected count = signal(0);
  protected doubleCount = computed(() => this.count() * 2)

  protected increaseCounter(){
    // count = count + 1
    this.count.update(count => count + 1)
  }

  protected descreaseCounter(){
    // count = count - 1
    this.count.update(count => count - 1)
  }

  protected resetCounter(){
    // counter = 0

    this.count.set(0)
  }
}
