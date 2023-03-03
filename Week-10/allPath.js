/**
 * Problem 10.6:
 * All Path from source to targetGiven a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1,
 * find all possiblepaths from node 0 to node n - 1 and return them in any order.
 * 
 * The graph is given as follows: graph[i] is a list of all nodes you can visit
 * from node i (i.e.,there is a directed edge from node i to node graph[i][j])
 * 
 */


let graph = [[1, 2], [3], [3], []];

let pathFromSourceToTarget = (graph) => {
   const n = graph.length - 1;
   const result = [];
   const path = [];
 
   let dfs = (position) => {
     path.push(position);
 
     if (position === n) {
       result.push([...path]);
     }
 
     const nextnodes = graph[position];
     for (let i = 0; i < nextnodes.length; i++) {
       dfs(nextnodes[i]);
     }
 
     path.pop();
   };
 
   dfs(0);
   return result;
};
 
let res = pathFromSourceToTarget(graph);
console.log(res);