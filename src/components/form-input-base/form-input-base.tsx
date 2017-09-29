import { Component, Element, Event, EventEmitter, Prop, PropDidChange } from '@stencil/core';

@Component({
  tag: 'form-input-base',
  styleUrl: 'form-input-base.scss'
})
export class FormInputBase {

  @Element() el: HTMLElement;

  @Prop() type: string = 'text';

  @Prop() label: string;

  @Prop() mode: string;

  @Prop() theme: string = 'black';

  @Prop({ mutable: true }) value: string;

  @Event() valueChange: EventEmitter;

  // propagate model change to the view
  @PropDidChange('value')
  valueChanged() {
    const inputEl = this.el.querySelector('input');
    if (inputEl.value !== this.value) {
      inputEl.value = this.value;
    }
  }

  inputChanged(ev: any) {
    // from view to the model
    let val = ev.target && ev.target.value;
    if (this.type === 'time') {
        this.value = this.convertTimeToDate(val);
    } else {
        this.value = val;
    }
    this.value = ev.target && ev.target.value;
    // add a setter for the value
    this.valueChange.emit(this.value);
  }

  convertTimeToDate(val) {
    return val;
  }
  getColorClassList() {

  }

  render() {
    if (this.mode === 'web') {
      return (
        <div class={this.theme}>
          <label>{ this.label }:
            <div>
              <input value={this.value} onInput={this.inputChanged.bind(this)}></input>
            </div>
          </label>
        </div>
      )
    } else {
      return (
        <div class={this.theme}>
          <label>{ this.label }:
              <input value={this.value} onInput={this.inputChanged.bind(this)}></input>
          </label>
        </div>
      )
    }
  }
}