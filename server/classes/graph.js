const Node = require('node.js');

class Graph {
    constructor() {
        this.nodes = [];
    }

    addNode(node) {
        this.nodes.push(node);
    }

    distance(node1, node2) {
        const dx = node1.longitude - node2.longitude;
        const dy = node1.latitude - node2.latitude;
        return Math.sqrt(dx * dx + dy * dy);
    }

    knn(k) {
        this.nodes.forEach(node => {
            let neighbors = this.nodes.map(other => {
                return { node: other, distance: this.distance(node, other) };
            });

            neighbors = neighbors
                .filter(neighbor => neighbor.node !== node)
                .sort((a, b) => a.distance - b.distance)
                .slice(0, k);

            node.neighbors = neighbors.map(neighbor => neighbor.node);
        });
    }

    aStar() {

    }

    dijkstrs() {

    }
}

module.exports.Graph = Graph;