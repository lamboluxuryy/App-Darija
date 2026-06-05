import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Trophy, RotateCcw, ChevronRight, Zap } from 'lucide-react';
import { quizzes } from '../data/quizzes';
import { useApp } from '../context/AppContext';

function QuizCard({ quiz, onStart, isCompleted, score }) {
  return (
    <div className="glass rounded-3xl overflow-hidden card-hover">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{quiz.emoji}</div>
          {isCompleted && (
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-sm">
              <CheckCircle size={14} /> {score}%
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{quiz.title}</h3>
        <p className="text-white/40 text-sm mb-4">{quiz.questions.length} questions</p>
        <button
          onClick={() => onStart(quiz)}
          className="w-full py-3 rounded-2xl font-bold transition-all btn-shine text-center bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02]"
        >
          {isCompleted ? '🔄 Rejouer' : '🚀 Commencer'}
        </button>
      </div>
    </div>
  );
}

function QuizPlay({ quiz, onFinish }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState([]);

  const question = quiz.questions[currentQ];
  const progress = ((currentQ + 1) / quiz.questions.length) * 100;

  const handleSelect = (option) => {
    if (answered) return;
    const isCorrect = option === question.correct;
    setSelected(option);
    setAnswered(true);
    setShowExplanation(true);
    if (isCorrect) setCorrectCount(c => c + 1);
    setAnswers(prev => [...prev, { question: question.question, selected: option, correct: question.correct, isCorrect }]);
  };

  const handleNext = () => {
    if (currentQ < quiz.questions.length - 1) {
      setCurrentQ(c => c + 1);
      setSelected(null);
      setAnswered(false);
      setShowExplanation(false);
    } else {
      const score = Math.round((correctCount / quiz.questions.length) * 100);
      onFinish(score, answers);
    }
  };

  const getOptionStyle = (option) => {
    if (!answered) return 'glass border-white/10 text-white hover:border-amber-400/40 hover:bg-white/5';
    if (option === question.correct) return 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300';
    if (option === selected && option !== question.correct) return 'bg-rose-500/20 border-rose-500/50 text-rose-300';
    return 'glass border-white/5 text-white/30';
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="progress-bar h-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
        <span className="text-white/50 text-sm">{currentQ + 1}/{quiz.questions.length}</span>
      </div>

      {/* Score tracker */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-white/50 text-sm">{quiz.title}</span>
        <div className="flex gap-2">
          {quiz.questions.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i < answers.length
                  ? answers[i].isCorrect ? 'bg-emerald-400' : 'bg-rose-400'
                  : i === currentQ ? 'bg-amber-400' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="glass rounded-3xl p-8 mb-5">
        <div className="text-xs text-white/40 uppercase tracking-wider mb-4">
          Question {currentQ + 1}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-3 mb-5">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            disabled={answered}
            className={`w-full p-4 rounded-2xl border text-left font-medium transition-all duration-200 ${getOptionStyle(option)}`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                answered && option === question.correct ? 'border-emerald-500 bg-emerald-500' :
                answered && option === selected && option !== question.correct ? 'border-rose-500 bg-rose-500' :
                'border-white/30'
              }`}>
                {answered && option === question.correct && <CheckCircle size={14} className="text-white" />}
                {answered && option === selected && option !== question.correct && <XCircle size={14} className="text-white" />}
              </div>
              {option}
            </div>
          </button>
        ))}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className={`rounded-2xl p-4 mb-5 animate-fade-in ${
          selected === question.correct
            ? 'bg-emerald-500/10 border border-emerald-500/30'
            : 'bg-rose-500/10 border border-rose-500/30'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            {selected === question.correct
              ? <><CheckCircle size={16} className="text-emerald-400" /><span className="text-emerald-400 font-bold">Correct ! 🎉</span></>
              : <><XCircle size={16} className="text-rose-400" /><span className="text-rose-400 font-bold">Pas tout à fait...</span></>
            }
          </div>
          <p className="text-white/70 text-sm">{question.explanation}</p>
        </div>
      )}

      {/* Next */}
      {answered && (
        <button
          onClick={handleNext}
          className="w-full py-4 rounded-2xl font-bold btn-shine bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 animate-slide-up"
        >
          {currentQ < quiz.questions.length - 1 ? (
            <>Question suivante <ChevronRight size={18} /></>
          ) : (
            <>Voir les résultats <Trophy size={18} /></>
          )}
        </button>
      )}
    </div>
  );
}

function QuizResult({ quiz, score, answers, onRetry, onBack }) {
  const getGrade = () => {
    if (score >= 90) return { emoji: '🏆', label: 'Excellent !', color: 'text-amber-400' };
    if (score >= 70) return { emoji: '🎉', label: 'Bien joué !', color: 'text-emerald-400' };
    if (score >= 50) return { emoji: '👍', label: 'Pas mal !', color: 'text-blue-400' };
    return { emoji: '💪', label: 'Continue !', color: 'text-rose-400' };
  };

  const grade = getGrade();
  const xpEarned = Math.round((score / 100) * 50);

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="text-8xl mb-4 animate-float">{grade.emoji}</div>
      <h2 className={`text-3xl font-bold mb-2 ${grade.color}`}>{grade.label}</h2>
      <p className="text-white/50 mb-8">{quiz.title}</p>

      {/* Score circle */}
      <div className="relative w-40 h-40 mx-auto mb-8">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
          <circle
            cx="50" cy="50" r="40"
            fill="none"
            stroke={score >= 70 ? '#34d399' : score >= 50 ? '#60a5fa' : '#f87171'}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${2.51 * score} 251`}
            style={{ transition: 'stroke-dasharray 1s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-4xl font-bold text-white">{score}%</div>
          <div className="text-white/40 text-xs">Score</div>
        </div>
      </div>

      {/* XP */}
      <div className="glass-gold rounded-2xl p-4 mb-8 inline-flex items-center gap-3 mx-auto">
        <Zap className="text-amber-400" size={20} />
        <div>
          <div className="text-2xl font-bold text-amber-400">+{xpEarned} XP</div>
          <div className="text-amber-400/50 text-xs">gagnés</div>
        </div>
      </div>

      {/* Answers review */}
      <div className="glass rounded-2xl p-5 mb-8 text-left">
        <h3 className="text-white font-bold mb-4">📋 Révision des réponses</h3>
        <div className="space-y-3">
          {answers.map((a, i) => (
            <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${a.isCorrect ? 'bg-emerald-500/10' : 'bg-rose-500/10'}`}>
              {a.isCorrect
                ? <CheckCircle size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                : <XCircle size={16} className="text-rose-400 mt-0.5 flex-shrink-0" />}
              <div>
                <p className="text-white/70 text-sm mb-1">{a.question}</p>
                {!a.isCorrect && (
                  <p className="text-emerald-400 text-xs">✓ {a.correct}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={onRetry}
          className="flex items-center justify-center gap-2 py-4 rounded-2xl font-bold bg-gradient-to-r from-purple-500 to-violet-600 text-white btn-shine shadow-lg shadow-purple-500/30"
        >
          <RotateCcw size={18} /> Rejouer
        </button>
        <button
          onClick={onBack}
          className="py-4 rounded-2xl glass border border-white/10 text-white/70 font-medium"
        >
          ← Retour aux quiz
        </button>
      </div>
    </div>
  );
}

export default function QuizPage() {
  const { completedQuizzes, completeQuiz } = useApp();
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [quizState, setQuizState] = useState('list'); // list | playing | result
  const [finalScore, setFinalScore] = useState(0);
  const [finalAnswers, setFinalAnswers] = useState([]);

  const handleStart = (quiz) => {
    setActiveQuiz(quiz);
    setQuizState('playing');
  };

  const handleFinish = (score, answers) => {
    setFinalScore(score);
    setFinalAnswers(answers);
    completeQuiz(activeQuiz.id, score, 50);
    setQuizState('result');
  };

  const handleRetry = () => {
    setQuizState('playing');
  };

  const handleBack = () => {
    setActiveQuiz(null);
    setQuizState('list');
  };

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        {quizState === 'list' && (
          <>
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                🧠 Quiz & Défis
              </h1>
              <p className="text-white/50">
                Testez vos connaissances et gagnez des XP
              </p>
            </div>

            {/* Total stats */}
            <div className="glass-gold rounded-2xl p-5 mb-8 flex items-center justify-between">
              <div>
                <div className="text-amber-400/60 text-sm mb-1">Quiz complétés</div>
                <div className="text-3xl font-bold text-amber-400">
                  {completedQuizzes.length}/{quizzes.length}
                </div>
              </div>
              <div className="text-right">
                <div className="text-amber-400/60 text-sm mb-1">Meilleur score</div>
                <div className="text-3xl font-bold text-amber-400">
                  {completedQuizzes.length > 0
                    ? Math.max(...completedQuizzes.map(q => q.score)) + '%'
                    : '—'
                  }
                </div>
              </div>
              <Trophy size={40} className="text-amber-400/30" />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {quizzes.map(quiz => {
                const completed = completedQuizzes.find(q => q.id === quiz.id);
                return (
                  <QuizCard
                    key={quiz.id}
                    quiz={quiz}
                    onStart={handleStart}
                    isCompleted={!!completed}
                    score={completed?.score}
                  />
                );
              })}
            </div>

            {/* Tip */}
            <div className="mt-8 glass rounded-2xl p-5 border border-purple-400/20">
              <p className="text-white/60 text-sm text-center">
                💡 Faites les cours avant les quiz pour de meilleurs résultats !{' '}
                <Link to="/cours" className="text-amber-400 hover:underline">Voir les cours →</Link>
              </p>
            </div>
          </>
        )}

        {quizState === 'playing' && activeQuiz && (
          <QuizPlay quiz={activeQuiz} onFinish={handleFinish} />
        )}

        {quizState === 'result' && activeQuiz && (
          <QuizResult
            quiz={activeQuiz}
            score={finalScore}
            answers={finalAnswers}
            onRetry={handleRetry}
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
}
