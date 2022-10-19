import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlashService {
  flashMessage: string | null

  constructor() {
    this.flashMessage = null
  }

  getFlashMessage(): string | null {
    return this.flashMessage
  }

  setFlashMessage(message: string): void {
    this.flashMessage = message
  }

  removeFlashMessage(): void {
    this.flashMessage = null
  }
}
