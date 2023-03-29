import React from 'react';
import { ModalState } from './types';

export default class SuccessModal extends React.Component<ModalState> {
  constructor(props: ModalState) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.saved ? 'success-modal-visible' : 'success-modal'}>
        <h5>Data has been saved successfully!</h5>
      </div>
    );
  }
}
