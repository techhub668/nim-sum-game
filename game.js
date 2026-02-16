// Nim Sum Master - Game Logic

// ============================================
// Navigation
// ============================================
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.section;
        navigateTo(section);
    });
});

function navigateTo(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
}

// ============================================
// Utility Functions
// ============================================
function calculateNimSumFromArray(piles) {
    return piles.reduce((a, b) => a ^ b, 0);
}

function toBinary(num, minBits = 8) {
    let binary = num.toString(2);
    while (binary.length < minBits) {
        binary = '0' + binary;
    }
    return binary;
}

function renderMatchsticks(container, count) {
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const matchstick = document.createElement('div');
        matchstick.className = 'matchstick';
        matchstick.style.animationDelay = `${i * 0.02}s`;
        container.appendChild(matchstick);
    }
}

function pileLabel(i) {
    return currentLang === 'zh-TW' ? `\u7B2C ${i + 1} \u5806` : `Pile ${i + 1}`;
}

function showNimSumBreakdown(piles) {
    const maxBits = Math.max(...piles.map(p => p.toString(2).length));
    let html = '';
    
    piles.forEach((pile, i) => {
        const binary = toBinary(pile, maxBits);
        html += `${pileLabel(i)}: ${pile.toString().padStart(3)} = ${binary}\n`;
    });
    
    const nimSum = calculateNimSumFromArray(piles);
    const nimSumBinary = toBinary(nimSum, maxBits);
    html += `${'─'.repeat(maxBits + 15)}\n`;
    html += `Nim Sum: ${nimSum.toString().padStart(3)} = ${nimSumBinary}`;
    
    if (nimSum === 0) {
        html += `\n\n${t('analysis.position')} ${t('analysis.losing')}`;
    } else {
        html += `\n\n${t('analysis.position')} ${t('analysis.winning')}`;
    }
    
    return html;
}

// ============================================
// Single Pile Game
// ============================================
let singlePileState = {
    remaining: 0,
    maxTake: 3,
    lastWins: true,
    playerTurn: true,
    gameOver: false
};

function startSinglePileGame() {
    const pileSize = parseInt(document.getElementById('single-pile-size').value);
    const maxTake = parseInt(document.getElementById('single-max-take').value);
    const lastWins = document.getElementById('single-last-wins').value === 'true';
    
    singlePileState = {
        remaining: pileSize,
        maxTake: maxTake,
        lastWins: lastWins,
        playerTurn: true,
        gameOver: false
    };
    
    document.getElementById('max-take-display').textContent = maxTake;
    document.getElementById('last-wins-text').textContent = lastWins ? t('single.wins') : t('single.loses');
    
    document.getElementById('single-pile-game').classList.remove('hidden');
    document.getElementById('single-strategy').classList.add('hidden');
    
    updateSinglePileDisplay();
}

function updateSinglePileDisplay() {
    const container = document.getElementById('single-pile-display');
    renderMatchsticks(container, singlePileState.remaining);
    document.getElementById('single-remaining').textContent = singlePileState.remaining;
    
    if (singlePileState.gameOver) {
        return;
    }
    
    const actionsContainer = document.getElementById('single-actions');
    actionsContainer.innerHTML = '';
    
    if (singlePileState.playerTurn) {
        document.getElementById('single-turn-text').textContent = t('single.yourTurn');
        const maxCanTake = Math.min(singlePileState.maxTake, singlePileState.remaining);
        const statusText = currentLang === 'zh-TW' 
            ? `\u53D6\u8D70 1 \u5230 ${maxCanTake} \u6839\u706B\u67F4`
            : `Take 1 to ${maxCanTake} matchsticks`;
        document.getElementById('single-status').textContent = statusText;
        
        for (let i = 1; i <= maxCanTake; i++) {
            const btn = document.createElement('button');
            btn.className = 'btn';
            btn.textContent = currentLang === 'zh-TW' ? `\u53D6\u8D70 ${i} \u6839` : `Take ${i}`;
            btn.onclick = () => makeSinglePileMove(i);
            actionsContainer.appendChild(btn);
        }
    } else {
        document.getElementById('single-turn-text').textContent = t('single.computerTurn');
        document.getElementById('single-status').textContent = t('single.thinking');
        setTimeout(computerSinglePileMove, 1000);
    }
}

function makeSinglePileMove(amount) {
    singlePileState.remaining -= amount;
    
    if (singlePileState.remaining <= 0) {
        singlePileState.gameOver = true;
        const playerWins = singlePileState.lastWins ? singlePileState.playerTurn : !singlePileState.playerTurn;
        showSinglePileGameOver(playerWins);
    } else {
        singlePileState.playerTurn = false;
        updateSinglePileDisplay();
    }
}

function computerSinglePileMove() {
    const { remaining, maxTake, lastWins } = singlePileState;
    let take;
    
    if (lastWins) {
        const targetRemainder = remaining % (maxTake + 1);
        if (targetRemainder === 0) {
            take = Math.floor(Math.random() * Math.min(maxTake, remaining)) + 1;
        } else {
            take = targetRemainder;
        }
    } else {
        const targetRemainder = (remaining - 1) % (maxTake + 1);
        if (targetRemainder === 0 && remaining > 1) {
            take = Math.floor(Math.random() * Math.min(maxTake, remaining - 1)) + 1;
        } else if (remaining === 1) {
            take = 1;
        } else {
            take = targetRemainder === 0 ? 1 : targetRemainder;
        }
    }
    
    take = Math.min(take, remaining);
    singlePileState.remaining -= take;
    
    const statusText = currentLang === 'zh-TW' ? `\u96FB\u8166\u53D6\u8D70\u4E86 ${take} \u6839` : `Computer took ${take}`;
    document.getElementById('single-status').textContent = statusText;
    
    if (singlePileState.remaining <= 0) {
        singlePileState.gameOver = true;
        const playerWins = singlePileState.lastWins ? false : true;
        setTimeout(() => showSinglePileGameOver(playerWins), 500);
    } else {
        singlePileState.playerTurn = true;
        setTimeout(updateSinglePileDisplay, 500);
    }
}

function showSinglePileGameOver(playerWins) {
    const actionsContainer = document.getElementById('single-actions');
    actionsContainer.innerHTML = `
        <div class="game-over ${playerWins ? '' : 'lost'}">
            <h3 class="${playerWins ? 'winner' : 'loser'}">${playerWins ? t('game.youWin') : t('game.youLose')}</h3>
            <p>${playerWins ? t('game.winMsg') : t('game.loseMsg')}</p>
            <button class="btn" onclick="startSinglePileGame()">${t('game.playAgain')}</button>
            <button class="btn secondary" onclick="showSinglePileStrategy()">${t('game.learnStrategy')}</button>
        </div>
    `;
    updateSinglePileDisplay();
}

function showSinglePileStrategy() {
    const pileSize = parseInt(document.getElementById('single-pile-size').value);
    const maxTake = parseInt(document.getElementById('single-max-take').value);
    const lastWins = document.getElementById('single-last-wins').value === 'true';
    
    const strategyDiv = document.getElementById('single-strategy');
    const contentDiv = document.getElementById('single-strategy-content');
    
    const modulus = maxTake + 1;
    const remainder = pileSize % modulus;
    
    let html = `<h4>${t('analysis.analysisForSingle', {n: pileSize, m: maxTake})}</h4>`;
    html += `<p><strong>${t('analysis.keyNumber')}</strong> k + 1 = ${maxTake} + 1 = ${modulus}</p>`;
    html += `<p><strong>${t('analysis.calculation')}</strong> ${pileSize} mod ${modulus} = ${remainder}</p>`;
    
    if (lastWins) {
        html += `<h4>${t('analysis.lastWins')}</h4>`;
        if (remainder === 0) {
            html += `<p class="strategy-result" style="color: var(--danger);">
                <strong>${t('analysis.losingFirst')}</strong><br>
                ${t('analysis.opponentMirror', {mod: modulus})}
            </p>`;
        } else {
            html += `<p class="strategy-result" style="color: var(--secondary);">
                <strong>${t('analysis.winningFirst')}</strong><br>
                ${t('analysis.takeToWin', {n: remainder, remaining: pileSize - remainder, mod: modulus})}<br>
                ${t('analysis.thenMirror', {mod: modulus})}
            </p>`;
        }
        
        html += `<h4>${t('analysis.losingPositions', {mod: modulus})}</h4>`;
        html += `<p>`;
        for (let i = 0; i <= Math.min(pileSize + modulus, 50); i += modulus) {
            html += `<span style="background: #fee2e2; padding: 5px 10px; margin: 3px; display: inline-block; border-radius: 5px;">${i}</span>`;
        }
        html += `</p>`;
    } else {
        html += `<h4>${t('analysis.lastLoses')}</h4>`;
        const adjustedRemainder = (pileSize - 1) % modulus;
        if (adjustedRemainder === 0) {
            html += `<p class="strategy-result" style="color: var(--danger);">
                <strong>${t('analysis.losingFirst')}</strong><br>
                ${t('analysis.mirrorForce')}
            </p>`;
        } else {
            html += `<p class="strategy-result" style="color: var(--secondary);">
                <strong>${t('analysis.winningFirst')}</strong><br>
                ${t('analysis.mirrorResponse', {n: adjustedRemainder})}
            </p>`;
        }
    }
    
    strategyDiv.classList.remove('hidden');
    contentDiv.innerHTML = html;
}

// ============================================
// Two Piles Game
// ============================================
let twoPilesState = {
    piles: [0, 0],
    selectedPile: -1,
    playerTurn: true,
    gameOver: false
};

function startTwoPilesGame() {
    const pile1 = parseInt(document.getElementById('pile1-size').value);
    const pile2 = parseInt(document.getElementById('pile2-size').value);
    const firstPlayer = document.getElementById('two-first-player').value;
    
    twoPilesState = {
        piles: [pile1, pile2],
        selectedPile: -1,
        playerTurn: firstPlayer === 'player',
        gameOver: false
    };
    
    document.getElementById('two-piles-game').classList.remove('hidden');
    document.getElementById('two-strategy').classList.add('hidden');
    document.getElementById('two-pile-select').classList.add('hidden');
    
    updateTwoPilesDisplay();
}

function updateTwoPilesDisplay() {
    renderMatchsticks(document.getElementById('pile1-display'), twoPilesState.piles[0]);
    renderMatchsticks(document.getElementById('pile2-display'), twoPilesState.piles[1]);
    
    document.getElementById('pile1-remaining').textContent = twoPilesState.piles[0];
    document.getElementById('pile2-remaining').textContent = twoPilesState.piles[1];
    
    const nimSum = calculateNimSumFromArray(twoPilesState.piles);
    document.getElementById('nim-sum-value').textContent = nimSum;
    
    if (twoPilesState.gameOver) {
        return;
    }
    
    if (twoPilesState.piles[0] === 0 && twoPilesState.piles[1] === 0) {
        twoPilesState.gameOver = true;
        const playerWins = !twoPilesState.playerTurn;
        showTwoPilesGameOver(playerWins);
        return;
    }
    
    if (twoPilesState.playerTurn) {
        document.getElementById('two-turn-text').textContent = t('two.yourTurn');
        document.getElementById('two-status').textContent = nimSum === 0 ? 
            t('two.losingPos') : 
            t('two.winningPos');
    } else {
        document.getElementById('two-turn-text').textContent = t('two.computerTurn');
        document.getElementById('two-status').textContent = t('single.thinking');
        document.getElementById('two-pile-select').classList.add('hidden');
        setTimeout(computerTwoPilesMove, 1000);
    }
    
    document.querySelectorAll('#two-piles-game .pile-container').forEach((el, i) => {
        el.classList.toggle('selected', i === twoPilesState.selectedPile);
    });
}

function selectPile(pileIndex) {
    if (!twoPilesState.playerTurn || twoPilesState.gameOver) return;
    if (twoPilesState.piles[pileIndex] === 0) return;
    
    twoPilesState.selectedPile = pileIndex;
    document.getElementById('two-pile-select').classList.remove('hidden');
    document.getElementById('selected-pile-num').textContent = pileIndex + 1;
    document.getElementById('two-take-amount').max = twoPilesState.piles[pileIndex];
    document.getElementById('two-take-amount').value = 1;
    
    updateTwoPilesDisplay();
}

function makeTwoPilesMove() {
    const pile = twoPilesState.selectedPile;
    const amount = parseInt(document.getElementById('two-take-amount').value);
    
    if (amount < 1 || amount > twoPilesState.piles[pile]) {
        alert(currentLang === 'zh-TW' ? '\u7121\u6548\u7684\u6578\u91CF\uFF01' : 'Invalid amount!');
        return;
    }
    
    twoPilesState.piles[pile] -= amount;
    twoPilesState.selectedPile = -1;
    document.getElementById('two-pile-select').classList.add('hidden');
    
    if (twoPilesState.piles[0] === 0 && twoPilesState.piles[1] === 0) {
        twoPilesState.gameOver = true;
        showTwoPilesGameOver(true);
    } else {
        twoPilesState.playerTurn = false;
        updateTwoPilesDisplay();
    }
}

function computerTwoPilesMove() {
    const nimSum = calculateNimSumFromArray(twoPilesState.piles);
    let pile, take;
    
    if (nimSum === 0) {
        const nonEmptyPiles = twoPilesState.piles.map((p, i) => ({pile: i, count: p}))
            .filter(p => p.count > 0);
        const chosen = nonEmptyPiles[Math.floor(Math.random() * nonEmptyPiles.length)];
        pile = chosen.pile;
        take = Math.floor(Math.random() * chosen.count) + 1;
    } else {
        for (let i = 0; i < twoPilesState.piles.length; i++) {
            const newValue = twoPilesState.piles[i] ^ nimSum;
            if (newValue < twoPilesState.piles[i]) {
                pile = i;
                take = twoPilesState.piles[i] - newValue;
                break;
            }
        }
    }
    
    twoPilesState.piles[pile] -= take;
    document.getElementById('two-status').textContent = t('two.computerTook', {n: take, p: pile + 1});
    
    if (twoPilesState.piles[0] === 0 && twoPilesState.piles[1] === 0) {
        twoPilesState.gameOver = true;
        setTimeout(() => showTwoPilesGameOver(false), 500);
    } else {
        twoPilesState.playerTurn = true;
        setTimeout(updateTwoPilesDisplay, 500);
    }
}

function showTwoPilesGameOver(playerWins) {
    document.getElementById('two-status').innerHTML = `
        <div class="game-over ${playerWins ? '' : 'lost'}">
            <h3 class="${playerWins ? 'winner' : 'loser'}">${playerWins ? t('game.youWin') : t('game.youLose')}</h3>
            <p>${playerWins ? t('game.winMsgXor') : t('game.loseMsgXor')}</p>
            <button class="btn" onclick="startTwoPilesGame()">${t('game.playAgain')}</button>
            <button class="btn secondary" onclick="showTwoPilesStrategy()">${t('game.learnStrategy')}</button>
        </div>
    `;
}

function showTwoPilesStrategy() {
    const pile1 = parseInt(document.getElementById('pile1-size').value);
    const pile2 = parseInt(document.getElementById('pile2-size').value);
    
    const strategyDiv = document.getElementById('two-strategy');
    const contentDiv = document.getElementById('two-strategy-content');
    
    const nimSum = pile1 ^ pile2;
    const maxBits = Math.max(pile1.toString(2).length, pile2.toString(2).length, nimSum.toString(2).length);
    
    let html = `<h4>${t('analysis.analysisForTwo', {p1: pile1, p2: pile2})}</h4>`;
    html += `<div class="nim-sum-breakdown">`;
    html += `${pileLabel(0)}: ${pile1.toString().padStart(3)} = ${toBinary(pile1, maxBits)}\n`;
    html += `${pileLabel(1)}: ${pile2.toString().padStart(3)} = ${toBinary(pile2, maxBits)}\n`;
    html += `${'─'.repeat(maxBits + 12)}\n`;
    html += `Nim Sum: ${nimSum.toString().padStart(3)} = ${toBinary(nimSum, maxBits)}`;
    html += `</div>`;
    
    if (nimSum === 0) {
        html += `<p style="color: var(--danger); font-weight: bold;">
            ${t('analysis.losingFirst')}<br>
            ${t('analysis.equalPiles')}
        </p>`;
    } else {
        html += `<p style="color: var(--secondary); font-weight: bold;">
            ${t('analysis.winningFirst')}
        </p>`;
        
        for (let i = 0; i < 2; i++) {
            const pileVal = i === 0 ? pile1 : pile2;
            const newValue = pileVal ^ nimSum;
            if (newValue < pileVal) {
                const take = pileVal - newValue;
                html += `<p><strong>${t('analysis.winningMove')}</strong> ${t('analysis.takePile', {n: take, p: i + 1})}</p>`;
                html += `<p>${t('analysis.leavePile', {p: i + 1, v: newValue})}</p>`;
                html += `<div class="nim-sum-breakdown">`;
                html += `${t('analysis.afterMove')}\n`;
                const newPiles = i === 0 ? [newValue, pile2] : [pile1, newValue];
                html += `${pileLabel(0)}: ${newPiles[0].toString().padStart(3)} = ${toBinary(newPiles[0], maxBits)}\n`;
                html += `${pileLabel(1)}: ${newPiles[1].toString().padStart(3)} = ${toBinary(newPiles[1], maxBits)}\n`;
                html += `${'─'.repeat(maxBits + 12)}\n`;
                html += `Nim Sum: ${(newPiles[0] ^ newPiles[1]).toString().padStart(3)} = ${toBinary(newPiles[0] ^ newPiles[1], maxBits)} ${t('analysis.nimSumZero')}`;
                html += `</div>`;
                break;
            }
        }
    }
    
    strategyDiv.classList.remove('hidden');
    contentDiv.innerHTML = html;
}

// ============================================
// Multi-Piles Game
// ============================================
let multiPilesState = {
    piles: [],
    selectedPile: -1,
    playerTurn: true,
    gameOver: false
};

function updatePileInputs() {
    const numPiles = parseInt(document.getElementById('num-piles').value);
    const container = document.getElementById('pile-inputs');
    container.innerHTML = '';
    
    for (let i = 0; i < numPiles; i++) {
        const defaultValues = [3, 5, 7, 4, 6, 8];
        const div = document.createElement('div');
        div.className = 'setting';
        div.innerHTML = `
            <label>${pileLabel(i)}:</label>
            <input type="number" class="multi-pile-input" value="${defaultValues[i] || Math.floor(Math.random() * 10) + 1}" min="1" max="50">
        `;
        container.appendChild(div);
    }
}

function randomizeMultiPiles() {
    const inputs = document.querySelectorAll('.multi-pile-input');
    inputs.forEach(input => {
        input.value = Math.floor(Math.random() * 15) + 1;
    });
}

function startMultiPilesGame() {
    const inputs = document.querySelectorAll('.multi-pile-input');
    const piles = Array.from(inputs).map(input => parseInt(input.value));
    
    multiPilesState = {
        piles: piles,
        selectedPile: -1,
        playerTurn: true,
        gameOver: false
    };
    
    document.getElementById('multi-piles-game').classList.remove('hidden');
    document.getElementById('multi-strategy').classList.add('hidden');
    document.getElementById('multi-pile-select').classList.add('hidden');
    
    updateMultiPilesDisplay();
}

function updateMultiPilesDisplay() {
    const container = document.getElementById('multi-piles-display');
    container.innerHTML = '';
    
    multiPilesState.piles.forEach((count, i) => {
        const pileDiv = document.createElement('div');
        pileDiv.className = `pile-container${i === multiPilesState.selectedPile ? ' selected' : ''}`;
        pileDiv.onclick = () => selectMultiPile(i);
        pileDiv.innerHTML = `
            <h4>${pileLabel(i)}</h4>
            <div class="pile" id="multi-pile-${i}"></div>
            <p class="pile-count">${count}</p>
        `;
        container.appendChild(pileDiv);
    });
    
    multiPilesState.piles.forEach((count, i) => {
        renderMatchsticks(document.getElementById(`multi-pile-${i}`), count);
    });
    
    const nimSumDisplay = document.getElementById('multi-nim-sum-display');
    nimSumDisplay.innerHTML = showNimSumBreakdown(multiPilesState.piles);
    
    if (multiPilesState.gameOver) {
        return;
    }
    
    const totalRemaining = multiPilesState.piles.reduce((a, b) => a + b, 0);
    if (totalRemaining === 0) {
        multiPilesState.gameOver = true;
        const playerWins = !multiPilesState.playerTurn;
        showMultiPilesGameOver(playerWins);
        return;
    }
    
    const nimSum = calculateNimSumFromArray(multiPilesState.piles);
    
    if (multiPilesState.playerTurn) {
        document.getElementById('multi-turn-text').textContent = t('multi.yourTurn');
        document.getElementById('multi-status').textContent = nimSum === 0 ? 
            t('multi.losingPos') : 
            t('multi.winningPos');
    } else {
        document.getElementById('multi-turn-text').textContent = t('multi.computerTurn');
        document.getElementById('multi-status').textContent = t('single.thinking');
        document.getElementById('multi-pile-select').classList.add('hidden');
        setTimeout(computerMultiPilesMove, 1000);
    }
}

function selectMultiPile(pileIndex) {
    if (!multiPilesState.playerTurn || multiPilesState.gameOver) return;
    if (multiPilesState.piles[pileIndex] === 0) return;
    
    multiPilesState.selectedPile = pileIndex;
    document.getElementById('multi-pile-select').classList.remove('hidden');
    document.getElementById('multi-selected-pile-num').textContent = pileIndex + 1;
    document.getElementById('multi-take-amount').max = multiPilesState.piles[pileIndex];
    document.getElementById('multi-take-amount').value = 1;
    
    updateMultiPilesDisplay();
}

function makeMultiPilesMove() {
    const pile = multiPilesState.selectedPile;
    const amount = parseInt(document.getElementById('multi-take-amount').value);
    
    if (amount < 1 || amount > multiPilesState.piles[pile]) {
        alert(currentLang === 'zh-TW' ? '\u7121\u6548\u7684\u6578\u91CF\uFF01' : 'Invalid amount!');
        return;
    }
    
    multiPilesState.piles[pile] -= amount;
    multiPilesState.selectedPile = -1;
    document.getElementById('multi-pile-select').classList.add('hidden');
    
    const totalRemaining = multiPilesState.piles.reduce((a, b) => a + b, 0);
    if (totalRemaining === 0) {
        multiPilesState.gameOver = true;
        showMultiPilesGameOver(true);
    } else {
        multiPilesState.playerTurn = false;
        updateMultiPilesDisplay();
    }
}

function computerMultiPilesMove() {
    const nimSum = calculateNimSumFromArray(multiPilesState.piles);
    let pile, take;
    
    if (nimSum === 0) {
        const nonEmptyPiles = multiPilesState.piles.map((p, i) => ({pile: i, count: p}))
            .filter(p => p.count > 0);
        const chosen = nonEmptyPiles[Math.floor(Math.random() * nonEmptyPiles.length)];
        pile = chosen.pile;
        take = Math.floor(Math.random() * chosen.count) + 1;
    } else {
        for (let i = 0; i < multiPilesState.piles.length; i++) {
            const newValue = multiPilesState.piles[i] ^ nimSum;
            if (newValue < multiPilesState.piles[i]) {
                pile = i;
                take = multiPilesState.piles[i] - newValue;
                break;
            }
        }
    }
    
    multiPilesState.piles[pile] -= take;
    document.getElementById('multi-status').textContent = t('multi.computerTook', {n: take, p: pile + 1});
    
    const totalRemaining = multiPilesState.piles.reduce((a, b) => a + b, 0);
    if (totalRemaining === 0) {
        multiPilesState.gameOver = true;
        setTimeout(() => showMultiPilesGameOver(false), 500);
    } else {
        multiPilesState.playerTurn = true;
        setTimeout(updateMultiPilesDisplay, 500);
    }
}

function showMultiPilesGameOver(playerWins) {
    document.getElementById('multi-status').innerHTML = `
        <div class="game-over ${playerWins ? '' : 'lost'}">
            <h3 class="${playerWins ? 'winner' : 'loser'}">${playerWins ? t('game.youWin') : t('game.youLose')}</h3>
            <p>${playerWins ? t('game.winMsgMaster') : t('game.loseMsgMaster')}</p>
            <button class="btn" onclick="startMultiPilesGame()">${t('game.playAgain')}</button>
            <button class="btn secondary" onclick="showMultiPilesStrategy()">${t('game.learnStrategy')}</button>
        </div>
    `;
}

function showMultiPilesStrategy() {
    const inputs = document.querySelectorAll('.multi-pile-input');
    const piles = Array.from(inputs).map(input => parseInt(input.value));
    
    const strategyDiv = document.getElementById('multi-strategy');
    const contentDiv = document.getElementById('multi-strategy-content');
    
    const nimSum = calculateNimSumFromArray(piles);
    const maxBits = Math.max(...piles.map(p => p.toString(2).length), nimSum.toString(2).length);
    
    let html = `<h4>${t('analysis.analysisFor', {n: piles.length})} ${piles.join(', ')}</h4>`;
    html += `<div class="nim-sum-breakdown">`;
    piles.forEach((pile, i) => {
        html += `${pileLabel(i)}: ${pile.toString().padStart(3)} = ${toBinary(pile, maxBits)}\n`;
    });
    html += `${'─'.repeat(maxBits + 12)}\n`;
    html += `Nim Sum: ${nimSum.toString().padStart(3)} = ${toBinary(nimSum, maxBits)}`;
    html += `</div>`;
    
    if (nimSum === 0) {
        html += `<p style="color: var(--danger); font-weight: bold;">
            ${t('analysis.losingFirst')}<br>
            ${t('analysis.anyMove')}
        </p>`;
    } else {
        html += `<p style="color: var(--secondary); font-weight: bold;">
            ${t('analysis.winningFirst')}
        </p>`;
        
        html += `<h4>${t('analysis.winningMoves')}</h4>`;
        let foundMove = false;
        
        for (let i = 0; i < piles.length; i++) {
            const newValue = piles[i] ^ nimSum;
            if (newValue < piles[i]) {
                const take = piles[i] - newValue;
                html += `<p><strong>${t('analysis.option', {n: i + 1})}</strong> ${t('analysis.takeFrom', {n: take, p: i + 1, v: newValue})}</p>`;
                foundMove = true;
            }
        }
        
        if (foundMove) {
            for (let i = 0; i < piles.length; i++) {
                const newValue = piles[i] ^ nimSum;
                if (newValue < piles[i]) {
                    const newPiles = [...piles];
                    newPiles[i] = newValue;
                    html += `<div class="nim-sum-breakdown">`;
                    html += `${t('analysis.afterTaking', {p: i + 1})}\n`;
                    newPiles.forEach((pile, j) => {
                        html += `${pileLabel(j)}: ${pile.toString().padStart(3)} = ${toBinary(pile, maxBits)}\n`;
                    });
                    html += `${'─'.repeat(maxBits + 12)}\n`;
                    const newNimSum = calculateNimSumFromArray(newPiles);
                    html += `Nim Sum: ${newNimSum.toString().padStart(3)} = ${toBinary(newNimSum, maxBits)} ${t('analysis.nimSumZero')}`;
                    html += `</div>`;
                    break;
                }
            }
        }
    }
    
    strategyDiv.classList.remove('hidden');
    contentDiv.innerHTML = html;
}

// ============================================
// Nim Sum Calculator
// ============================================
function calculateNimSum() {
    const input = document.getElementById('calc-input').value;
    const resultDiv = document.getElementById('calc-result');
    
    try {
        const piles = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n) && n >= 0);
        
        if (piles.length === 0) {
            resultDiv.textContent = t('analysis.calcError');
            return;
        }
        
        const nimSum = calculateNimSumFromArray(piles);
        const maxBits = Math.max(...piles.map(p => p.toString(2).length), nimSum.toString(2).length);
        
        let result = '';
        piles.forEach((pile, i) => {
            result += `${pileLabel(i)}: ${pile.toString().padStart(3)} = ${toBinary(pile, maxBits)}\n`;
        });
        result += `${'─'.repeat(maxBits + 12)}\n`;
        result += `Nim Sum: ${nimSum.toString().padStart(3)} = ${toBinary(nimSum, maxBits)}\n\n`;
        
        if (nimSum === 0) {
            result += `${t('analysis.position')} ${t('analysis.losingFirstPlayer')}\n`;
            result += t('analysis.anyMoveGives');
        } else {
            result += `${t('analysis.position')} ${t('analysis.winningFirstPlayer')}\n`;
            result += `\n${t('analysis.winningMoves')}\n`;
            for (let i = 0; i < piles.length; i++) {
                const newValue = piles[i] ^ nimSum;
                if (newValue < piles[i]) {
                    result += `- ${t('analysis.takeFrom', {n: piles[i] - newValue, p: i + 1, v: newValue})}\n`;
                }
            }
        }
        
        resultDiv.textContent = result;
    } catch (e) {
        resultDiv.textContent = t('analysis.calcInputError');
    }
}

// ============================================
// Practice Problems
// ============================================
const problems = [
    { difficulty: 'Easy', answer: 0 },
    { difficulty: 'Easy', answer: 1 },
    { difficulty: 'Medium', answer: 14 },
    { difficulty: 'Medium', answer: 0 },
    { difficulty: 'Medium', answer: 13 },
    { difficulty: 'Hard', answer: 1 },
    { difficulty: 'Hard', answer: 7 },
    { difficulty: 'Hard', answer: 0 },
    { difficulty: 'Hard', answer: 6 },
    { difficulty: 'Easy', answer: 0 }
];

let currentProblem = 0;
let score = 0;
let totalAttempted = 0;

function loadProblem(index) {
    currentProblem = index;
    const problemData = problems[index];
    const translatedProblems = t('practice.problems');
    const tp = (translatedProblems && Array.isArray(translatedProblems)) ? translatedProblems[index] : null;
    
    document.getElementById('problem-num').textContent = index + 1;
    document.getElementById('problem-difficulty').textContent = problemData.difficulty;
    document.getElementById('problem-difficulty').className = `problem-difficulty ${problemData.difficulty}`;
    document.getElementById('problem-text').textContent = tp ? tp.text : '';
    document.getElementById('user-answer').value = '';
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('hint-box').classList.add('hidden');
    document.getElementById('solution-box').classList.add('hidden');
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('user-answer').value);
    const problem = problems[currentProblem];
    const feedback = document.getElementById('feedback');
    
    totalAttempted++;
    
    if (userAnswer === problem.answer) {
        score++;
        feedback.textContent = t('practice.correct');
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = t('practice.incorrect', {answer: problem.answer});
        feedback.className = 'feedback incorrect';
    }
    
    feedback.classList.remove('hidden');
    updateScore();
}

function showHint() {
    const translatedProblems = t('practice.problems');
    const tp = (translatedProblems && Array.isArray(translatedProblems)) ? translatedProblems[currentProblem] : null;
    const hintBox = document.getElementById('hint-box');
    hintBox.textContent = tp ? tp.hint : '';
    hintBox.classList.remove('hidden');
}

function showSolution() {
    const translatedProblems = t('practice.problems');
    const tp = (translatedProblems && Array.isArray(translatedProblems)) ? translatedProblems[currentProblem] : null;
    const solutionBox = document.getElementById('solution-box');
    solutionBox.textContent = tp ? tp.solution : '';
    solutionBox.classList.remove('hidden');
}

function nextProblem() {
    loadProblem((currentProblem + 1) % problems.length);
}

function prevProblem() {
    loadProblem((currentProblem - 1 + problems.length) % problems.length);
}

function randomProblem() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * problems.length);
    } while (newIndex === currentProblem && problems.length > 1);
    loadProblem(newIndex);
}

function updateScore() {
    document.getElementById('score').textContent = score;
    document.getElementById('total-attempted').textContent = totalAttempted;
}

// ============================================
// Theory Section - Dynamic Rendering
// ============================================
function renderTheorySection() {
    const container = document.getElementById('theory-content');
    if (!container) return;
    
    const isCN = currentLang === 'zh-TW';
    const inBinary = isCN ? '\u4E8C\u9032\u4F4D' : 'in binary';
    const xorResult = isCN ? 'XOR \u7D50\u679C' : 'XOR result';
    const colByCol = isCN ? '\u9010\u5217\u5206\u6790' : 'Column by column';
    const colOf = isCN ? '\u7684\u5217' : "'s column";
    const even1s = isCN ? '\u5076\u6578\u500B 1' : 'even 1s';
    const odd1s = isCN ? '\u5947\u6578\u500B 1' : 'odd 1s';
    const checkPile = isCN ? '\u6AA2\u67E5\u5806' : 'Check pile';
    const notLess = isCN ? '\u4E0D\u5C0F\u65BC' : 'NOT less than';
    const cantUse = isCN ? '\u4E0D\u53EF\u7528' : "can't use";
    const yesText = isCN ? '\u53EF\u4EE5\uFF01' : 'YES!';
    const solutionLabel = isCN ? '\u89E3\u6CD5' : 'Solution';
    const takeLabel = isCN ? '\u5F9E 36 \u7684\u5806\u4E2D\u53D6\u8D70 14 \u6839' : 'Take 14 from pile of 36';
    const resultLabel = isCN ? '\u7D50\u679C\uFF1A\u5169\u5806\u90FD\u662F 22\uFF0CNim Sum = 0' : 'Result: Both piles at 22, Nim Sum = 0';
    
    container.innerHTML = `
        <div class="theory-card">
            <h3>${t('theory.whatIsNim')}</h3>
            <p>${t('theory.whatIsNimDesc')}</p>
        </div>

        <div class="theory-card">
            <h3>${t('theory.binaryTitle')}</h3>
            <p>${t('theory.binaryIntro')}</p>
            
            <div class="example-box">
                <h4>${t('theory.whatIsBinary')}</h4>
                <p>${t('theory.binaryDesc1')}</p>
                <p>${t('theory.binaryDesc2')}</p>
            </div>

            <div class="example-box">
                <h4>${t('theory.method421')}</h4>
                <p>${t('theory.method421Desc')}</p>
                <table class="binary-table">
                    <tr>
                        <th>${t('theory.position')}</th>
                        <th>...</th>
                        <th>16</th>
                        <th>8</th>
                        <th>4</th>
                        <th>2</th>
                        <th>1</th>
                    </tr>
                    <tr>
                        <td>${t('theory.powerOf2')}</td>
                        <td>...</td>
                        <td>2<sup>4</sup></td>
                        <td>2<sup>3</sup></td>
                        <td>2<sup>2</sup></td>
                        <td>2<sup>1</sup></td>
                        <td>2<sup>0</sup></td>
                    </tr>
                </table>
                <p style="margin-top: 15px;">${t('theory.convertTip')}</p>
                <ul>
                    <li>${t('theory.ifYes')}</li>
                    <li>${t('theory.ifNo')}</li>
                </ul>
            </div>

            <div class="example-box">
                <h4>${t('theory.example3')}</h4>
                <p>${t('theory.example3Intro')}</p>
                <ul>
                    <li>${t('theory.example3Step1')}</li>
                    <li>${t('theory.example3Step2')}</li>
                    <li>${t('theory.example3Step3')}</li>
                </ul>
                <p>${t('theory.example3Result')}</p>
            </div>

            <div class="example-box">
                <h4>${t('theory.example5')}</h4>
                <p>${t('theory.example5Intro')}</p>
                <ul>
                    <li>${t('theory.example5Step1')}</li>
                    <li>${t('theory.example5Step2')}</li>
                    <li>${t('theory.example5Step3')}</li>
                </ul>
                <p>${t('theory.example5Result')}</p>
            </div>

            <div class="example-box">
                <h4>${t('theory.example7')}</h4>
                <p>${t('theory.example7Intro')}</p>
                <ul>
                    <li>${t('theory.example7Step1')}</li>
                    <li>${t('theory.example7Step2')}</li>
                    <li>${t('theory.example7Step3')}</li>
                </ul>
                <p>${t('theory.example7Result')}</p>
            </div>
        </div>

        <div class="theory-card">
            <h3>${t('theory.xorTitle')}</h3>
            <p>${t('theory.xorIntro')}</p>
            <div class="xor-explanation">
                <p><strong>${t('theory.xorRule')}</strong></p>
            </div>
            
            <div class="example-box">
                <h4>${t('theory.xorTable')}</h4>
                <table class="xor-table">
                    <tr><th>A</th><th>B</th><th>A XOR B</th><th>${t('theory.why')}</th></tr>
                    <tr><td>0</td><td>0</td><td>0</td><td>${t('theory.same')}</td></tr>
                    <tr><td>0</td><td>1</td><td>1</td><td>${t('theory.different')}</td></tr>
                    <tr><td>1</td><td>0</td><td>1</td><td>${t('theory.different')}</td></tr>
                    <tr><td>1</td><td>1</td><td>0</td><td>${t('theory.same')}</td></tr>
                </table>
            </div>

            <div class="example-box">
                <h4>${t('theory.xorOddOut')}</h4>
                <p>${t('theory.xorOddDesc')}</p>
                <ul>
                    <li>${t('theory.xorOdd1')}</li>
                    <li>${t('theory.xorEven1')}</li>
                </ul>
                <p>${t('theory.xorCancel')}</p>
            </div>
        </div>

        <div class="theory-card">
            <h3>${t('theory.nimSumTitle')}</h3>
            <p>${t('theory.nimSumDesc')}</p>

            <div class="example-box">
                <h4>${t('theory.example357')}</h4>
                <pre>
3 ${inBinary}:  011  (0\u00D74 + 1\u00D72 + 1\u00D71)
5 ${inBinary}:  101  (1\u00D74 + 0\u00D72 + 1\u00D71)
7 ${inBinary}:  111  (1\u00D74 + 1\u00D72 + 1\u00D71)
              ---
${xorResult}:   001 = 1 (Nim Sum)

${colByCol}:
- 4${colOf}: 0 XOR 1 XOR 1 = 0 (${even1s})
- 2${colOf}: 1 XOR 0 XOR 1 = 0 (${even1s})
- 1${colOf}: 1 XOR 1 XOR 1 = 1 (${odd1s})
                </pre>
                <p>${t('theory.example357Result')}</p>
            </div>
        </div>

        <div class="theory-card highlight-card">
            <h3>${t('theory.pairingTitle')}</h3>
            <p>${t('theory.pairingIntro')}</p>
            
            <div class="example-box">
                <h4>${t('theory.pairingStrategy')}</h4>
                <p>${t('theory.pairingDesc')}</p>
                <ul>
                    <li>${t('theory.pairingEven')}</li>
                    <li>${t('theory.pairingOdd')}</li>
                </ul>
                <p>${t('theory.pairingGoal')}</p>
            </div>

            <div class="example-box">
                <h4>${t('theory.pairing357')}</h4>
                <table class="pairing-table">
                    <tr>
                        <th>${t('theory.pairingPile')}</th>
                        <th>${t('theory.pairingHas4')}</th>
                        <th>${t('theory.pairingHas2')}</th>
                        <th>${t('theory.pairingHas1')}</th>
                    </tr>
                    <tr>
                        <td>3 = 2+1</td>
                        <td>${t('theory.pairingNo')}</td>
                        <td>${t('theory.pairingYes')}</td>
                        <td>${t('theory.pairingYes')}</td>
                    </tr>
                    <tr>
                        <td>5 = 4+1</td>
                        <td>${t('theory.pairingYes')}</td>
                        <td>${t('theory.pairingNo')}</td>
                        <td>${t('theory.pairingYes')}</td>
                    </tr>
                    <tr>
                        <td>7 = 4+2+1</td>
                        <td>${t('theory.pairingYes')}</td>
                        <td>${t('theory.pairingYes')}</td>
                        <td>${t('theory.pairingYes')}</td>
                    </tr>
                    <tr class="count-row">
                        <td><strong>${t('theory.pairingCount')}</strong></td>
                        <td>2 (${t('theory.pairingEvenCount')})</td>
                        <td>2 (${t('theory.pairingEvenCount')})</td>
                        <td>3 (${t('theory.pairingOddCount')})</td>
                    </tr>
                </table>
                <p style="margin-top: 15px;">${t('theory.pairing357Result')}</p>
                <p>${t('theory.pairing357Win')}</p>
            </div>

            <div class="example-box">
                <h4>${t('theory.pairing1357')}</h4>
                <table class="pairing-table">
                    <tr>
                        <th>${t('theory.pairingPile')}</th>
                        <th>${t('theory.pairingHas4')}</th>
                        <th>${t('theory.pairingHas2')}</th>
                        <th>${t('theory.pairingHas1')}</th>
                    </tr>
                    <tr>
                        <td>1 = 1</td>
                        <td>${t('theory.pairingNo')}</td>
                        <td>${t('theory.pairingNo')}</td>
                        <td>${t('theory.pairingYes')}</td>
                    </tr>
                    <tr>
                        <td>3 = 2+1</td>
                        <td>${t('theory.pairingNo')}</td>
                        <td>${t('theory.pairingYes')}</td>
                        <td>${t('theory.pairingYes')}</td>
                    </tr>
                    <tr>
                        <td>5 = 4+1</td>
                        <td>${t('theory.pairingYes')}</td>
                        <td>${t('theory.pairingNo')}</td>
                        <td>${t('theory.pairingYes')}</td>
                    </tr>
                    <tr>
                        <td>7 = 4+2+1</td>
                        <td>${t('theory.pairingYes')}</td>
                        <td>${t('theory.pairingYes')}</td>
                        <td>${t('theory.pairingYes')}</td>
                    </tr>
                    <tr class="count-row">
                        <td><strong>${t('theory.pairingCount')}</strong></td>
                        <td>2 (${t('theory.pairingEvenCount')})</td>
                        <td>2 (${t('theory.pairingEvenCount')})</td>
                        <td>4 (${t('theory.pairingEvenCount')})</td>
                    </tr>
                </table>
                <p style="margin-top: 15px;">${t('theory.pairing1357Result')}</p>
                <p>${t('theory.pairing1357Famous')}</p>
            </div>
        </div>

        <div class="theory-card">
            <h3>${t('theory.strategyTitle')}</h3>
            <div class="strategy-rules">
                <div class="rule">
                    <span class="rule-num">1</span>
                    <div>
                        <strong>${t('theory.step1')}</strong>
                        <p>${t('theory.step1Desc')}</p>
                    </div>
                </div>
                <div class="rule">
                    <span class="rule-num">2</span>
                    <div>
                        <strong>${t('theory.step2')}</strong>
                        <p>${t('theory.step2Desc')}</p>
                    </div>
                </div>
                <div class="rule">
                    <span class="rule-num">3</span>
                    <div>
                        <strong>${t('theory.step3')}</strong>
                        <p>${t('theory.step3Desc')}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="theory-card">
            <h3>${t('theory.findingMove')}</h3>
            <p>${t('theory.findingMoveDesc')}</p>
            <ol>
                <li>${t('theory.findStep1')}</li>
                <li>${t('theory.findStep2')}</li>
                <li>${t('theory.findStep3')}</li>
            </ol>
            
            <div class="example-box">
                <h4>${t('theory.example2236')}</h4>
                <pre>
22 ${inBinary}: 010110  (16+4+2 = 22)
36 ${inBinary}: 100100  (32+4 = 36)
              ------
Nim Sum:      110010 = 50

${checkPile} 22: 22 XOR 50 = 36 (${notLess} 22, ${cantUse})
${checkPile} 36: 36 XOR 50 = 22 (22 < 36, ${yesText})

${solutionLabel}: ${takeLabel} (36 - 22 = 14)
${resultLabel}
                </pre>
            </div>

            <div class="example-box">
                <h4>${t('theory.pairing2236')}</h4>
                <table class="pairing-table">
                    <tr>
                        <th>${t('theory.pairingPile')}</th>
                        <th>32</th>
                        <th>16</th>
                        <th>8</th>
                        <th>4</th>
                        <th>2</th>
                        <th>1</th>
                    </tr>
                    <tr>
                        <td>22 = 16+4+2</td>
                        <td>${t('theory.pairingNo')}</td>
                        <td>${t('theory.pairingYes')}</td>
                        <td>${t('theory.pairingNo')}</td>
                        <td>${t('theory.pairingYes')}</td>
                        <td>${t('theory.pairingYes')}</td>
                        <td>${t('theory.pairingNo')}</td>
                    </tr>
                    <tr>
                        <td>36 = 32+4</td>
                        <td>${t('theory.pairingYes')}</td>
                        <td>${t('theory.pairingNo')}</td>
                        <td>${t('theory.pairingNo')}</td>
                        <td>${t('theory.pairingYes')}</td>
                        <td>${t('theory.pairingNo')}</td>
                        <td>${t('theory.pairingNo')}</td>
                    </tr>
                    <tr class="count-row">
                        <td><strong>${t('theory.pairingCount')}</strong></td>
                        <td>1 (${t('theory.pairingOddCount')})</td>
                        <td>1 (${t('theory.pairingOddCount')})</td>
                        <td>0 (${t('theory.pairingEvenCount')})</td>
                        <td>2 (${t('theory.pairingEvenCount')})</td>
                        <td>1 (${t('theory.pairingOddCount')})</td>
                        <td>0 (${t('theory.pairingEvenCount')})</td>
                    </tr>
                </table>
                <p style="margin-top: 15px;">${t('theory.pairing2236Result')}</p>
                <p>${t('theory.pairing2236Solution')}</p>
            </div>
        </div>

        <div class="theory-card">
            <h3>${t('theory.singlePileStrategy')}</h3>
            <p>${t('theory.singlePileDesc')}</p>
            <ul>
                <li>${t('theory.winningPos')}</li>
                <li>${t('theory.losingPos')}</li>
            </ul>
            <p>${t('theory.singlePileTip')}</p>
            
            <div class="example-box">
                <h4>${t('theory.example12')}</h4>
                <p>${t('theory.example12Desc1')}</p>
                <p>${t('theory.example12Desc2')}</p>
            </div>
        </div>

        <div class="theory-card">
            <h3>${t('theory.whyWork')}</h3>
            <p>${t('theory.whyWorkDesc')}</p>
            <ul>
                <li>${t('theory.whyWork1')}</li>
                <li>${t('theory.whyWork2')}</li>
                <li>${t('theory.whyWork3')}</li>
            </ul>
            <p>${t('theory.whyWorkTrap')}</p>
            
            <div class="example-box">
                <h4>${t('theory.keyInsight')}</h4>
                <p>${t('theory.keyInsightDesc')}</p>
            </div>
        </div>

        <div class="interactive-calculator">
            <h3>${t('theory.calculator')}</h3>
            <div class="calculator-input">
                <label>${t('theory.calcLabel')}</label>
                <input type="text" id="calc-input" placeholder="${t('theory.calcPlaceholder')}">
                <button class="btn" onclick="calculateNimSum()">${t('theory.calcBtn')}</button>
            </div>
            <div id="calc-result" class="calc-result"></div>
        </div>
    `;
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderTheorySection();
    updatePileInputs();
    loadProblem(0);
});
