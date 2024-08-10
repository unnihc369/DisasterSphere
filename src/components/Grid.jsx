import React, { useState, useEffect } from 'react';
import './Grid.css'; // Make sure to import the CSS file

const rows = 12;
const cols = 12;

const initialGridData = [
    ['O', 'S', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', '', '', '', '', '', '', '', '', '', '', 'O'],
    ['O', 'P1', '', 'P9', 'O', 'P17', '', 'P25', 'O', 'P33', '', 'O'],
    ['O', 'P2', '', 'P10', 'O', 'P18', '', 'P26', 'O', 'P34', '', 'O'],
    ['O', 'P3', '', 'P11', 'O', 'P19', '', 'P27', 'O', 'P35', '', 'O'],
    ['O', 'P4', '', 'A', 'O', 'P20', '', 'P28', 'O', 'P36', '', 'O'],
    ['O', 'P5', '', 'P13', 'O', 'P21', '', 'A', 'O', 'P37', '', 'O'],
    ['O', 'P6', '', 'P14', 'O', 'P22', '', 'P30', 'O', 'A', '', 'O'],
    ['O', 'P7', '', 'P15', 'O', 'P23', '', 'P31', 'O', 'P39', '', 'O'],
    ['O', 'P8', '', 'P16', 'O', 'P24', '', 'P32', 'O', 'P40', '', 'O'],
    ['O', '', '', '', '', '', '', '', '', '', '', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
];

const Grid = () => {
    const [gridData, setGridData] = useState(initialGridData);
    const [slotNumber, setSlotNumber] = useState('');
    const [path, setPath] = useState([]);

    const markOccupied = (row, col) => {
        const newGridData = gridData.map((r, rowIndex) =>
            r.map((cell, colIndex) => {
                if (rowIndex === row && colIndex === col) {
                    return 'A';
                }
                return cell;
            })
        );
        setGridData(newGridData);
    };

    const handleSlotSelection = () => {
        const number = parseInt(slotNumber);
        if (!isNaN(number)) {
            findPath(number);
        } else {
            alert('Please enter a valid slot number');
        }
    };

    const findPath = (slotNumber) => {
        const target = findParkingSlot(slotNumber);
        if (!target) {
            alert('Invalid slot number');
            return;
        }

        const start = { row: 0, col: 1 };
        const newPath = dijkstra(start, target);
        if (newPath.length === 0) {
            alert('No path found');
            return;
        }
        setPath(newPath);
    };

    const findParkingSlot = (slotNumber) => {
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (gridData[row][col] === `P${slotNumber}`) {
                    return { row, col };
                }
            }
        }
        return null;
    };

    const dijkstra = (start, target) => {
        const directions = [
            { row: -1, col: 0 },
            { row: 1, col: 0 },
            { row: 0, col: -1 },
            { row: 0, col: 1 },
        ];

        const pq = new PriorityQueue();
        const dist = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
        const prev = Array.from({ length: rows }, () => Array(cols).fill(null));

        pq.enqueue({ ...start, dist: 0 });
        dist[start.row][start.col] = 0;

        while (!pq.isEmpty()) {
            const { row, col, dist: currentDist } = pq.dequeue();

            if (row === target.row && col === target.col) {
                break;
            }

            for (const dir of directions) {
                const newRow = row + dir.row;
                const newCol = col + dir.col;

                if (
                    isValid(newRow, newCol) &&
                    (gridData[newRow][newCol] === '' ||
                        gridData[newRow][newCol] === 'S' ||
                        gridData[newRow][newCol] === `P${parseInt(slotNumber)}`)
                ) {
                    const newDist = currentDist + 1;

                    if (newDist < dist[newRow][newCol]) {
                        dist[newRow][newCol] = newDist;
                        prev[newRow][newCol] = { row, col };
                        pq.enqueue({ row: newRow, col: newCol, dist: newDist });
                    }
                }
            }
        }

        const path = [];
        let { row, col } = target;
        while (prev[row][col]) {
            path.unshift({ row, col });
            ({ row, col } = prev[row][col]);
        }
        return path;
    };

    const isValid = (row, col) => {
        return row >= 0 && row < rows && col >= 0 && col < cols;
    };

    return (
        <div>
            <div id="grid" className="grid">
                {gridData.map((row, rowIndex) =>
                    row.map((cell, colIndex) => {
                        let className = 'cell';
                        if (cell === 'O') {
                            className += ' obstacle';
                        } else if (cell === 'S') {
                            className += ' start';
                        } else if (cell.startsWith('P')) {
                            className += ' parking';
                        } else if (cell === 'A') {
                            className += ' occupied';
                        } else {
                            className += ' empty';
                        }

                        const isInPath = path.some(
                            (p) => p.row === rowIndex && p.col === colIndex
                        );
                        if (isInPath) {
                            className += ' path';
                        }

                        return (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className={className}
                                onClick={() => {
                                    if (cell.startsWith('P')) {
                                        markOccupied(rowIndex, colIndex);
                                    }
                                }}
                            >
                                {cell}
                            </div>
                        );
                    })
                )}
            </div>
            <input
                type="number"
                value={slotNumber}
                onChange={(e) => setSlotNumber(e.target.value)}
                placeholder="Enter slot number"
            />
            <button onClick={handleSlotSelection}>Select Slot</button>
        </div>
    );
};

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
        this.sort();
    }

    dequeue() {
        return this.queue.shift();
    }

    sort() {
        this.queue.sort((a, b) => a.dist - b.dist);
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

export default Grid;
