import { SharedModule } from './shared.module';

describe('SharedModule', () => {
  let sharedModuleModule: SharedModule;

  beforeEach(() => {
    sharedModuleModule = new SharedModule();
  });

  it('should create an instance', () => {
    expect(sharedModuleModule).toBeTruthy();
  });
});
