# 🐍 Snake Seasons Game

A modern browser-based **Snake Game** built with **HTML, CSS, and JavaScript** using the **Canvas API**.
The game features dynamic seasonal themes, smooth animation using `requestAnimationFrame`, particle effects, and responsive UI controls.

---

## 🎮 Demo

Open `snake-game.html` in your browser to start playing.

---

## ✨ Features

* 🐍 Classic Snake gameplay
* 🎨 **Dynamic Seasons System**

  * 🌿 Spring
  * ☀️ Summer
  * 🍂 Autumn
  * ❄️ Winter
* ⚡ **Smooth animation using `requestAnimationFrame`**
* 💥 **Particle effects when eating food**
* 🏆 **High score saved with `localStorage`**
* 📱 **Responsive UI layout**
* ⏸ **Pause / Resume functionality**
* 🎉 **High score celebration**

---

## 🎮 Controls

| Key            | Action         |
| -------------- | -------------- |
| **Enter**      | Start Game     |
| **Space**      | Pause / Resume |
| **Arrow Keys** | Move Snake     |
| **W A S D**    | Move Snake     |

---

## ⚙️ Difficulty Levels

The game includes three difficulty modes that control the snake speed:

* Easy
* Medium
* Hard

---

## 🧠 How It Works

### Game Loop

The game uses the browser's animation system:

```javascript
requestAnimationFrame(gameLoop)
```

This ensures smooth rendering and better performance compared to `setInterval`.

---

### Grid-Based Movement

The snake moves in a **20×20 grid** within a **400×400 canvas**.

```
Canvas: 400 x 400
Grid size: 20
Cells: 20 x 20
```

---

### High Score Storage

High scores are stored using the browser's **Local Storage API**.

```javascript
localStorage.setItem("snakeHigh", score)
```

---

## 📂 Project Structure

```
snake-seasons-game
│
├── snake-game.html
├── snake-game.css
└── snake-game.js
```

---

## 🚀 Getting Started

1. Clone the repository

```
git clone https://github.com/daredevilsjr/Snake-Season.git
```

2. Open the project folder

3. Run the game

```
Open snake-game.html in your browser
```

No build tools or dependencies required.

---

## 🛠 Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Canvas API
* requestAnimationFrame
* LocalStorage

---

## 📚 What I Learned

While building this project I practiced:

* Canvas rendering
* Game loops
* Animation timing
* Collision detection
* Particle systems
* State management
* Responsive UI design

---

## 💡 Future Improvements

Possible enhancements:

* 🌧 Rain / snow visual effects for seasons
* 🎵 Ambient seasonal sounds
* 📱 Mobile touch controls
* 🏆 Online leaderboard
* 🎮 Game menu system

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

⭐ If you like this project, consider giving it a star on GitHub!
