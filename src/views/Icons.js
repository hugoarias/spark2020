import React from 'react';
// import './App.css';
import ForceGraph2D from 'react-force-graph-2d';
import ForceGraph3D from 'react-force-graph-3d';
import SpriteText from 'three-spritetext';
import Three from 'three';
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// Usage: <CypherViz driver={driver}/>

class CypherViz2 extends React.Component {
    constructor(props) {
      super();
      this.driver = props.driver;
      // MATCH (n:Character)-[:INTERACTS1]->(m:Character) 
      // RETURN n.name as source, m.name as target
      this.state = { 
        query: `
        MATCH (n)-[r]->(m) RETURN n as source,r,m as target
        `,
        data : {nodes:[{name:"Joe"},{name:"Jane"}],links:[{source:"Joe",target:"Jane"}]} }
    }
  
    handleChange = (event) => {
      this.setState({query:event.target.value})
    }
    loadData = async () => {
      // let session = await this.driver.session({database:"gameofthrones"});
      let session = await this.driver.session({database:"instagraph"});
      let res = await session.run(this.state.query);
      session.close();
      console.log("==================");
      console.log(res);
      let nodes = new Set();
      let links = res.records.map(r => {
        let source = r.get("source");
        let target = r.get("target");
        let group = Math.ceil(Math.random() * 100)
        nodes.add(source);
        nodes.add(target);
        return {source, target}});
      nodes = Array.from(nodes).map(name => {return {name, group: Math.ceil(Math.random() * 100)}});
      this.setState({ data : {nodes, links}});
    }
    
    render() {
      return (
        <>
          <div className="content">
            <Row>
              <Col md="12">
                <div>
                  <textarea style={{display:"block",width:"1000px", height:"80px"}} 
                            value={this.state.query}
                            onChange={this.handleChange}/>
                  <button onClick={this.loadData}>Query</button>
                  <ForceGraph3D
                    height="768"
                    graphData={this.state.data}
                    nodeId="name" 
                    linkCurvature={0.2} 
                    linkDirectionalArrowRelPos={1} 
                    linkDirectionalArrowLength={10}
                    nodeAutoColorBy='group'
                    // backgroundColor="white"
                    linkThreeObjectExtend={true}
                    linkThreeObject={link => {
                      // extend link with text sprite
                      const sprite = new SpriteText(`${link.source} > ${link.target}`);
                      sprite.color = 'lightgrey';
                      sprite.textHeight = 2.5;
                      return sprite;
                    }}
                    linkPositionUpdate={(sprite, { start, end }) => {
                      const middlePos = Object.assign(...['x', 'y', 'z'].map(c => ({
                        [c]: start[c] + (end[c] - start[c]) / 2 // calc middle point
                      })));
          
                      // Position sprite
                      Object.assign(sprite.position, middlePos);
                    }}
                    onNodeClick={(node) => {
                        console.log("=========== node =============");
                        console.log(node);
                      }}
                    />
                </div>
              </Col>
            </Row>
          </div>
        </>
      );  
    }
  }
  
  export default CypherViz2