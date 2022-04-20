/** @jsxImportSource theme-ui */

import { CanvasWidget as CoreCanvasWidget } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams';
import { Component } from 'react';

export interface CanvasWidgetProps {
  engine: DiagramEngine;
}

export class CanvasWidget extends Component<CanvasWidgetProps> {
  render() {
    return (
      <CoreCanvasWidget
        engine={this.props.engine}
        sx={{
          height: '100%',
          width: '100%',
        }}
      />
    );
  }
}
