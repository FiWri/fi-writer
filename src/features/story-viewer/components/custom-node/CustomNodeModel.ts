import {
  BaseModelOptions,
  DeserializeEvent,
} from '@projectstorm/react-canvas-core';
import { DefaultPortModel, NodeModel } from '@projectstorm/react-diagrams';

export enum Direction {
  IN = 'in',
  OUT = 'out',
}

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
        name: Direction.IN,
      })
    );
    this.addPort(
      new DefaultPortModel({
        in: false,
        name: Direction.OUT,
      })
    );
  }

  serialize() {
    return {
      ...super.serialize(),
      color: this.color,
    };
  }

  deserialize(event: DeserializeEvent<this>): void {
    super.deserialize(event);
    this.color = event.data.color;
  }
}
