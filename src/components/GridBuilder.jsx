import React, { useState } from 'react';
import './GridBuilder.css';

const GridBuilder = () => {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);
    const [grid, setGrid] = useState([]);
    const [selectedTool, setSelectedTool] = useState('');

    const initializeGrid = () => {
        const newGrid = Array.from({ length: rows }, () => Array(cols).fill(''));
        setGrid(newGrid);
    };

    const handleCellClick = (row, col) => {
        const newGrid = grid.map((r, rowIndex) =>
            r.map((cell, colIndex) => {
                if (rowIndex === row && colIndex === col) {
                    if (selectedTool === 'start') {
                        if (grid.flat().includes('S')) {
                            alert('There can only be one starting point.');
                            return cell;
                        }
                        return 'S';
                    }
                    if (selectedTool === 'parking') {
                        return 'P';
                    }
                    if (selectedTool === 'obstacle') {
                        return 'O';
                    }
                    if (selectedTool === 'clear') {
                        return '';
                    }
                }
                return cell;
            })
        );
        setGrid(newGrid);
    };

    const handleToolSelect = (tool) => {
        setSelectedTool(tool);
    };

    const clearGrid = () => {
        const newGrid = Array.from({ length: rows }, () => Array(cols).fill(''));
        setGrid(newGrid);
    };

    const logGrid = () => {
        console.log(grid);
    };

    return (
        <div>
            <div>
                <input
                    type="number"
                    placeholder="Rows"
                    value={rows}
                    onChange={(e) => setRows(parseInt(e.target.value, 10))}
                />
                <input
                    type="number"
                    placeholder="Cols"
                    value={cols}
                    onChange={(e) => setCols(parseInt(e.target.value, 10))}
                />
                <button onClick={initializeGrid}>Generate Grid</button>
            </div>
            <div>
                <button onClick={() => handleToolSelect('start')}>Start</button>
                <button onClick={() => handleToolSelect('parking')}>Parking Lot</button>
                <button onClick={() => handleToolSelect('obstacle')}>Obstacle</button>
                <button onClick={() => handleToolSelect('clear')}>Clear Element</button>
                <button onClick={clearGrid}>Clear Grid</button>
                <button onClick={logGrid}>Log Grid</button>
            </div>
            <div id="grid" className="grid" style={{ gridTemplateColumns: `repeat(${cols}, 40px)` }}>
                {grid.map((row, rowIndex) =>
                    row.map((cell, colIndex) => {
                        let className = 'cell';
                        if (cell === 'S') {
                            className += ' start';
                        } else if (cell === 'P') {
                            className += ' parking';
                        } else if (cell === 'O') {
                            className += ' obstacle';
                        } else {
                            className += ' empty';
                        }

                        return (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className={className}
                                onClick={() => handleCellClick(rowIndex, colIndex)}
                            >
                                {cell}
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default GridBuilder;
