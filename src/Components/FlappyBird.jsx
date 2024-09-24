import React, { useState, useEffect } from "react";

const GRAVITY = -0.5;
const FALL_HEIGHT = 15;
const BIRD_SIZE = 20;
const PIPE_WIDTH = 60;
const PIPE_GAP = BIRD_SIZE * 5;
const GAME_WIDTH = 600;
const GAME_HEIGHT = 400;
const PIPE_SPEED = 2;

const FlappyBird = () => {
  const [birdPosition, setBirdPosition] = useState(GAME_HEIGHT / 2);
  const [pipeHeight, setPipeHeight] = useState(100);
  const [pipeLeft, setPipeLeft] = useState(GAME_WIDTH);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const birdBottom = birdPosition + BIRD_SIZE;
  const topPipeBottom = pipeHeight;
  const bottomPipeTop = pipeHeight + PIPE_GAP;

  // Bird movement with gravity
  useEffect(() => {
    if (birdPosition > 0 && !gameOver) {
      const gameTimerId = setInterval(() => {
        setBirdPosition((position) => position + GRAVITY);
      }, 24);
      return () => clearInterval(gameTimerId);
    }
  }, [birdPosition, gameOver]);

  // Pipe movement
  useEffect(() => {
    if (pipeLeft >= -PIPE_WIDTH && !gameOver) {
      const pipeTimerId = setInterval(() => {
        setPipeLeft((left) => left - PIPE_SPEED);
      }, 24);
      return () => clearInterval(pipeTimerId);
    } else {
      setPipeLeft(GAME_WIDTH);
      setPipeHeight(Math.random() * (GAME_HEIGHT - PIPE_GAP));
      setScore((score) => score + 1);
    }
  }, [pipeLeft, gameOver]);

  // Collision detection with pipes or ground
  useEffect(() => {
    // Only check collision if the bird is near the pipes
    if (pipeLeft <= 1 + PIPE_WIDTH && pipeLeft + PIPE_WIDTH >= 1) {
      // Check if the bird is above the top pipe or below the bottom pipe
      if (birdPosition <= topPipeBottom) {
        setGameOver(true);
      }
    }

    // Check for collision with the ground
    if (birdBottom >= GAME_HEIGHT) {
      setGameOver(true);
    }
  }, [birdPosition, pipeHeight, pipeLeft]);

  // Spacebar key detection for flap
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault(); // Prevent default scroll
        handleFlap(); // Trigger flap when Spacebar is pressed
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [birdPosition, gameOver]);

  const handleFlap = () => {
    if (!gameOver) {
      const newBirdPosition = birdPosition + FALL_HEIGHT;
      setBirdPosition(
        newBirdPosition > GAME_HEIGHT ? GAME_HEIGHT : newBirdPosition
      );
    } else {
      restartGame();
    }
  };

  const restartGame = () => {
    setBirdPosition(GAME_HEIGHT / 2);
    setPipeHeight(100);
    setPipeLeft(GAME_WIDTH);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div
      onClick={handleFlap}
      className="relative mx-auto mt-10 flex items-center justify-center bg-blue-400 overflow-hidden"
      style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
    >
      {/* Bird */}
      <div
        className="absolute bg-yellow-400"
        style={{
          width: BIRD_SIZE,
          height: BIRD_SIZE,
          bottom: birdPosition,
          left: 100,
        }}
      />

      {/* Top pipe */}
      <div
        className="absolute bg-green-500"
        style={{
          width: PIPE_WIDTH,
          height: pipeHeight,
          left: pipeLeft,
          top: 0,
        }}
      />

      {/* Bottom pipe */}
      <div
        className="absolute bg-green-500"
        style={{
          width: PIPE_WIDTH,
          height: GAME_HEIGHT - pipeHeight - PIPE_GAP,
          left: pipeLeft,
          bottom: 0,
        }}
      />

      {/* Game Over Message */}
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 text-white">
          <div className="text-3xl">
            Game Over! Click or Press Space to Restart
          </div>
        </div>
      )}

      {/* Score */}
      <div className="absolute top-2 left-2 text-2xl text-white">{score}</div>
    </div>
  );
};

export default FlappyBird;
