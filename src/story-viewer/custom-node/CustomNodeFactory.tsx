import { CustomNodeModel } from "./CustomNodeModel";
import { CustomNodeWidget } from "./CustomNodeWidget";
import { AbstractReactFactory } from "@projectstorm/react-canvas-core";
import { DiagramEngine } from "@projectstorm/react-diagrams-core";

export class CustomNodeFactory extends AbstractReactFactory<CustomNodeModel, DiagramEngine> {
  constructor() {
    super("ts-custom-node");
  }

  generateModel(initialConfig) {
    return new CustomNodeModel();
  }

  generateReactWidget(event): JSX.Element {
    return <CustomNodeWidget engine={this.engine as DiagramEngine} node={event.model} />;
  }
}
