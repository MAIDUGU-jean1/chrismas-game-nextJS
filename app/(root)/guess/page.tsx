"use client";

import { useState } from "react";
import GuessForm from "@/app/components/GuessForm";
export default function GuessPage() {

    const [showSuccess, setShowSuccess] = useState(false);

  /**
   * ANSWER CONFIGURATION
   * 
   * Array of correct answers with corresponding hints
   * Structure:
   * - id: Unique identifier (used as React key and for state management)
   * - question: The question displayed to the user
   * - correctAnswer: The exact answer (case-insensitive matching)
   * - hint: Clue shown when user guesses incorrectly
   * 
   * HOW TO CUSTOMIZE:
   * Simply modify the objects below with your own questions and answers
   */
  const questions = [
    {
      id: "hobby1",
      question: "What do I love doing on weekends?",
      correctAnswer: "coding",
      hint: "It involves computers and creating software! 💻",
    },
    {
      id: "hobby2",
      question: "What's my favorite Football Player ?",
      correctAnswer: "messi",
      hint: "It's a popular player Currently playing in america ⛷️",
    },
    {
      id: "hobby3",
      question: "What type of music do I listen to most?",
      correctAnswer: "gospel",
      hint: "It's a genre that must christians love! 🎷",
    },
    {
      id: "hobby4",
      question: "What's my favorite way to relax?",
      correctAnswer: "reading",
      hint: "It involves books and imagination! 📚",
    },
  ];

  /**
   * Callback function triggered when all answers are correct
   * This function is passed to the GuessForm component
   */
  const handleSuccess = () => {
    setShowSuccess(true);
  };

  /**
   * Resets the game to allow user to play again
   */
  const handlePlayAgain = () => {
    setShowSuccess(false);
    // Force component remount to reset form state
    window.location.reload();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 via-red-900 to-green-950 text-white px-6 py-12 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">
          ❄️
        </div>
        <div className="absolute top-32 right-20 text-4xl opacity-15 animate-pulse delay-75">
          ❄️
        </div>
        <div className="absolute bottom-20 left-1/4 text-5xl opacity-10 animate-pulse delay-150">
          ❄️
        </div>
        <div className="absolute top-1/2 right-10 text-3xl opacity-20 animate-pulse">
          ⭐
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-red-600/30 backdrop-blur-sm rounded-full border border-red-400/30 mb-4">
            <span className="text-yellow-300 text-sm font-semibold">
              🎁 Christmas Challenge
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Guess My Vibe{" "}
            <span className="inline-block animate-bounce text-yellow-300">
              🎄
            </span>
          </h1>

          <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            Answer all the questions correctly to unlock your special Christmas
            surprise! Get ready for some festive fun! 🎅🏽✨
          </p>
        </div>

        {/* Form Container with Glass-morphism Effect */}
        <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border-2 border-white/10 shadow-2xl">
          <GuessForm questions={questions} onSuccess={handleSuccess} />
        </div>

        {/* Instructions Card */}
        <div className="mt-8 p-6 bg-yellow-900/20 backdrop-blur-sm rounded-2xl border border-yellow-600/30">
          <h3 className="text-yellow-300 font-bold text-lg mb-3 flex items-center gap-2">
            <span className="text-2xl">📋</span>
            How to Play:
          </h3>
          <ul className="text-green-100 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-yellow-300 mt-1">•</span>
              <span>Type your answer in each input field</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300 mt-1">•</span>
              <span>
                <strong className="text-red-300">Red borders</strong> mean your
                answer is incorrect
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300 mt-1">•</span>
              <span>
                <strong className="text-green-300">Green hints</strong> will
                appear below wrong answers
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300 mt-1">•</span>
              <span>Get all answers correct to win! 🎉</span>
            </li>
          </ul>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {/* Displays when user correctly answers all questions */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50 animate-fade-in">
          <div className="bg-gradient-to-br from-green-800 to-red-800 p-12 rounded-3xl border-4 border-yellow-300 shadow-2xl max-w-2xl w-full text-center animate-scale-in">
            {/* Success Animation */}
            <div className="text-8xl mb-6 animate-bounce">🎉</div>

            <h2 className="text-5xl font-extrabold mb-6 text-yellow-300">
              Congratulations!
            </h2>

            <p className="text-2xl text-white mb-8 leading-relaxed">
              You've unlocked the Christmas surprise! 
            </p>

            {/* Christmas Surprise Message */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border-2 border-yellow-300/50 mb-8">
              <p className="text-green-100 text-lg leading-relaxed">
                 <strong>Your Special Gift:</strong> You've proven you know
                me well! As a reward, enjoy this festive season with joy, love,
                and endless Christmas cookies! 🍪✨
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={handlePlayAgain}
                className="px-8 py-4 rounded-xl 
                         bg-gradient-to-r from-red-600 to-green-600
                         text-white font-bold
                         shadow-lg hover:shadow-xl
                         hover:scale-105 transition-all duration-300
                         border-2 border-yellow-300/50"
              >
                Play Again 🔄
              </button>

              <button
                onClick={() => (window.location.href = "/")}
                className="px-8 py-4 rounded-xl 
                         bg-white/10 backdrop-blur-md
                         text-white font-semibold
                         border-2 border-white/30
                         hover:bg-white/20 transition-all duration-300"
              >
                Go Home 🏠
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-green-600 to-red-600"></div>
    </main>
  );
}

/**
 * TECHNICAL IMPLEMENTATION NOTES:
 * 
 * 1. STATE MANAGEMENT:
 *    - showSuccess: Controls visibility of success modal
 *    - Form state is managed inside GuessForm component
 * 
 * 2. VALIDATION LOGIC:
 *    - Handled in GuessForm component
 *    - Case-insensitive comparison
 *    - Trims whitespace from answers
 * 
 * 3. VISUAL FEEDBACK:
 *    - Red border: Incorrect answer (border-red-500)
 *    - Green border: Correct answer (border-green-500)
 *    - Green hint box: Displays below incorrect answers
 * 
 * 4. COMPONENT COMMUNICATION:
 *    - GuessForm receives questions array as props
 *    - GuessForm calls onSuccess callback when all answers correct
 *    - Parent component shows success modal
 * 
 * 5. STYLING:
 *    - Tailwind CSS utility classes
 *    - Christmas color scheme (green/red/yellow)
 *    - Glass-morphism effects (backdrop-blur)
 *    - Smooth animations and transitions
 * 
 * 6. ACCESSIBILITY:
 *    - Semantic HTML elements (form, label, button)
 *    - Required attribute on inputs
 *    - Clear visual feedback for all states
 */