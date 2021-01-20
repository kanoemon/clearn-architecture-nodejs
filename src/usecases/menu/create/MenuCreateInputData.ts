import { InputData } from '../../InputData';

export class MenuCreateInputData implements InputData {
  private name: string;

  constructor(request) {
    this.name = request.name;
  }
}
