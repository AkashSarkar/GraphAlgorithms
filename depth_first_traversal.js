// depth first traversal uses stack as a data structure

// adjacency list of the graph
let graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

/**
 * iterative approach for depth first traversal
 * uses stack as data structure
 * treat array as stack by using push(), pop()
 */

const depthFirstIterativePrint = (graph, source) => {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    //get the neighbors of current node
    const neighbors = graph[current];
    for (let neighbor of neighbors) {
      stack.push(neighbor);
    }
  }
};

// depthFirstIterativePrint(graph, "a");

/**
 * recursive approach
 */

const depthFirstRecursivePrint = (graph, source) => {
  console.log(source);
  const neighbors = graph[source];
  for (let neighbor of neighbors) {
    depthFirstRecursivePrint(graph, neighbor);
  }
};

depthFirstRecursivePrint(graph, "a");
