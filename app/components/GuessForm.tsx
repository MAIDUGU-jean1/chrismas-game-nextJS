// components/GuessForm.tsx
"use client";

import { useState } from "react";

/**
 * Interface defining the structure of each guess question
 * @property id - Unique identifier for the question
 * @property question - The question text to display
 * @property correctAnswer - The correct answer (case-insensitive)
 * @property hint - Helpful hint shown when answer is incorrect
 */
interface GuessQuestion {
  id: string;
  question: string;
  correctAnswer: string;
  hint: string;
}

/**
 * Props interface for the GuessForm component
 * @property questions - Array of guess questions to display
 * @property onSuccess - Callback function triggered when all answers are correct
 */
interface GuessFormProps {
  questions: GuessQuestion[];
  onSuccess: () => void;
}

/**
 * Interface for tracking the state of each answer
 * @property value - The current input value
 * @property isCorrect - Whether the answer is correct (null = not yet checked)
 * @property showHint - Whether to display the hint
 */
interface AnswerState {
  value: string;
  isCorrect: boolean | null;
  showHint: boolean;
}

export default function GuessForm({ questions, onSuccess }: GuessFormProps) {
  /**
   * State management for all answers
   * Initialize with empty values and null correctness status
   * Key: question id, Value: answer state object
   */
  const [answers, setAnswers] = useState<Record<string, AnswerState>>(
    questions.reduce((acc, q) => {
      acc[q.id] = { value: "", isCorrect: null, showHint: false };
      return acc;
    }, {} as Record<string, AnswerState>)
  );

  // Track if form has been submitted to show validation
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [numberOfAttempts, setNumberOfAttempts] = useState(0);

  /**
   * Handles input change for each question
   * Resets the correctness status when user types
   * @param questionId - ID of the question being answered
   * @param value - New input value
   */
  const handleInputChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        value,
        // Reset validation when user starts typing after submission
        isCorrect: isSubmitted ? prev[questionId].isCorrect : null,
        showHint: false,
      },
    }));
  };

  /**
   * Validates a single answer against the correct answer
   * Uses case-insensitive comparison and trims whitespace
   * @param questionId - ID of the question to validate
   * @returns boolean indicating if answer is correct
   */
  const validateAnswer = (questionId: string): boolean => {
    const question = questions.find((q) => q.id === questionId);
    const answer = answers[questionId];

    if (!question || !answer) return false;

    // Case-insensitive comparison with trimmed whitespace
    return (
      answer.value.trim().toLowerCase() ===
      question.correctAnswer.trim().toLowerCase()
    );
  };

  /**
   * Handles form submission
   * Validates all answers and updates their states accordingly
   * Triggers success callback if all answers are correct
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Increment attempt counter
    setNumberOfAttempts((prev) => prev + 1);
    console.log("Attempt number:", numberOfAttempts + 1);

    // Create a new answers object with validation results
    const validatedAnswers = { ...answers };
    let allCorrect = true;

    // Validate each question
    questions.forEach((question) => {
      const isCorrect = validateAnswer(question.id);
      validatedAnswers[question.id] = {
        ...validatedAnswers[question.id],
        isCorrect,
        showHint: !isCorrect, // Show hint only if incorrect
      };

      if (!isCorrect) allCorrect = false;
    });

    // Update state with validation results
    setAnswers(validatedAnswers);

    // If all answers are correct, trigger success callback
    if (allCorrect) {
      setTimeout(() => {
        onSuccess();
      }, 500); // Small delay for user to see all green borders
    }
  };

  /**
   * Determines the border color class based on answer correctness
   * @param questionId - ID of the question
   * @returns Tailwind CSS class for border color
   */
  const getBorderColor = (questionId: string): string => {
    const answer = answers[questionId];

    // Only show colored borders after submission
    if (!isSubmitted || answer.isCorrect === null) {
      return "border-white/20 focus:border-yellow-300";
    }

    // Red border for incorrect, green for correct
    return answer.isCorrect
      ? "border-green-500 focus:border-green-400"
      : "border-red-500 focus:border-red-400";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
        <p className="text-2xl text-green-300 text-center">Attempt: {numberOfAttempts}</p>
      {/* Map through each question and render input field */}
      {questions.map((question, index) => (
        <div key={question.id} className="space-y-3">
          {/* Question Label */}
          <label
            htmlFor={question.id}
            className="block text-lg font-semibold text-green-100"
          >
            <span className="text-yellow-300">#{index + 1}</span> {question.question}
          </label>

          {/* Input Field with Dynamic Border Color */}
          <input
            type="text"
            id={question.id}
            value={answers[question.id].value}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            placeholder="Type your answer..."
            className={`
              w-full px-6 py-4 rounded-xl
              bg-white/10 backdrop-blur-sm
              text-white placeholder-gray-400
              border-2 transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-yellow-300/50
              ${getBorderColor(question.id)}
            `}
            required
          />

          {/* Hint Display - Shows in green when answer is incorrect */}
          {answers[question.id].showHint && (
            <div className="flex items-start gap-2 p-4 bg-green-900/30 border-l-4 border-green-500 rounded-lg animate-fade-in">
              <span className="text-green-400 text-xl mt-0.5">💡</span>
              <p className="text-green-300 text-sm leading-relaxed">
                <strong>Hint:</strong> {question.hint}
              </p>
            </div>
          )}

          {/* Success Message - Shows when answer is correct */}
          {answers[question.id].isCorrect === true && (
            <div className="flex items-center gap-2 text-green-400 text-sm animate-fade-in">
              <span className="text-xl">✓</span>
              <span className="font-semibold">Correct!</span>
            </div>
          )}
        </div>
      ))}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-10 py-5 rounded-2xl 
                   bg-gradient-to-r from-red-600 to-green-600
                   text-white font-bold text-lg
                   shadow-2xl shadow-red-500/50
                   hover:shadow-red-500/70 hover:scale-105
                   transition-all duration-300
                   border-2 border-yellow-300/50"
      >
        Submit Guesses 🎄
      </button>

      {/* Overall Feedback Message */}
      {isSubmitted && (
        <div className="text-center">
          {Object.values(answers).every((a) => a.isCorrect) ? (
            <p className="text-green-300 text-lg font-semibold animate-pulse">
              🎉 All correct! Preparing your surprise... 🎉
            </p>
          ) : (
            <p className="text-red-300 text-lg">
              ❌ Some answers are incorrect. Check the hints and try again!
            </p>
          )}
        </div>
      )}
    </form>
  );
}