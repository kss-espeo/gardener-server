import State from '../common/State';

const PROCESSED = 'Processed';
const SENT = 'Sent';
const FAILED = 'Failed';

class ResponseState extends State {
  constructor() {
    super();
    this._setState(PROCESSED, () => true);
  }

  markAsSent() {
    this._setState(SENT, name => name === PROCESSED);
  }

  markAsFailed() {
    this._setState(FAILED, name => name === PROCESSED);
  }
}

export default  ResponseState;
