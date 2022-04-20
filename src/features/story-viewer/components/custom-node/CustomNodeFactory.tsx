import {
  AbstractReactFactory,
  GenerateWidgetEvent,
} from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';
import { CustomNodeModel } from './CustomNodeModel';
import { CustomNodeWidget } from './CustomNodeWidget';

export class CustomNodeFactory extends AbstractReactFactory<
  CustomNodeModel,
  DiagramEngine
> {
  constructor() {
    super('ts-custom-node');
  }

  generateModel() {
    return new CustomNodeModel();
  }

  generateReactWidget(
    event: GenerateWidgetEvent<CustomNodeModel>
  ): JSX.Element {
    return (
      <CustomNodeWidget
        engine={this.engine as DiagramEngine}
        node={event.model}
      />
    );
  }
}
