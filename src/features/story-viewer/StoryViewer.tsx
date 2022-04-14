import createEngine, {
  DefaultLinkModel,
  DiagramModel,
} from '@projectstorm/react-diagrams'
import { CanvasWidget } from './CanvasWidget'
import { CustomNodeFactory } from './custom-node/CustomNodeFactory'
import { CustomNodeModel } from './custom-node/CustomNodeModel'

export const StoryViewer = () => {
  // create an instance of the engine with all the defaults
  const engine = createEngine()

  // register the two engines
  engine.getNodeFactories().registerFactory(new CustomNodeFactory())

  // create a diagram model
  const model = new DiagramModel()

  //####################################################
  // now create two nodes of each type, and connect them

  const node1 = new CustomNodeModel({ color: 'rgb(192,255,0)' })
  node1.setPosition(50, 50)

  const node2 = new CustomNodeModel({ color: 'rgb(0,192,255)' })
  node2.setPosition(200, 50)

  const link1 = new DefaultLinkModel()
  link1.setSourcePort(node1.getPort('out'))
  link1.setTargetPort(node2.getPort('in'))

  model.addAll(node1, node2, link1)

  //####################################################

  // install the model into the engine
  engine.setModel(model)

  // return <CanvasWidget engine={engine} />;
  return <CanvasWidget engine={engine} />
}
