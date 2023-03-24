import { Controller } from '@hotwired/stimulus';

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    static targets = ['name', 'output']

    method() {
      this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`
    }
}
