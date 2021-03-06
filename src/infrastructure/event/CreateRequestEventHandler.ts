import CreateRequestUseCase from '@core/domain/request/usecase/CreateRequestUseCase';

import CreateRequestEvent from './CreateRequestEvent';

class CreateRequestEventHandler {
  useCase: CreateRequestUseCase;
  constructor(createRequestUseCase, eventBus) {
    this.useCase = createRequestUseCase;
    eventBus.on(CreateRequestEvent.name(), this._handleEvent.bind(this));
  }

  _handleEvent({ id, url, validFrom }) {
    this.useCase.createRequest(id, url, validFrom);
  }
}

export default CreateRequestEventHandler;
