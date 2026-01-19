// State management
let currentLanguage = 'python';
let currentLessonIndex = 0;
let completedLessons = new Set();

// Load saved progress
function loadProgress() {
    const saved = localStorage.getItem('studyBuddyProgress');
    if (saved) {
        const data = JSON.parse(saved);
        completedLessons = new Set(data.completed || []);
        currentLanguage = data.language || 'python';
        currentLessonIndex = data.lessonIndex || 0;
    }
}

// Save progress
function saveProgress() {
    localStorage.setItem('studyBuddyProgress', JSON.stringify({
        completed: Array.from(completedLessons),
        language: currentLanguage,
        lessonIndex: currentLessonIndex,
    }));
}

// Initialize
function init() {
    loadProgress();
    document.getElementById('languageSelect').value = currentLanguage;
    renderLessonNav();
    loadLesson(currentLessonIndex);
    updateProgress();
    attachEventListeners();
}

// Render lesson navigation
function renderLessonNav() {
    const nav = document.getElementById('lessonNav');
    const lessons = lessonData[currentLanguage].lessons;
    
    // Group by category
    const categories = {};
    lessons.forEach((lesson, index) => {
        if (!categories[lesson.category]) {
            categories[lesson.category] = [];
        }
        categories[lesson.category].push({ ...lesson, index });
    });
    
    nav.innerHTML = '';
    Object.keys(categories).forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'lesson-category';
        
        const title = document.createElement('div');
        title.className = 'category-title';
        title.textContent = category;
        categoryDiv.appendChild(title);
        
        categories[category].forEach(lesson => {
            const item = document.createElement('div');
            item.className = 'lesson-item';
            if (lesson.index === currentLessonIndex) item.classList.add('active');
            if (completedLessons.has(lesson.id)) item.classList.add('completed');
            
            const title = document.createElement('span');
            title.textContent = lesson.title;
            item.appendChild(title);
            
            const status = document.createElement('span');
            status.className = 'lesson-status';
            status.textContent = completedLessons.has(lesson.id) ? '✓' : '';
            item.appendChild(status);
            
            item.onclick = () => {
                currentLessonIndex = lesson.index;
                loadLesson(currentLessonIndex);
                renderLessonNav();
                saveProgress();
                if (window.innerWidth <= 968) {
                    document.getElementById('sidebar').classList.remove('active');
                }
            };
            
            categoryDiv.appendChild(item);
        });
        
        nav.appendChild(categoryDiv);
    });
}

// Load lesson content
function loadLesson(index) {
    const lessons = lessonData[currentLanguage].lessons;
    const lesson = lessons[index];
    
    if (!lesson) return;
    
    // Update breadcrumb
    document.getElementById('breadcrumb').textContent = 
        `${lessonData[currentLanguage].name} / ${lesson.title}`;
    
    // Load content
    const contentDiv = document.getElementById('lessonContent');
    contentDiv.innerHTML = lesson.content;
    
    // Highlight code blocks in content
    contentDiv.querySelectorAll('pre code').forEach(block => {
        hljs.highlightElement(block);
    });
    
    // Load initial code
    const editor = document.getElementById('codeEditor');
    editor.value = lesson.initialCode;
    updateCodeHighlight();
    
    // Update navigation buttons
    document.getElementById('prevLessonBtn').disabled = index === 0;
    document.getElementById('nextLessonBtn').disabled = index === lessons.length - 1;
    
    // Clear output
    document.getElementById('outputDisplay').textContent = '';
    document.getElementById('outputDisplay').classList.remove('error');
}

// Update code highlighting
function updateCodeHighlight() {
    const editor = document.getElementById('codeEditor');
    const highlight = document.getElementById('codeHighlight');
    const code = highlight.querySelector('code');
    
    code.textContent = editor.value;
    hljs.highlightElement(code);
    
    // Sync scroll
    highlight.scrollTop = editor.scrollTop;
    highlight.scrollLeft = editor.scrollLeft;
}

// Simulate code execution
function runCode() {
    const code = document.getElementById('codeEditor').value;
    const output = document.getElementById('outputDisplay');
    output.classList.remove('error');
    
    try {
        // Simple simulation - capture print/console.log statements
        const lines = code.split('\n');
        let result = [];
        
        // Very basic Python print() simulation
        if (currentLanguage === 'python') {
            lines.forEach(line => {
                const printMatch = line.match(/print\((.+)\)/);
                if (printMatch) {
                    let content = printMatch[1];
                    // Remove quotes
                    content = content.replace(/["']/g, '');
                    // Handle variables
                    content = content.replace(/,\s*/g, ' ');
                    result.push(content);
                }
            });
        }
        
        // JavaScript console.log simulation
        if (currentLanguage === 'javascript') {
            lines.forEach(line => {
                const logMatch = line.match(/console\.log\((.+)\)/);
                if (logMatch) {
                    let content = logMatch[1];
                    content = content.replace(/["']/g, '');
                    content = content.replace(/,\s*/g, ' ');
                    result.push(content);
                }
            });
        }
        
        if (result.length > 0) {
            output.textContent = result.join('\n');
        } else {
            output.textContent = '✓ Code executed successfully (no output)';
        }
        
        // Mark lesson as completed
        const lesson = lessonData[currentLanguage].lessons[currentLessonIndex];
        completedLessons.add(lesson.id);
        updateProgress();
        renderLessonNav();
        saveProgress();
        
    } catch (error) {
        output.classList.add('error');
        output.textContent = '❌ Error: ' + error.message;
    }
}

// Update progress bar
function updateProgress() {
    const lessons = lessonData[currentLanguage].lessons;
    const completed = lessons.filter(l => completedLessons.has(l.id)).length;
    const percentage = Math.round((completed / lessons.length) * 100);
    
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = percentage + '% Complete';
}

// Event listeners
function attachEventListeners() {
    // Language selector
    document.getElementById('languageSelect').onchange = (e) => {
        currentLanguage = e.target.value;
        currentLessonIndex = 0;
        renderLessonNav();
        loadLesson(0);
        updateProgress();
        saveProgress();
    };
    
    // Code editor
    const editor = document.getElementById('codeEditor');
    editor.addEventListener('input', updateCodeHighlight);
    editor.addEventListener('scroll', () => {
        const highlight = document.getElementById('codeHighlight');
        highlight.scrollTop = editor.scrollTop;
        highlight.scrollLeft = editor.scrollLeft;
    });
    
    // Tab key support
    editor.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = editor.selectionStart;
            const end = editor.selectionEnd;
            editor.value = editor.value.substring(0, start) + '    ' + editor.value.substring(end);
            editor.selectionStart = editor.selectionEnd = start + 4;
            updateCodeHighlight();
        }
    });
    
    // Run code button
    document.getElementById('runCodeBtn').onclick = runCode;
    
    // Reset code button
    document.getElementById('resetCodeBtn').onclick = () => {
        const lesson = lessonData[currentLanguage].lessons[currentLessonIndex];
        document.getElementById('codeEditor').value = lesson.initialCode;
        updateCodeHighlight();
        document.getElementById('outputDisplay').textContent = '';
    };
    
    // Navigation buttons
    document.getElementById('prevLessonBtn').onclick = () => {
        if (currentLessonIndex > 0) {
            currentLessonIndex--;
            loadLesson(currentLessonIndex);
            renderLessonNav();
            saveProgress();
            document.querySelector('.content-wrapper').scrollTop = 0;
        }
    };
    
    document.getElementById('nextLessonBtn').onclick = () => {
        const lessons = lessonData[currentLanguage].lessons;
        if (currentLessonIndex < lessons.length - 1) {
            currentLessonIndex++;
            loadLesson(currentLessonIndex);
            renderLessonNav();
            saveProgress();
            document.querySelector('.content-wrapper').scrollTop = 0;
        }
    };
    
    // Mobile menu
    document.getElementById('mobileMenuBtn').onclick = () => {
        document.getElementById('sidebar').classList.toggle('active');
    };
    
    document.getElementById('sidebarToggle').onclick = () => {
        document.getElementById('sidebar').classList.remove('active');
    };
    
    // Reset progress
    document.getElementById('resetProgressBtn').onclick = () => {
        if (confirm('Reset all progress? This cannot be undone.')) {
            completedLessons.clear();
            currentLessonIndex = 0;
            updateProgress();
            renderLessonNav();
            loadLesson(0);
            saveProgress();
        }
    };
    
    // Theme toggle
    document.getElementById('themeToggle').onclick = () => {
        alert('Theme switching coming soon! Currently dark mode only.');
    };
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}