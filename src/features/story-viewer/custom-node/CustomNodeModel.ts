import { BaseModelOptions } from '@projectstorm/react-canvas-core';
import { DefaultPortModel, NodeModel } from '@projectstorm/react-diagrams';

export interface CustomNodeModelOptions extends BaseModelOptions {
  color?: string;
}

export class CustomNodeModel extends NodeModel {
  color: string;

  constructor(options: CustomNodeModelOptions = {}) {
    super({
      ...options,
      type: 'ts-custom-node',
    });
    this.color = options.color || 'red';

    // setup an in and out port
    this.addPort(
      new DefaultPortModel({
        in: true,
        name: 'in',
      })
    );
    this.addPort(
      new DefaultPortModel({
        in: false,
        name: 'out',
      })
    );
  }

  serialize() {
    return {
      ...super.serialize(),
      color: this.color,
    };
  }

  deserialize(event): void {
    super.deserialize(event);
    this.color = event.data.color;
  }
}
