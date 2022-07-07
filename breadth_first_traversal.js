/**
 * breadth first traversal requires queue data structure
 * using and array as queue by using shift() to remove the first element
 * push() to add to the back of the queue
 */

// adjacency list of the graph
let graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const breadthFirstPrint = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    const neighbors = graph[current];
    for (let neighbor of neighbors) {
      queue.push(neighbor);
    }
  }
};

breadthFirstPrint(graph, "a");
