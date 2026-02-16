// Translations for Nim Sum Master
const translations = {
    en: {
        // Header
        title: "Nim Sum Master",
        subtitle: "Master Combinatorial Game Theory Through Play",
        
        // Navigation
        nav: {
            home: "Home",
            single: "1 Pile",
            two: "2 Piles",
            multi: "Multi-Piles",
            theory: "Learn Theory",
            practice: "Practice"
        },
        
        // Home Section
        home: {
            welcome: "Welcome to Nim Sum Master!",
            intro: "Learn the winning strategy for the classic Game of Nim - a fundamental concept in Combinatorial Game Theory often featured in Math Olympiad competitions.",
            singleTitle: "Single Pile",
            singleDesc: "Start with basics - learn when you can guarantee a win with one pile of matchsticks.",
            twoTitle: "Two Piles",
            twoDesc: "Master the strategy for two-pile games using the XOR principle.",
            multiTitle: "Multi-Piles",
            multiDesc: "Apply Nim Sum theory to any number of piles and never lose again!",
            theoryTitle: "Learn Theory",
            theoryDesc: "Understand the mathematical theory behind the winning strategy.",
            startBtn: "Start Learning!"
        },
        
        // Single Pile Section
        single: {
            title: "Single Pile Game",
            rules: "Two players take turns removing 1 to {max} matchsticks from a pile. The player who takes the last matchstick {result}!",
            wins: "wins",
            loses: "loses",
            pileSize: "Pile Size:",
            maxTake: "Max Take Per Turn:",
            lastMatch: "Last Matchstick:",
            winsOption: "Wins",
            losesOption: "Loses",
            startGame: "Start Game",
            showStrategy: "Show Strategy",
            remaining: "Remaining:",
            yourTurn: "Your Turn",
            computerTurn: "Computer's Turn",
            thinking: "Thinking...",
            take: "Take",
            takeN: "Take {n}",
            strategyTitle: "Strategy Analysis"
        },
        
        // Two Piles Section
        two: {
            title: "Two Piles Game",
            rules: "There are 2 piles of different number of matchsticks. Two players take turns removing any number of matchsticks from ONE of the piles. The player who takes the last matchstick wins! How many matchsticks should the first mover take to guarantee a win?",
            pile1: "Pile 1:",
            pile2: "Pile 2:",
            whoFirst: "Who Goes First:",
            you: "You",
            computer: "Computer",
            startGame: "Start Game",
            showStrategy: "Show Strategy",
            yourTurn: "Your Turn - Click a pile",
            computerTurn: "Computer's Turn",
            nimSum: "Nim Sum:",
            selectedPile: "Selected Pile:",
            takeLbl: "Take:",
            takeBtn: "Take",
            losingPos: "You are in a losing position...",
            winningPos: "You can win! Find the right move.",
            strategyTitle: "Strategy Analysis",
            computerTook: "Computer took {n} from Pile {p}"
        },
        
        // Multi Piles Section
        multi: {
            title: "Multi-Piles Nim Game",
            rules: "Multiple piles of matchsticks. Take any number from ONE pile per turn. Last matchstick wins!",
            numPiles: "Number of Piles:",
            pile: "Pile",
            startGame: "Start Game",
            showStrategy: "Show Strategy",
            randomSetup: "Random Setup",
            yourTurn: "Your Turn - Click a pile",
            computerTurn: "Computer's Turn",
            selectedPile: "Selected Pile:",
            takeLbl: "Take:",
            takeBtn: "Take",
            losingPos: "You are in a losing position...",
            winningPos: "You can win! Use the Nim Sum to find the optimal move.",
            strategyTitle: "Strategy Analysis",
            computerTook: "Computer took {n} from Pile {p}"
        },
        
        // Game Results
        game: {
            youWin: "You Win!",
            youLose: "You Lose!",
            winMsg: "Great strategy!",
            loseMsg: "Try again with the optimal strategy!",
            winMsgXor: "Excellent use of Nim Sum strategy!",
            loseMsgXor: "Study the XOR strategy and try again!",
            winMsgMaster: "You have mastered the Nim Sum strategy!",
            loseMsgMaster: "Review the XOR calculations and try again!",
            playAgain: "Play Again",
            learnStrategy: "Learn Strategy"
        },
        
        // Theory Section
        theory: {
            title: "Nim Sum Theory",
            whatIsNim: "What is the Game of Nim?",
            whatIsNimDesc: "Nim is a mathematical strategy game where two players take turns removing objects from distinct piles. On each turn, a player must remove at least one object, and may remove any number of objects provided they all come from the same pile. The goal is typically to be the player who takes the last object.",
            
            binaryTitle: "Understanding Binary Numbers",
            binaryIntro: "Before we learn the winning strategy, we need to understand <strong>binary numbers</strong> - the language computers use!",
            whatIsBinary: "What is Binary?",
            binaryDesc1: "In our everyday life, we use the <strong>decimal system</strong> (base 10) with digits 0-9. Binary is the <strong>base 2 system</strong> that only uses two digits: <strong>0</strong> and <strong>1</strong>.",
            binaryDesc2: "Each position in binary represents a power of 2, just like decimal positions represent powers of 10.",
            
            method421: "The 4-2-1 Method (Easy Way to Understand Binary!)",
            method421Desc: "Think of binary as breaking down numbers into groups of <strong>powers of 2</strong>:",
            position: "Position",
            powerOf2: "Power of 2",
            convertTip: "To convert a number to binary, ask: \"Can I fit this power of 2 into my number?\"",
            ifYes: "If YES, write <strong>1</strong> and subtract that value",
            ifNo: "If NO, write <strong>0</strong> and move to the next smaller power",
            
            example3: "Example: Why is 3 = 011 in binary?",
            example3Intro: "Let's break down <strong>3</strong> using powers of 2:",
            example3Step1: "Can we fit <strong>4</strong> into 3? NO (4 > 3) → write <strong>0</strong>",
            example3Step2: "Can we fit <strong>2</strong> into 3? YES (2 ≤ 3) → write <strong>1</strong>, remaining: 3-2 = 1",
            example3Step3: "Can we fit <strong>1</strong> into 1? YES (1 ≤ 1) → write <strong>1</strong>, remaining: 1-1 = 0",
            example3Result: "<strong>Result: 3 = 0×4 + 1×2 + 1×1 = 011</strong>",
            
            example5: "Example: Why is 5 = 101 in binary?",
            example5Intro: "Let's break down <strong>5</strong>:",
            example5Step1: "Can we fit <strong>4</strong> into 5? YES → write <strong>1</strong>, remaining: 5-4 = 1",
            example5Step2: "Can we fit <strong>2</strong> into 1? NO (2 > 1) → write <strong>0</strong>",
            example5Step3: "Can we fit <strong>1</strong> into 1? YES → write <strong>1</strong>, remaining: 0",
            example5Result: "<strong>Result: 5 = 1×4 + 0×2 + 1×1 = 101</strong>",
            
            example7: "Example: Why is 7 = 111 in binary?",
            example7Intro: "Let's break down <strong>7</strong>:",
            example7Step1: "Can we fit <strong>4</strong> into 7? YES → write <strong>1</strong>, remaining: 7-4 = 3",
            example7Step2: "Can we fit <strong>2</strong> into 3? YES → write <strong>1</strong>, remaining: 3-2 = 1",
            example7Step3: "Can we fit <strong>1</strong> into 1? YES → write <strong>1</strong>, remaining: 0",
            example7Result: "<strong>Result: 7 = 1×4 + 1×2 + 1×1 = 111</strong>",
            
            xorTitle: "What is XOR (Exclusive OR)?",
            xorIntro: "XOR is a special operation that compares two bits (0 or 1) and follows this simple rule:",
            xorRule: "\"If the bits are DIFFERENT, result is 1. If they're the SAME, result is 0.\"",
            xorTable: "XOR Truth Table:",
            why: "Why?",
            same: "Same → 0",
            different: "Different → 1",
            
            xorOddOut: "Think of XOR as \"Odd One Out\"",
            xorOddDesc: "When you XOR multiple numbers together column by column:",
            xorOdd1: "If there's an <strong>ODD</strong> number of 1s in a column → result is <strong>1</strong>",
            xorEven1: "If there's an <strong>EVEN</strong> number of 1s in a column → result is <strong>0</strong>",
            xorCancel: "This is why pairs of identical bits \"cancel out\" to zero!",
            
            nimSumTitle: "The Nim Sum (XOR Operation)",
            nimSumDesc: "The key to winning Nim is the <strong>Nim Sum</strong>, calculated by XORing all pile sizes together.",
            example357: "Example: Piles of 3, 5, 7",
            example357Result: "Since Nim Sum ≠ 0, the first player can guarantee a win!",
            
            pairingTitle: "The Easy 4-2-1 Pairing Method",
            pairingIntro: "Here's a simpler way to think about Nim Sum without doing binary math in your head!",
            pairingStrategy: "The Pairing Strategy",
            pairingDesc: "For each power of 2 (1, 2, 4, 8, 16...), count how many piles have that component:",
            pairingEven: "If the count is <strong>EVEN</strong> (0, 2, 4...) → That position is \"balanced\" (good!)",
            pairingOdd: "If the count is <strong>ODD</strong> (1, 3, 5...) → That position is \"unbalanced\" (contributes to Nim Sum)",
            pairingGoal: "<strong>Goal: Make ALL positions balanced (even counts) to achieve Nim Sum = 0!</strong>",
            
            pairing357: "Example: Piles of 3, 5, 7 using Pairing",
            pairingPile: "Pile",
            pairingHas4: "Has 4?",
            pairingHas2: "Has 2?",
            pairingHas1: "Has 1?",
            pairingYes: "Yes",
            pairingNo: "No",
            pairingCount: "Count:",
            pairingEvenCount: "even",
            pairingOddCount: "odd!",
            pairing357Result: "The \"1\" column has an odd count (3), so Nim Sum ≠ 0.",
            pairing357Win: "<strong>Winning move:</strong> Remove 1 from pile of 3, making it 2. Now all columns are even!",
            
            pairing1357: "Example: Piles of 1, 3, 5, 7 - A Famous Nim Position!",
            pairing1357Result: "<strong>All columns are even!</strong> Nim Sum = 0. The first player is in a LOSING position!",
            pairing1357Famous: "This is a famous \"losing\" starting position in Nim.",
            
            strategyTitle: "The Winning Strategy",
            step1: "Calculate the Nim Sum",
            step1Desc: "XOR all pile sizes together (or use the pairing method).",
            step2: "If Nim Sum ≠ 0: You're in a WINNING position!",
            step2Desc: "Make a move that results in Nim Sum = 0 for your opponent.",
            step3: "If Nim Sum = 0: You're in a LOSING position",
            step3Desc: "Any move you make will give your opponent Nim Sum ≠ 0.",
            
            findingMove: "Finding the Winning Move",
            findingMoveDesc: "When Nim Sum ≠ 0, to find which pile to reduce:",
            findStep1: "Calculate the Nim Sum (N) of all piles",
            findStep2: "Find a pile P where P XOR N < P",
            findStep3: "Reduce that pile to (P XOR N)",
            
            example2236: "Example: Piles of 22 and 36",
            pairing2236: "Using Pairing Method for 22 and 36:",
            pairing2236Result: "Columns 32, 16, and 2 are odd. We need to balance them!",
            pairing2236Solution: "<strong>Solution:</strong> Change pile 36 to 22. New 22 = 16+4+2, so now both piles are identical and all columns are even (paired)!",
            
            singlePileStrategy: "Single Pile Strategy (Subtraction Game)",
            singlePileDesc: "When you can only take 1 to k objects per turn from a single pile:",
            winningPos: "<strong>Winning positions:</strong> Pile size NOT divisible by (k+1)",
            losingPos: "<strong>Losing positions:</strong> Pile size divisible by (k+1)",
            singlePileTip: "Strategy: Leave your opponent with a multiple of (k+1) after your turn.",
            example12: "Example: 12 matchsticks, max take 3",
            example12Desc1: "k+1 = 4, Multiples: 0, 4, 8, 12...",
            example12Desc2: "Since 12 is a multiple of 4, the first player is in a LOSING position (if opponent plays perfectly).",
            
            whyWork: "Why Does This Work?",
            whyWorkDesc: "The XOR/pairing strategy works because:",
            whyWork1: "The end state (all piles empty) has Nim Sum = 0",
            whyWork2: "From any position with Nim Sum ≠ 0, there exists a move to make Nim Sum = 0",
            whyWork3: "From any position with Nim Sum = 0, ALL moves result in Nim Sum ≠ 0",
            whyWorkTrap: "This creates a \"trap\" - once you achieve Nim Sum = 0, your opponent cannot escape!",
            
            keyInsight: "The Key Insight",
            keyInsightDesc: "When all columns are \"paired\" (even counts), removing ANY amount from ONE pile will break at least one pairing. Your opponent will always give you an unbalanced position, and you can always rebalance it!",
            
            calculator: "Nim Sum Calculator",
            calcLabel: "Enter pile sizes (comma-separated):",
            calcPlaceholder: "e.g., 3, 5, 7",
            calcBtn: "Calculate"
        },
        
        // Practice Section
        practice: {
            title: "Practice Problems",
            intro: "Test your understanding with these Math Olympiad-style problems!",
            problem: "Problem",
            yourAnswer: "Your answer",
            checkAnswer: "Check Answer",
            hint: "Hint",
            solution: "Solution",
            previous: "Previous",
            next: "Next Problem",
            random: "Random",
            score: "Score:",
            correct: "Correct! Well done!",
            incorrect: "Incorrect. The answer is {answer}.",
            
            // Problem texts
            problems: [
                {
                    text: "There are 12 matchsticks in a pile. Two players take turns removing 1, 2, or 3 matchsticks. The player who takes the last matchstick wins. If you go first, how many matchsticks should you take to guarantee a win? (Enter 0 if first player cannot guarantee a win)",
                    hint: "Think about what position you want to leave for your opponent. What number should remain after your move?",
                    solution: "With max take = 3, the key is multiples of 4 (k+1=4). Since 12 is a multiple of 4, the first player is in a LOSING position. Answer: 0"
                },
                {
                    text: "There are 13 matchsticks in a pile. Two players take turns removing 1, 2, or 3 matchsticks. The player who takes the last matchstick wins. How many should the first player take?",
                    hint: "You want to leave a multiple of 4 for your opponent.",
                    solution: "13 mod 4 = 1. Take 1 to leave 12 (a multiple of 4). Your opponent will always leave you with a non-multiple of 4."
                },
                {
                    text: "There are two piles with 22 and 36 matchsticks. Players take turns removing any number from ONE pile. The player who takes the last matchstick wins. If you go first, how many should you take from which pile? (Enter the number you should take)",
                    hint: "Calculate 22 XOR 36. Then find which pile to reduce to make Nim Sum = 0.",
                    solution: "22 XOR 36 = 50. Check: 36 XOR 50 = 22 < 36. So take 36-22 = 14 from pile of 36, leaving both piles at 22."
                },
                {
                    text: "There are two piles with 15 and 15 matchsticks. The player who takes the last matchstick wins. If you go first, how many should you take? (Enter 0 if you cannot win)",
                    hint: "What is 15 XOR 15?",
                    solution: "15 XOR 15 = 0. When piles are equal, Nim Sum is 0. First player is in a LOSING position. Answer: 0"
                },
                {
                    text: "Piles: 5 and 8. What is the Nim Sum?",
                    hint: "5 in binary is 0101, 8 in binary is 1000.",
                    solution: "5 = 0101, 8 = 1000. XOR = 1101 = 13."
                },
                {
                    text: "Three piles: 3, 5, 7. The first player wants to win. From which pile should they take, and how many? (Enter the number to take)",
                    hint: "Calculate 3 XOR 5 XOR 7 first.",
                    solution: "3 XOR 5 XOR 7 = 1. Check each pile: 3 XOR 1 = 2 < 3. Take 1 from pile of 3, leaving piles 2, 5, 7 with Nim Sum = 0."
                },
                {
                    text: "Three piles: 4, 5, 6. What is the Nim Sum?",
                    hint: "Calculate step by step: first 4 XOR 5, then result XOR 6.",
                    solution: "4 = 100, 5 = 101, 6 = 110. 4 XOR 5 = 001 = 1. 1 XOR 6 = 111 = 7."
                },
                {
                    text: "Four piles: 1, 3, 5, 7. Is the first player in a winning or losing position? (Enter 1 for winning, 0 for losing)",
                    hint: "Calculate XOR of all four numbers.",
                    solution: "1 XOR 3 XOR 5 XOR 7 = 0. This is a famous Nim position where first player LOSES! Answer: 0"
                },
                {
                    text: "Two piles with 10 and 26. To guarantee a win, how many matchsticks should the first player take?",
                    hint: "10 XOR 26 = ?. Then find which pile to reduce.",
                    solution: "10 XOR 26 = 16. Check: 26 XOR 16 = 10 < 26. Take 26-10 = 16 from pile of 26."
                },
                {
                    text: "15 matchsticks, max take 4 per turn, last takes wins. How many should first player take?",
                    hint: "k+1 = 5. Is 15 a multiple of 5?",
                    solution: "15 is a multiple of 5 (k+1). First player is in a LOSING position. Answer: 0"
                }
            ]
        },
        
        // Footer
        footer: {
            line1: "Nim Sum Master - Learn Combinatorial Game Theory",
            line2: "Perfect for Math Olympiad preparation!"
        },
        
        // Strategy Analysis
        analysis: {
            title: "Analysis for {piles}",
            keyNumber: "Key Number:",
            calculation: "Calculation:",
            losingFirst: "First player is in a LOSING position!",
            winningFirst: "First player can GUARANTEE a WIN!",
            takeToWin: "Take {n} matchsticks to leave {remaining} (a multiple of {mod}).",
            thenMirror: "Then always respond to leave multiples of {mod}.",
            losingPositions: "Losing positions (multiples of {mod}):",
            lastWins: "Rule: Last matchstick WINS",
            lastLoses: "Rule: Last matchstick LOSES",
            multipleOf: "{n} is a multiple of {mod}.",
            opponentMirror: "No matter what you take, the opponent can always respond to leave you with another multiple of {mod}.",
            
            // Two piles
            pile1: "Pile 1:",
            pile2: "Pile 2:",
            nimSumIs: "Nim Sum:",
            winningMove: "Winning Move:",
            takePile: "Take {n} from Pile {p}",
            leavePile: "This leaves Pile {p} at {v}, making both piles equal (or Nim Sum = 0).",
            afterMove: "After move:",
            nimSumZero: "(Zero!)",
            equalPiles: "Both piles are equal, so any move you make will give your opponent a winning Nim Sum.",
            
            // Multi piles
            analysisFor: "Analysis for {n} Piles:",
            winningMoves: "Winning Moves:",
            option: "Option {n}:",
            takeFrom: "Take {n} from Pile {p} (leave {v})",
            afterTaking: "After taking from Pile {p}:",
            anyMove: "Any move you make will create a non-zero Nim Sum, giving your opponent the advantage.",
            
            // Position labels
            position: "Position:",
            losing: "LOSING (for current player)",
            winning: "WINNING (for current player)",
            losingFirstPlayer: "LOSING (for first player)",
            winningFirstPlayer: "WINNING (for first player)",
            anyMoveGives: "Any move will give opponent a winning position.",
            calcError: "Please enter valid pile sizes (comma-separated numbers)",
            calcInputError: "Error: Please enter valid numbers separated by commas",
            
            // Single pile strategy
            analysisForSingle: "Analysis for {n} matchsticks, max take {m}",
            analysisForTwo: "Analysis for Piles: {p1} and {p2}",
            mirrorForce: "The opponent can always force you to take the last matchstick.",
            mirrorResponse: "Take {n} matchsticks. Then mirror opponent's moves to leave them with 1 matchstick at the end."
        }
    },
    
    "zh-TW": {
        // Header
        title: "Nim Sum 大師",
        subtitle: "透過遊戲掌握組合博弈論",
        
        // Navigation
        nav: {
            home: "首頁",
            single: "單堆",
            two: "雙堆",
            multi: "多堆",
            theory: "學習理論",
            practice: "練習題"
        },
        
        // Home Section
        home: {
            welcome: "歡迎來到 Nim Sum 大師！",
            intro: "學習經典 Nim 遊戲的必勝策略 - 這是組合博弈論中的基礎概念，常見於數學奧林匹克競賽。",
            singleTitle: "單堆遊戲",
            singleDesc: "從基礎開始 - 學習何時能保證在單堆火柴遊戲中獲勝。",
            twoTitle: "雙堆遊戲",
            twoDesc: "使用 XOR 原理掌握雙堆遊戲的策略。",
            multiTitle: "多堆遊戲",
            multiDesc: "將 Nim Sum 理論應用到任意數量的堆中，再也不會輸！",
            theoryTitle: "學習理論",
            theoryDesc: "了解必勝策略背後的數學理論。",
            startBtn: "開始學習！"
        },
        
        // Single Pile Section
        single: {
            title: "單堆遊戲",
            rules: "兩位玩家輪流從一堆火柴中取走 1 到 {max} 根火柴。取走最後一根火柴的玩家{result}！",
            wins: "獲勝",
            loses: "落敗",
            pileSize: "火柴數量：",
            maxTake: "每回合最多可取：",
            lastMatch: "最後一根火柴：",
            winsOption: "獲勝",
            losesOption: "落敗",
            startGame: "開始遊戲",
            showStrategy: "顯示策略",
            remaining: "剩餘：",
            yourTurn: "你的回合",
            computerTurn: "電腦的回合",
            thinking: "思考中...",
            take: "取走",
            takeN: "取走 {n} 根",
            strategyTitle: "策略分析"
        },
        
        // Two Piles Section
        two: {
            title: "雙堆遊戲",
            rules: "有兩堆不同數量的火柴。兩位玩家輪流從其中一堆取走任意數量的火柴。取走最後一根火柴的玩家獲勝！先手應該取走多少根火柴才能保證獲勝？",
            pile1: "第一堆：",
            pile2: "第二堆：",
            whoFirst: "誰先手：",
            you: "你",
            computer: "電腦",
            startGame: "開始遊戲",
            showStrategy: "顯示策略",
            yourTurn: "你的回合 - 點擊選擇一堆",
            computerTurn: "電腦的回合",
            nimSum: "Nim Sum：",
            selectedPile: "已選擇的堆：",
            takeLbl: "取走：",
            takeBtn: "取走",
            losingPos: "你處於必敗位置...",
            winningPos: "你可以獲勝！找出正確的走法。",
            strategyTitle: "策略分析",
            computerTook: "電腦從第 {p} 堆取走了 {n} 根"
        },
        
        // Multi Piles Section
        multi: {
            title: "多堆 Nim 遊戲",
            rules: "多堆火柴。每回合從一堆中取走任意數量。取走最後一根火柴的玩家獲勝！",
            numPiles: "堆數：",
            pile: "第 {n} 堆",
            startGame: "開始遊戲",
            showStrategy: "顯示策略",
            randomSetup: "隨機設置",
            yourTurn: "你的回合 - 點擊選擇一堆",
            computerTurn: "電腦的回合",
            selectedPile: "已選擇的堆：",
            takeLbl: "取走：",
            takeBtn: "取走",
            losingPos: "你處於必敗位置...",
            winningPos: "你可以獲勝！使用 Nim Sum 找出最佳走法。",
            strategyTitle: "策略分析",
            computerTook: "電腦從第 {p} 堆取走了 {n} 根"
        },
        
        // Game Results
        game: {
            youWin: "你贏了！",
            youLose: "你輸了！",
            winMsg: "策略運用得當！",
            loseMsg: "使用最佳策略再試一次！",
            winMsgXor: "出色地運用了 Nim Sum 策略！",
            loseMsgXor: "學習 XOR 策略後再試一次！",
            winMsgMaster: "你已經掌握了 Nim Sum 策略！",
            loseMsgMaster: "複習 XOR 計算後再試一次！",
            playAgain: "再玩一次",
            learnStrategy: "學習策略"
        },
        
        // Theory Section
        theory: {
            title: "Nim Sum 理論",
            whatIsNim: "什麼是 Nim 遊戲？",
            whatIsNimDesc: "Nim 是一種數學策略遊戲，兩位玩家輪流從不同的堆中取走物品。每回合，玩家必須至少取走一個物品，且所取物品必須來自同一堆，可以取走任意數量。目標通常是成為取走最後一個物品的玩家。",
            
            binaryTitle: "理解二進位數字",
            binaryIntro: "在學習必勝策略之前，我們需要理解<strong>二進位數字</strong> - 電腦使用的語言！",
            whatIsBinary: "什麼是二進位？",
            binaryDesc1: "在日常生活中，我們使用<strong>十進位系統</strong>（以 10 為基數），使用數字 0-9。二進位是<strong>以 2 為基數的系統</strong>，只使用兩個數字：<strong>0</strong> 和 <strong>1</strong>。",
            binaryDesc2: "二進位中的每個位置代表 2 的冪次，就像十進位中的位置代表 10 的冪次一樣。",
            
            method421: "4-2-1 方法（簡單理解二進位！）",
            method421Desc: "把二進位想像成將數字分解為<strong>2 的冪次</strong>的組合：",
            position: "位置",
            powerOf2: "2 的冪次",
            convertTip: "要將數字轉換為二進位，問自己：「這個 2 的冪次能放進我的數字嗎？」",
            ifYes: "如果可以，寫下 <strong>1</strong> 並減去該值",
            ifNo: "如果不行，寫下 <strong>0</strong> 並繼續下一個較小的冪次",
            
            example3: "範例：為什麼 3 = 011（二進位）？",
            example3Intro: "讓我們用 2 的冪次來分解 <strong>3</strong>：",
            example3Step1: "<strong>4</strong> 能放進 3 嗎？不能（4 > 3）→ 寫 <strong>0</strong>",
            example3Step2: "<strong>2</strong> 能放進 3 嗎？能（2 ≤ 3）→ 寫 <strong>1</strong>，剩餘：3-2 = 1",
            example3Step3: "<strong>1</strong> 能放進 1 嗎？能（1 ≤ 1）→ 寫 <strong>1</strong>，剩餘：1-1 = 0",
            example3Result: "<strong>結果：3 = 0×4 + 1×2 + 1×1 = 011</strong>",
            
            example5: "範例：為什麼 5 = 101（二進位）？",
            example5Intro: "讓我們分解 <strong>5</strong>：",
            example5Step1: "<strong>4</strong> 能放進 5 嗎？能 → 寫 <strong>1</strong>，剩餘：5-4 = 1",
            example5Step2: "<strong>2</strong> 能放進 1 嗎？不能（2 > 1）→ 寫 <strong>0</strong>",
            example5Step3: "<strong>1</strong> 能放進 1 嗎？能 → 寫 <strong>1</strong>，剩餘：0",
            example5Result: "<strong>結果：5 = 1×4 + 0×2 + 1×1 = 101</strong>",
            
            example7: "範例：為什麼 7 = 111（二進位）？",
            example7Intro: "讓我們分解 <strong>7</strong>：",
            example7Step1: "<strong>4</strong> 能放進 7 嗎？能 → 寫 <strong>1</strong>，剩餘：7-4 = 3",
            example7Step2: "<strong>2</strong> 能放進 3 嗎？能 → 寫 <strong>1</strong>，剩餘：3-2 = 1",
            example7Step3: "<strong>1</strong> 能放進 1 嗎？能 → 寫 <strong>1</strong>，剩餘：0",
            example7Result: "<strong>結果：7 = 1×4 + 1×2 + 1×1 = 111</strong>",
            
            xorTitle: "什麼是 XOR（互斥或）？",
            xorIntro: "XOR 是一種特殊運算，比較兩個位元（0 或 1），遵循這個簡單規則：",
            xorRule: "「如果位元不同，結果為 1。如果相同，結果為 0。」",
            xorTable: "XOR 真值表：",
            why: "原因？",
            same: "相同 → 0",
            different: "不同 → 1",
            
            xorOddOut: "把 XOR 想像成「找出奇數個」",
            xorOddDesc: "當你將多個數字逐列進行 XOR 運算時：",
            xorOdd1: "如果某列有<strong>奇數</strong>個 1 → 結果為 <strong>1</strong>",
            xorEven1: "如果某列有<strong>偶數</strong>個 1 → 結果為 <strong>0</strong>",
            xorCancel: "這就是為什麼成對的相同位元會「抵消」為零！",
            
            nimSumTitle: "Nim Sum（XOR 運算）",
            nimSumDesc: "贏得 Nim 遊戲的關鍵是 <strong>Nim Sum</strong>，透過將所有堆的大小進行 XOR 運算來計算。",
            example357: "範例：堆數為 3、5、7",
            example357Result: "由於 Nim Sum ≠ 0，先手玩家可以保證獲勝！",
            
            pairingTitle: "簡易 4-2-1 配對方法",
            pairingIntro: "這是一種更簡單的方式來思考 Nim Sum，不需要在腦中做二進位運算！",
            pairingStrategy: "配對策略",
            pairingDesc: "對於每個 2 的冪次（1、2、4、8、16...），計算有多少堆包含該成分：",
            pairingEven: "如果計數是<strong>偶數</strong>（0、2、4...）→ 該位置是「平衡的」（好！）",
            pairingOdd: "如果計數是<strong>奇數</strong>（1、3、5...）→ 該位置是「不平衡的」（貢獻 Nim Sum）",
            pairingGoal: "<strong>目標：使所有位置都平衡（偶數計數）以達到 Nim Sum = 0！</strong>",
            
            pairing357: "範例：使用配對法分析堆數 3、5、7",
            pairingPile: "堆",
            pairingHas4: "有 4？",
            pairingHas2: "有 2？",
            pairingHas1: "有 1？",
            pairingYes: "有",
            pairingNo: "無",
            pairingCount: "計數：",
            pairingEvenCount: "偶數",
            pairingOddCount: "奇數！",
            pairing357Result: "「1」列的計數是奇數（3），所以 Nim Sum ≠ 0。",
            pairing357Win: "<strong>必勝走法：</strong>從 3 的堆中取走 1 根，使其變為 2。現在所有列都是偶數！",
            
            pairing1357: "範例：堆數 1、3、5、7 - 著名的 Nim 位置！",
            pairing1357Result: "<strong>所有列都是偶數！</strong> Nim Sum = 0。先手玩家處於必敗位置！",
            pairing1357Famous: "這是 Nim 遊戲中著名的「必敗」起始位置。",
            
            strategyTitle: "必勝策略",
            step1: "計算 Nim Sum",
            step1Desc: "將所有堆的大小進行 XOR 運算（或使用配對方法）。",
            step2: "如果 Nim Sum ≠ 0：你處於必勝位置！",
            step2Desc: "走出一步使對手面對 Nim Sum = 0 的局面。",
            step3: "如果 Nim Sum = 0：你處於必敗位置",
            step3Desc: "無論你怎麼走，都會讓對手得到 Nim Sum ≠ 0 的局面。",
            
            findingMove: "找出必勝走法",
            findingMoveDesc: "當 Nim Sum ≠ 0 時，找出應該減少哪一堆：",
            findStep1: "計算所有堆的 Nim Sum（N）",
            findStep2: "找到一個堆 P，使得 P XOR N < P",
            findStep3: "將該堆減少到（P XOR N）",
            
            example2236: "範例：堆數為 22 和 36",
            pairing2236: "使用配對法分析 22 和 36：",
            pairing2236Result: "32、16 和 2 列是奇數。我們需要讓它們平衡！",
            pairing2236Solution: "<strong>解答：</strong>將 36 的堆改為 22。新的 22 = 16+4+2，現在兩堆相同，所有列都是偶數（已配對）！",
            
            singlePileStrategy: "單堆策略（減法遊戲）",
            singlePileDesc: "當你每回合只能從單堆中取走 1 到 k 個物品時：",
            winningPos: "<strong>必勝位置：</strong>堆的大小不能被（k+1）整除",
            losingPos: "<strong>必敗位置：</strong>堆的大小能被（k+1）整除",
            singlePileTip: "策略：讓你的對手在你走完後面對（k+1）的倍數。",
            example12: "範例：12 根火柴，每次最多取 3 根",
            example12Desc1: "k+1 = 4，倍數：0、4、8、12...",
            example12Desc2: "由於 12 是 4 的倍數，先手玩家處於必敗位置（如果對手完美應對）。",
            
            whyWork: "為什麼這個策略有效？",
            whyWorkDesc: "XOR/配對策略有效是因為：",
            whyWork1: "終局狀態（所有堆都空了）的 Nim Sum = 0",
            whyWork2: "從任何 Nim Sum ≠ 0 的位置，都存在一步可以使 Nim Sum = 0",
            whyWork3: "從任何 Nim Sum = 0 的位置，所有走法都會導致 Nim Sum ≠ 0",
            whyWorkTrap: "這創造了一個「陷阱」- 一旦你達到 Nim Sum = 0，你的對手就無法逃脫！",
            
            keyInsight: "關鍵洞見",
            keyInsightDesc: "當所有列都「配對」（偶數計數）時，從任何一堆取走任意數量都會打破至少一個配對。你的對手總會給你一個不平衡的位置，而你總能讓它重新平衡！",
            
            calculator: "Nim Sum 計算器",
            calcLabel: "輸入堆的大小（用逗號分隔）：",
            calcPlaceholder: "例如：3, 5, 7",
            calcBtn: "計算"
        },
        
        // Practice Section
        practice: {
            title: "練習題",
            intro: "用這些數學奧林匹克風格的題目測試你的理解！",
            problem: "第 {n} 題",
            yourAnswer: "你的答案",
            checkAnswer: "檢查答案",
            hint: "提示",
            solution: "解答",
            previous: "上一題",
            next: "下一題",
            random: "隨機題目",
            score: "得分：",
            correct: "正確！做得好！",
            incorrect: "不正確。答案是 {answer}。",
            
            // Problem texts
            problems: [
                {
                    text: "一堆有 12 根火柴。兩位玩家輪流取走 1、2 或 3 根火柴。取走最後一根火柴的玩家獲勝。如果你先手，應該取走多少根火柴才能保證獲勝？（如果先手無法保證獲勝，請輸入 0）",
                    hint: "想想你想讓對手面對什麼位置。你走完後應該剩下多少根？",
                    solution: "每次最多取 3 根，關鍵是 4 的倍數（k+1=4）。由於 12 是 4 的倍數，先手處於必敗位置。答案：0"
                },
                {
                    text: "一堆有 13 根火柴。兩位玩家輪流取走 1、2 或 3 根火柴。取走最後一根火柴的玩家獲勝。先手應該取走多少根？",
                    hint: "你想讓對手面對 4 的倍數。",
                    solution: "13 mod 4 = 1。取走 1 根，剩下 12（4 的倍數）。對手總會讓你面對非 4 倍數的情況。"
                },
                {
                    text: "有兩堆火柴，分別有 22 和 36 根。玩家輪流從其中一堆取走任意數量。取走最後一根火柴的玩家獲勝。如果你先手，應該從哪一堆取走多少根？（請輸入應該取走的數量）",
                    hint: "計算 22 XOR 36。然後找出應該減少哪一堆使 Nim Sum = 0。",
                    solution: "22 XOR 36 = 50。檢查：36 XOR 50 = 22 < 36。所以從 36 的堆中取走 36-22 = 14 根，使兩堆都變成 22。"
                },
                {
                    text: "有兩堆火柴，各有 15 根。取走最後一根火柴的玩家獲勝。如果你先手，應該取走多少根？（如果無法獲勝，請輸入 0）",
                    hint: "15 XOR 15 等於多少？",
                    solution: "15 XOR 15 = 0。當兩堆相等時，Nim Sum 為 0。先手處於必敗位置。答案：0"
                },
                {
                    text: "堆數：5 和 8。Nim Sum 是多少？",
                    hint: "5 的二進位是 0101，8 的二進位是 1000。",
                    solution: "5 = 0101，8 = 1000。XOR = 1101 = 13。"
                },
                {
                    text: "三堆火柴：3、5、7。先手玩家想獲勝。應該從哪一堆取走多少根？（請輸入應該取走的數量）",
                    hint: "先計算 3 XOR 5 XOR 7。",
                    solution: "3 XOR 5 XOR 7 = 1。檢查每一堆：3 XOR 1 = 2 < 3。從 3 的堆中取走 1 根，使堆變成 2、5、7，Nim Sum = 0。"
                },
                {
                    text: "三堆火柴：4、5、6。Nim Sum 是多少？",
                    hint: "分步計算：先算 4 XOR 5，然後結果 XOR 6。",
                    solution: "4 = 100，5 = 101，6 = 110。4 XOR 5 = 001 = 1。1 XOR 6 = 111 = 7。"
                },
                {
                    text: "四堆火柴：1、3、5、7。先手玩家是處於必勝還是必敗位置？（必勝輸入 1，必敗輸入 0）",
                    hint: "計算四個數字的 XOR。",
                    solution: "1 XOR 3 XOR 5 XOR 7 = 0。這是著名的 Nim 位置，先手必敗！答案：0"
                },
                {
                    text: "兩堆火柴：10 和 26。要保證獲勝，先手應該取走多少根？",
                    hint: "10 XOR 26 = ?。然後找出應該減少哪一堆。",
                    solution: "10 XOR 26 = 16。檢查：26 XOR 16 = 10 < 26。從 26 的堆中取走 26-10 = 16 根。"
                },
                {
                    text: "15 根火柴，每回合最多取 4 根，取走最後一根的獲勝。先手應該取走多少根？",
                    hint: "k+1 = 5。15 是 5 的倍數嗎？",
                    solution: "15 是 5 的倍數（k+1）。先手處於必敗位置。答案：0"
                }
            ]
        },
        
        // Footer
        footer: {
            line1: "Nim Sum 大師 - 學習組合博弈論",
            line2: "數學奧林匹克備賽的最佳選擇！"
        },
        
        // Strategy Analysis
        analysis: {
            title: "分析：{piles}",
            keyNumber: "關鍵數字：",
            calculation: "計算：",
            losingFirst: "先手處於必敗位置！",
            winningFirst: "先手可以保證獲勝！",
            takeToWin: "取走 {n} 根火柴，剩下 {remaining}（{mod} 的倍數）。",
            thenMirror: "然後每次都讓對手面對 {mod} 的倍數。",
            losingPositions: "必敗位置（{mod} 的倍數）：",
            lastWins: "規則：取走最後一根火柴獲勝",
            lastLoses: "規則：取走最後一根火柴落敗",
            multipleOf: "{n} 是 {mod} 的倍數。",
            opponentMirror: "無論你取走多少，對手總能讓你面對 {mod} 的另一個倍數。",
            
            // Two piles
            pile1: "第一堆：",
            pile2: "第二堆：",
            nimSumIs: "Nim Sum：",
            winningMove: "必勝走法：",
            takePile: "從第 {p} 堆取走 {n} 根",
            leavePile: "這使第 {p} 堆剩下 {v}，使兩堆相等（或 Nim Sum = 0）。",
            afterMove: "走完後：",
            nimSumZero: "（零！）",
            equalPiles: "兩堆相等，所以你的任何走法都會給對手一個獲勝的 Nim Sum。",
            
            // Multi piles
            analysisFor: "分析 {n} 堆：",
            winningMoves: "必勝走法：",
            option: "選項 {n}：",
            takeFrom: "從第 {p} 堆取走 {n} 根（剩下 {v}）",
            afterTaking: "從第 {p} 堆取走後：",
            anyMove: "你的任何走法都會產生非零的 Nim Sum，給對手優勢。",
            
            // Position labels
            position: "位置：",
            losing: "必敗（當前玩家）",
            winning: "必勝（當前玩家）",
            losingFirstPlayer: "必敗（先手）",
            winningFirstPlayer: "必勝（先手）",
            anyMoveGives: "任何走法都會給對手一個獲勝的位置。",
            calcError: "請輸入有效的堆大小（用逗號分隔的數字）",
            calcInputError: "錯誤：請輸入用逗號分隔的有效數字",
            
            // Single pile strategy
            analysisForSingle: "分析：{n} 根火柴，每次最多取 {m} 根",
            analysisForTwo: "分析：堆數 {p1} 和 {p2}",
            mirrorForce: "對手總能迫使你取走最後一根火柴。",
            mirrorResponse: "取走 {n} 根火柴。然後模仿對手的走法，讓他們最後只剩 1 根火柴。"
        }
    }
};

// Current language
let currentLang = localStorage.getItem('nimsum-lang') || 'en';

// Get translation by key path
function t(key, params = {}) {
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            // Fallback to English
            value = translations.en;
            for (const k2 of keys) {
                if (value && value[k2] !== undefined) {
                    value = value[k2];
                } else {
                    return key; // Return key if not found
                }
            }
            break;
        }
    }
    
    // Replace parameters
    if (typeof value === 'string') {
        for (const [param, val] of Object.entries(params)) {
            value = value.replace(new RegExp(`\\{${param}\\}`, 'g'), val);
        }
    }
    
    return value;
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);
        if (translation && translation !== key) {
            el.textContent = translation;
        }
    });
    
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const translation = t(key);
        if (translation && translation !== key) {
            el.innerHTML = translation;
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translation = t(key);
        if (translation && translation !== key) {
            el.placeholder = translation;
        }
    });
    
    // Update page title
    document.title = t('title') + ' - ' + (currentLang === 'zh-TW' ? '組合博弈論' : 'Combinatorial Game Theory');
}

// Set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('nimsum-lang', lang);
    
    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh-TW' ? 'zh-Hant' : 'en';
    
    // Apply translations
    applyTranslations();
    
    // Re-render dynamic content
    if (typeof renderTheorySection === 'function') {
        renderTheorySection();
    }
    if (typeof updatePileInputs === 'function') {
        updatePileInputs();
    }
    if (typeof loadProblem === 'function') {
        loadProblem(currentProblem);
    }
}

// Initialize language toggle
function initLanguageToggle() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
    
    // Apply saved language
    setLanguage(currentLang);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initLanguageToggle);
