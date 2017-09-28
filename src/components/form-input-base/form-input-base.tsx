import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'form-input-base',
  styleUrl: 'form-input-base.scss'
})
export class FormInputBase {

  @Prop() first: string;

  @Prop() last: string;

  render() {
    return (
      <input></input>
    );
  }
}