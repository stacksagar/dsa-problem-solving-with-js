class Graph {
  graph: object;

  constructor() {
    this.graph = {};
  }

  add(key: number, value: number) {
    if (this.graph[key]) {
      this.graph[key].push(value);
    } else {
      this.graph[key] = [value];
    }

    if (this.graph[value]) {
      this.graph[value].push(key);
    } else {
      this.graph[value] = [key];
    }
  }
}

const graph = new Graph();

// (1)
graph.add(1, 2);
graph.add(1, 3);
graph.add(1, 4);
graph.add(1, 5);

// (2)
graph.add(2, 3);
graph.add(2, 4);
graph.add(2, 5);

// (3)
graph.add(3, 4);

// (4)
graph.add(4, 5);

console.log(graph);
