/**
 * Problem 10.4:
 * Find if Path Exists in Graph There is a bi-directional graph with n vertices
 * where each vertex is labeled from 0 to n -1 (inclusive).
 * The edges in the graph are represented as a 2D integer array edges,
 * where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertexvi.
 * Every vertex pair is connected by at most one edge, and no vertex has an edge toitself.
 * 
 * You want to determine if there is a valid path that exists from vertex source to vertex destination.
 * 
 * Given edges and the integers n, source, and destination, return true if there is a validpath from source to destination, or false otherwise
 * 
 */


 let n = 6;
 let edges = [
   [0, 1],
   [1, 2],
   [2, 0],
 ];
 let source = 0;
 let destination = 2;
 
 let hasPath = (n, edges, source, destination) => {
   let adjList = {};
   let visited = [];
 
   for (let edge of edges) {
     adjList[edge[0]]
       ? adjList[edge[0]].push(edge[1])
       : (adjList[edge[0]] = [edge[1]]);
 
     adjList[edge[1]]
       ? adjList[edge[1]].push(edge[0])
       : (adjList[edge[1]] = [edge[0]]);
   }
 
   //console.log("adjList", adjList);
   
   const stack = [source];
   visited[source] = true;
   while (stack.length) {
     const current = stack.pop();
     if (current === destination) {
       return true;
     }
     for (let neighbour of adjList[current]) {
       if (!visited[neighbour]) {
         stack.push(neighbour);
         visited[neighbour] = true;
       }
     }
   }
 
   return false;
 };
 
 let res = hasPath(n, edges, source, destination);
 
 console.log(res);