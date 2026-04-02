'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pythonModules, type Module, type Lesson, type SubLesson, type Project, type QuizQuestion } from '@/data/pythonLessons';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <button 
      className="language-toggle"
      onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
    >
      {language === 'en' ? '🇮🇳 हिंदी' : '🇺🇸 English'}
    </button>
  );
}

function QuizComponent({ quiz, moduleColor }: { quiz: QuizQuestion[]; moduleColor: string }) {
  const { language, t } = useLanguage();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  if (!quiz || quiz.length === 0) return null;

  const question = quiz[0];
  
  return (
    <motion.div 
      className="quiz-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 style={{ color: moduleColor }}>❓ Quiz Time!</h3>
      <p className="quiz-question">{question.question[language]}</p>
      <div className="quiz-options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`quiz-option ${selectedAnswer === index ? 'selected' : ''} ${showResult ? (index === question.correctAnswer ? 'correct' : 'incorrect') : ''}`}
            onClick={() => {
              if (!showResult) {
                setSelectedAnswer(index);
                setShowResult(true);
              }
            }}
            disabled={showResult}
          >
            {option[language]}
          </button>
        ))}
      </div>
      {showResult && (
        <p className="quiz-result">
          {selectedAnswer === question.correctAnswer 
            ? t("✅ Correct! Great job!", "✅ Sahi! Bahut badhiya!") 
            : t("❌ Not quite right. Try again!", "Galat jawab. Dobara try karo!")}
        </p>
      )}
    </motion.div>
  );
}

function ProjectCard({ project, moduleColor }: { project: Project; moduleColor: string }) {
  const { language, t } = useLanguage();
  const [showSolution, setShowSolution] = useState(false);
  const [userCode, setUserCode] = useState(project.starterCode[language]);
  const [output, setOutput] = useState('');
  const [pyodideReady, setPyodideReady] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const pyodideRef = useRef<any>(null);

  useEffect(() => {
    async function loadPyodide() {
      if ((window as any).loadPyodide) {
        try {
          pyodideRef.current = await (window as any).loadPyodide();
          setPyodideReady(true);
        } catch (e) {
          console.error("Pyodide load failed:", e);
        }
      }
    }
    loadPyodide();
  }, []);

  const runCode = async () => {
    if (!pyodideRef.current) return;
    setIsRunning(true);
    try {
      await pyodideRef.current.runPythonAsync(userCode);
      const result = await pyodideRef.current.runPython("sys.stdout.getvalue()");
      setOutput(result || '');
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
    }
    setIsRunning(false);
  };

  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ borderColor: moduleColor }}
    >
      <h4 style={{ color: moduleColor }}>{project.title[language]}</h4>
      <p>{project.description[language]}</p>
      
      <div className="project-code">
        <textarea
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
          rows={6}
        />
      </div>
      
      <div className="project-actions">
        <button onClick={runCode} disabled={isRunning}>
          {isRunning ? '⏳' : '▶'} {t('Run', 'Chalao')}
        </button>
        <button onClick={() => setShowSolution(!showSolution)}>
          {showSolution ? t('Hide Solution', 'Solution Chhapao') : t('Show Solution', 'Solution Dekho')}
        </button>
      </div>
      
      {output && (
        <div className="project-output">
          <strong>{t('Output:', 'Output:')}</strong>
          <pre>{output}</pre>
        </div>
      )}
      
      {showSolution && (
        <div className="solution-box">
          <strong>{t('Solution:', 'Solution:')}</strong>
          <pre>{project.solution[language]}</pre>
        </div>
      )}
      
      {project.hints && project.hints.length > 0 && (
        <details className="hints-box">
          <summary>{t('💡 Hints', '💡 Tips')}</summary>
          <ul>
            {project.hints.map((hint, i) => (
              <li key={i}>{hint[language]}</li>
            ))}
          </ul>
        </details>
      )}
    </motion.div>
  );
}

function SubLessonView({ subLesson, moduleColor }: { subLesson: SubLesson; moduleColor: string }) {
  const { language, t } = useLanguage();
  const paragraphs = subLesson.content[language].split('\n\n');

  return (
    <motion.div
      className="sublesson-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="lesson-header" style={{ borderColor: moduleColor }}>
        <h2>{subLesson.title[language]}</h2>
      </div>
      
      <div className="lesson-explanation">
        {paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
      
      <div className="code-playground">
        <div className="code-section">
          <div className="section-header">
            <span>{t('Code', 'Code')}</span>
            <div className="window-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
          <pre className="code-block"><code>{subLesson.codeExample[language]}</code></pre>
        </div>
        
        <div className="output-section">
          <div className="output-header">
            <span>{t('Output', 'Output')}</span>
          </div>
          <pre className="output-block">{subLesson.output[language]}</pre>
        </div>
      </div>
      
      <div className="explanation-box" style={{ backgroundColor: `${moduleColor}20`, borderColor: moduleColor }}>
        <h4>💡 {t('Explanation', 'Samjhauta')}</h4>
        <p>{subLesson.explanation[language]}</p>
      </div>
      
      <QuizComponent quiz={subLesson.quiz} moduleColor={moduleColor} />
    </motion.div>
  );
}

function LessonView({ lesson, moduleColor }: { lesson: Lesson; moduleColor: string }) {
  const { language, t } = useLanguage();
  const [currentSubLesson, setCurrentSubLesson] = useState<SubLesson | null>(lesson.subLessons[0] || null);
  const [activeTab, setActiveTab] = useState<'lessons' | 'projects'>('lessons');

  if (!lesson.subLessons || lesson.subLessons.length === 0) {
    return <div>No sub-lessons available</div>;
  }

  return (
    <div className="lesson-view">
      <div className="lesson-tabs">
        <button 
          className={`tab ${activeTab === 'lessons' ? 'active' : ''}`}
          onClick={() => setActiveTab('lessons')}
        >
          📖 {t('Lessons', 'Paath')}
        </button>
        <button 
          className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          💻 {t('Projects', 'Projects')}
        </button>
      </div>

      {activeTab === 'lessons' && (
        <>
          <div className="sublesson-nav">
            {lesson.subLessons.map((sl, index) => (
              <button
                key={sl.id}
                className={`sublesson-btn ${currentSubLesson?.id === sl.id ? 'active' : ''}`}
                onClick={() => setCurrentSubLesson(sl)}
                style={{ borderColor: currentSubLesson?.id === sl.id ? moduleColor : 'transparent' }}
              >
                {index + 1}. {sl.title[language]}
              </button>
            ))}
          </div>
          
          {currentSubLesson && (
            <SubLessonView subLesson={currentSubLesson} moduleColor={moduleColor} />
          )}
        </>
      )}

      {activeTab === 'projects' && lesson.projects && (
        <div className="projects-grid">
          {lesson.projects.map((project) => (
            <ProjectCard key={project.id} project={project} moduleColor={moduleColor} />
          ))}
        </div>
      )}
    </div>
  );
}

function ModuleSidebar({ modules, activeModule, onSelectModule, onBack }: {
  modules: Module[];
  activeModule: Module | null;
  onSelectModule: (m: Module) => void;
  onBack: () => void;
}) {
  const { language, t } = useLanguage();

  return (
    <aside className="sidebar">
      <button className="back-btn" onClick={onBack}>
        ← {t('Back to Modules', 'Modules par Wapas')}
      </button>
      
      <div className="module-list">
        {modules.map((module) => (
          <motion.button
            key={module.id}
            className={`module-btn ${activeModule?.id === module.id ? 'active' : ''}`}
            onClick={() => onSelectModule(module)}
            style={{ 
              backgroundColor: activeModule?.id === module.id ? `${module.color}30` : 'transparent',
              borderColor: activeModule?.id === module.id ? module.color : 'transparent'
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="module-icon">{module.icon}</span>
            <div className="module-info">
              <span className="module-title">{module.title[language]}</span>
              <span className="module-desc">{module.description[language]}</span>
            </div>
          </motion.button>
        ))}
      </div>
    </aside>
  );
}

function LessonSelector({ lesson, moduleColor }: { lesson: Lesson; moduleColor: string }) {
  const { language, t } = useLanguage();

  return (
    <div className="lesson-selector">
      <h3>{lesson.title[language]}</h3>
      <p>{lesson.description[language]}</p>
    </div>
  );
}

function PythonLearningWebContent() {
  const { language, t } = useLanguage();
  const [activeModule, setActiveModule] = useState<Module | null>(pythonModules[0]);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(pythonModules[0]?.lessons[0] || null);
  const [view, setView] = useState<'modules' | 'learn'>('modules');

  useEffect(() => {
    setView('learn');
  }, []);

  const handleModuleSelect = (module: Module) => {
    setActiveModule(module);
    setActiveLesson(module.lessons[0] || null);
    setView('learn');
  };

  const handleBack = () => {
    setView('modules');
  };

  if (!activeModule) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-container">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">🐍</span>
          <h1>Python Galaxy</h1>
        </div>
        <div className="header-actions">
          <LanguageToggle />
        </div>
      </header>

      <AnimatePresence mode="wait">
        {view === 'modules' ? (
          <motion.div 
            className="modules-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="modules-grid">
              {pythonModules.map((module, index) => (
                <motion.div
                  key={module.id}
                  className="module-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleModuleSelect(module)}
                  style={{ borderColor: module.color }}
                >
                  <span className="module-icon-large">{module.icon}</span>
                  <h3>{module.title[language]}</h3>
                  <p>{module.description[language]}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            className="learn-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="learn-layout">
              <ModuleSidebar
                modules={pythonModules}
                activeModule={activeModule}
                onSelectModule={handleModuleSelect}
                onBack={handleBack}
              />
              
              <main className="content-area">
                {activeLesson && (
                  <LessonSelector lesson={activeLesson} moduleColor={activeModule.color} />
                )}
                {activeLesson && (
                  <LessonView lesson={activeLesson} moduleColor={activeModule.color} />
                )}
              </main>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PythonLearningWeb() {
  return (
    <LanguageProvider>
      <PythonLearningWebContent />
    </LanguageProvider>
  );
}
