// === Game Configuration ===
const CONFIG = {
    LOADING_DURATION: 1500,
};

// === Difficulty Levels ===
const DIFFICULTY = {
    beginner: {
        name: 'Новичок',
        size: 3,
        cellSize: 65,
    },
    easy: {
        name: 'Легко',
        size: 4,
        cellSize: 55,
    },
    medium: {
        name: 'Средне',
        size: 6,
        cellSize: 45,
    },
    hard: {
        name: 'Сложно',
        size: 8,
        cellSize: 38,
    },
};

// === Predefined Kakuro Puzzles ===
// Cell types: 
// null = black cell
// 0 = empty white cell (to fill)
// {down: N, right: M} = hint cell
// number > 0 = prefilled white cell (solution)

const PUZZLES = {
    // Уровень "Новичок" - поле 3×3, очень простые головоломки
    beginner: [
        {
            // Сумма 3 = 1+2
            grid: [
                [null, {right: 3}, null],
                [{down: 3}, 0, 0],
                [null, 0, null],
            ],
            solution: [
                [null, null, null],
                [null, 1, 2],
                [null, 2, null],
            ],
        },
        {
            // Сумма 4 = 1+3
            grid: [
                [null, {right: 4}, null],
                [{down: 4}, 0, 0],
                [null, 0, null],
            ],
            solution: [
                [null, null, null],
                [null, 1, 3],
                [null, 3, null],
            ],
        },
        {
            // Сумма 5 = 2+3
            grid: [
                [null, {right: 5}, null],
                [{down: 5}, 0, 0],
                [null, 0, null],
            ],
            solution: [
                [null, null, null],
                [null, 2, 3],
                [null, 3, null],
            ],
        },
        {
            // Сумма 7 = 3+4
            grid: [
                [null, {right: 7}, null],
                [{down: 7}, 0, 0],
                [null, 0, null],
            ],
            solution: [
                [null, null, null],
                [null, 3, 4],
                [null, 4, null],
            ],
        },
        {
            // Разные суммы: 3 и 5
            grid: [
                [null, {right: 3}, null],
                [{down: 5}, 0, 0],
                [null, 0, null],
            ],
            solution: [
                [null, null, null],
                [null, 1, 2],
                [null, 4, null],
            ],
        },
    ],
    easy: [
        {
            grid: [
                [null, {right: 3}, {right: 6}, null],
                [{down: 4}, 0, 0, {down: 3}],
                [{down: 6}, 0, 0, 0],
                [null, 0, 0, null],
            ],
            solution: [
                [null, null, null, null],
                [null, 1, 2, null],
                [null, 3, 2, 1],
                [null, 2, 1, null],
            ],
        },
        {
            grid: [
                [null, {right: 4}, {right: 3}, null],
                [{down: 3}, 0, 0, {down: 4}],
                [{down: 4}, 0, 0, 0],
                [null, 0, 0, null],
            ],
            solution: [
                [null, null, null, null],
                [null, 1, 2, null],
                [null, 3, 1, 3],
                [null, 2, 1, null],
            ],
        },
        {
            grid: [
                [null, {right: 7}, {right: 4}, null],
                [{down: 6}, 0, 0, {down: 5}],
                [{down: 5}, 0, 0, 0],
                [null, 0, 0, null],
            ],
            solution: [
                [null, null, null, null],
                [null, 4, 3, null],
                [null, 2, 1, 2],
                [null, 3, 2, null],
            ],
        },
    ],
    medium: [
        {
            grid: [
                [null, null, {right: 16}, {right: 17}, null, null],
                [null, {down: 16, right: 4}, 0, 0, {down: 17}, null],
                [{down: 4}, 0, 0, 0, 0, {down: 4}],
                [{down: 17}, 0, 0, 0, 0, 0],
                [null, {down: 4}, 0, 0, 0, 0],
                [null, null, 0, 0, null, null],
            ],
            solution: [
                [null, null, null, null, null, null],
                [null, null, 1, 3, null, null],
                [null, 3, 7, 9, 8, null],
                [null, 1, 9, 8, 7, 3],
                [null, null, 3, 1, 2, 1],
                [null, null, 2, 2, null, null],
            ],
        },
        {
            grid: [
                [null, {right: 6}, {right: 11}, null, null, null],
                [{down: 12}, 0, 0, {down: 11, right: 7}, {right: 8}, null],
                [{down: 7}, 0, 0, 0, 0, {down: 3}],
                [null, {down: 3, right: 11}, 0, 0, 0, 0],
                [null, null, 0, 0, {down: 3}, 0],
                [null, null, null, 0, 0, null],
            ],
            solution: [
                [null, null, null, null, null, null],
                [null, 4, 2, null, null, null],
                [null, 3, 9, 2, 5, null],
                [null, 5, 4, 3, 6, 1],
                [null, null, 2, 1, null, 2],
                [null, null, null, 1, 2, null],
            ],
        },
    ],
    hard: [
        {
            grid: [
                [null, null, {right: 23}, {right: 30}, null, null, {right: 27}, {right: 12}],
                [null, {down: 16, right: 16}, 0, 0, null, {down: 24, right: 17}, 0, 0],
                [{down: 17}, 0, 0, 0, {down: 29, right: 15}, 0, 0, 0],
                [{down: 35}, 0, 0, 0, 0, 0, 0, 0],
                [null, {down: 7}, 0, 0, 0, 0, 0, {down: 8}],
                [null, null, {down: 11, right: 8}, 0, 0, 0, 0, 0],
                [null, null, null, 0, 0, {down: 4, right: 6}, 0, 0],
                [null, null, null, 0, 0, null, 0, 0],
            ],
            solution: [
                [null, null, null, null, null, null, null, null],
                [null, null, 7, 9, null, null, 9, 8],
                [null, 8, 9, 6, null, 7, 8, 4],
                [null, 7, 5, 6, 8, 9, 1, 3],
                [null, null, 1, 2, 4, 3, 2, null],
                [null, null, null, 5, 3, 6, 4, 5],
                [null, null, null, 8, 3, null, 3, 3],
                [null, null, null, 1, 1, null, 1, 3],
            ],
        },
        {
            grid: [
                [null, {right: 4}, {right: 11}, null, null, {right: 10}, {right: 3}, null],
                [{down: 10}, 0, 0, {down: 3, right: 4}, null, 0, 0, {down: 11}],
                [{down: 3}, 0, 0, 0, {down: 6, right: 7}, 0, 0, 0],
                [null, {down: 7, right: 3}, 0, 0, 0, 0, {down: 4}, 0],
                [null, null, 0, 0, {down: 10, right: 8}, 0, 0, 0],
                [null, {down: 16, right: 6}, 0, 0, 0, 0, 0, null],
                [{down: 4}, 0, 0, 0, 0, {down: 3, right: 4}, 0, 0],
                [null, 0, 0, null, 0, null, 0, 0],
            ],
            solution: [
                [null, null, null, null, null, null, null, null],
                [null, 1, 3, null, null, 3, 1, null],
                [null, 2, 1, 2, null, 4, 2, 5],
                [null, null, 1, 2, 5, 2, null, 4],
                [null, null, 6, 4, null, 5, 3, 2],
                [null, null, 2, 4, 8, 9, 6, null],
                [null, 3, 1, 5, 7, null, 1, 3],
                [null, 1, 3, null, 3, null, 2, 2],
            ],
        },
    ],
};

// === Game State ===
let gameState = {
    currentScreen: 'welcome',
    difficulty: 'easy',
    currentPuzzle: null,
    userGrid: [],
    selectedCell: null,
    startTime: null,
    timerInterval: null,
    elapsedSeconds: 0,
};

// === Navigation Functions ===
function navigateTo(screenName) {
    const currentScreenEl = document.getElementById(`screen-${gameState.currentScreen}`);
    const nextScreenEl = document.getElementById(`screen-${screenName}`);
    
    if (currentScreenEl) {
        currentScreenEl.classList.add('screen-exit');
        setTimeout(() => {
            currentScreenEl.classList.remove('active', 'screen-exit');
        }, 300);
    }
    
    setTimeout(() => {
        nextScreenEl.classList.add('active', 'screen-enter');
        setTimeout(() => {
            nextScreenEl.classList.remove('screen-enter');
        }, 400);
    }, 300);
    
    gameState.currentScreen = screenName;
}

// === Timer Functions ===
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('timer');
    if (timerEl) {
        timerEl.textContent = formatTime(gameState.elapsedSeconds);
    }
}

function startTimer() {
    gameState.startTime = Date.now();
    gameState.elapsedSeconds = 0;
    updateTimerDisplay();
    
    gameState.timerInterval = setInterval(() => {
        gameState.elapsedSeconds = Math.floor((Date.now() - gameState.startTime) / 1000);
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
}

// === Puzzle Functions ===
function getRandomPuzzle(difficulty) {
    const puzzles = PUZZLES[difficulty];
    const index = Math.floor(Math.random() * puzzles.length);
    return JSON.parse(JSON.stringify(puzzles[index])); // Deep clone
}

function initUserGrid(puzzle) {
    const grid = puzzle.grid;
    const userGrid = [];
    
    for (let row = 0; row < grid.length; row++) {
        userGrid[row] = [];
        for (let col = 0; col < grid[row].length; col++) {
            const cell = grid[row][col];
            if (cell === 0) {
                userGrid[row][col] = null; // Empty cell to fill
            } else {
                userGrid[row][col] = cell; // Keep hints and black cells
            }
        }
    }
    
    return userGrid;
}

// === Render Functions ===
function renderBoard() {
    const board = document.getElementById('kakuro-board');
    const puzzle = gameState.currentPuzzle;
    const diff = DIFFICULTY[gameState.difficulty];
    const size = puzzle.grid.length;
    const cellSize = diff.cellSize;
    const hintFontSize = Math.max(11, Math.floor(cellSize * 0.32));
    const valueFontSize = Math.floor(cellSize * 0.5);
    
    board.innerHTML = '';
    board.style.gridTemplateColumns = `repeat(${size}, ${cellSize}px)`;
    board.style.gridTemplateRows = `repeat(${size}, ${cellSize}px)`;
    
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const cellData = puzzle.grid[row][col];
            const userValue = gameState.userGrid[row][col];
            
            const cell = document.createElement('div');
            cell.className = 'kakuro-cell';
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            cell.dataset.row = row;
            cell.dataset.col = col;
            
            if (cellData === null) {
                // Black cell - пустая клетка с диагональю
                cell.classList.add('black');
            } else if (typeof cellData === 'object' && cellData !== null) {
                // Hint cell - клетка с подсказками
                cell.classList.add('hint');
                
                // Подсказка для суммы вниз (внизу слева)
                if (cellData.down !== undefined) {
                    const downHint = document.createElement('span');
                    downHint.className = 'hint-value down';
                    downHint.textContent = cellData.down;
                    downHint.style.fontSize = `${hintFontSize}px`;
                    cell.appendChild(downHint);
                }
                
                // Подсказка для суммы вправо (вверху справа)
                if (cellData.right !== undefined) {
                    const rightHint = document.createElement('span');
                    rightHint.className = 'hint-value right';
                    rightHint.textContent = cellData.right;
                    rightHint.style.fontSize = `${hintFontSize}px`;
                    cell.appendChild(rightHint);
                }
            } else {
                // White cell (fillable) - белая клетка для ввода
                cell.classList.add('white');
                cell.style.fontSize = `${valueFontSize}px`;
                
                if (userValue !== null && userValue !== 0) {
                    cell.textContent = userValue;
                    cell.classList.add('filled');
                }
                
                cell.addEventListener('click', () => selectCell(row, col));
            }
            
            board.appendChild(cell);
        }
    }
}

function selectCell(row, col) {
    // Deselect previous cell
    if (gameState.selectedCell) {
        const prevCell = document.querySelector(
            `.kakuro-cell[data-row="${gameState.selectedCell.row}"][data-col="${gameState.selectedCell.col}"]`
        );
        if (prevCell) {
            prevCell.classList.remove('selected');
        }
    }
    
    // Select new cell
    gameState.selectedCell = { row, col };
    const cell = document.querySelector(
        `.kakuro-cell[data-row="${row}"][data-col="${col}"]`
    );
    if (cell) {
        cell.classList.add('selected');
    }
}

function fillCell(number) {
    if (!gameState.selectedCell) return;
    
    const { row, col } = gameState.selectedCell;
    const cellData = gameState.currentPuzzle.grid[row][col];
    
    // Only fill white cells
    if (cellData !== 0) return;
    
    if (number === 0) {
        // Erase
        gameState.userGrid[row][col] = null;
    } else {
        gameState.userGrid[row][col] = number;
    }
    
    // Update display
    const cell = document.querySelector(
        `.kakuro-cell[data-row="${row}"][data-col="${col}"]`
    );
    if (cell) {
        cell.textContent = number === 0 ? '' : number;
        cell.classList.remove('error', 'correct');
        cell.classList.toggle('filled', number !== 0);
    }
    
    // Check if puzzle is complete
    if (isPuzzleComplete()) {
        checkSolution();
    }
}

function isPuzzleComplete() {
    const puzzle = gameState.currentPuzzle;
    const size = puzzle.grid.length;
    
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (puzzle.grid[row][col] === 0 && gameState.userGrid[row][col] === null) {
                return false;
            }
        }
    }
    return true;
}

// === Validation Functions ===
function validatePuzzle() {
    const puzzle = gameState.currentPuzzle;
    const size = puzzle.grid.length;
    const errors = [];
    
    // Check all hints
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const cell = puzzle.grid[row][col];
            
            if (typeof cell === 'object' && cell !== null) {
                // Check right hint
                if (cell.right !== undefined) {
                    const result = validateBlock(row, col, 'right', cell.right);
                    if (!result.valid) {
                        errors.push(...result.cells);
                    }
                }
                
                // Check down hint
                if (cell.down !== undefined) {
                    const result = validateBlock(row, col, 'down', cell.down);
                    if (!result.valid) {
                        errors.push(...result.cells);
                    }
                }
            }
        }
    }
    
    return errors;
}

function validateBlock(hintRow, hintCol, direction, targetSum) {
    const puzzle = gameState.currentPuzzle;
    const size = puzzle.grid.length;
    const cells = [];
    const values = [];
    
    let row = hintRow;
    let col = hintCol;
    
    // Move to first cell after hint
    if (direction === 'right') {
        col++;
    } else {
        row++;
    }
    
    // Collect all cells in the block
    while (row < size && col < size) {
        const cellData = puzzle.grid[row][col];
        
        // Stop at black cells or hint cells
        if (cellData === null || (typeof cellData === 'object' && cellData !== null)) {
            break;
        }
        
        const value = gameState.userGrid[row][col];
        cells.push({ row, col });
        values.push(value);
        
        if (direction === 'right') {
            col++;
        } else {
            row++;
        }
    }
    
    // Check if all cells are filled
    if (values.some(v => v === null)) {
        return { valid: true, cells: [] }; // Not complete yet, no error
    }
    
    // Check sum
    const sum = values.reduce((a, b) => a + b, 0);
    if (sum !== targetSum) {
        return { valid: false, cells };
    }
    
    // Check uniqueness
    const unique = new Set(values);
    if (unique.size !== values.length) {
        return { valid: false, cells };
    }
    
    return { valid: true, cells: [] };
}

function checkSolution() {
    const errors = validatePuzzle();
    const puzzle = gameState.currentPuzzle;
    const size = puzzle.grid.length;
    
    // Clear previous highlights
    document.querySelectorAll('.kakuro-cell.white').forEach(cell => {
        cell.classList.remove('error', 'correct');
    });
    
    if (errors.length > 0) {
        // Show errors
        errors.forEach(({ row, col }) => {
            const cell = document.querySelector(
                `.kakuro-cell[data-row="${row}"][data-col="${col}"]`
            );
            if (cell) {
                cell.classList.add('error');
            }
        });
    } else if (isPuzzleComplete()) {
        // All correct!
        document.querySelectorAll('.kakuro-cell.white').forEach(cell => {
            cell.classList.add('correct');
        });
        
        // Win!
        setTimeout(() => {
            endGame(true);
        }, 500);
    }
}

// === Game Control Functions ===
function selectDifficulty(level) {
    gameState.difficulty = level;
    
    const diffText = document.getElementById('selected-difficulty-text');
    if (diffText) {
        diffText.textContent = DIFFICULTY[level].name;
    }
    
    navigateTo('rules');
}

function startGame() {
    // Reset game state
    gameState.currentPuzzle = getRandomPuzzle(gameState.difficulty);
    gameState.userGrid = initUserGrid(gameState.currentPuzzle);
    gameState.selectedCell = null;
    gameState.elapsedSeconds = 0;
    
    navigateTo('game');
    
    // Render board and start timer after transition
    setTimeout(() => {
        renderBoard();
        startTimer();
    }, 400);
}

function endGame(won) {
    stopTimer();
    navigateTo('loading');
    
    setTimeout(() => {
        showResults(won);
    }, CONFIG.LOADING_DURATION);
}

function showResults(won) {
    const titleEl = document.getElementById('result-title');
    const textEl = document.getElementById('result-text');
    const timeEl = document.getElementById('final-time');
    
    timeEl.textContent = formatTime(gameState.elapsedSeconds);
    
    if (won) {
        titleEl.textContent = 'Поздравляем!';
        textEl.innerHTML = `Вы успешно решили головоломку за <strong>${formatTime(gameState.elapsedSeconds)}</strong>!`;
    } else {
        titleEl.textContent = 'Игра окончена';
        textEl.innerHTML = `Время: <strong>${formatTime(gameState.elapsedSeconds)}</strong>. Попробуйте ещё раз!`;
    }
    
    navigateTo('congratulation');
}

function restartGame() {
    navigateTo('difficulty');
}

function giveUp() {
    stopTimer();
    showResults(false);
}

// === Event Listeners Setup ===
function setupNumberPad() {
    const numPad = document.getElementById('number-pad');
    if (numPad) {
        numPad.querySelectorAll('.num-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const num = parseInt(btn.dataset.num, 10);
                fillCell(num);
            });
        });
    }
}

function setupKeyboard() {
    document.addEventListener('keydown', (e) => {
        if (gameState.currentScreen !== 'game') return;
        
        const key = e.key;
        
        if (key >= '1' && key <= '9') {
            fillCell(parseInt(key, 10));
        } else if (key === 'Backspace' || key === 'Delete' || key === '0') {
            fillCell(0);
        } else if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
            moveSelection(key);
        }
    });
}

function moveSelection(direction) {
    if (!gameState.selectedCell) return;
    
    const puzzle = gameState.currentPuzzle;
    const size = puzzle.grid.length;
    let { row, col } = gameState.selectedCell;
    
    const delta = {
        'ArrowUp': { row: -1, col: 0 },
        'ArrowDown': { row: 1, col: 0 },
        'ArrowLeft': { row: 0, col: -1 },
        'ArrowRight': { row: 0, col: 1 },
    };
    
    const d = delta[direction];
    let newRow = row + d.row;
    let newCol = col + d.col;
    
    // Find next white cell
    while (newRow >= 0 && newRow < size && newCol >= 0 && newCol < size) {
        if (puzzle.grid[newRow][newCol] === 0) {
            selectCell(newRow, newCol);
            return;
        }
        newRow += d.row;
        newCol += d.col;
    }
}

// === Initialize ===
document.addEventListener('DOMContentLoaded', () => {
    // Telegram Web App integration
    if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        tg.ready();
        tg.expand();
        
        if (tg.themeParams) {
            document.documentElement.style.setProperty('--tg-theme-bg-color', tg.themeParams.bg_color || '#FAFAFA');
        }
    }
    
    // Ensure welcome screen is visible
    document.getElementById('screen-welcome').classList.add('active');
    
    // Setup controls
    setupNumberPad();
    setupKeyboard();
    
    // Add touch feedback for mobile
    document.querySelectorAll('.btn-primary, .btn-close, .difficulty-card, .num-btn').forEach(btn => {
        btn.addEventListener('touchstart', () => {}, { passive: true });
    });
    
    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
});

// === Expose functions to global scope ===
window.navigateTo = navigateTo;
window.startGame = startGame;
window.restartGame = restartGame;
window.selectDifficulty = selectDifficulty;
window.giveUp = giveUp;
window.checkSolution = checkSolution;

