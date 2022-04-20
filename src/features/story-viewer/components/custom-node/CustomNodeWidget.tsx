/** @jsxImportSource theme-ui */

import { DiagramEngine, PortWidget } from '@projectstorm/react-diagrams-core';
import { Component, FC } from 'react';
import { CustomNodeModel } from './CustomNodeModel';

const CirclePort: FC = (props) => (
  <div
    className="circle-port"
    sx={{
      width: '12px',
      height: '12px',
      margin: '2px',
      borderRadius: '4px',
      background: 'darkgray',
      cursor: 'pointer',
      '&:hover': {
        background: 'mediumpurple',
      },
    }}
    {...props}
  ></div>
);

const CustomNode: FC = (props) => (
  <div
    className="custom-node"
    sx={{
      border: 'solid 2px gray',
      borderRadius: '5px',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      position: 'relative',
    }}
    {...props}
  ></div>
);
interface CustomNodeColorProps {
  nodeColor: string;
}
const CustomNodeColor: FC<CustomNodeColorProps> = ({ nodeColor, ...props }) => (
  <div
    className="custom-node-colour"
    sx={{
      bg: nodeColor,
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '20px',
      height: '20px',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
    }}
    {...props}
  ></div>
);

export interface CustomNodeWidgetProps {
  node: CustomNodeModel;
  engine: DiagramEngine;
}

// export interface CustomNodeWidgetState {}

export class CustomNodeWidget extends Component<CustomNodeWidgetProps> {
  // CustomNodeWidgetState
  constructor(props: CustomNodeWidgetProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CustomNode>
        <PortWidget
          engine={this.props.engine}
          port={this.props.node.getPort('in')!}
        >
          <CirclePort />
        </PortWidget>
        <PortWidget
          engine={this.props.engine}
          port={this.props.node.getPort('out')!}
        >
          <CirclePort />
        </PortWidget>
        <CustomNodeColor nodeColor={this.props.node.color} />
      </CustomNode>
    );
  }
}
