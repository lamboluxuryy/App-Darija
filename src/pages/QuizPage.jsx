import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Trophy, RotateCcw, ChevronRight, Zap } from 'lucide-react';
import { quizzes } from '../data/quizzes';
import { useApp } from '../context/AppContext';

const DIFFICULTY_COLORS = {
  'Débutant': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  'Intermédiaire': 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  'Avancé': 'text-rose-400 bg-rose-400/10 border-rose-400/30',
};

function QuizCard({ quiz, onStart, isCompleted, score }) {
  const diffColor = DIFFICULTY_COLORS[quiz.difficulty] || 'text-white/50 bg-white/5 border-white/10';
  return (
    <div className="glass rounded-3xl overflow-hidden card-hover">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="text-4xl">{quiz.emoji}</div>
          <div className="flex flex-col items-end gap-1">
            {quiz.difficulty && (
              <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${diffColor}`}>
                {quiz.difficulty}
              </span>
            )}
            {isCompleted && (
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 text-xs">
                <CheckCircle size={11} /> {score}%
              </div>
            )}
          </div>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">{quiz.title}</h3>
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

// --- Multiple choice ---
function MultipleChoiceQuestion({ question, onAnswered, answered }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    if (answered) return;
    setSelected(option);
    onAnswered(option === question.correct, option);
  };

  const getStyle = (option) => {
    if (!answered) return 'glass border-white/10 text-white hover:border-amber-400/40 hover:bg-white/5';
    if (option === question.correct) return 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300';
    if (option === selected && option !== question.correct) return 'bg-rose-500/20 border-rose-500/50 text-rose-300';
    return 'glass border-white/5 text-white/30';
  };

  return (
    <div className="grid grid-cols-1 gap-3">
      {question.options.map((option) => (
        <button
          key={option}
          onClick={() => handleSelect(option)}
          disabled={answered}
          className={`w-full p-4 rounded-2xl border text-left font-medium transition-all duration-200 ${getStyle(option)}`}
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
  );
}

// --- Match pairs ---
function MatchPairsQuestion({ question, onAnswered, answered }) {
  const pairs = useMemo(() => JSON.parse(question.correct), [question.correct]);
  const lefts = useMemo(() => pairs.map(p => p[0]), [pairs]);
  const rights = useMemo(() => [...pairs.map(p => p[1])].sort(() => Math.random() - 0.5), [pairs]);

  const [selLeft, setSelLeft] = useState(null);
  const [selRight, setSelRight] = useState(null);
  const [matched, setMatched] = useState([]);
  const [wrongFlash, setWrongFlash] = useState(null);
  const [attempts, setAttempts] = useState(0);

  const isMatchedLeft = (item) => matched.some(m => m[0] === item);
  const isMatchedRight = (item) => matched.some(m => m[1] === item);

  const tryPair = (left, right) => {
    if (!left || !right) return;
    setAttempts(a => a + 1);
    const pair = pairs.find(p => p[0] === left);
    if (pair && pair[1] === right) {
      const newMatched = [...matched, [left, right]];
      setMatched(newMatched);
      setSelLeft(null);
      setSelRight(null);
      if (newMatched.length === pairs.length) {
        onAnswered(true);
      }
    } else {
      setWrongFlash({ left, right });
      setTimeout(() => {
        setWrongFlash(null);
        setSelLeft(null);
        setSelRight(null);
      }, 700);
    }
  };

  const handleLeft = (item) => {
    if (answered || isMatchedLeft(item)) return;
    const newLeft = item;
    setSelLeft(newLeft);
    if (selRight) tryPair(newLeft, selRight);
  };

  const handleRight = (item) => {
    if (answered || isMatchedRight(item)) return;
    const newRight = item;
    setSelRight(newRight);
    if (selLeft) tryPair(selLeft, newRight);
  };

  const getLeftStyle = (item) => {
    if (isMatchedLeft(item)) return 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300';
    if (wrongFlash?.left === item) return 'bg-rose-500/20 border-rose-500/40 text-rose-300';
    if (selLeft === item) return 'bg-amber-400/20 border-amber-400/50 text-amber-300 scale-105';
    return 'glass border-white/15 text-white hover:border-amber-400/40 hover:bg-white/5';
  };

  const getRightStyle = (item) => {
    if (isMatchedRight(item)) return 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300';
    if (wrongFlash?.right === item) return 'bg-rose-500/20 border-rose-500/40 text-rose-300';
    if (selRight === item) return 'bg-amber-400/20 border-amber-400/50 text-amber-300 scale-105';
    return 'glass border-white/15 text-white hover:border-amber-400/40 hover:bg-white/5';
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="text-white/50 text-sm">Cliquez sur un mot puis sa traduction</p>
        <span className="text-xs text-white/30">{matched.length}/{pairs.length} associés</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          {lefts.map(item => (
            <button
              key={item}
              onClick={() => handleLeft(item)}
              disabled={isMatchedLeft(item) || answered}
              className={`p-3 rounded-xl border font-arabic text-right text-sm transition-all duration-200 ${getLeftStyle(item)}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {rights.map(item => (
            <button
              key={item}
              onClick={() => handleRight(item)}
              disabled={isMatchedRight(item) || answered}
              className={`p-3 rounded-xl border text-left text-sm transition-all duration-200 ${getRightStyle(item)}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Word order ---
function WordOrderQuestion({ question, onAnswered, answered }) {
  const words = useMemo(() => [...question.options], [question.options]);
  const [built, setBuilt] = useState([]);
  const [remaining, setRemaining] = useState(words);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const addWord = (word, idx) => {
    if (answered) return;
    setBuilt(b => [...b, word]);
    setRemaining(r => r.filter((_, i) => i !== idx));
    setChecked(false);
  };

  const removeWord = (word, idx) => {
    if (answered) return;
    setRemaining(r => [...r, word]);
    setBuilt(b => b.filter((_, i) => i !== idx));
    setChecked(false);
  };

  const handleCheck = () => {
    if (built.length === 0) return;
    const sentence = built.join(' ');
    const correct = sentence.toLowerCase().replace(/\s+/g, ' ').trim() ===
      question.correct.toLowerCase().replace(/\s+/g, ' ').trim();
    setChecked(true);
    setIsCorrect(correct);
    onAnswered(correct, sentence);
  };

  return (
    <div>
      {/* Built sentence area */}
      <div className={`min-h-14 p-3 rounded-2xl border mb-4 flex flex-wrap gap-2 transition-all ${
        checked
          ? isCorrect ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-rose-500/10 border-rose-500/30'
          : 'bg-white/5 border-white/15'
      }`}>
        {built.length === 0 ? (
          <span className="text-white/20 text-sm self-center">Cliquez sur les mots ci-dessous...</span>
        ) : (
          built.map((word, i) => (
            <button
              key={i}
              onClick={() => removeWord(word, i)}
              disabled={answered}
              className="px-3 py-1.5 rounded-xl bg-amber-400/20 text-amber-300 text-sm border border-amber-400/30 hover:bg-rose-500/20 hover:text-rose-300 hover:border-rose-500/30 transition-all"
            >
              {word}
            </button>
          ))
        )}
      </div>

      {/* Remaining words */}
      <div className="flex flex-wrap gap-2 mb-4">
        {remaining.map((word, i) => (
          <button
            key={i}
            onClick={() => addWord(word, i)}
            disabled={answered}
            className="px-3 py-2 rounded-xl glass border border-white/15 text-white text-sm hover:border-amber-400/40 hover:bg-amber-400/10 transition-all"
          >
            {word}
          </button>
        ))}
      </div>

      {/* Check button */}
      {!answered && (
        <button
          onClick={handleCheck}
          disabled={built.length === 0}
          className="w-full py-3 rounded-2xl font-bold glass border border-white/20 text-white hover:border-amber-400/40 transition-all disabled:opacity-30"
        >
          Vérifier ✓
        </button>
      )}
    </div>
  );
}

// --- Quiz play ---
function QuizPlay({ quiz, onFinish }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [answers, setAnswers] = useState([]);

  const question = quiz.questions[currentQ];
  const progress = ((currentQ + 1) / quiz.questions.length) * 100;

  const handleAnswered = (correct, label = '') => {
    if (answered) return;
    setAnswered(true);
    setIsCorrect(correct);
    setSelectedLabel(label);
    if (correct) setCorrectCount(c => c + 1);
    setAnswers(prev => [...prev, {
      question: question.question,
      selected: label || (correct ? '✓' : '✗'),
      correct: question.type === 'match-pairs' ? 'Toutes les paires' : question.correct,
      isCorrect: correct,
    }]);
  };

  const handleNext = () => {
    if (currentQ < quiz.questions.length - 1) {
      setCurrentQ(c => c + 1);
      setAnswered(false);
      setIsCorrect(false);
      setSelectedLabel('');
    } else {
      const finalCorrect = isCorrect ? correctCount : correctCount;
      const score = Math.round((finalCorrect / quiz.questions.length) * 100);
      onFinish(score, answers);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="progress-bar h-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
        <span className="text-white/50 text-sm">{currentQ + 1}/{quiz.questions.length}</span>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mb-6">
        {quiz.questions.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all ${
              i < answers.length
                ? answers[i].isCorrect ? 'w-2.5 h-2.5 bg-emerald-400' : 'w-2.5 h-2.5 bg-rose-400'
                : i === currentQ ? 'w-4 h-2.5 bg-amber-400' : 'w-2.5 h-2.5 bg-white/20'
            }`}
          />
        ))}
      </div>

      {/* Question card */}
      <div className="glass rounded-3xl p-6 md:p-8 mb-5">
        <div className="text-xs text-white/40 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded-full text-xs border ${
            question.type === 'match-pairs' ? 'text-purple-400 border-purple-400/30 bg-purple-400/10' :
            question.type === 'word-order' ? 'text-teal-400 border-teal-400/30 bg-teal-400/10' :
            'text-amber-400/50 border-white/10 bg-white/5'
          }`}>
            {question.type === 'match-pairs' ? '🔗 Association' :
             question.type === 'word-order' ? '🔀 Ordre' : 'Question ' + (currentQ + 1)}
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Question type rendering */}
      <div className="mb-5">
        {question.type === 'match-pairs' ? (
          <MatchPairsQuestion question={question} onAnswered={handleAnswered} answered={answered} />
        ) : question.type === 'word-order' ? (
          <WordOrderQuestion question={question} onAnswered={handleAnswered} answered={answered} />
        ) : (
          <MultipleChoiceQuestion question={question} onAnswered={handleAnswered} answered={answered} />
        )}
      </div>

      {/* Explanation */}
      {answered && question.explanation && (
        <div className={`rounded-2xl p-4 mb-5 ${
          isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-rose-500/10 border border-rose-500/30'
        }`}>
          <div className="flex items-center gap-2 mb-1.5">
            {isCorrect
              ? <><CheckCircle size={15} className="text-emerald-400" /><span className="text-emerald-400 font-bold">Correct ! 🎉</span></>
              : <><XCircle size={15} className="text-rose-400" /><span className="text-rose-400 font-bold">Pas tout à fait...</span></>
            }
          </div>
          <p className="text-white/70 text-sm">{question.explanation}</p>
        </div>
      )}

      {answered && !question.explanation && (
        <div className={`rounded-2xl p-4 mb-5 ${isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-rose-500/10 border border-rose-500/30'}`}>
          <div className="flex items-center gap-2">
            {isCorrect
              ? <><CheckCircle size={15} className="text-emerald-400" /><span className="text-emerald-400 font-bold">Parfait ! 🎉</span></>
              : <><XCircle size={15} className="text-rose-400" /><span className="text-rose-400 font-bold">Bonne chance pour la suite !</span></>
            }
          </div>
        </div>
      )}

      {/* Next */}
      {answered && (
        <button
          onClick={handleNext}
          className="w-full py-4 rounded-2xl font-bold btn-shine bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
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

// --- Result ---
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

      <div className="relative w-40 h-40 mx-auto mb-8">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
          <circle
            cx="50" cy="50" r="40" fill="none"
            stroke={score >= 70 ? '#34d399' : score >= 50 ? '#60a5fa' : '#f87171'}
            strokeWidth="8" strokeLinecap="round"
            strokeDasharray={`${2.51 * score} 251`}
            style={{ transition: 'stroke-dasharray 1s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-4xl font-bold text-white">{score}%</div>
          <div className="text-white/40 text-xs">Score</div>
        </div>
      </div>

      <div className="glass-gold rounded-2xl p-4 mb-8 inline-flex items-center gap-3 mx-auto">
        <Zap className="text-amber-400" size={20} />
        <div>
          <div className="text-2xl font-bold text-amber-400">+{xpEarned} XP</div>
          <div className="text-amber-400/50 text-xs">gagnés</div>
        </div>
      </div>

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

// --- Main page ---
export default function QuizPage() {
  const { completedQuizzes, completeQuiz } = useApp();
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [quizState, setQuizState] = useState('list');
  const [finalScore, setFinalScore] = useState(0);
  const [finalAnswers, setFinalAnswers] = useState([]);
  const [diffFilter, setDiffFilter] = useState('Tout');

  const difficulties = ['Tout', 'Débutant', 'Intermédiaire', 'Avancé'];

  const filteredQuizzes = diffFilter === 'Tout'
    ? quizzes
    : quizzes.filter(q => q.difficulty === diffFilter);

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

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        {quizState === 'list' && (
          <>
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">🧠 Quiz & Défis</h1>
              <p className="text-white/50">Testez vos connaissances et gagnez des XP</p>
            </div>

            {/* Stats */}
            <div className="glass-gold rounded-2xl p-5 mb-6 flex items-center justify-between">
              <div>
                <div className="text-amber-400/60 text-sm mb-1">Quiz complétés</div>
                <div className="text-3xl font-bold text-amber-400">{completedQuizzes.length}/{quizzes.length}</div>
              </div>
              <div className="text-right">
                <div className="text-amber-400/60 text-sm mb-1">Meilleur score</div>
                <div className="text-3xl font-bold text-amber-400">
                  {completedQuizzes.length > 0 ? Math.max(...completedQuizzes.map(q => q.score)) + '%' : '—'}
                </div>
              </div>
              <Trophy size={40} className="text-amber-400/30" />
            </div>

            {/* Difficulty filter */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {difficulties.map(d => (
                <button
                  key={d}
                  onClick={() => setDiffFilter(d)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                    diffFilter === d
                      ? d === 'Tout' ? 'bg-white/20 text-white border-white/30' :
                        d === 'Débutant' ? 'bg-emerald-400/20 text-emerald-400 border-emerald-400/40' :
                        d === 'Intermédiaire' ? 'bg-amber-400/20 text-amber-400 border-amber-400/40' :
                        'bg-rose-400/20 text-rose-400 border-rose-400/40'
                      : 'glass text-white/50 hover:text-white border-transparent'
                  }`}
                >
                  {d}
                  {d !== 'Tout' && (
                    <span className="ml-1.5 text-xs opacity-60">
                      {quizzes.filter(q => q.difficulty === d).length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredQuizzes.map(quiz => {
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

            {filteredQuizzes.length === 0 && (
              <div className="text-center py-16 text-white/40">
                <div className="text-5xl mb-3">🔍</div>
                <p>Aucun quiz pour ce niveau</p>
              </div>
            )}

            <div className="mt-8 glass rounded-2xl p-5 border border-purple-400/20">
              <p className="text-white/60 text-sm text-center">
                💡 Deux nouveaux types de questions : associations de paires 🔗 et remise en ordre 🔀 !{' '}
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
            onRetry={() => setQuizState('playing')}
            onBack={() => { setActiveQuiz(null); setQuizState('list'); }}
          />
        )}
      </div>
    </div>
  );
}
