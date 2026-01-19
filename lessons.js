// Comprehensive lesson database
const lessonData = {
    python: {
        name: 'Python',
        lessons: [
            {
                id: 'py-1',
                category: 'Basics',
                title: 'Getting Started with Python',
                content: `
                    <h1>Getting Started with Python</h1>
                    <p>Python is one of the most popular programming languages in the world. It's known for being easy to learn, readable, and powerful.</p>
                    
                    <h2>Why Learn Python?</h2>
                    <ul>
                        <li>Simple and readable syntax</li>
                        <li>Versatile - web dev, data science, AI, automation</li>
                        <li>Huge community and extensive libraries</li>
                        <li>High demand in job market</li>
                    </ul>
                    
                    <h2>Your First Python Program</h2>
                    <p>Let's start with the classic "Hello, World!" program:</p>
                    
                    <pre><code class="language-python">print("Hello, World!")</code></pre>
                    
                    <p>That's it! Just one line of code to display text. The <code>print()</code> function outputs text to the screen.</p>
                    
                    <div class="info-box success">
                        <strong>Try it yourself!</strong> Use the code playground below to run your first Python program. Try changing the message inside the quotes.
                    </div>
                `,
                initialCode: 'print("Hello, World!")',
                solution: 'print("Hello, World!")',
            },
            {
                id: 'py-2',
                category: 'Basics',
                title: 'Variables and Data Types',
                content: `
                    <h1>Variables and Data Types</h1>
                    <p>Variables are containers for storing data. In Python, you don't need to declare the type - Python figures it out automatically.</p>
                    
                    <h2>Creating Variables</h2>
                    <pre><code class="language-python">name = "Chris"
age = 25
height = 5.9
is_student = True</code></pre>
                    
                    <h2>Common Data Types</h2>
                    <ul>
                        <li><strong>String (str):</strong> Text - <code>"Hello"</code></li>
                        <li><strong>Integer (int):</strong> Whole numbers - <code>42</code></li>
                        <li><strong>Float:</strong> Decimal numbers - <code>3.14</code></li>
                        <li><strong>Boolean (bool):</strong> True or False</li>
                    </ul>
                    
                    <h2>Using Variables</h2>
                    <pre><code class="language-python">name = "Alice"
age = 20
print("My name is", name)
print("I am", age, "years old")</code></pre>
                    
                    <div class="info-box">
                        <strong>Tip:</strong> Variable names should be descriptive. Use lowercase with underscores: <code>user_age</code>, not <code>ua</code>.
                    </div>
                `,
                initialCode: 'name = "Your Name"\nage = 20\nprint("Hello, my name is", name)\nprint("I am", age, "years old")',
                solution: 'name = "Chris"\nage = 25\nprint("Hello, my name is", name)\nprint("I am", age, "years old")',
            },
            {
                id: 'py-3',
                category: 'Basics',
                title: 'Basic Operators',
                content: `
                    <h1>Basic Operators</h1>
                    <p>Operators let you perform operations on variables and values.</p>
                    
                    <h2>Arithmetic Operators</h2>
                    <pre><code class="language-python">x = 10
y = 3

print(x + y)   # Addition: 13
print(x - y)   # Subtraction: 7
print(x * y)   # Multiplication: 30
print(x / y)   # Division: 3.333...
print(x // y)  # Floor Division: 3
print(x % y)   # Modulus (remainder): 1
print(x ** y)  # Exponent: 1000</code></pre>
                    
                    <h2>Comparison Operators</h2>
                    <pre><code class="language-python">a = 5
b = 10

print(a == b)  # Equal to: False
print(a != b)  # Not equal: True
print(a < b)   # Less than: True
print(a > b)   # Greater than: False</code></pre>
                    
                    <div class="info-box warning">
                        <strong>Common Mistake:</strong> Use <code>==</code> for comparison, not <code>=</code>. Single <code>=</code> is for assignment!
                    </div>
                `,
                initialCode: '# Try different operations\nx = 15\ny = 4\n\nprint("Addition:", x + y)\nprint("Multiplication:", x * y)\nprint("Division:", x / y)',
                solution: 'x = 15\ny = 4\nprint("Addition:", x + y)\nprint("Multiplication:", x * y)\nprint("Division:", x / y)',
            },
            {
                id: 'py-4',
                category: 'Control Flow',
                title: 'If Statements',
                content: `
                    <h1>If Statements</h1>
                    <p>If statements let your program make decisions based on conditions.</p>
                    
                    <h2>Basic If Statement</h2>
                    <pre><code class="language-python">age = 18

if age >= 18:
    print("You are an adult")</code></pre>
                    
                    <h2>If-Else Statement</h2>
                    <pre><code class="language-python">temperature = 25

if temperature > 30:
    print("It's hot outside!")
else:
    print("Weather is nice!")</code></pre>
                    
                    <h2>If-Elif-Else</h2>
                    <pre><code class="language-python">score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")</code></pre>
                    
                    <div class="info-box">
                        <strong>Indentation is important!</strong> Python uses indentation (4 spaces) to define code blocks.
                    </div>
                `,
                initialCode: '# Grade calculator\nscore = 75\n\nif score >= 90:\n    print("Excellent! Grade: A")\nelif score >= 80:\n    print("Great! Grade: B")\nelif score >= 70:\n    print("Good! Grade: C")\nelse:\n    print("Keep trying! Grade: F")',
                solution: 'score = 85\nif score >= 90:\n    print("Excellent! Grade: A")\nelif score >= 80:\n    print("Great! Grade: B")\nelse:\n    print("Keep trying!")',
            },
            {
                id: 'py-5',
                category: 'Control Flow',
                title: 'Loops',
                content: `
                    <h1>Loops</h1>
                    <p>Loops let you repeat code multiple times.</p>
                    
                    <h2>For Loop</h2>
                    <p>Use when you know how many times to repeat:</p>
                    <pre><code class="language-python">for i in range(5):
    print("Count:", i)
# Outputs: 0, 1, 2, 3, 4</code></pre>
                    
                    <h2>While Loop</h2>
                    <p>Use when repeating until a condition is false:</p>
                    <pre><code class="language-python">count = 0
while count < 5:
    print("Count:", count)
    count += 1</code></pre>
                    
                    <h2>Looping Through Lists</h2>
                    <pre><code class="language-python">fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print("I like", fruit)</code></pre>
                    
                    <div class="info-box warning">
                        <strong>Watch out for infinite loops!</strong> Make sure your while loop condition eventually becomes False.
                    </div>
                `,
                initialCode: '# Print numbers 1 to 10\nfor i in range(1, 11):\n    print(i)',
                solution: 'for i in range(1, 11):\n    print(i)',
            },
            {
                id: 'py-6',
                category: 'Data Structures',
                title: 'Lists',
                content: `
                    <h1>Lists</h1>
                    <p>Lists are ordered collections that can hold multiple items.</p>
                    
                    <h2>Creating Lists</h2>
                    <pre><code class="language-python">fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = ["hello", 42, True, 3.14]</code></pre>
                    
                    <h2>Accessing List Items</h2>
                    <pre><code class="language-python">fruits = ["apple", "banana", "cherry"]

print(fruits[0])   # First item: apple
print(fruits[-1])  # Last item: cherry
print(fruits[1:3]) # Slice: ['banana', 'cherry']</code></pre>
                    
                    <h2>List Methods</h2>
                    <pre><code class="language-python">fruits = ["apple", "banana"]

fruits.append("cherry")     # Add to end
fruits.insert(0, "mango")   # Insert at index
fruits.remove("banana")     # Remove item
print(len(fruits))          # Get length</code></pre>
                    
                    <div class="info-box success">
                        <strong>Remember:</strong> Python lists start at index 0, not 1!
                    </div>
                `,
                initialCode: '# Create and manipulate a list\nmy_list = ["Python", "Java", "JavaScript"]\nprint("Original:", my_list)\n\nmy_list.append("C++")\nprint("After append:", my_list)\n\nprint("First item:", my_list[0])',
                solution: 'my_list = ["Python", "Java", "JavaScript"]\nmy_list.append("C++")\nprint(my_list)',
            },
            {
                id: 'py-7',
                category: 'Functions',
                title: 'Functions',
                content: `
                    <h1>Functions</h1>
                    <p>Functions are reusable blocks of code that perform specific tasks.</p>
                    
                    <h2>Creating Functions</h2>
                    <pre><code class="language-python">def greet():
    print("Hello!")

greet()  # Call the function</code></pre>
                    
                    <h2>Functions with Parameters</h2>
                    <pre><code class="language-python">def greet_person(name):
    print("Hello", name)

greet_person("Alice")
greet_person("Bob")</code></pre>
                    
                    <h2>Return Values</h2>
                    <pre><code class="language-python">def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8</code></pre>
                    
                    <h2>Default Parameters</h2>
                    <pre><code class="language-python">def greet(name="Guest"):
    print("Hello", name)

greet()          # Hello Guest
greet("Alice")   # Hello Alice</code></pre>
                    
                    <div class="info-box">
                        <strong>Best Practice:</strong> Functions should do one thing well. Keep them short and focused.
                    </div>
                `,
                initialCode: '# Create a function that calculates area\ndef calculate_area(width, height):\n    area = width * height\n    return area\n\nresult = calculate_area(5, 10)\nprint("Area:", result)',
                solution: 'def calculate_area(width, height):\n    return width * height\nprint(calculate_area(5, 10))',
            },
        ],
    },
    javascript: {
        name: 'JavaScript',
        lessons: [
            {
                id: 'js-1',
                category: 'Basics',
                title: 'Getting Started with JavaScript',
                content: `
                    <h1>Getting Started with JavaScript</h1>
                    <p>JavaScript is the programming language of the web. It makes websites interactive and dynamic.</p>
                    
                    <h2>Why Learn JavaScript?</h2>
                    <ul>
                        <li>Runs in every web browser</li>
                        <li>Frontend and backend (Node.js)</li>
                        <li>Mobile apps (React Native)</li>
                        <li>Most popular language on GitHub</li>
                    </ul>
                    
                    <h2>Your First JavaScript</h2>
                    <pre><code class="language-javascript">console.log("Hello, World!");</code></pre>
                    
                    <p>The <code>console.log()</code> function prints messages to the browser's console.</p>
                    
                    <div class="info-box success">
                        <strong>Note:</strong> In the playground, we'll simulate console output. In a real browser, press F12 to see the console!
                    </div>
                `,
                initialCode: 'console.log("Hello, World!");',
                solution: 'console.log("Hello, World!");',
            },
            {
                id: 'js-2',
                category: 'Basics',
                title: 'Variables',
                content: `
                    <h1>Variables in JavaScript</h1>
                    <p>JavaScript has three ways to declare variables: <code>let</code>, <code>const</code>, and <code>var</code>.</p>
                    
                    <h2>Using let and const</h2>
                    <pre><code class="language-javascript">let name = "Chris";  // Can be reassigned
const age = 25;      // Cannot be reassigned

name = "Alice";  // OK
// age = 26;     // Error!</code></pre>
                    
                    <h2>Data Types</h2>
                    <pre><code class="language-javascript">let text = "Hello";          // String
let number = 42;             // Number
let decimal = 3.14;          // Number
let isTrue = true;           // Boolean
let nothing = null;          // Null
let notDefined;              // Undefined</code></pre>
                    
                    <div class="info-box">
                        <strong>Best Practice:</strong> Use <code>const</code> by default. Only use <code>let</code> when you need to reassign. Avoid <code>var</code>.
                    </div>
                `,
                initialCode: 'const name = "Chris";
let age = 25;

console.log("Name:", name);
console.log("Age:", age);',
                solution: 'const name = "Chris";\nconst age = 25;\nconsole.log("Name:", name);',
            },
            {
                id: 'js-3',
                category: 'Control Flow',
                title: 'Functions',
                content: `
                    <h1>Functions in JavaScript</h1>
                    <p>Functions are reusable blocks of code.</p>
                    
                    <h2>Function Declaration</h2>
                    <pre><code class="language-javascript">function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Alice"));</code></pre>
                    
                    <h2>Arrow Functions</h2>
                    <p>Modern JavaScript uses arrow functions:</p>
                    <pre><code class="language-javascript">const add = (a, b) => {
    return a + b;
};

// Short version for single expression
const multiply = (a, b) => a * b;

console.log(add(5, 3));      // 8
console.log(multiply(4, 2)); // 8</code></pre>
                    
                    <div class="info-box success">
                        <strong>Arrow functions</strong> are shorter and more modern. They're widely used in modern JavaScript!
                    </div>
                `,
                initialCode: 'const greet = (name) => {
    return "Hello, " + name + "!";
};

console.log(greet("Chris"));',
                solution: 'const greet = (name) => "Hello, " + name;\nconsole.log(greet("Chris"));',
            },
        ],
    },
    java: {
        name: 'Java',
        lessons: [
            {
                id: 'java-1',
                category: 'Basics',
                title: 'Getting Started with Java',
                content: `
                    <h1>Getting Started with Java</h1>
                    <p>Java is a powerful, object-oriented programming language used for building enterprise applications, Android apps, and more.</p>
                    
                    <h2>Why Learn Java?</h2>
                    <ul>
                        <li>Platform independent (Write Once, Run Anywhere)</li>
                        <li>Used by major companies (Google, Amazon, etc.)</li>
                        <li>Android app development</li>
                        <li>Strong typing and object-oriented</li>
                    </ul>
                    
                    <h2>Your First Java Program</h2>
                    <pre><code class="language-java">public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>
                    
                    <div class="info-box">
                        <strong>Note:</strong> Every Java program needs a <code>main</code> method as the entry point.
                    </div>
                `,
                initialCode: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
                solution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
            },
        ],
    },
    cpp: {
        name: 'C++',
        lessons: [
            {
                id: 'cpp-1',
                category: 'Basics',
                title: 'Getting Started with C++',
                content: `
                    <h1>Getting Started with C++</h1>
                    <p>C++ is a powerful language for system programming, game development, and high-performance applications.</p>
                    
                    <h2>Your First C++ Program</h2>
                    <pre><code class="language-cpp">#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}</code></pre>
                    
                    <div class="info-box">
                        <strong>Components:</strong><br>
                        • <code>#include</code> - imports libraries<br>
                        • <code>main()</code> - program entry point<br>
                        • <code>cout</code> - outputs text
                    </div>
                `,
                initialCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}',
                solution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello!" << endl;\n    return 0;\n}',
            },
        ],
    },
    csharp: {
        name: 'C#',
        lessons: [
            {
                id: 'cs-1',
                category: 'Basics',
                title: 'Getting Started with C#',
                content: `
                    <h1>Getting Started with C#</h1>
                    <p>C# (C Sharp) is a modern, object-oriented language developed by Microsoft. It's used for Windows apps, games (Unity), and web development.</p>
                    
                    <h2>Your First C# Program</h2>
                    <pre><code class="language-csharp">using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}</code></pre>
                    
                    <div class="info-box success">
                        <strong>Unity Game Dev:</strong> C# is the primary language for Unity game engine!
                    </div>
                `,
                initialCode: 'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}',
                solution: 'using System;\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello!");\n    }\n}',
            },
        ],
    },
    html: {
        name: 'HTML/CSS',
        lessons: [
            {
                id: 'html-1',
                category: 'Basics',
                title: 'Getting Started with HTML',
                content: `
                    <h1>Getting Started with HTML</h1>
                    <p>HTML (HyperText Markup Language) is the foundation of web pages. It structures content on the web.</p>
                    
                    <h2>Basic HTML Structure</h2>
                    <pre><code class="language-html"><!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage.</p>
</body>
</html></code></pre>
                    
                    <h2>Common HTML Tags</h2>
                    <ul>
                        <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> - Headings</li>
                        <li><code>&lt;p&gt;</code> - Paragraphs</li>
                        <li><code>&lt;a href=""&gt;</code> - Links</li>
                        <li><code>&lt;img src=""&gt;</code> - Images</li>
                        <li><code>&lt;div&gt;</code> - Container</li>
                    </ul>
                    
                    <div class="info-box">
                        <strong>Remember:</strong> HTML provides structure, CSS provides style, JavaScript provides behavior!
                    </div>
                `,
                initialCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>My Page</title>\n</head>\n<body>\n    <h1>Welcome!</h1>\n    <p>This is a paragraph.</p>\n</body>\n</html>',
                solution: '<!DOCTYPE html>\n<html>\n<body>\n    <h1>Hello</h1>\n</body>\n</html>',
            },
        ],
    },
};

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessonData;
}