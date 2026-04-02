export interface LessonContent {
  en: string;
  hi: string;
}

export interface CodeExample {
  en: string;
  hi: string;
}

export interface QuizQuestion {
  question: LessonContent;
  options: LessonContent[];
  correctAnswer: number;
}

export interface Project {
  id: string;
  title: LessonContent;
  description: LessonContent;
  starterCode: LessonContent;
  solution: LessonContent;
  expectedOutput: LessonContent;
  hints: LessonContent[];
}

export interface SubLesson {
  id: string;
  title: LessonContent;
  content: LessonContent;
  codeExample: CodeExample;
  output: LessonContent;
  explanation: LessonContent;
  quiz: QuizQuestion[];
}

export interface Lesson {
  id: string;
  title: LessonContent;
  description: LessonContent;
  subLessons: SubLesson[];
  projects: Project[];
}

export interface Module {
  id: string;
  title: LessonContent;
  description: LessonContent;
  icon: string;
  color: string;
  lessons: Lesson[];
}

export const pythonModules: Module[] = [
  {
    id: "getting-started",
    title: { en: "Getting Started", hi: "शुरू करना" },
    description: { en: "Install Python and write your first program", hi: "Python इंस्टॉल करें और अपना पहला प्रोग्राम लिखें" },
    icon: "🚀",
    color: "#10B981",
    lessons: [
      {
        id: "install-python",
        title: { en: "Installing Python", hi: "Python इंस्टॉल करना" },
        description: { en: "How to install Python on your computer", hi: "अपने कंप्यूटर पर Python कैसे इंस्टॉल करें" },
        subLessons: [
          {
            id: "what-is-python",
            title: { en: "What is Python?", hi: "Python क्या है?" },
            content: {
              en: "Python ek bahut powerful programming language hai. Isse web applications, games, data analysis, AI, aur bohot saari cheezein banayi ja sakti hain.\n\nPython ki khaas baatein:\n✅ Padhne aur samajhne mein aasan hai\n✅ Bohot saare kaam kar sakte ho isse\n✅ Windows, Mac, Linux sab par chalega\n✅ Bahut saare log iska use karte hain\n✅ Code line-by-line chalta hai (interpreted)",
              hi: "Python ek bahut powerful programming language hai. Isse web applications, games, data analysis, AI, aur bohot saari cheezein banayi ja sakti hain.\n\nPython ki khaas baatein:\n✅ Padhne aur samajhne mein aasan hai\n✅ Bohot saare kaam kar sakte ho isse\n✅ Windows, Mac, Linux sab par chalega\n✅ Bahut saare log iska use karte hain\n✅ Code line-by-line chalta hai (interpreted)"
            },
            codeExample: {
              en: "# Python is easy to learn!\nprint(\"Hello! I am Python\")\nprint(\"I can do many things!\")",
              hi: "# Python padhne mein aasan hai!\nprint(\"Namaste! Main Python hoon\")\nprint(\"Main bohot saare kaam kar sakta hoon!\")"
            },
            output: {
              en: "Hello! I am Python\nI can do many things!",
              hi: "Namaste! Main Python hoon\nMain bohot saare kaam kar sakta hoon!"
            },
            explanation: {
              en: "Python is a high-level, interpreted language. You can read and understand Python code easily because it looks similar to English.",
              hi: "Python ek high-level, interpreted language hai. Python code ko aasani se padha aur samjha ja sakta hai kyuki ye English jaisa dikhta hai."
            },
            quiz: [
              {
                question: {
                  en: "What is Python?",
                  hi: "Python kya hai?"
                },
                options: [
                  { en: "A programming language", hi: "Ek programming language" },
                  { en: "A type of snake", hi: "Ek snake ka naam" },
                  { en: "A math formula", hi: "Ek math formula" },
                  { en: "A video game", hi: "Ek video game" }
                ],
                correctAnswer: 0
              }
            ]
          },
          {
            id: "installing-python",
            title: { en: "Installing Python", hi: "Python इंस्टॉल करना" },
            content: {
              en: "Python install karne ke liye:\n\n1. Google me jaao aur 'Download Python' search karo\n2. python.org website par jao\n3. Download button par click karo\n4. Install karte waqt 'Add Python to PATH' jarur select karo\n\nInstallation check karne ke liye terminal/command prompt me type karo:\npython --version\n\nAgar version dikhai de toh installation successful hai!",
              hi: "Python install karne ke liye:\n\n1. Google me jaao aur 'Download Python' search karo\n2. python.org website par jao\n3. Download button par click karo\n4. Install karte waqt 'Add Python to PATH' jarur select karo\n\nInstallation check karne ke liye terminal/command prompt me type karo:\npython --version\n\nAgar version dikhai de toh installation successful hai!"
            },
            codeExample: {
              en: "# Check Python version\nimport sys\nprint(\"Python version:\", sys.version)\nprint(\"Python executable:\", sys.executable)",
              hi: "# Python version check karo\nimport sys\nprint(\"Python version:\", sys.version)\nprint(\"Python executable:\", sys.executable)"
            },
            output: {
              en: "Python version: 3.12.0 (...)\nPython executable: C:\\Python312\\python.exe",
              hi: "Python version: 3.12.0 (...)\nPython executable: C:\\Python312\\python.exe"
            },
            explanation: {
              en: "sys.version tells you which Python version is installed. sys.executable shows where Python is installed on your computer.",
              hi: "sys.version batata hai ki konsa Python version install hai. sys.executable dikhata hai ki Python aapke computer me kahan install hai."
            },
            quiz: [
              {
                question: {
                  en: "How do you check if Python is installed?",
                  hi: "Python install hai ya nahi, kaise check karenge?"
                },
                options: [
                  { en: "python --version", hi: "python --version" },
                  { en: "check python", hi: "check python" },
                  { en: "run python", hi: "run python" },
                  { en: "python install", hi: "python install" }
                ],
                correctAnswer: 0
              }
            ]
          },
          {
            id: "python-repl",
            title: { en: "Python REPL", hi: "Python REPL" },
            content: {
              en: "REPL ka matlab hai: Read, Evaluate, Print, Loop.\n\nPython REPL ek aisa jagah hai jahan tum direct code likh kar result dekh sakte ho.\n\nREPL kholne ke liye terminal me sirf 'python' type karo.\n\n>>> Ye symbol dikhega, iska matlab hai Python ready hai tumhara code lene ke liye.\n\nExit karne ke liye 'exit()' ya 'quit()' type karo.",
              hi: "REPL ka matlab hai: Read, Evaluate, Print, Loop.\n\nPython REPL ek aisa jagah hai jahan tum direct code likh kar result dekh sakte ho.\n\nREPL kholne ke liye terminal me sirf 'python' type karo.\n\n>>> Ye symbol dikhega, iska matlab hai Python ready hai tumhara code lene ke liye.\n\nExit karne ke liye 'exit()' ya 'quit()' type karo."
            },
            codeExample: {
              en: "# In Python REPL (interactive shell)\n>>> print(\"Hello!\")\nHello!\n>>> 2 + 2\n4\n>>> \"Python\" + \" is fun\"\n'Python is fun'\n>>> name = \"Student\"\n>>> print(f\"Welcome, {name}!\")\nWelcome, Student!",
              hi: "# Python REPL me (interactive shell)\n>>> print(\"Namaste!\")\nNamaste!\n>>> 2 + 2\n4\n>>> \"Python\" + \" mast hai\"\n'Python mast hai'\n>>> naam = \"Student\"\n>>> print(f\"Swagat hai, {naam}!\")\nSwagat hai, Student!"
            },
            output: {
              en: "Hello!\n4\nPython is fun\nWelcome, Student!",
              hi: "Namaste!\n4\nPython mast hai\nSwagat hai, Student!"
            },
            explanation: {
              en: "REPL is perfect for testing small pieces of code quickly. You don't need to create a file - just type and see the result!",
              hi: "REPL chhote code test karne ke liye perfect hai. Tumhe file banana nahi padta - bas type karo aur result dekho!"
            },
            quiz: [
              {
                question: {
                  en: "What does REPL stand for?",
                  hi: "REPL ka kya matlab hai?"
                },
                options: [
                  { en: "Read, Evaluate, Print, Loop", hi: "Read, Evaluate, Print, Loop" },
                  { en: "Run, Edit, Play, Learn", hi: "Run, Edit, Play, Learn" },
                  { en: "Repeat, End, Process, Loop", hi: "Repeat, End, Process, Loop" },
                  { en: "Read, Edit, Print, Learn", hi: "Read, Edit, Print, Learn" }
                ],
                correctAnswer: 0
              }
            ]
          }
        ],
        projects: [
          {
            id: "hello-world",
            title: { en: "Hello World", hi: "नमस्ते दुनिया" },
            description: { en: "Print your first message", hi: "अपना पहला संदेश प्रिंट करें" },
            starterCode: {
              en: "# Print Hello World\n# Write your code below:\n\n",
              hi: "# Namaste Duniya print karo\n# Niche apna code likho:\n\n"
            },
            solution: {
              en: "print(\"Hello, World!\")",
              hi: "print(\"Namaste, Duniya!\")"
            },
            expectedOutput: {
              en: "Hello, World!",
              hi: "Namaste, Duniya!"
            },
            hints: [
              { en: "Use print() function", hi: "print() function use karo" }
            ]
          },
          {
            id: "self-intro",
            title: { en: "Self Introduction", hi: "परिचय" },
            description: { en: "Print information about yourself", hi: "अपने बारे में जानकारी प्रिंट करें" },
            starterCode: {
              en: "# Create variables for your info\nname = \"Your Name\"\nage = 20\ncity = \"Your City\"\n\n# Print introduction\nprint(\"My name is\", name)\n# Add more lines below\n\n",
              hi: "# Apne info ke liye variables banao\nnaam = \"Tera Naam\"\numar = 20\nshahar = \"Tera Shahar\"\n\n# Introduction print karo\nprint(\"Mera naam hai\", naam)\n# Niche aur lines add karo\n\n"
            },
            solution: {
              en: "name = \"John\"\nage = 20\ncity = \"New York\"\nprint(\"My name is\", name)\nprint(\"I am\", age, \"years old\")\nprint(\"I live in\", city)",
              hi: "naam = \"Rahul\"\numar = 20\nshahar = \"Delhi\"\nprint(\"Mera naam hai\", naam)\nprint(\"Meri umar hai\", umar, \"saal\")\nprint(\"Main\", shahar, \"mein rehta hoon\")"
            },
            expectedOutput: {
              en: "My name is John\nI am 20 years old\nI live in New York",
              hi: "Mera naam hai Rahul\nMeri umar hai 20 saal\nMain Delhi mein rehta hoon"
            },
            hints: [
              { en: "Create variables for name, age, city", hi: "naam, umar, shahar ke liye variables banao" }
            ]
          },
          {
            id: "ascii-art",
            title: { en: "ASCII Art", hi: "ASCII Art" },
            description: { en: "Create simple art with text", hi: "टेक्स्ट से सरल आर्ट बनाएं" },
            starterCode: {
              en: "# Create ASCII art\n# Example: A simple smiley\nprint(\"   _____   \")\nprint(\"  /     \\  \")\nprint(\" |  ^ ^  | \")\nprint(\" |   -   | \")\nprint(\"  \\_____/  \")\n\n# Create your own art below:\n\n",
              hi: "# ASCII art banao\n# Example: Ek simple smiley\nprint(\"   _____   \")\nprint(\"  /     \\  \")\nprint(\" |  ^ ^  | \")\nprint(\" |   -   | \")\nprint(\"  \\_____/  \")\n\n# Niche apna art banao:\n\n"
            },
            solution: {
              en: "print(\"  *   *  \")\nprint(\"   * *   \")\nprint(\"    *    \")\nprint(\"   * *   \")\nprint(\"  *   *  \")",
              hi: "print(\"  *   *  \")\nprint(\"   * *   \")\nprint(\"    *    \")\nprint(\"   * *   \")\nprint(\"  *   *  \")"
            },
            expectedOutput: {
              en: "  *   *\n   * *\n    *\n   * *\n  *   *",
              hi: "  *   *\n   * *\n    *\n   * *\n  *   *"
            },
            hints: [
              { en: "Use print() with quotes to create shapes", hi: "Shapes banane ke liye print() ke saath quotes use karo" }
            ]
          },
          {
            id: "multi-line-print",
            title: { en: "Multi-line Poem", hi: "कविता" },
            description: { en: "Print a multi-line poem", hi: "बहु-पंक्ति कविता प्रिंट करें" },
            starterCode: {
              en: "# Print a poem\n# Each line will print on new line\n\nprint(\"Roses are red,\")\n# Add more lines below:\n\n",
              hi: "# Ek kavita print karo\n# Har line nayi line me print hogi\n\nprint(\"Gulab hai lal,\")\n# Niche aur lines add karo:\n\n"
            },
            solution: {
              en: "print(\"Roses are red,\")\nprint(\"Violets are blue,\")\nprint(\"Python is awesome,\")\nprint(\"And so are you!\")",
              hi: "print(\"Gulab hai lal,\")\nprint(\"Jasmine hai safal,\")\nprint(\"Python hai mast,\")\nprint(\"Aur tu bhi mast!\")"
            },
            expectedOutput: {
              en: "Roses are red,\nViolets are blue,\nPython is awesome,\nAnd so are you!",
              hi: "Gulab hai lal,\nJasmine hai safal,\nPython hai mast,\nAur tu bhi mast!"
            },
            hints: [
              { en: "Use separate print() for each line", hi: "Har line ke liye alag print() use karo" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "variables-data-types",
    title: { en: "Variables & Data Types", hi: "Variables और Data Types" },
    description: { en: "Learn about variables and different data types", hi: "Variables aur different data types ke baare mein sikhein" },
    icon: "📦",
    color: "#3B82F6",
    lessons: [
      {
        id: "variables-basics",
        title: { en: "Variables", hi: "Variables" },
        description: { en: "Storing data in variables", hi: "Variables mein data store karna" },
        subLessons: [
          {
            id: "what-is-variable",
            title: { en: "What is a Variable?", hi: "Variable kya hai?" },
            content: {
              en: "Variable ek box ki tarah hai jisme hum data store karte hain.\n\nSocho ek almirah jisme tum apni cheezein rakh ho - har cheez apni jagah par hai. Waise hi variables mein values stored hoti hain.\n\nVariables banane ke liye:\n1. Ek naam denge (jaise box ka label)\n2. Equal sign (=) lagayenge\n3. Value denge jo store karni hai\n\nPython khud samajh lega ki value kis type ki hai - integer, float, ya text.",
              hi: "Variable ek box ki tarah hai jisme hum data store karte hain.\n\nSocho ek almirah jisme tum apni cheezein rakh ho - har cheez apni jagah par hai. Waise hi variables mein values stored hoti hain.\n\nVariables banane ke liye:\n1. Ek naam denge (jaise box ka label)\n2. Equal sign (=) lagayenge\n3. Value denge jo store karni hai\n\nPython khud samajh lega ki value kis type ki hai - integer, float, ya text."
            },
            codeExample: {
              en: "# Creating variables\nname = \"Alice\"          # Text (string)\nage = 25                 # Whole number (integer)\nheight = 5.6              # Decimal (float)\nis_student = True        # True/False (boolean)\n\nprint(\"Name:\", name)\nprint(\"Age:\", age)\nprint(\"Height:\", height)\nprint(\"Is Student:\", is_student)",
              hi: "# Variables banaye\nnaam = \"Rahul\"           # Text (string)\numar = 25                # Purna number (integer)\nlength = 5.6             # Decimal (float)\nstudent = True           # True/False (boolean)\n\nprint(\"Naam:\", naam)\nprint(\"Umar:\", umar)\nprint(\"Length:\", length)\nprint(\"Student hai:\", student)"
            },
            output: {
              en: "Name: Alice\nAge: 25\nHeight: 5.6\nIs Student: True",
              hi: "Naam: Rahul\nUmar: 25\nLength: 5.6\nStudent hai: True"
            },
            explanation: {
              en: "Python automatically detects the type of data. You don't need to tell Python if it's a number or text - it figures it out itself!",
              hi: "Python automatically detect karta hai data ki type. Tumhe nahi batana padta ki number hai ya text - Python khud samajh jata hai!"
            },
            quiz: [
              {
                question: {
                  en: "What is a variable?",
                  hi: "Variable kya hai?"
                },
                options: [
                  { en: "A container to store data", hi: "Data store karne ka container" },
                  { en: "A type of loop", hi: "Ek tarah ka loop" },
                  { en: "A mathematical formula", hi: "Ek mathematical formula" },
                  { en: "A programming error", hi: "Ek programming error" }
                ],
                correctAnswer: 0
              }
            ]
          },
          {
            id: "variable-naming",
            title: { en: "Variable Naming Rules", hi: "Variable naam ke rules" },
            content: {
              en: "Variables ke naam dene ke kuch rules hain:\n\n✅ Letter se shuru karo (a-z, A-Z)\n✅ Underscore use kar sakte ho (_)\n✅ Numbers use kar sakte ho (0-9) lekin shuru me nahi\n✅ Case-sensitive hai (age aur Age alag hain)\n✅ Python keywords nahi use kar sakte (jaise: if, else, for, while, print)\n\nBest Practices:\n✅ Descriptive naam use karo\n✅ Snake case use karo (jaise: user_name, is_active)\n✅ Short aur clear naam den",
              hi: "Variables ke naam dene ke kuch rules hain:\n\n✅ Letter se shuru karo (a-z, A-Z)\n✅ Underscore use kar sakte ho (_)\n✅ Numbers use kar sakte ho (0-9) lekin shuru me nahi\n✅ Case-sensitive hai (age aur Age alag hain)\n✅ Python keywords nahi use kar sakte (jaise: if, else, for, while, print)\n\nBest Practices:\n✅ Descriptive naam use karo\n✅ Snake case use karo (jaise: user_name, is_active)\n✅ Short aur clear naam den"
            },
            codeExample: {
              en: "# Valid variable names\nuser_name = \"John\"\nage = 25\nis_active = True\ntotal_price = 99.99\n\n# Invalid - starts with number\n# 2name = \"test\"  # ERROR!\n\n# Case sensitive example\nAge = 30\nAGE = 40\nprint(\"age:\", age)\nprint(\"Age:\", Age)\nprint(\"AGE:\", AGE)",
              hi: "# Valid variable names\nuser_name = \"Rahul\"\numar = 25\nactive = True\ntotal_price = 99.99\n\n# Invalid - number se shuru\n# 2naam = \"test\"  # ERROR!\n\n# Case sensitive example\nUmar = 30\nUMAR = 40\nprint(\"umar:\", umar)\nprint(\"Umar:\", Umar)\nprint(\"UMAR:\", UMAR)"
            },
            output: {
              en: "age: 25\nAge: 30\nAGE: 40",
              hi: "umar: 25\nUmar: 30\nUMAR: 40"
            },
            explanation: {
              en: "Python is case-sensitive, so 'age', 'Age', and 'AGE' are three different variables! Always use meaningful names for better code.",
              hi: "Python case-sensitive hai, toh 'age', 'Age', aur 'AGE' teen alag variables hain! Humesha meaningful names use karo."
            },
            quiz: [
              {
                question: {
                  en: "Which is a valid variable name in Python?",
                  hi: "Python me konsa valid variable name hai?"
                },
                options: [
                  { en: "user_name", hi: "user_name" },
                  { en: "2users", hi: "2users" },
                  { en: "for", hi: "for" },
                  { en: "my-variable", hi: "my-variable" }
                ],
                correctAnswer: 0
              }
            ]
          },
          {
            id: "multiple-assignment",
            title: { en: "Multiple Assignment", hi: "Multiple Assignment" },
            content: {
              en: "Ek line me multiple variables bana sakte hain.\n\nTeesra tarika: Sabhi variables ko ek hi value de sakte ho.\n\nYe Python ki power hai - ek line mein bohot kaam kar sakte ho!",
              hi: "Ek line me multiple variables bana sakte hain.\n\nTeesra tarika: Sabhi variables ko ek hi value de sakte ho.\n\nYe Python ki power hai - ek line mein bohot kaam kar sakte ho!"
            },
            codeExample: {
              en: "# Method 1: Separate assignment\nx = 1\ny = 2\nz = 3\nprint(x, y, z)\n\n# Method 2: Multiple in one line\na, b, c = 4, 5, 6\nprint(a, b, c)\n\n# Method 3: Same value to all\np = q = r = 10\nprint(p, q, r)",
              hi: "# Method 1: Alag assignment\nx = 1\ny = 2\nz = 3\nprint(x, y, z)\n\n# Method 2: Ek line me multiple\na, b, c = 4, 5, 6\nprint(a, b, c)\n\n# Method 3: Sabhi ko ek hi value\np = q = r = 10\nprint(p, q, r)"
            },
            output: {
              en: "1 2 3\n4 5 6\n10 10 10",
              hi: "1 2 3\n4 5 6\n10 10 10"
            },
            explanation: {
              en: "Multiple assignment makes code shorter and cleaner. Use it when you want to assign related values together.",
              hi: "Multiple assignment se code chhota aur clean bantha hai. Use karo jab related values ek saath assign karni ho."
            },
            quiz: [
              {
                question: {
                  en: "What will x, y, z be after: x, y, z = 1, 2, 3?",
                  hi: "x, y, z ke baad kya hoga: x, y, z = 1, 2, 3?"
                },
                options: [
                  { en: "x=1, y=2, z=3", hi: "x=1, y=2, z=3" },
                  { en: "x=3, y=2, z=1", hi: "x=3, y=2, z=1" },
                  { en: "x=0, y=0, z=0", hi: "x=0, y=0, z=0" },
                  { en: "Error", hi: "Error" }
                ],
                correctAnswer: 0
              }
            ]
          }
        ],
        projects: [
          {
            id: "personal-info",
            title: { en: "Personal Info", hi: "Personal Information" },
            description: { en: "Store and print your information", hi: "Apni jankari store karke print karo" },
            starterCode: {
              en: "# Store your information\nname = \"\"\nage = 0\ncity = \"\"\nemail = \"\"\n\n# Print all information\nprint(\"My Info:\")\n# Add print statements below\n\n",
              hi: "# Apni jankari store karo\nnaam = \"\"\numar = 0\nshahar = \"\"\nemail = \"\"\n\n# Saari jankari print karo\nprint(\"Meri Jankari:\")\n# Niche print statements add karo\n\n"
            },
            solution: {
              en: "name = \"John\"\nage = 20\ncity = \"Mumbai\"\nemail = \"john@email.com\"\nprint(\"My Info:\")\nprint(\"Name:\", name)\nprint(\"Age:\", age)\nprint(\"City:\", city)\nprint(\"Email:\", email)",
              hi: "naam = \"Rahul\"\numar = 20\nshahar = \"Mumbai\"\nemail = \"rahul@email.com\"\nprint(\"Meri Jankari:\")\nprint(\"Naam:\", naam)\nprint(\"Umar:\", umar)\nprint(\"Shahar:\", shahar)\nprint(\"Email:\", email)"
            },
            expectedOutput: {
              en: "My Info:\nName: John\nAge: 20\nCity: Mumbai\nEmail: john@email.com",
              hi: "Meri Jankari:\nNaam: Rahul\nUmar: 20\nShahar: Mumbai\nEmail: rahul@email.com"
            },
            hints: [
              { en: "Create variables for name, age, city, email", hi: "naam, umar, shahar, email ke liye variables banao" }
            ]
          },
          {
            id: "swap-variables",
            title: { en: "Swap Variables", hi: "Variables Swap Karna" },
            description: { en: "Swap values between two variables", hi: "Do variables ki values exchange karo" },
            starterCode: {
              en: "# Swap these values\na = \"First\"\nb = \"Second\"\nprint(\"Before: a =\", a, \"b =\", b)\n\n# Swap values below\n# Hint: Use a temporary variable\n\n\nprint(\"After: a =\", a, \"b =\", b)",
              hi: "# In values exchange karo\na = \"Pehla\"\nb = \"Dusra\"\nprint(\"Pehle: a =\", a, \"b =\", b)\n\n# Niche values exchange karo\n# Hint: Temporary variable use karo\n\n\nprint(\"Baad me: a =\", a, \"b =\", b)"
            },
            solution: {
              en: "a = \"First\"\nb = \"Second\"\nprint(\"Before: a =\", a, \"b =\", b)\ntemp = a\na = b\nb = temp\nprint(\"After: a =\", a, \"b =\", b)",
              hi: "a = \"Pehla\"\nb = \"Dusra\"\nprint(\"Pehle: a =\", a, \"b =\", b)\ntemp = a\na = b\nb = temp\nprint(\"Baad me: a =\", a, \"b =\", b)"
            },
            expectedOutput: {
              en: "Before: a = First b = Second\nAfter: a = Second b = First",
              hi: "Pehle: a = Pehla b = Dusra\nBaad me: a = Dusra b = Pehla"
            },
            hints: [
              { en: "Use a temporary variable to hold one value", hi: "Ek value hold karne ke liye temporary variable use karo" }
            ]
          },
          {
            id: "calculator-vars",
            title: { en: "Calculator Variables", hi: "Calculator Variables" },
            description: { en: "Create variables for a calculator", hi: "Calculator ke liye variables banao" },
            starterCode: {
              en: "# Calculator variables\nnum1 = 10\nnum2 = 5\n\n# Calculate and store results\nsum_result = \ndiff_result = \nprod_result = \ndiv_result = \n\n# Print all results\nprint(\"Number 1:\", num1)\nprint(\"Number 2:\", num2)\nprint(\"Sum:\", sum_result)\nprint(\"Difference:\", diff_result)\nprint(\"Product:\", prod_result)\nprint(\"Division:\", div_result)",
              hi: "# Calculator variables\nnum1 = 10\nnum2 = 5\n\n# Calculate karke results store karo\nsum_result = \ndiff_result = \nprod_result = \ndiv_result = \n\n# Saare results print karo\nprint(\"Number 1:\", num1)\nprint(\"Number 2:\", num2)\nprint(\"Jod:\", sum_result)\nprint(\"Ghat:\", diff_result)\nprint(\"Gunakar:\", prod_result)\nprint(\"Bhag:\", div_result)"
            },
            solution: {
              en: "num1 = 10\nnum2 = 5\nsum_result = num1 + num2\ndiff_result = num1 - num2\nprod_result = num1 * num2\ndiv_result = num1 / num2\nprint(\"Number 1:\", num1)\nprint(\"Number 2:\", num2)\nprint(\"Sum:\", sum_result)\nprint(\"Difference:\", diff_result)\nprint(\"Product:\", prod_result)\nprint(\"Division:\", div_result)",
              hi: "num1 = 10\nnum2 = 5\nsum_result = num1 + num2\ndiff_result = num1 - num2\nprod_result = num1 * num2\ndiv_result = num1 / num2\nprint(\"Number 1:\", num1)\nprint(\"Number 2:\", num2)\nprint(\"Jod:\", sum_result)\nprint(\"Ghat:\", diff_result)\nprint(\"Gunakar:\", prod_result)\nprint(\"Bhag:\", div_result)"
            },
            expectedOutput: {
              en: "Number 1: 10\nNumber 2: 5\nSum: 15\nDifference: 5\nProduct: 50\nDivision: 2.0",
              hi: "Number 1: 10\nNumber 2: 5\nJod: 15\nGhat: 5\nGunakar: 50\nBhag: 2.0"
            },
            hints: [
              { en: "Use +, -, *, / operators", hi: "+, -, *, / operators use karo" }
            ]
          },
          {
            id: " Rectangle Info",
            title: { en: "Rectangle Info", hi: "Rectangle Ki Jankari" },
            description: { en: "Calculate rectangle properties", hi: "Rectangle ke properties calculate karo" },
            starterCode: {
              en: "# Rectangle properties\nlength = 8\nwidth = 5\n\n# Calculate\narea = \nperimeter = \n\n# Print results\nprint(\"Rectangle Properties:\")\nprint(\"Length:\", length)\nprint(\"Width:\", width)\nprint(\"Area:\", area)\nprint(\"Perimeter:\", perimeter)",
              hi: "# Rectangle ke properties\nlambai = 8\nchhodai = 5\n\n# Calculate karo\narea = \nperimeter = \n\n# Results print karo\nprint(\"Rectangle Ki Jankari:\")\nprint(\"Lambai:\", lambai)\nprint(\"Chhodai:\", chhodai)\nprint(\"Area:\", area)\nprint(\"Perimeter:\", perimeter)"
            },
            solution: {
              en: "length = 8\nwidth = 5\narea = length * width\nperimeter = 2 * (length + width)\nprint(\"Rectangle Properties:\")\nprint(\"Length:\", length)\nprint(\"Width:\", width)\nprint(\"Area:\", area)\nprint(\"Perimeter:\", perimeter)",
              hi: "lambai = 8\nchhodai = 5\narea = lambai * chhodai\nperimeter = 2 * (lambai + chhodai)\nprint(\"Rectangle Ki Jankari:\")\nprint(\"Lambai:\", lambai)\nprint(\"Chhodai:\", chhodai)\nprint(\"Area:\", area)\nprint(\"Perimeter:\", perimeter)"
            },
            expectedOutput: {
              en: "Rectangle Properties:\nLength: 8\nWidth: 5\nArea: 40\nPerimeter: 26",
              hi: "Rectangle Ki Jankari:\nLambai: 8\nChhodai: 5\nArea: 40\nPerimeter: 26"
            },
            hints: [
              { en: "Area = length × width, Perimeter = 2 × (length + width)", hi: "Area = lambai × chhodai, Perimeter = 2 × (lambai + chhodai)" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "operators",
    title: { en: "Operators", hi: "Operators" },
    description: { en: "Learn about arithmetic and comparison operators", hi: "Arithmetic aur comparison operators ke baare mein sikhein" },
    icon: "🔢",
    color: "#8B5CF6",
    lessons: [
      {
        id: "arithmetic-operators",
        title: { en: "Arithmetic Operators", hi: "Arithmetic Operators" },
        description: { en: "Mathematical operations in Python", hi: "Python mein mathematical operations" },
        subLessons: [
          {
            id: "basic-math",
            title: { en: "Basic Math Operations", hi: "Basic Math Operations" },
            content: {
              en: "Python mein hum mathematical operations kar sakte hain jaise addition, subtraction, multiplication, division.\n\n+ Addition (jodna): 5 + 3 = 8\n- Subtraction (ghatana): 5 - 3 = 2\n* Multiplication (guna): 5 * 3 = 15\n/ Division (bhag): 5 / 3 = 1.67\n\nYe sab simple math jaise tum school mein karte ho!",
              hi: "Python mein hum mathematical operations kar sakte hain jaise addition, subtraction, multiplication, division.\n\n+ Addition (jodna): 5 + 3 = 8\n- Subtraction (ghatana): 5 - 3 = 2\n* Multiplication (guna): 5 * 3 = 15\n/ Division (bhag): 5 / 3 = 1.67\n\nYe sab simple math jaise tum school mein karte ho!"
            },
            codeExample: {
              en: "a = 10\nb = 3\n\nprint(\"a =\", a, \"b =\", b)\nprint(\"Addition:\", a + b)\nprint(\"Subtraction:\", a - b)\nprint(\"Multiplication:\", a * b)\nprint(\"Division:\", a / b)",
              hi: "a = 10\nb = 3\n\nprint(\"a =\", a, \"b =\", b)\nprint(\"Jod (Addition):\", a + b)\nprint(\"Ghat (Subtraction):\", a - b)\nprint(\"Guna (Multiplication):\", a * b)\nprint(\"Bhag (Division):\", a / b)"
            },
            output: {
              en: "a = 10 b = 3\nAddition: 13\nSubtraction: 7\nMultiplication: 30\nDivision: 3.3333333333333335",
              hi: "a = 10 b = 3\nJod (Addition): 13\nGhat (Subtraction): 7\nGuna (Multiplication): 30\nBhag (Division): 3.3333333333333335"
            },
            explanation: {
              en: "Division always returns a float (decimal number). Even if the numbers are whole, Python gives you a decimal result!",
              hi: "Division hamesha float (decimal number) deta hai. Chahe numbers poore hon, Python tumhe decimal result deta hai!"
            },
            quiz: [
              {
                question: {
                  en: "What is 15 / 4?",
                  hi: "15 / 4 kya hoga?"
                },
                options: [
                  { en: "3.75", hi: "3.75" },
                  { en: "3", hi: "3" },
                  { en: "4", hi: "4" },
                  { en: "3.0", hi: "3.0" }
                ],
                correctAnswer: 0
              }
            ]
          },
          {
            id: "floor-modulus",
            title: { en: "Floor Division & Modulus", hi: "Floor Division & Modulus" },
            content: {
              en: "Do aur operators hain jo bohot useful hain:\n\n// Floor Division: Division karke neeche ki value deta hai (desimal hata deta hai). 7 // 2 = 3\n\n% Modulus: Division ka remainder deta hai. 7 % 2 = 1\n\n** Exponentiation: Power calculate karta hai. 2 ** 3 = 8",
              hi: "Do aur operators hain jo bohot useful hain:\n\n// Floor Division: Division karke neeche ki value deta hai (desimal hata deta hai). 7 // 2 = 3\n\n% Modulus: Division ka remainder deta hai. 7 % 2 = 1\n\n** Exponentiation: Power calculate karta hai. 2 ** 3 = 8"
            },
            codeExample: {
              en: "a = 10\nb = 3\n\nprint(\"a =\", a, \"b =\", b)\nprint(\"Floor Division // :\", a // b)\nprint(\"Modulus % :\", a % b)\nprint(\"Exponentiation ** :\", a ** b)\n\n# Practical example\nprint(\"\\n--- Practical Examples ---\")\nprint(\"Even or Odd?\")\nnum = 7\nprint(num, \"% 2 =\", num % 2, \"(0=even, 1=odd)\")",
              hi: "a = 10\nb = 3\n\nprint(\"a =\", a, \"b =\", b)\nprint(\"Floor Division // :\", a // b)\nprint(\"Modulus % :\", a % b)\nprint(\"Exponentiation ** :\", a ** b)\n\n# Practical example\nprint(\"\\n--- Practical Examples ---\")\nprint(\"Even ya Odd?\")\nnum = 7\nprint(num, \"% 2 =\", num % 2, \"(0=even, 1=odd)\")"
            },
            output: {
              en: "a = 10 b = 3\nFloor Division // : 3\nModulus % : 1\nExponentiation ** : 1000\n\n--- Practical Examples ---\nEven or Odd?\n7 % 2 = 1 (0=even, 1=odd)",
              hi: "a = 10 b = 3\nFloor Division // : 3\nModulus % : 1\nExponentiation ** : 1000\n\n--- Practical Examples ---\nEven ya Odd?\n7 % 2 = 1 (0=even, 1=odd)"
            },
            explanation: {
              en: "// gives the whole number part of division. % gives the remainder - very useful for checking if a number is even or odd!",
              hi: "// division ka poora hissa deta hai. % remainder deta hai - even/odd check karne ke liye bohot useful!"
            },
            quiz: [
              {
                question: {
                  en: "What is 17 % 5?",
                  hi: "17 % 5 kya hoga?"
                },
                options: [
                  { en: "2", hi: "2" },
                  { en: "3", hi: "3" },
                  { en: "2.4", hi: "2.4" },
                  { en: "3.4", hi: "3.4" }
                ],
                correctAnswer: 0
              }
            ]
          }
        ],
        projects: [
          {
            id: "simple-calculator",
            title: { en: "Simple Calculator", hi: "Simple Calculator" },
            description: { en: "Create a basic calculator", hi: "Ek basic calculator banao" },
            starterCode: {
              en: "# Simple Calculator\nnum1 = 15\nnum2 = 4\n\n# Perform all operations\nadd = \nsub = \nmul = \ndiv = \nfloor_div = \nmod = \npower = \n\nprint(\"Calculator Results:\")\nprint(num1, \"+\", num2, \"=\", add)\nprint(num1, \"-\", num2, \"=\", sub)\nprint(num1, \"*\", num2, \"=\", mul)\nprint(num1, \"/\", num2, \"=\", div)\nprint(num1, \"//\", num2, \"=\", floor_div)\nprint(num1, \"%\", num2, \"=\", mod)\nprint(num1, \"**\", num2, \"=\", power)",
              hi: "# Simple Calculator\nnum1 = 15\nnum2 = 4\n\n# Saare operations perform karo\nadd = \nsub = \nmul = \ndiv = \nfloor_div = \nmod = \npower = \n\nprint(\"Calculator Results:\")\nprint(num1, \"+\", num2, \"=\", add)\nprint(num1, \"-\", num2, \"=\", sub)\nprint(num1, \"*\", num2, \"=\", mul)\nprint(num1, \"/\", num2, \"=\", div)\nprint(num1, \"//\", num2, \"=\", floor_div)\nprint(num1, \"%\", num2, \"=\", mod)\nprint(num1, \"**\", num2, \"=\", power)"
            },
            solution: {
              en: "num1 = 15\nnum2 = 4\nadd = num1 + num2\nsub = num1 - num2\nmul = num1 * num2\ndiv = num1 / num2\nfloor_div = num1 // num2\nmod = num1 % num2\npower = num1 ** num2\nprint(\"Calculator Results:\")\nprint(num1, \"+\", num2, \"=\", add)\nprint(num1, \"-\", num2, \"=\", sub)\nprint(num1, \"*\", num2, \"=\", mul)\nprint(num1, \"/\", num2, \"=\", div)\nprint(num1, \"//\", num2, \"=\", floor_div)\nprint(num1, \"%\", num2, \"=\", mod)\nprint(num1, \"**\", num2, \"=\", power)",
              hi: "num1 = 15\nnum2 = 4\nadd = num1 + num2\nsub = num1 - num2\nmul = num1 * num2\ndiv = num1 / num2\nfloor_div = num1 // num2\nmod = num1 % num2\npower = num1 ** num2\nprint(\"Calculator Results:\")\nprint(num1, \"+\", num2, \"=\", add)\nprint(num1, \"-\", num2, \"=\", sub)\nprint(num1, \"*\", num2, \"=\", mul)\nprint(num1, \"/\", num2, \"=\", div)\nprint(num1, \"//\", num2, \"=\", floor_div)\nprint(num1, \"%\", num2, \"=\", mod)\nprint(num1, \"**\", num2, \"=\", power)"
            },
            expectedOutput: {
              en: "Calculator Results:\n15 + 4 = 19\n15 - 4 = 11\n15 * 4 = 60\n15 / 4 = 3.75\n15 // 4 = 3\n15 % 4 = 3\n15 ** 4 = 50625",
              hi: "Calculator Results:\n15 + 4 = 19\n15 - 4 = 11\n15 * 4 = 60\n15 / 4 = 3.75\n15 // 4 = 3\n15 % 4 = 3\n15 ** 4 = 50625"
            },
            hints: [
              { en: "Use +, -, *, /, //, %, ** operators", hi: "+, -, *, /, //, %, ** operators use karo" }
            ]
          },
          {
            id: "even-odd-checker",
            title: { en: "Even Odd Checker", hi: "Even Odd Checker" },
            description: { en: "Check if a number is even or odd", hi: "Check karo ki number even hai ya odd" },
            starterCode: {
              en: "# Check if number is even or odd\nnum = 17\n\n# Use modulus operator to check\nresult = num % 2\n\nprint(num, \"mod 2 =\", result)\nprint(num, \"is\")\n# Add if-else to print \"Even\" or \"Odd\"\n\n",
              hi: "# Check karo ki number even hai ya odd\nnum = 17\n\n# Modulus operator use karo\nresult = num % 2\n\nprint(num, \"mod 2 =\", result)\nprint(num, \"is\")\n# Agar-wna (if-else) use karo \"Even\" ya \"Odd\" print karne ke liye\n\n"
            },
            solution: {
              en: "num = 17\nresult = num % 2\nif result == 0:\n    print(\"Even\")\nelse:\n    print(\"Odd\")",
              hi: "num = 17\nresult = num % 2\nif result == 0:\n    print(\"Even\")\nelse:\n    print(\"Odd\")"
            },
            expectedOutput: {
              en: "Odd",
              hi: "Odd"
            },
            hints: [
              { en: "If num % 2 == 0, it's Even, else Odd", hi: "Agar num % 2 == 0, toh Even hai, nahi toh Odd" }
            ]
          },
          {
            id: "circle-calculator",
            title: { en: "Circle Calculator", hi: "Circle Calculator" },
            description: { en: "Calculate circle area and circumference", hi: "Circle ka area aur circumference calculate karo" },
            starterCode: {
              en: "import math\n\nradius = 7\n\n# Calculate area (π × r²)\narea = \n\n# Calculate circumference (2 × π × r)\ncircumference = \n\nprint(\"Circle Calculator\")\nprint(\"Radius:\", radius)\nprint(\"Area:\", area)\nprint(\"Circumference:\", circumference)",
              hi: "import math\n\nradius = 7\n\n# Area calculate karo (π × r²)\narea = \n\n# Circumference calculate karo (2 × π × r)\ncircumference = \n\nprint(\"Circle Calculator\")\nprint(\"Radius:\", radius)\nprint(\"Area:\", area)\nprint(\"Circumference:\", circumference)"
            },
            solution: {
              en: "import math\nradius = 7\narea = math.pi * radius ** 2\ncircumference = 2 * math.pi * radius\nprint(\"Circle Calculator\")\nprint(\"Radius:\", radius)\nprint(\"Area:\", area)\nprint(\"Circumference:\", circumference)",
              hi: "import math\nradius = 7\narea = math.pi * radius ** 2\ncircumference = 2 * math.pi * radius\nprint(\"Circle Calculator\")\nprint(\"Radius:\", radius)\nprint(\"Area:\", area)\nprint(\"Circumference:\", circumference)"
            },
            expectedOutput: {
              en: "Circle Calculator\nRadius: 7\nArea: 153.93804002589985\nCircumference: 43.98229715025711",
              hi: "Circle Calculator\nRadius: 7\nArea: 153.93804002589985\nCircumference: 43.98229715025711"
            },
            hints: [
              { en: "Use math.pi for π", hi: "π ke liye math.pi use karo" }
            ]
          },
          {
            id: "digit-summation",
            title: { en: "Digit Summation", hi: "Digit Ka Yog" },
            description: { en: "Sum all digits of a number", hi: "Ek number ke sab digits ka yog calculate karo" },
            starterCode: {
              en: "# Sum of digits of 123\nnum = 123\n\n# Extract digits and add\nd1 = num // 100      # First digit\nd2 = (num // 10) % 10  # Middle digit\nd3 = num % 10        # Last digit\n\ndigit_sum = \n\nprint(\"Number:\", num)\nprint(\"Digits:\", d1, d2, d3)\nprint(\"Sum of digits:\", digit_sum)",
              hi: "# 123 ke digits ka yog\nnum = 123\n\n# Digits nikal kar add karo\nd1 = num // 100      # Pehla digit\nd2 = (num // 10) % 10  # Beech wala digit\nd3 = num % 10        # Last digit\n\ndigit_sum = \n\nprint(\"Number:\", num)\nprint(\"Digits:\", d1, d2, d3)\nprint(\"Digits ka yog:\", digit_sum)"
            },
            solution: {
              en: "num = 123\nd1 = num // 100\nd2 = (num // 10) % 10\nd3 = num % 10\ndigit_sum = d1 + d2 + d3\nprint(\"Number:\", num)\nprint(\"Digits:\", d1, d2, d3)\nprint(\"Sum of digits:\", digit_sum)",
              hi: "num = 123\nd1 = num // 100\nd2 = (num // 10) % 10\nd3 = num % 10\ndigit_sum = d1 + d2 + d3\nprint(\"Number:\", num)\nprint(\"Digits:\", d1, d2, d3)\nprint(\"Digits ka yog:\", digit_sum)"
            },
            expectedOutput: {
              en: "Number: 123\nDigits: 1 2 3\nSum of digits: 6",
              hi: "Number: 123\nDigits: 1 2 3\nDigits ka yog: 6"
            },
            hints: [
              { en: "Use // and % to extract each digit", hi: "Har digit nikalne ke liye // aur % use karo" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "control-flow",
    title: { en: "Control Flow", hi: "Control Flow" },
    description: { en: "If-else statements and conditions", hi: "If-else statements aur conditions" },
    icon: "🔀",
    color: "#EF4444",
    lessons: [
      {
        id: "if-else",
        title: { en: "If-Else Statements", hi: "If-Else Statements" },
        description: { en: "Making decisions in code", hi: "Code mein decisions lena" },
        subLessons: [
          {
            id: "if-statement",
            title: { en: "If Statement", hi: "If Statement" },
            content: {
              en: "If statements ka use hum code mein decision lene ke liye karte hain.\n\nAgar koi condition true hai toh kuch code chalao, nahi toh nahi.\n\nSyntax:\nif condition:\n    # ye code chalega agar condition true hai\n    \nImportant: Indentation (spacing) bohot zaroori hai!",
              hi: "If statements ka use hum code mein decision lene ke liye karte hain.\n\nAgar koi condition true hai toh kuch code chalao, nahi toh nahi.\n\nSyntax:\nif condition:\n    # ye code chalega agar condition true hai\n    \nImportant: Indentation (spacing) bohot zaroori hai!"
            },
            codeExample: {
              en: "age = 18\n\nif age >= 18:\n    print(\"You can vote!\")\n    print(\"You are an adult.\")\n\nprint(\"Program continues...\")",
              hi: "umar = 18\n\nif umar >= 18:\n    print(\"Tum vote de sakte ho!\")\n    print(\"Tum adult ho.\")\n\nprint(\"Program chal raha hai...\")"
            },
            output: {
              en: "You can vote!\nYou are an adult.\nProgram continues...",
              hi: "Tum vote de sakte ho!\nTum adult ho.\nProgram chal raha hai..."
            },
            explanation: {
              en: "The code inside the 'if' block only runs if the condition is True. The rest of the code always runs.",
              hi: "If block ka code tabhi chalega jab condition True hogi. Baki ka code hamesha chalega."
            },
            quiz: [
              {
                question: {
                  en: "What happens if the condition is False?",
                  hi: "Agar condition False ho toh kya hoga?"
                },
                options: [
                  { en: "Code inside if block is skipped", hi: "If block ka code skip ho jayega" },
                  { en: "Code runs twice", hi: "Code do bar chalega" },
                  { en: "Error occurs", hi: "Error aayega" },
                  { en: "Code always runs", hi: "Code hamesha chalega" }
                ],
                correctAnswer: 0
              }
            ]
          },
          {
            id: "if-else-statement",
            title: { en: "If-Else Statement", hi: "If-Else Statement" },
            content: {
              en: "If-else mein do options hote hain - ek chalega agar condition true hai, dusra chalega agar false hai.\n\nif condition:\n    # true wala code\nelse:\n    # false wala code",
              hi: "If-else mein do options hote hain - ek chalega agar condition true hai, dusra chalega agar false hai.\n\nif condition:\n    # true wala code\nelse:\n    # false wala code"
            },
            codeExample: {
              en: "temperature = 30\n\nif temperature > 25:\n    print(\"It's hot!\")\n    print(\"Turn on the AC\")\nelse:\n    print(\"It's cold!\")\n    print(\"Turn on the heater\")\n\nprint(\"Have a nice day!\")",
              hi: "temperature = 30\n\nif temperature > 25:\n    print(\"Garmi hai!\")\n    print(\"AC chalao\")\nelse:\n    print(\"Thand hai!\")\n    print(\"Heater chalao\")\n\nprint(\"Din shubh ho!\")"
            },
            output: {
              en: "It's hot!\nTurn on the AC\nHave a nice day!",
              hi: "Garmi hai!\nAC chalao\nDin shubh ho!"
            },
            explanation: {
              en: "Else provides an alternative when the if condition is False. Only one of the blocks will execute.",
              hi: "Else ek alternative deta hai jab if condition False ho. dono blocks mein se ek hi execute hoga."
            },
            quiz: [
              {
                question: {
                  en: "What is the output of: if True: print(\"A\") else: print(\"B\")?",
                  hi: "Iska output kya hoga: if True: print(\"A\") else: print(\"B\")?"
                },
                options: [
                  { en: "A", hi: "A" },
                  { en: "B", hi: "B" },
                  { en: "AB", hi: "AB" },
                  { en: "Error", hi: "Error" }
                ],
                correctAnswer: 0
              }
            ]
          }
        ],
        projects: [
          {
            id: "grade-calculator",
            title: { en: "Grade Calculator", hi: "Grade Calculator" },
            description: { en: "Calculate grade based on marks", hi: "Marks ke hisab se grade calculate karo" },
            starterCode: {
              en: "# Grade Calculator\nmarks = 85\n\n# Add if-elif-else to print grade\n# >= 90: A\n# >= 80: B\n# >= 70: C\n# >= 60: D\n# else: F\n\nprint(\"Your marks:\", marks)\nprint(\"Your grade:\", )",
              hi: "# Grade Calculator\nmarks = 85\n\n# Agar-else-if (if-elif-else) use karo grade ke liye\n# >= 90: A\n# >= 80: B\n# >= 70: C\n# >= 60: D\n# nahi toh: F\n\nprint(\"Tumhare marks:\", marks)\nprint(\"Tumhara grade:\", )"
            },
            solution: {
              en: "marks = 85\nif marks >= 90:\n    grade = \"A\"\nelif marks >= 80:\n    grade = \"B\"\nelif marks >= 70:\n    grade = \"C\"\nelif marks >= 60:\n    grade = \"D\"\nelse:\n    grade = \"F\"\nprint(\"Your marks:\", marks)\nprint(\"Your grade:\", grade)",
              hi: "marks = 85\nif marks >= 90:\n    grade = \"A\"\nelif marks >= 80:\n    grade = \"B\"\nelif marks >= 70:\n    grade = \"C\"\nelif marks >= 60:\n    grade = \"D\"\nelse:\n    grade = \"F\"\nprint(\"Tumhare marks:\", marks)\nprint(\"Tumhara grade:\", grade)"
            },
            expectedOutput: {
              en: "Your marks: 85\nYour grade: B",
              hi: "Tumhare marks: 85\nTumhara grade: B"
            },
            hints: [
              { en: "Use if-elif-else chain", hi: "If-elif-else chain use karo" }
            ]
          },
          {
            id: "password-checker",
            title: { en: "Password Checker", hi: "Password Checker" },
            description: { en: "Check if password is correct", hi: "Check karo ki password sahi hai ya nahi" },
            starterCode: {
              en: "# Password Checker\ncorrect_password = \"python123\"\nuser_input = \"python123\"\n\n# Check if password matches\n# Print \"Access Granted\" or \"Access Denied\"\n\n",
              hi: "# Password Checker\nsahi_password = \"python123\"\nuser_input = \"python123\"\n\n# Check karo agar password match karta hai\n# \"Access Granted\" ya \"Access Denied\" print karo\n\n"
            },
            solution: {
              en: "correct_password = \"python123\"\nuser_input = \"python123\"\nif user_input == correct_password:\n    print(\"Access Granted\")\nelse:\n    print(\"Access Denied\")",
              hi: "sahi_password = \"python123\"\nuser_input = \"python123\"\nif user_input == sahi_password:\n    print(\"Access Granted\")\nelse:\n    print(\"Access Denied\")"
            },
            expectedOutput: {
              en: "Access Granted",
              hi: "Access Granted"
            },
            hints: [
              { en: "Use == to compare strings", hi: "Strings compare karne ke liye == use karo" }
            ]
          },
          {
            id: "age-checker",
            title: { en: "Age Category", hi: "Age Category" },
            description: { en: "Check age category", hi: "Age ka category check karo" },
            starterCode: {
              en: "# Age Category Checker\nage = 15\n\n# Print category:\n# 0-12: Child\n# 13-19: Teen\n# 20-59: Adult\n# 60+: Senior\n\nprint(\"Age:\", age)\nprint(\"Category:\", )",
              hi: "# Age Category Checker\nage = 15\n\n# Category print karo:\n# 0-12: Child (Baccha)\n# 13-19: Teen (Teenager)\n# 20-59: Adult\n# 60+: Senior\n\nprint(\"Age:\", age)\nprint(\"Category:\", )"
            },
            solution: {
              en: "age = 15\nif age <= 12:\n    category = \"Child\"\nelif age <= 19:\n    category = \"Teen\"\nelif age <= 59:\n    category = \"Adult\"\nelse:\n    category = \"Senior\"\nprint(\"Age:\", age)\nprint(\"Category:\", category)",
              hi: "age = 15\nif age <= 12:\n    category = \"Child\"\nelif age <= 19:\n    category = \"Teen\"\nelif age <= 59:\n    category = \"Adult\"\nelse:\n    category = \"Senior\"\nprint(\"Age:\", age)\nprint(\"Category:\", category)"
            },
            expectedOutput: {
              en: "Age: 15\nCategory: Teen",
              hi: "Age: 15\nCategory: Teen"
            },
            hints: [
              { en: "Use <= for range checking", hi: "Range check karne ke liye <= use karo" }
            ]
          },
          {
            id: "sign-checker",
            title: { en: "Sign Checker", hi: "Sign Checker" },
            description: { en: "Check if number is positive, negative or zero", hi: "Check karo ki number positive, negative ya zero hai" },
            starterCode: {
              en: "# Sign Checker\nnum = -5\n\n# Check if positive, negative, or zero\n# Print appropriate message\n\n",
              hi: "# Sign Checker\nnum = -5\n\n# Check karo ki number positive, negative, ya zero hai\n# Sahi message print karo\n\n"
            },
            solution: {
              en: "num = -5\nif num > 0:\n    print(\"Positive\")\nelif num < 0:\n    print(\"Negative\")\nelse:\n    print(\"Zero\")",
              hi: "num = -5\nif num > 0:\n    print(\"Positive\")\nelif num < 0:\n    print(\"Negative\")\nelse:\n    print(\"Zero\")"
            },
            expectedOutput: {
              en: "Negative",
              hi: "Negative"
            },
            hints: [
              { en: "Check > 0, < 0, else is zero", hi: "> 0 check karo, < 0 check karo, else zero hai" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "loops",
    title: { en: "Loops", hi: "Loops" },
    description: { en: "For and while loops", hi: "For aur while loops" },
    icon: "🔄",
    color: "#F59E0B",
    lessons: [
      {
        id: "for-loop",
        title: { en: "For Loop", hi: "For Loop" },
        description: { en: "Repeat code with for loop", hi: "For loop se code repeat karo" },
        subLessons: [
          {
            id: "intro-to-loop",
            title: { en: "What is a Loop?", hi: "Loop kya hai?" },
            content: {
              en: "Loop ka use tab karte hain jab hume ek hi kaam bar-bar karna ho.\n\nSocho tumhe 1 se 10 tak sab numbers print karna hai. Tum 10 baar print likhoge ya loop use karoge?\n\nLoop se code chhota aur easy ho jata hai!",
              hi: "Loop ka use tab karte hain jab hume ek hi kaam bar-bar karna ho.\n\nSocho tumhe 1 se 10 tak sab numbers print karna hai. Tum 10 baar print likhoge ya loop use karoge?\n\nLoop se code chhota aur easy ho jata hai!"
            },
            codeExample: {
              en: "# Print 1 to 5 using for loop\nfor i in range(1, 6):\n    print(i)\n\nprint(\"Done!\")",
              hi: "# 1 se 5 tak print karo for loop se\nfor i in range(1, 6):\n    print(i)\n\nprint(\"Ho gaya!\")"
            },
            output: {
              en: "1\n2\n3\n4\n5\nDone!",
              hi: "1\n2\n3\n4\n5\nHo gaya!"
            },
            explanation: {
              en: "range(1, 6) gives numbers 1, 2, 3, 4, 5. The loop runs 5 times, each time with a new value of i!",
              hi: "range(1, 6) deta hai 1, 2, 3, 4, 5. Loop 5 baar chalega, har baar i ki nayi value ke saath!"
            },
            quiz: [
              {
                question: {
                  en: "What does range(1, 4) give?",
                  hi: "range(1, 4) kya deta hai?"
                },
                options: [
                  { en: "1, 2, 3", hi: "1, 2, 3" },
                  { en: "1, 2, 3, 4", hi: "1, 2, 3, 4" },
                  { en: "0, 1, 2, 3", hi: "0, 1, 2, 3" },
                  { en: "2, 3, 4", hi: "2, 3, 4" }
                ],
                correctAnswer: 0
              }
            ]
          }
        ],
        projects: [
          {
            id: "number-series",
            title: { en: "Number Series", hi: "Number Series" },
            description: { en: "Print numbers 1 to 10", hi: "1 se 10 tak numbers print karo" },
            starterCode: {
              en: "# Print numbers 1 to 10\n# Use for loop and range()\n\n",
              hi: "# 1 se 10 tak numbers print karo\n# for loop aur range() use karo\n\n"
            },
            solution: {
              en: "for i in range(1, 11):\n    print(i)",
              hi: "for i in range(1, 11):\n    print(i)"
            },
            expectedOutput: {
              en: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
              hi: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10"
            },
            hints: [
              { en: "range(1, 11) gives 1 to 10", hi: "range(1, 11) deta hai 1 se 10" }
            ]
          },
          {
            id: "multiplication-table",
            title: { en: "Multiplication Table", hi: "Multiplication Table" },
            description: { en: "Print multiplication table of 5", hi: "5 ki table print karo" },
            starterCode: {
              en: "# Print 5 ka table (5 x 1 to 5 x 10)\n# Use for loop\n\nnum = 5\n# Add loop below\n\n",
              hi: "# 5 ki table print karo (5 x 1 se 5 x 10)\n# for loop use karo\n\nnum = 5\n# Niche loop add karo\n\n"
            },
            solution: {
              en: "num = 5\nfor i in range(1, 11):\n    print(num, \"x\", i, \"=\", num * i)",
              hi: "num = 5\nfor i in range(1, 11):\n    print(num, \"x\", i, \"=\", num * i)"
            },
            expectedOutput: {
              en: "5 x 1 = 5\n5 x 2 = 10\n...\n5 x 10 = 50",
              hi: "5 x 1 = 5\n5 x 2 = 10\n...\n5 x 10 = 50"
            },
            hints: [
              { en: "Multiply num with i in each iteration", hi: "Har iteration mein num ko i se multiply karo" }
            ]
          },
          {
            id: "countdown",
            title: { en: "Countdown", hi: "Countdown" },
            description: { en: "Print countdown from 10 to 1", hi: "10 se 1 tak countdown print karo" },
            starterCode: {
              en: "# Countdown from 10 to 1\n# Use for loop with step\n\n",
              hi: "10 se 1 tak countdown\n# for loop with step use karo\n\n"
            },
            solution: {
              en: "for i in range(10, 0, -1):\n    print(i)\nprint(\"Liftoff!\")",
              hi: "for i in range(10, 0, -1):\n    print(i)\nprint(\"Udaan!\")"
            },
            expectedOutput: {
              en: "10\n9\n8\n...\n1\nLiftoff!",
              hi: "10\n9\n8\n...\n1\nUdaan!"
            },
            hints: [
              { en: "range(10, 0, -1) goes from 10 to 1", hi: "range(10, 0, -1) jayega 10 se 1" }
            ]
          },
          {
            id: "sum-of-numbers",
            title: { en: "Sum of Numbers", hi: "Numbers Ka Yog" },
            description: { en: "Calculate sum of 1 to 100", hi: "1 se 100 tak sab numbers ka yog calculate karo" },
            starterCode: {
              en: "# Calculate sum of 1 to 100\ntotal = 0\n\n# Add loop to add numbers\n\nprint(\"Sum of 1 to 100:\", total)",
              hi: "# 1 se 100 tak sab numbers ka yog calculate karo\ntotal = 0\n\n# Loop add karo numbers add karne ke liye\n\nprint(\"1 se 100 tak ka yog:\", total)"
            },
            solution: {
              en: "total = 0\nfor i in range(1, 101):\n    total = total + i\nprint(\"Sum of 1 to 100:\", total)",
              hi: "total = 0\nfor i in range(1, 101):\n    total = total + i\nprint(\"1 se 100 tak ka yog:\", total)"
            },
            expectedOutput: {
              en: "Sum of 1 to 100: 5050",
              hi: "1 se 100 tak ka yog: 5050"
            },
            hints: [
              { en: "Add each number to total in loop", hi: "Har number ko loop mein total mein add karo" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "while-loops",
    title: { en: "While Loops", hi: "While Loops" },
    description: { en: "Learn while loops and loop control", hi: "While loops aur loop control sikhein" },
    icon: "⏳",
    color: "#F97316",
    lessons: [
      {
        id: "while-basics",
        title: { en: "While Loop Basics", hi: "While Loop Basics" },
        description: { en: "Understanding while loops", hi: "While loops samajhna" },
        subLessons: [
          {
            id: "intro-to-while",
            title: { en: "What is While Loop?", hi: "While Loop kya hai?" },
            content: {
              en: "While loop tab tak chalega jab tak condition true hai.\n\nFor loop ke jaise hi hai, lekin for loop mein hum pehle se jaante hain kitni baar chalna hai, while loop mein condition ke according chalega.\n\nSyntax:\nwhile condition:\n    # ye code chalega jab tak condition true hai",
              hi: "While loop tab tak chalega jab tak condition true hai.\n\nFor loop ke jaise hi hai, lekin for loop mein hum pehle se jaante hain kitni baar chalna hai, while loop mein condition ke according chalega.\n\nSyntax:\nwhile condition:\n    # ye code chalega jab tak condition true hai"
            },
            codeExample: {
              en: "# While loop example\ncount = 1\n\nwhile count <= 5:\n    print(\"Count is:\", count)\n    count = count + 1\n\nprint(\"Loop finished!\")",
              hi: "# While loop example\ncount = 1\n\nwhile count <= 5:\n    print(\"Count hai:\", count)\n    count = count + 1\n\nprint(\"Loop khatam!\")"
            },
            output: {
              en: "Count is: 1\nCount is: 2\nCount is: 3\nCount is: 4\nCount is: 5\nLoop finished!",
              hi: "Count hai: 1\nCount hai: 2\nCount hai: 3\nCount hai: 4\nCount hai: 5\nLoop khatam!"
            },
            explanation: {
              en: "While loop keeps running as long as the condition is True. Important: Always update the variable inside the loop to avoid infinite loops!",
              hi: "While loop chalega jab tak condition True hai. Important: Hamesha variable update karo infinite loop se bachne ke liye!"
            },
            quiz: [
              {
                question: {
                  en: "How many times will this loop run? i = 1\nwhile i < 3:\n    print(i)\n    i = i + 1",
                  hi: "Ye loop kitni baar chalega? i = 1\nwhile i < 3:\n    print(i)\n    i = i + 1"
                },
                options: [
                  { en: "2 times", hi: "2 baar" },
                  { en: "3 times", hi: "3 baar" },
                  { en: "Infinite", hi: "Infinite" },
                  { en: "0 times", hi: "0 baar" }
                ],
                correctAnswer: 0
              }
            ]
          }
        ],
        projects: [
          {
            id: "countdown-while",
            title: { en: "Countdown Timer", hi: "Countdown Timer" },
            description: { en: "Create a countdown using while loop", hi: "While loop se countdown banao" },
            starterCode: {
              en: "# Create countdown from 10 to 1\ncount = 10\n\n# Use while loop to count down\n\nprint(\"Liftoff!\")",
              hi: "# 10 se 1 tak countdown banao\ncount = 10\n\n# While loop use karo\n\nprint(\"Liftoff!\")"
            },
            solution: {
              en: "count = 10\nwhile count > 0:\n    print(count)\n    count = count - 1\nprint(\"Liftoff!\")",
              hi: "count = 10\nwhile count > 0:\n    print(count)\n    count = count - 1\nprint(\"Liftoff!\")"
            },
            expectedOutput: {
              en: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1\nLiftoff!",
              hi: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1\nLiftoff!"
            },
            hints: [
              { en: "Use count > 0 condition", hi: "count > 0 condition use karo" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "tuples",
    title: { en: "Tuples", hi: "Tuples" },
    description: { en: "Learn about tuples - immutable sequences", hi: "Tuples ke baare mein sikhein - immutable sequences" },
    icon: "📋",
    color: "#14B8A6",
    lessons: [
      {
        id: "tuple-basics",
        title: { en: "Tuple Basics", hi: "Tuple Basics" },
        description: { en: "Creating and using tuples", hi: "Tuples banaana aur use karna" },
        subLessons: [
          {
            id: "what-is-tuple",
            title: { en: "What is a Tuple?", hi: "Tuple kya hai?" },
            content: {
              en: "Tuple ek aisa data type hai jisme multiple values store karte hain, jaise list. Lekin tuple immutable hai - matlab ek baar banana ke baad badla nahi ja sakta.\n\nTuple () brackets mein banata hai. List [] brackets ke bajaye.\n\nWhy use tuples? - Data ko protect karna - Faster than lists - Function mein multiple values return karne ke liye",
              hi: "Tuple ek aisa data type hai jisme multiple values store karte hain, jaise list. Lekin tuple immutable hai - matlab ek baar banana ke baad badla nahi ja sakta.\n\nTuple () brackets mein banata hai. List [] brackets ke bajaye.\n\nWhy use tuples? - Data ko protect karna - Lists se tez - Function mein multiple values return karne ke liye"
            },
            codeExample: {
              en: "# Creating a tuple\ncoordinates = (10, 20)\nprint(\"Coordinates:\", coordinates)\n\n# Tuple with different types\nperson = (\"Alice\", 25, \"USA\")\nprint(\"Person:\", person)\n\n# Single element tuple (note the comma)\nsingle = (1,)\nprint(\"Single:\", single)\n\n# Empty tuple\nempty = ()\nprint(\"Empty:\", empty)",
              hi: "# Tuple bana rahe hain\ncoordinates = (10, 20)\nprint(\"Coordinates:\", coordinates)\n\n# Alag types wala tuple\nperson = (\"Alice\", 25, \"USA\")\nprint(\"Person:\", person)\n\n# Ek element wala tuple (comma important)\nsingle = (1,)\nprint(\"Single:\", single)\n\n# Khali tuple\nempty = ()\nprint(\"Empty:\", empty)"
            },
            output: {
              en: "Coordinates: (10, 20)\nPerson: ('Alice', 25, 'USA')\nSingle: (1,)\nEmpty: ()",
              hi: "Coordinates: (10, 20)\nPerson: ('Alice', 25, 'USA')\nSingle: (1,)\nEmpty: ()"
            },
            explanation: {
              en: "Tuples are immutable - you cannot change, add, or remove elements after creation. Use tuples when you want to protect data from accidental changes.",
              hi: "Tuples immutable hain - aap create hone ke baad change, add ya remove nahi kar sakte. Tuples use karo jab data ko accidental changes se protect karna ho."
            },
            quiz: [
              {
                question: {
                  en: "How do you create a tuple?",
                  hi: "Tuple kaise create karte hain?"
                },
                options: [
                  { en: "()", hi: "()" },
                  { en: "[]", hi: "[]" },
                  { en: "{}", hi: "{}" },
                  { en: "<>", hi: "<>" }
                ],
                correctAnswer: 0
              }
            ]
          }
        ],
        projects: [
          {
            id: "coordinates-tuple",
            title: { en: "Coordinates", hi: "Coordinates" },
            description: { en: "Work with coordinate tuples", hi: "Coordinate tuples ke saath kaam karo" },
            starterCode: {
              en: "# Create a tuple for (x, y) coordinates\npoint = (5, 10)\n\n# Access x and y values\n\nprint(\"Point:\", point)\nprint(\"X:\", )\nprint(\"Y:\", )",
              hi: "# (x, y) coordinates ke liye tuple banao\npoint = (5, 10)\n\n# x aur y values access karo\n\nprint(\"Point:\", point)\nprint(\"X:\", )\nprint(\"Y:\", )"
            },
            solution: {
              en: "point = (5, 10)\nx = point[0]\ny = point[1]\nprint(\"Point:\", point)\nprint(\"X:\", x)\nprint(\"Y:\", y)",
              hi: "point = (5, 10)\nx = point[0]\ny = point[1]\nprint(\"Point:\", point)\nprint(\"X:\", x)\nprint(\"Y:\", y)"
            },
            expectedOutput: {
              en: "Point: (5, 10)\nX: 5\nY: 10",
              hi: "Point: (5, 10)\nX: 5\nY: 10"
            },
            hints: [
              { en: "Use index 0 for x and 1 for y", hi: "x ke liye index 0 aur y ke liye 1 use karo" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "dictionaries",
    title: { en: "Data Structures", hi: "Data Structures" },
    description: { en: "Lists, Tuples, Dictionaries", hi: "Lists, Tuples, Dictionaries" },
    icon: "📚",
    color: "#EC4899",
    lessons: [
      {
        id: "lists",
        title: { en: "Lists", hi: "Lists" },
        description: { en: "Store multiple values in a list", hi: "Ek list mein multiple values store karo" },
        subLessons: [
          {
            id: "intro-to-lists",
            title: { en: "What is a List?", hi: "List kya hai?" },
            content: {
              en: "List ek aisa container hai jisme hum multiple values store kar sakte hain.\n\nSocho ek shopping list - usme bohot saari cheezein likhi hoti hain. Waise hi Python lists bhi hote hain!\n\nList banane ke liye square brackets [] use karte hain.",
              hi: "List ek aisa container hai jisme hum multiple values store kar sakte hain.\n\nSocho ek shopping list - usme bohot saari cheezein likhi hoti hain. Waise hi Python lists bhi hote hain!\n\nList banane ke liye square brackets [] use karte hain."
            },
            codeExample: {
              en: "# Creating a list\nfruits = [\"apple\", \"banana\", \"cherry\"]\nprint(\"Fruits:\", fruits)\n\n# List can have different types\nmixed = [\"hello\", 42, 3.14, True]\nprint(\"Mixed:\", mixed)\n\n# Empty list\nempty = []\nprint(\"Empty list:\", empty)",
              hi: "# List bana rahe hain\nfruits = [\"seb\", \"banana\", \"cherry\"]\nprint(\"Fruits:\", fruits)\n\n# Alag types ki list\nmixed = [\"namaste\", 42, 3.14, True]\nprint(\"Mixed:\", mixed)\n\n# Khali list\nempty = []\nprint(\"Khali list:\", empty)"
            },
            output: {
              en: "Fruits: ['apple', 'banana', 'cherry']\nMixed: ['hello', 42, 3.14, True]\nEmpty list: []",
              hi: "Fruits: ['seb', 'banana', 'cherry']\nMixed: ['namaste', 42, 3.14, True]\nKhali list: []"
            },
            explanation: {
              en: "Lists can store any type of data. Items are ordered (have index) and can be changed (mutable).",
              hi: "Lists mein kisi bhi type ka data store kar sakte hain. Items ordered hain (index hota hai) aur badla ja sakta hai (mutable)."
            },
            quiz: [
              {
                question: {
                  en: "How do you create a list in Python?",
                  hi: "Python mein list kaise banate hain?"
                },
                options: [
                  { en: "[]", hi: "[]" },
                  { en: "()", hi: "()" },
                  { en: "{}", hi: "{}" },
                  { en: "<>", hi: "<>" }
                ],
                correctAnswer: 0
              }
            ]
          }
        ],
        projects: [
          {
            id: "shopping-list",
            title: { en: "Shopping List", hi: "Shopping List" },
            description: { en: "Create and manage a shopping list", hi: "Ek shopping list banao aur manage karo" },
            starterCode: {
              en: "# Create a shopping list\nshopping = [\"apple\", \"bread\", \"milk\"]\n\n# Add two more items\n\n# Print the list\nprint(\"Shopping List:\", shopping)",
              hi: "# Shopping list banao\nshopping = [\"seb\", \"bread\", \"doodh\"]\n\n# Do aur items add karo\n\n# List print karo\nprint(\"Shopping List:\", shopping)"
            },
            solution: {
              en: "shopping = [\"apple\", \"bread\", \"milk\"]\nshopping.append(\"eggs\")\nshopping.append(\"butter\")\nprint(\"Shopping List:\", shopping)",
              hi: "shopping = [\"seb\", \"bread\", \"doodh\"]\nshopping.append(\"anda\")\nshopping.append(\"makhan\")\nprint(\"Shopping List:\", shopping)"
            },
            expectedOutput: {
              en: "Shopping List: ['apple', 'bread', 'milk', 'eggs', 'butter']",
              hi: "Shopping List: ['seb', 'bread', 'doodh', 'anda', 'makhan']"
            },
            hints: [
              { en: "Use append() to add items", hi: "Items add karne ke liye append() use karo" }
            ]
          },
          {
            id: "list-operations",
            title: { en: "List Operations", hi: "List Operations" },
            description: { en: "Perform different operations on a list", hi: "Ek list par different operations perform karo" },
            starterCode: {
              en: "numbers = [5, 2, 8, 1, 9]\n\n# Sort the list\n\n# Reverse the list\n\n# Find sum of all numbers\n\nprint(\"Original:\", numbers)\nprint(\"Sorted:\", numbers)\nprint(\"Reversed:\", )\nprint(\"Sum:\", )",
              hi: "numbers = [5, 2, 8, 1, 9]\n\n# List ko sort karo\n\n# List ko reverse karo\n\n# Sab numbers ka yog find karo\n\nprint(\"Original:\", numbers)\nprint(\"Sorted:\", numbers)\nprint(\"Reversed:\", )\nprint(\"Sum:\", )"
            },
            solution: {
              en: "numbers = [5, 2, 8, 1, 9]\nnumbers.sort()\nnumbers.reverse()\ntotal = sum(numbers)\nprint(\"Original:\", numbers)\nprint(\"Sorted:\", sorted([5, 2, 8, 1, 9]))\nprint(\"Reversed:\", numbers)\nprint(\"Sum:\", total)",
              hi: "numbers = [5, 2, 8, 1, 9]\nnumbers.sort()\nnumbers.reverse()\ntotal = sum(numbers)\nprint(\"Original:\", numbers)\nprint(\"Sorted:\", sorted([5, 2, 8, 1, 9]))\nprint(\"Reversed:\", numbers)\nprint(\"Sum:\", total)"
            },
            expectedOutput: {
              en: "Sorted: [1, 2, 5, 8, 9]\nReversed: [9, 8, 5, 2, 1]\nSum: 25",
              hi: "Sorted: [1, 2, 5, 8, 9]\nReversed: [9, 8, 5, 2, 1]\nSum: 25"
            },
            hints: [
              { en: "Use sort(), reverse(), sum() functions", hi: "sort(), reverse(), sum() functions use karo" }
            ]
          },
          {
            id: "list-comprehension",
            title: { en: "List Comprehension", hi: "List Comprehension" },
            description: { en: "Create list using comprehension", hi: "Comprehension use karke list banao" },
            starterCode: {
              en: "# Create a list of squares from 1 to 5\n# Using list comprehension\nsquares = \n\nprint(\"Squares:\", squares)",
              hi: "# 1 se 5 tak squares ki list banao\n# List comprehension use karke\nsquares = \n\nprint(\"Squares:\", squares)"
            },
            solution: {
              en: "squares = [x**2 for x in range(1, 6)]\nprint(\"Squares:\", squares)",
              hi: "squares = [x**2 for x in range(1, 6)]\nprint(\"Squares:\", squares)"
            },
            expectedOutput: {
              en: "Squares: [1, 4, 9, 16, 25]",
              hi: "Squares: [1, 4, 9, 16, 25]"
            },
            hints: [
              { en: "[x**2 for x in range(1, 6)]", hi: "[x**2 for x in range(1, 6)]" }
            ]
          },
          {
            id: "find-max-min",
            title: { en: "Find Max and Min", hi: "Max Aur Min Find Karo" },
            description: { en: "Find maximum and minimum in a list", hi: "List mein maximum aur minimum find karo" },
            starterCode: {
              en: "numbers = [45, 12, 67, 23, 89, 11]\n\n# Find maximum\nmax_num = \n\n# Find minimum\nmin_num = \n\nprint(\"Numbers:\", numbers)\nprint(\"Maximum:\", max_num)\nprint(\"Minimum:\", min_num)",
              hi: "numbers = [45, 12, 67, 23, 89, 11]\n\n# Maximum find karo\nmax_num = \n\n# Minimum find karo\nmin_num = \n\nprint(\"Numbers:\", numbers)\nprint(\"Maximum:\", max_num)\nprint(\"Minimum:\", min_num)"
            },
            solution: {
              en: "numbers = [45, 12, 67, 23, 89, 11]\nmax_num = max(numbers)\nmin_num = min(numbers)\nprint(\"Numbers:\", numbers)\nprint(\"Maximum:\", max_num)\nprint(\"Minimum:\", min_num)",
              hi: "numbers = [45, 12, 67, 23, 89, 11]\nmax_num = max(numbers)\nmin_num = min(numbers)\nprint(\"Numbers:\", numbers)\nprint(\"Maximum:\", max_num)\nprint(\"Minimum:\", min_num)"
            },
            expectedOutput: {
              en: "Maximum: 89\nMinimum: 11",
              hi: "Maximum: 89\nMinimum: 11"
            },
            hints: [
              { en: "Use max() and min() functions", hi: "max() aur min() functions use karo" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "functions",
    title: { en: "Functions", hi: "Functions" },
    description: { en: "Creating and using functions", hi: "Functions banana aur use karna" },
    icon: "⚙️",
    color: "#06B6D4",
    lessons: [
      {
        id: "defining-functions",
        title: { en: "Defining Functions", hi: "Functions Define Karna" },
        description: { en: "Create your own functions", hi: "Apne functions banao" },
        subLessons: [
          {
            id: "what-is-function",
            title: { en: "What is a Function?", hi: "Function kya hai?" },
            content: {
              en: "Function ek reusable code block hai. Ek baar likho, bar-bar use karo!\n\nSocho ek machine - input daalo, output pao. Function bhi waise hi kaam karta hai.\n\nFunction banana ke liye 'def' keyword use karte hain.",
              hi: "Function ek reusable code block hai. Ek baar likho, bar-bar use karo!\n\nSocho ek machine - input daalo, output pao. Function bhi waise hi kaam karta hai.\n\nFunction banana ke liye 'def' keyword use karte hain."
            },
            codeExample: {
              en: "# Defining a function\ndef greet():\n    print(\"Hello!\")\n    print(\"Welcome to Python!\")\n\n# Calling the function\ngreet()\ngreet()",
              hi: "# Function define kar rahe hain\ndef greet():\n    print(\"Namaste!\")\n    print(\"Python mein welcome!\")\n\n# Function ko call kar rahe hain\ngreet()\ngreet()"
            },
            output: {
              en: "Hello!\nWelcome to Python!\nHello!\nWelcome to Python!",
              hi: "Namaste!\nPython mein welcome!\nNamaste!\nPython mein welcome!"
            },
            explanation: {
              en: "def tells Python you're creating a function. The code inside only runs when you call the function!",
              hi: "def batata hai ki tum function bana rahe ho. Andar ka code tabhi chalega jab tum function ko call karoge!"
            },
            quiz: [
              {
                question: {
                  en: "Which keyword is used to define a function?",
                  hi: "Function define karne ke liye konsa keyword use hota hai?"
                },
                options: [
                  { en: "def", hi: "def" },
                  { en: "function", hi: "function" },
                  { en: "create", hi: "create" },
                  { en: "make", hi: "make" }
                ],
                correctAnswer: 0
              }
            ]
          }
        ],
        projects: [
          {
            id: "greet-function",
            title: { en: "Greet Function", hi: "Greet Function" },
            description: { en: "Create a greeting function", hi: "Ek greeting function banao" },
            starterCode: {
              en: "# Create a function called greet that prints \"Hello!\"\n# Call the function\n\n",
              hi: "# Ek function banao jo \"Namaste!\" print kare\n# Function ko call karo\n\n"
            },
            solution: {
              en: "def greet():\n    print(\"Hello!\")\n\ngreet()",
              hi: "def greet():\n    print(\"Namaste!\")\n\ngreet()"
            },
            expectedOutput: {
              en: "Hello!",
              hi: "Namaste!"
            },
            hints: [
              { en: "Use def keyword", hi: "def keyword use karo" }
            ]
          },
          {
            id: "add-function",
            title: { en: "Add Function", hi: "Add Function" },
            description: { en: "Create function to add two numbers", hi: "Do numbers jodne ke liye function banao" },
            starterCode: {
              en: "# Create add function that takes two numbers and returns sum\ndef add(a, b):\n    # Add a and b and return\n    pass  # Remove this and write your code\n\n# Test the function\nresult = add(5, 3)\nprint(\"5 + 3 =\", result)",
              hi: "# Do numbers jodne ke liye function banao\ndef add(a, b):\n    # a aur b jod kar return karo\n    pass  # Hatao aur apna code likho\n\n# Function test karo\nresult = add(5, 3)\nprint(\"5 + 3 =\", result)"
            },
            solution: {
              en: "def add(a, b):\n    return a + b\n\nresult = add(5, 3)\nprint(\"5 + 3 =\", result)",
              hi: "def add(a, b):\n    return a + b\n\nresult = add(5, 3)\nprint(\"5 + 3 =\", result)"
            },
            expectedOutput: {
              en: "5 + 3 = 8",
              hi: "5 + 3 = 8"
            },
            hints: [
              { en: "Use return a + b", hi: "return a + b use karo" }
            ]
          },
          {
            id: "power-function",
            title: { en: "Power Function", hi: "Power Function" },
            description: { en: "Create function to calculate power", hi: "Power calculate karne ke liye function banao" },
            starterCode: {
              en: "# Create a function that calculates power (base ** exponent)\ndef power(base, exp):\n    # Calculate base to the power of exp\n    pass\n\nprint(\"2^3 =\", power(2, 3))\nprint(\"5^2 =\", power(5, 2))",
              hi: "# Power calculate karne ke liye function banao\ndef power(base, exp):\n    # Base ka exp power calculate karo\n    pass\n\nprint(\"2^3 =\", power(2, 3))\nprint(\"5^2 =\", power(5, 2))"
            },
            solution: {
              en: "def power(base, exp):\n    return base ** exp\n\nprint(\"2^3 =\", power(2, 3))\nprint(\"5^2 =\", power(5, 2))",
              hi: "def power(base, exp):\n    return base ** exp\n\nprint(\"2^3 =\", power(2, 3))\nprint(\"5^2 =\", power(5, 2))"
            },
            expectedOutput: {
              en: "2^3 = 8\n5^2 = 25",
              hi: "2^3 = 8\n5^2 = 25"
            },
            hints: [
              { en: "Use ** operator", hi: "** operator use karo" }
            ]
          },
          {
            id: "factorial-function",
            title: { en: "Factorial Function", hi: "Factorial Function" },
            description: { en: "Calculate factorial of a number", hi: "Ek number ka factorial calculate karo" },
            starterCode: {
              en: "# Calculate factorial (5! = 5*4*3*2*1)\ndef factorial(n):\n    result = 1\n    # Use loop to multiply 1 to n\n    \n    return result\n\nprint(\"5! =\", factorial(5))\nprint(\"6! =\", factorial(6))",
              hi: "# Factorial calculate karo (5! = 5*4*3*2*1)\ndef factorial(n):\n    result = 1\n    # 1 se n tak multiply karne ke liye loop use karo\n    \n    return result\n\nprint(\"5! =\", factorial(5))\nprint(\"6! =\", factorial(6))"
            },
            solution: {
              en: "def factorial(n):\n    result = 1\n    for i in range(1, n + 1):\n        result = result * i\n    return result\n\nprint(\"5! =\", factorial(5))\nprint(\"6! =\", factorial(6))",
              hi: "def factorial(n):\n    result = 1\n    for i in range(1, n + 1):\n        result = result * i\n    return result\n\nprint(\"5! =\", factorial(5))\nprint(\"6! =\", factorial(6))"
            },
            expectedOutput: {
              en: "5! = 120\n6! = 720",
              hi: "5! = 120\n6! = 720"
            },
            hints: [
              { en: "Multiply all numbers from 1 to n", hi: "1 se n tak sabhi numbers multiply karo" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "oop",
    title: { en: "OOP", hi: "OOP" },
    description: { en: "Object-Oriented Programming", hi: "Object-Oriented Programming" },
    icon: "🏗️",
    color: "#84CC16",
    lessons: [
      {
        id: "classes-objects",
        title: { en: "Classes & Objects", hi: "Classes & Objects" },
        description: { en: "Create classes and objects", hi: "Classes aur objects banao" },
        subLessons: [
          {
            id: "what-is-class",
            title: { en: "What is a Class?", hi: "Class kya hai?" },
            content: {
              en: "Class ek blueprint hai - jaise ek building ki plan. Object us plan se banaya ghar hai.\n\nSocho Dog class - sab dogs ke liye blueprint. Dog() se alag alag dogs (objects) bana sakte ho.\n\nClass mein data (attributes) aur functions (methods) hote hain.",
              hi: "Class ek blueprint hai - jaise ek building ki plan. Object us plan se banaya ghar hai.\n\nSocho Dog class - sab dogs ke liye blueprint. Dog() se alag alag dogs (objects) bana sakte ho.\n\nClass mein data (attributes) aur functions (methods) hote hain."
            },
            codeExample: {
              en: "# Creating a class\nclass Dog:\n    # Class attribute\n    species = \"Canis familiaris\"\n    \n    # Constructor (initializer)\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    # Method\n    def bark(self):\n        return f\"{self.name} says Woof!\"\n\n# Creating objects\nbuddy = Dog(\"Buddy\", 3)\nmax_dog = Dog(\"Max\", 5)\n\nprint(buddy.name, \"is\", buddy.age)\nprint(max_dog.name, \"is\", max_dog.age)\nprint(buddy.bark())",
              hi: "# Class bana rahe hain\nclass Dog:\n    # Class attribute\n    species = \"Canis familiaris\"\n    \n    # Constructor (initializer)\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    # Method\n    def bark(self):\n        return f\"{self.name} bolta hai Woof!\"\n\n# Objects bana rahe hain\nbuddy = Dog(\"Buddy\", 3)\nmax_dog = Dog(\"Max\", 5)\n\nprint(buddy.name, \"ki umar\", buddy.age)\nprint(max_dog.name, \"ki umar\", max_dog.age)\nprint(buddy.bark())"
            },
            output: {
              en: "Buddy is 3\nMax is 5\nBuddy says Woof!",
              hi: "Buddy ki umar 3\nMax ki umar 5\nBuddy bolta hai Woof!"
            },
            explanation: {
              en: "__init__ runs when you create an object. self refers to the current object being created/used.",
              hi: "__init__ chalega jab tum object create karoge. self current object ko refer karta hai."
            },
            quiz: [
              {
                question: {
                  en: "What is __init__ called?",
                  hi: "__init__ ko kya kehte hain?"
                },
                options: [
                  { en: "Constructor", hi: "Constructor" },
                  { en: "Destructor", hi: "Destructor" },
                  { en: "Method", hi: "Method" },
                  { en: "Attribute", hi: "Attribute" }
                ],
                correctAnswer: 0
              }
            ]
          }
        ],
        projects: [
          {
            id: "person-class",
            title: { en: "Person Class", hi: "Person Class" },
            description: { en: "Create a Person class", hi: "Ek Person class banao" },
            starterCode: {
              en: "# Create a Person class with name and age\nclass Person:\n    def __init__(self, name, age):\n        # Add attributes\n        pass\n    \n    def introduce(self):\n        # Print introduction\n        pass\n\n# Create object\nperson = Person(\"John\", 25)\nperson.introduce()",
              hi: "# Person class banao jisme name aur age ho\nclass Person:\n    def __init__(self, naam, umar):\n        # Attributes add karo\n        pass\n    \n    def introduce(self):\n        # Introduction print karo\n        pass\n\n# Object banao\nperson = Person(\"Rahul\", 25)\nperson.introduce()"
            },
            solution: {
              en: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def introduce(self):\n        print(f\"I am {self.name} and I am {self.age} years old\")\n\nperson = Person(\"John\", 25)\nperson.introduce()",
              hi: "class Person:\n    def __init__(self, naam, umar):\n        self.naam = naam\n        self.umar = umar\n    \n    def introduce(self):\n        print(f\"Mera naam {self.naam} hai aur meri umar {self.umar} saal hai\")\n\nperson = Person(\"Rahul\", 25)\nperson.introduce()"
            },
            expectedOutput: {
              en: "I am John and I am 25 years old",
              hi: "Mera naam Rahul hai aur meri umar 25 saal hai"
            },
            hints: [
              { en: "Use self.name and self.age", hi: "self.naam aur self.umar use karo" }
            ]
          },
          {
            id: "bank-account-class",
            title: { en: "Bank Account Class", hi: "Bank Account Class" },
            description: { en: "Create a BankAccount class", hi: "Ek BankAccount class banao" },
            starterCode: {
              en: "class BankAccount:\n    def __init__(self, balance):\n        self.balance = balance\n    \n    def deposit(self, amount):\n        # Add amount to balance\n        pass\n    \n    def withdraw(self, amount):\n        # Subtract amount from balance if enough\n        pass\n\naccount = BankAccount(1000)\naccount.deposit(500)\nprint(\"After deposit:\", account.balance)\naccount.withdraw(200)\nprint(\"After withdraw:\", account.balance)",
              hi: "class BankAccount:\n    def __init__(self, balance):\n        self.balance = balance\n    \n    def deposit(self, amount):\n        # Balance mein amount add karo\n        pass\n    \n    def withdraw(self, amount):\n        # Balance se amount subtract karo agar enough hai\n        pass\n\naccount = BankAccount(1000)\naccount.deposit(500)\nprint(\"Deposit ke baad:\", account.balance)\naccount.withdraw(200)\nprint(\"Withdraw ke baad:\", account.balance)"
            },
            solution: {
              en: "class BankAccount:\n    def __init__(self, balance):\n        self.balance = balance\n    \n    def deposit(self, amount):\n        self.balance = self.balance + amount\n    \n    def withdraw(self, amount):\n        if self.balance >= amount:\n            self.balance = self.balance - amount\n\naccount = BankAccount(1000)\naccount.deposit(500)\nprint(\"After deposit:\", account.balance)\naccount.withdraw(200)\nprint(\"After withdraw:\", account.balance)",
              hi: "class BankAccount:\n    def __init__(self, balance):\n        self.balance = balance\n    \n    def deposit(self, amount):\n        self.balance = self.balance + amount\n    \n    def withdraw(self, amount):\n        if self.balance >= amount:\n            self.balance = self.balance - amount\n\naccount = BankAccount(1000)\naccount.deposit(500)\nprint(\"Deposit ke baad:\", account.balance)\naccount.withdraw(200)\nprint(\"Withdraw ke baad:\", account.balance)"
            },
            expectedOutput: {
              en: "After deposit: 1500\nAfter withdraw: 1300",
              hi: "Deposit ke baad: 1500\nWithdraw ke baad: 1300"
            },
            hints: [
              { en: "Add and subtract from self.balance", hi: "self.balance mein add aur subtract karo" }
            ]
          },
          {
            id: "car-class",
            title: { en: "Car Class", hi: "Car Class" },
            description: { en: "Create a Car class with speed", hi: "Ek Car class banao jisme speed ho" },
            starterCode: {
              en: "class Car:\n    def __init__(self, make, speed):\n        self.make = make\n        self.speed = speed\n    \n    def accelerate(self):\n        # Increase speed by 10\n        pass\n    \n    def brake(self):\n        # Decrease speed by 10\n        pass\n\ncar = Car(\"Toyota\", 60)\nprint(car.make, \"speed:\", car.speed)\ncar.accelerate()\nprint(\"After accelerate:\", car.speed)\ncar.brake()\nprint(\"After brake:\", car.speed)",
              hi: "class Car:\n    def __init__(self, make, speed):\n        self.make = make\n        self.speed = speed\n    \n    def accelerate(self):\n        # Speed 10 badhao\n        pass\n    \n    def brake(self):\n        # Speed 10 kam karo\n        pass\n\ncar = Car(\"Toyota\", 60)\nprint(car.make, \"ki speed:\", car.speed)\ncar.accelerate()\nprint(\"Accelerate ke baad:\", car.speed)\ncar.brake()\nprint(\"Brake ke baad:\", car.speed)"
            },
            solution: {
              en: "class Car:\n    def __init__(self, make, speed):\n        self.make = make\n        self.speed = speed\n    \n    def accelerate(self):\n        self.speed = self.speed + 10\n    \n    def brake(self):\n        self.speed = self.speed - 10\n\ncar = Car(\"Toyota\", 60)\nprint(car.make, \"speed:\", car.speed)\ncar.accelerate()\nprint(\"After accelerate:\", car.speed)\ncar.brake()\nprint(\"After brake:\", car.speed)",
              hi: "class Car:\n    def __init__(self, make, speed):\n        self.make = make\n        self.speed = speed\n    \n    def accelerate(self):\n        self.speed = self.speed + 10\n    \n    def brake(self):\n        self.speed = self.speed - 10\n\ncar = Car(\"Toyota\", 60)\nprint(car.make, \"ki speed:\", car.speed)\ncar.accelerate()\nprint(\"Accelerate ke baad:\", car.speed)\ncar.brake()\nprint(\"Brake ke baad:\", car.speed)"
            },
            expectedOutput: {
              en: "Toyota speed: 60\nAfter accelerate: 70\nAfter brake: 60",
              hi: "Toyota ki speed: 60\nAccelerate ke baad: 70\nBrake ke baad: 60"
            },
            hints: [
              { en: "Add/subtract 10 from speed", hi: "speed mein 10 add/subtract karo" }
            ]
          },
          {
            id: "student-class",
            title: { en: "Student Class", hi: "Student Class" },
            description: { en: "Create a Student class with grades", hi: "Ek Student class banao jisme grades ho" },
            starterCode: {
              en: "class Student:\n    def __init__(self, name):\n        self.name = name\n        self.grades = []\n    \n    def add_grade(self, grade):\n        # Add grade to list\n        pass\n    \n    def get_average(self):\n        # Return average of grades\n        pass\n\nstudent = Student(\"Alice\")\nstudent.add_grade(85)\nstudent.add_grade(90)\nstudent.add_grade(78)\nprint(f\"{student.name}'s average:\", student.get_average())",
              hi: "class Student:\n    def __init__(self, naam):\n        self.naam = naam\n        self.grades = []\n    \n    def add_grade(self, grade):\n        # Grade list mein add karo\n        pass\n    \n    def get_average(self):\n        # Grades ka average return karo\n        pass\n\nstudent = Student(\"Rahul\")\nstudent.add_grade(85)\nstudent.add_grade(90)\nstudent.add_grade(78)\nprint(f\"{student.naam} ka average:\", student.get_average())"
            },
            solution: {
              en: "class Student:\n    def __init__(self, name):\n        self.name = name\n        self.grades = []\n    \n    def add_grade(self, grade):\n        self.grades.append(grade)\n    \n    def get_average(self):\n        return sum(self.grades) / len(self.grades)\n\nstudent = Student(\"Alice\")\nstudent.add_grade(85)\nstudent.add_grade(90)\nstudent.add_grade(78)\nprint(f\"{student.name}'s average:\", student.get_average())",
              hi: "class Student:\n    def __init__(self, naam):\n        self.naam = naam\n        self.grades = []\n    \n    def add_grade(self, grade):\n        self.grades.append(grade)\n    \n    def get_average(self):\n        return sum(self.grades) / len(self.grades)\n\nstudent = Student(\"Rahul\")\nstudent.add_grade(85)\nstudent.add_grade(90)\nstudent.add_grade(78)\nprint(f\"{student.naam} ka average:\", student.get_average())"
            },
            expectedOutput: {
              en: "Alice's average: 84.33333333333333",
              hi: "Rahul ka average: 84.33333333333333"
            },
            hints: [
              { en: "Use sum() and len() for average", hi: "Average ke liye sum() aur len() use karo" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "sets",
    title: { en: "Sets", hi: "Sets" },
    description: { en: "Learn about sets - unique collections", hi: "Sets ke baare mein sikhein - unique collections" },
    icon: "🎯",
    color: "#EF4444",
    lessons: [
      {
        id: "set-basics",
        title: { en: "Set Basics", hi: "Set Basics" },
        description: { en: "Creating and using sets", hi: "Sets banaana aur use karna" },
        subLessons: [
          {
            id: "what-is-set",
            title: { en: "What is a Set?", hi: "Set kya hai?" },
            content: {
              en: "Set ek aisa collection hai jisme sirf unique values hoti hain. Duplicate values automatic remove ho jate hain.\n\nSet {} curly brackets mein banata hai, jaise dictionary. Lekin sets mein sirf values hoti hain, keys nahi.\n\nUse cases: - Duplicates hataana - Unique items find karna - Math ke set operations (union, intersection)",
              hi: "Set ek aisa collection hai jisme sirf unique values hoti hain. Duplicate values automatic remove ho jate hain.\n\nSet {} curly brackets mein banata hai, jaise dictionary. Lekin sets mein sirf values hoti hain, keys nahi.\n\nUse cases: - Duplicates hataana - Unique items find karna - Math ke set operations (union, intersection)"
            },
            codeExample: {
              en: "# Creating a set\nfruits = {\"apple\", \"banana\", \"cherry\", \"apple\"}\nprint(\"Fruits set:\", fruits)\n\n# Empty set (note: use set(), not {})\nempty = set()\nprint(\"Empty set:\", empty)\n\n# Set with unique numbers\nnumbers = {1, 2, 3, 3, 4, 4, 5}\nprint(\"Numbers:\", numbers)",
              hi: "# Set bana rahe hain\nfruits = {\"apple\", \"banana\", \"cherry\", \"apple\"}\nprint(\"Fruits set:\", fruits)\n\n# Khali set (note: use set(), not {})\nempty = set()\nprint(\"Khali set:\", empty)\n\n# Unique numbers wala set\nnumbers = {1, 2, 3, 3, 4, 4, 5}\nprint(\"Numbers:\", numbers)"
            },
            output: {
              en: "Fruits set: {'banana', 'cherry', 'apple'}\nEmpty set: set()\nNumbers: {1, 2, 3, 4, 5}",
              hi: "Fruits set: {'banana', 'cherry', 'apple'}\nKhali set: set()\nNumbers: {1, 2, 3, 4, 5}"
            },
            explanation: {
              en: "Sets automatically remove duplicates. Sets are unordered - you cannot rely on the order of elements. Use sets when you need only unique values.",
              hi: "Sets automatic duplicates remove kar dete hain. Sets unordered hain - elements ka order guarantee nahi. Sets use karo jab sirf unique values chahiye."
            },
            quiz: [
              {
                question: {
                  en: "What happens if you add duplicate to a set?",
                  hi: "Agar set mein duplicate add karo toh kya hoga?"
                },
                options: [
                  { en: "Duplicate is ignored", hi: "Duplicate ignore ho jayega" },
                  { en: "Error occurs", hi: "Error aayega" },
                  { en: "Set has two copies", hi: "Set mein do copies honge" },
                  { en: "Nothing happens", hi: "Kuch nahi hoga" }
                ],
                correctAnswer: 0
              }
            ]
          }
        ],
        projects: [
          {
            id: "unique-numbers",
            title: { en: "Find Unique Numbers", hi: "Unique Numbers Find Karo" },
            description: { en: "Find unique numbers from a list", hi: "List se unique numbers find karo" },
            starterCode: {
              en: "# Find unique numbers from this list\nnumbers = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5]\n\n# Convert list to set to get unique numbers\nunique = \n\nprint(\"Original:\", numbers)\nprint(\"Unique:\", unique)",
              hi: "# Is list se unique numbers find karo\nnumbers = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5]\n\n# List ko set mein convert karo\nunique = \n\nprint(\"Original:\", numbers)\nprint(\"Unique:\", unique)"
            },
            solution: {
              en: "numbers = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5]\nunique = set(numbers)\nprint(\"Original:\", numbers)\nprint(\"Unique:\", unique)",
              hi: "numbers = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5]\nunique = set(numbers)\nprint(\"Original:\", numbers)\nprint(\"Unique:\", unique)"
            },
            expectedOutput: {
              en: "Original: [1, 2, 2, 3, 3, 3, 4, 4, 5, 5]\nUnique: {1, 2, 3, 4, 5}",
              hi: "Original: [1, 2, 2, 3, 3, 3, 4, 4, 5, 5]\nUnique: {1, 2, 3, 4, 5}"
            },
            hints: [
              { en: "Use set() to convert list to set", hi: "List ko set mein convert karne ke liye set() use karo" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "advanced-functions",
    title: { en: "Advanced Functions", hi: "Advanced Functions" },
    description: { en: "Return values, args, kwargs, scope, docstrings", hi: "Return values, args, kwargs, scope, docstrings" },
    icon: "🔧",
    color: "#8B5CF6",
    lessons: [
      {
        id: "return-values",
        title: { en: "Return Values", hi: "Return Values" },
        description: { en: "Return values from functions", hi: "Functions se values return karo" },
        subLessons: [
          {
            id: "what-is-return",
            title: { en: "What is Return?", hi: "Return kya hai?" },
            content: {
              en: "Return statement function se value wapas bhejta hai. Jab function apna kaam khatam kare, toh return use karke result de sakta hai.\n\nReturn ke baad function ka execution band ho jata hai.",
              hi: "Return statement function se value wapas bhejta hai. Jab function apna kaam khatam kare, toh return use karke result de sakta hai."
            },
            codeExample: {
              en: "def add(a, b):\n    return a + b\n\nresult = add(5, 3)\nprint(\"Sum is:\", result)",
              hi: "def add(a, b):\n    return a + b\n\nresult = add(5, 3)\nprint(\"Jod hai:\", result)"
            },
            output: {
              en: "Sum is: 8",
              hi: "Jod hai: 8"
            },
            explanation: {
              en: "Return sends value back from function.",
              hi: "Return function se value wapas bhejta hai."
            },
            quiz: [
              {
                question: { en: "What does return do?", hi: "Return kya karta hai?" },
                options: [
                  { en: "Sends value back", hi: "Value wapas bhejta hai" },
                  { en: "Prints value", hi: "Value print karta hai" },
                  { en: "Ends program", hi: "Program khatam karta hai" },
                  { en: "Creates variable", hi: "Variable banata hai" }
                ],
                correctAnswer: 0
              }
            ]
          }
        ],
        projects: [
          {
            id: "calculator-return",
            title: { en: "Calculator with Return", hi: "Return Wala Calculator" },
            description: { en: "Create function that returns", hi: "Return karne wala function banao" },
            starterCode: { en: "def add(a, b): pass\nresult = add(10, 20)\nprint(\"10 + 20 =\", result)", hi: "def add(a, b): pass\nresult = add(10, 20)\nprint(\"10 + 20 =\", result)" },
            solution: { en: "def add(a, b): return a + b\nresult = add(10, 20)\nprint(\"10 + 20 =\", result)", hi: "def add(a, b): return a + b\nresult = add(10, 20)\nprint(\"10 + 20 =\", result)" },
            expectedOutput: { en: "10 + 20 = 30", hi: "10 + 20 = 30" },
            hints: [{ en: "Use return a + b", hi: "return a + b use karo" }]
          }
        ]
      }
    ]
  },

  {
    id: "files",
    title: { en: "Files", hi: "Files" },
    description: { en: "Reading and writing files", hi: "Files read aur write karna" },
    icon: "📁",
    color: "#84CC16",
    lessons: [
      {
        id: "file-basics",
        title: { en: "File Basics", hi: "File Basics" },
        description: { en: "Working with files", hi: "Files ke saath kaam karna" },
        subLessons: [
          {
            id: "reading-files",
            title: { en: "Reading Files", hi: "Files Padhna" },
            content: {
              en: "Python mein files ko read karne ke liye open() function use karte hain. File ko open karte waqt mode specify karte hain - 'r' for read, 'w' for write.",
              hi: "Python mein files ko read karne ke liye open() function use karte hain. File ko open karte waqt mode specify karte hain - 'r' for read, 'w' for write."
            },
            codeExample: {
              en: "from io import StringIO\ncontent = \"Line 1\nLine 2\nLine 3\"\nfile = StringIO(content)\ndata = file.read()\nprint(data)",
              hi: "from io import StringIO\ncontent = \"Line 1\nLine 2\nLine 3\"\nfile = StringIO(content)\ndata = file.read()\nprint(data)"
            },
            output: {
              en: "Line 1\nLine 2\nLine 3",
              hi: "Line 1\nLine 2\nLine 3"
            },
            explanation: {
              en: "Use read() method to read entire file content.",
              hi: "Poora file content padhne ke liye read() method use karo."
            },
            quiz: [
              {
                question: {
                  en: "Which mode opens a file for reading?",
                  hi: "Konsa mode file read karne ke liye hai?"
                },
                options: [
                  { en: "'r'", hi: "'r'" },
                  { en: "'w'", hi: "'w'" },
                  { en: "'a'", hi: "'a'" },
                  { en: "'x'", hi: "'x'" }
                ],
                correctAnswer: 0
              }
            ]
          }
        ],
        projects: [
          {
            id: "file-read",
            title: { en: "Read a File", hi: "File Padho" },
            description: { en: "Read content from a file", hi: "File se content padho" },
            starterCode: {
              en: "from io import StringIO\ncontent = \"Hello World\"\nfile = StringIO(content)\ndata = file.read()\nprint(data)",
              hi: "from io import StringIO\ncontent = \"Hello World\"\nfile = StringIO(content)\ndata = file.read()\nprint(data)"
            },
            solution: {
              en: "from io import StringIO\ncontent = \"Hello World\"\nfile = StringIO(content)\ndata = file.read()\nprint(data)",
              hi: "from io import StringIO\ncontent = \"Hello World\"\nfile = StringIO(content)\ndata = file.read()\nprint(data)"
            },
            expectedOutput: {
              en: "Hello World",
              hi: "Hello World"
            },
            hints: [
              { en: "Use read() method", hi: "read() method use karo" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "exceptions",
    title: { en: "Exceptions", hi: "Exceptions" },
    description: { en: "Handling errors with try-except", hi: "Try-except se errors handle karna" },
    icon: "⚠️",
    color: "#DC2626",
    lessons: [
      {
        id: "try-except",
        title: { en: "Try-Except", hi: "Try-Except" },
        description: { en: "Handling errors gracefully", hi: "Errors gracefully handle karna" },
        subLessons: [
          {
            id: "what-is-exception",
            title: { en: "What is Exception?", hi: "Exception kya hai?" },
            content: {
              en: "Exception ek error hai jo program chalte waqt aata hai. Instead of program crash ho jaye, hum try-except use karke error handle kar sakte hain.",
              hi: "Exception ek error hai jo program chalte waqt aata hai. Program crash hone ki bajaye, hum try-except use karke error handle kar sakte hain."
            },
            codeExample: {
              en: "try:\n    result = 10 / 0\nexcept:\n    print(\"Error! Cannot divide by zero\")",
              hi: "try:\n    result = 10 / 0\nexcept:\n    print(\"Error! Zero se divide nahi kar sakte\")"
            },
            output: {
              en: "Error! Cannot divide by zero",
              hi: "Error! Zero se divide nahi kar sakte"
            },
            explanation: {
              en: "Try-except prevents program from crashing.",
              hi: "Try-except program crash hone se bachata hai."
            },
            quiz: [
              {
                question: {
                  en: "What happens if error occurs in try block?",
                  hi: "Agar try block mein error aaye toh kya hoga?"
                },
                options: [
                  { en: "Except block runs", hi: "Except block chalega" },
                  { en: "Program crashes", hi: "Program crash ho jayega" },
                  { en: "Nothing happens", hi: "Kuch nahi hoga" },
                  { en: "Try block repeats", hi: "Try block repeat hoga" }
                ],
                correctAnswer: 0
              }
            ]
          }
        ],
        projects: [
          {
            id: "divide-handler",
            title: { en: "Division Handler", hi: "Division Handler" },
            description: { en: "Handle division errors", hi: "Division errors handle karo" },
            starterCode: {
              en: "try:\n    a = 10\n    b = 0\n    result = a / b\n    print(\"Result:\", result)\nexcept:\n    print(\"Error: Cannot divide by zero\")",
              hi: "try:\n    a = 10\n    b = 0\n    result = a / b\n    print(\"Result:\", result)\nexcept:\n    print(\"Error: Zero se divide nahi kar sakte\")"
            },
            solution: {
              en: "try:\n    a = 10\n    b = 0\n    result = a / b\n    print(\"Result:\", result)\nexcept:\n    print(\"Error: Cannot divide by zero\")",
              hi: "try:\n    a = 10\n    b = 0\n    result = a / b\n    print(\"Result:\", result)\nexcept:\n    print(\"Error: Zero se divide nahi kar sakte\")"
            },
            expectedOutput: {
              en: "Error: Cannot divide by zero",
              hi: "Error: Zero se divide nahi kar sakte"
            },
            hints: [
              { en: "Use except to catch the error", hi: "Error catch karne ke liye except use karo" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "inheritance",
    title: { en: "Inheritance", hi: "Inheritance" },
    description: { en: "Learn about class inheritance", hi: "Class inheritance ke baare mein sikhein" },
    icon: "🧬",
    color: "#10B981",
    lessons: [
      {
        id: "inheritance-basics",
        title: { en: "Inheritance Basics", hi: "Inheritance Basics" },
        description: { en: "Understanding inheritance", hi: "Inheritance samajhna" },
        subLessons: [
          {
            id: "what-is-inheritance",
            title: { en: "What is Inheritance?", hi: "Inheritance kya hai?" },
            content: {
              en: "Inheritance ek feature hai jisme ek class (child) doosri class (parent) ki properties aur methods inherit karta hai. Ye code reuse ke liye useful hai.",
              hi: "Inheritance ek feature hai jisme ek class (child) doosri class (parent) ki properties aur methods inherit karta hai. Ye code reuse ke liye useful hai."
            },
            codeExample: {
              en: "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof!\"\n\ndog = Dog(\"Buddy\")\nprint(\"Name:\", dog.name)\nprint(\"Sound:\", dog.speak())",
              hi: "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof!\"\n\ndog = Dog(\"Buddy\")\nprint(\"Naam:\", dog.name)\nprint(\"Sound:\", dog.speak())"
            },
            output: {
              en: "Name: Buddy\nSound: Woof!",
              hi: "Naam: Buddy\nSound: Woof!"
            },
            explanation: {
              en: "Child class inherits all methods from parent class.",
              hi: "Child class parent class ki saari methods inherit karta hai."
            },
            quiz: [
              {
                question: {
                  en: "What is inheritance?",
                  hi: "Inheritance kya hai?"
                },
                options: [
                  { en: "Child class gets parent properties", hi: "Child class ko parent ki properties milti hain" },
                  { en: "Copying a file", hi: "File copy karna" },
                  { en: "Creating a variable", hi: "Variable banana" },
                  { en: "Deleting a class", hi: "Class delete karna" }
                ],
                correctAnswer: 0
              }
            ]
          }
        ],
        projects: [
          {
            id: "inherit-animal",
            title: { en: "Animal Inheritance", hi: "Animal Inheritance" },
            description: { en: "Create child class from parent", hi: "Parent se child class banao" },
            starterCode: {
              en: "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Cat(Animal):\n    def speak(self):\n        return \"Meow!\"\n\ncat = Cat(\"Whiskers\")\nprint(\"Name:\", cat.name)\nprint(\"Sound:\", cat.speak())",
              hi: "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Cat(Animal):\n    def speak(self):\n        return \"Meow!\"\n\ncat = Cat(\"Whiskers\")\nprint(\"Naam:\", cat.name)\nprint(\"Sound:\", cat.speak())"
            },
            solution: {
              en: "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Cat(Animal):\n    def speak(self):\n        return \"Meow!\"\n\ncat = Cat(\"Whiskers\")\nprint(\"Name:\", cat.name)\nprint(\"Sound:\", cat.speak())",
              hi: "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Cat(Animal):\n    def speak(self):\n        return \"Meow!\"\n\ncat = Cat(\"Whiskers\")\nprint(\"Naam:\", cat.name)\nprint(\"Sound:\", cat.speak())"
            },
            expectedOutput: {
              en: "Name: Whiskers\nSound: Meow!",
              hi: "Naam: Whiskers\nSound: Meow!"
            },
            hints: [
              { en: "Use class Cat(Animal): to inherit", hi: "Inherit karne ke liye class Cat(Animal): use karo" }
            ]
          }
        ]
      }
    ]
  }
];
    
