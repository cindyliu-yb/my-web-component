import { Component, Element, Event, EventEmitter, Prop, PropDidChange } from '@stencil/core';

@Component({
  tag: 'form-input-base',
  styleUrl: 'form-input-base.scss'
})
export class FormInputBase {

  @Element() el: HTMLElement;

  @Prop() type: string = 'text';

  @Prop({ mutable: true }) value: string;

  @Event() valueChange: EventEmitter;

  // propagate model change to the view
  @PropDidChange('value')
  valueChanged() {
    const inputEl = this.el.querySelector('input');
    if (inputEl.value !== this.value) {
      inputEl.value = this.value;
      console.log('Model to View');
    }
  }

  inputChanged(ev: any) {
    this.value = ev.target && ev.target.value;
    this.valueChange.emit(this.value);
    console.log('View to Model');
  }

  render() {
    return (
      <input value={this.value} onInput={this.inputChanged.bind(this)}></input>
    );
  }
}