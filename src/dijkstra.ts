import TinyQueue from 'tinyqueue';

const dijkstra = (graph:any, start:any, end:any) => {
    let costs:any = {};
    costs[start] = 0;
    let initialState = [0, [start], start];
    let queue = new TinyQueue([initialState], function(a, b) { return a[0] - b[0]; });
    let explored = {};

    while (queue.length) {
        let state = queue.pop();
        let cost = state[0];
        let node = state[2];
        if (node === end) {
            return state.slice(0, 2);
        }

        let neighbours = graph[node];
        Object.keys(neighbours).forEach(function(n) {
            let newCost = cost + neighbours[n];
            if (!(n in costs) || newCost < costs[n]) {
                costs[n] = newCost;
                let newState = [newCost, state[1].concat([n]), n];
                queue.push(newState);
            }
        });
    }

    return null;
}

export default dijkstra;