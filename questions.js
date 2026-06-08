const questionsData = [
  {
    "id": 1,
    "question": "Compilation का मुख्य उद्देश्य क्या है?",
    "code": "",
    "options": [
      "Program को Edit करना",
      "Source Code को Machine Code में बदलना",
      "Program को Print करना",
      "Program को Save करना"
    ],
    "correctAnswer": 1
  },
  {
    "id": 2,
    "question": "Flowchart में Decision Symbol कौन सा होता है?",
    "code": "",
    "options": [
      "Rectangle",
      "Oval",
      "Diamond",
      "Arrow"
    ],
    "correctAnswer": 2
  },
  {
    "id": 3,
    "question": "Euclid Algorithm का उपयोग किसके लिए किया जाता है?",
    "code": "",
    "options": [
      "Prime Number Check",
      "Fibonacci Series",
      "GCD निकालने के लिए",
      "Sorting के लिए"
    ],
    "correctAnswer": 2
  },
  {
    "id": 4,
    "question": "Python में Single Line Comment किससे शुरू होता है?",
    "code": "",
    "options": [
      "//",
      "#",
      "/*",
      "–"
    ],
    "correctAnswer": 1
  },
  {
    "id": 5,
    "question": "इनमें से कौन Immutable Data Type है?",
    "code": "",
    "options": [
      "List",
      "Dictionary",
      "Set",
      "Tuple"
    ],
    "correctAnswer": 3
  },
  {
    "id": 6,
    "question": "Output क्या होगा?",
    "code": "print(type(5+2j))",
    "options": [
      "int",
      "float",
      "complex",
      "str"
    ],
    "correctAnswer": 2
  },
  {
    "id": 7,
    "question": "String “PYTHON” में Index 3 पर कौन सा Character है?",
    "code": "",
    "options": [
      "T",
      "H",
      "O",
      "Y"
    ],
    "correctAnswer": 1
  },
  {
    "id": 8,
    "question": "Python में User Input लेने के लिए कौन सा Function प्रयोग होता है?",
    "code": "",
    "options": [
      "get()",
      "scan()",
      "input()",
      "read()"
    ],
    "correctAnswer": 2
  },
  {
    "id": 9,
    "question": "5 > 3 and 2 < 1 का परिणाम क्या होगा?",
    "code": "",
    "options": [
      "True",
      "False",
      "Error",
      "None"
    ],
    "correctAnswer": 1
  },
  {
    "id": 10,
    "question": "Bitwise AND Operator कौन सा है?",
    "code": "",
    "options": [
      "&&",
      "and",
      "&",
      "|"
    ],
    "correctAnswer": 2
  },
  {
    "id": 11,
    "question": "Operator Precedence में सबसे पहले कौन Evaluate होगा?",
    "code": "2 + 3 * 4",
    "options": [
      "20",
      "14",
      "24",
      "9"
    ],
    "correctAnswer": 1
  },
  {
    "id": 12,
    "question": "निम्न में कौन Multi-way Selection के लिए प्रयोग होता है?",
    "code": "",
    "options": [
      "if",
      "if-else",
      "if-elif-else",
      "while"
    ],
    "correctAnswer": 2
  },
  {
    "id": 13,
    "question": "range(2,10,3) का Output होगा?",
    "code": "",
    "options": [
      "2,5,8",
      "2,4,6,8",
      "3,6,9",
      "2,5,7"
    ],
    "correctAnswer": 0
  },
  {
    "id": 14,
    "question": "break Statement का कार्य क्या है?",
    "code": "",
    "options": [
      "Loop Skip करना",
      "Loop समाप्त करना",
      "Program बंद करना",
      "Error उत्पन्न करना"
    ],
    "correctAnswer": 1
  },
  {
    "id": 15,
    "question": "continue Statement क्या करता है?",
    "code": "",
    "options": [
      "Loop समाप्त करता है",
      "Current Iteration छोड़ देता है",
      "Program रोक देता है",
      "Function समाप्त करता है"
    ],
    "correctAnswer": 1
  },
  {
    "id": 16,
    "question": "List का कौन सा गुण सही है?",
    "code": "",
    "options": [
      "Immutable",
      "Ordered और Mutable",
      "Unordered",
      "Fixed Size"
    ],
    "correctAnswer": 1
  },
  {
    "id": 17,
    "question": "Dictionary में Data किस रूप में Store होता है?",
    "code": "",
    "options": [
      "Index Value",
      "Key-Value Pair",
      "Rows",
      "Objects"
    ],
    "correctAnswer": 1
  },
  {
    "id": 18,
    "question": "Linear Search की Worst Case Time Complexity क्या है?",
    "code": "",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 19,
    "question": "Function के अंदर घोषित Variable कहलाता है:",
    "code": "",
    "options": [
      "Global Variable",
      "Local Variable",
      "Static Variable",
      "Constant"
    ],
    "correctAnswer": 1
  },
  {
    "id": 20,
    "question": "Function से Value वापस भेजने के लिए प्रयोग होता है:",
    "code": "",
    "options": [
      "send",
      "break",
      "return",
      "pass"
    ],
    "correctAnswer": 2
  },
  {
    "id": 21,
    "question": "कौन सा Function Variable Arguments स्वीकार करता है?",
    "code": "",
    "options": [
      "def fun(x,y)",
      "def fun(*args)",
      "def fun(x=1)",
      "def fun(a,b,c)"
    ],
    "correctAnswer": 1
  },
  {
    "id": 22,
    "question": "String Function count() क्या लौटाता है?",
    "code": "",
    "options": [
      "Position",
      "Length",
      "Occurrence की संख्या",
      "Character"
    ],
    "correctAnswer": 2
  },
  {
    "id": 23,
    "question": "Output क्या होगा?",
    "code": "\"python\".upper()",
    "options": [
      "python",
      "PYTHON",
      "Python",
      "Error"
    ],
    "correctAnswer": 1
  },
  {
    "id": 24,
    "question": "Recursion में Function किसे Call करता है?",
    "code": "",
    "options": [
      "दूसरे Function को",
      "Main Function को",
      "स्वयं को",
      "Module को"
    ],
    "correctAnswer": 2
  },
  {
    "id": 25,
    "question": "File Open करने के लिए कौन सा Function प्रयोग होता है?",
    "code": "",
    "options": [
      "file()",
      "open()",
      "fopen()",
      "create()"
    ],
    "correctAnswer": 1
  },
  {
    "id": 26,
    "question": "File Mode “a” का अर्थ है:",
    "code": "",
    "options": [
      "Read",
      "Write",
      "Append",
      "Binary Read"
    ],
    "correctAnswer": 2
  },
  {
    "id": 27,
    "question": "tell() Function क्या बताता है?",
    "code": "",
    "options": [
      "File Size",
      "Current File Pointer Position",
      "Total Lines",
      "File Name"
    ],
    "correctAnswer": 1
  },
  {
    "id": 28,
    "question": "seek() Function का उपयोग किसलिए किया जाता है?",
    "code": "",
    "options": [
      "File Delete करने के लिए",
      "Pointer Position बदलने के लिए",
      "File Rename करने के लिए",
      "File Close करने के लिए"
    ],
    "correctAnswer": 1
  },
  {
    "id": 29,
    "question": "LEGB Rule में “E” का अर्थ है:",
    "code": "",
    "options": [
      "External",
      "Encapsulation",
      "Enclosing",
      "Execution"
    ],
    "correctAnswer": 2
  },
  {
    "id": 30,
    "question": "Python में Module Import करने का सही तरीका कौन सा है?",
    "code": "",
    "options": [
      "include module",
      "import module",
      "use module",
      "attach module"
    ],
    "correctAnswer": 1
  },
  {
    "id": 31,
    "question": "name Variable का मान “main” कब होता है?",
    "code": "",
    "options": [
      "Module Import होने पर",
      "Program Direct Run होने पर",
      "Error आने पर",
      "Function Call होने पर"
    ],
    "correctAnswer": 1
  },
  {
    "id": 32,
    "question": "Output क्या होगा?",
    "code": "x=10\ndef test():\nglobal x\nx=20\ntest()\nprint(x)",
    "options": [
      "10",
      "20",
      "Error",
      "None"
    ],
    "correctAnswer": 1
  },
  {
    "id": 33,
    "question": "Output क्या होगा?",
    "code": "print(bool([]))",
    "options": [
      "True",
      "False",
      "[]",
      "Error"
    ],
    "correctAnswer": 1
  },
  {
    "id": 34,
    "question": "कौन सा Assertion सही है?",
    "code": "",
    "options": [
      "assert 5>10",
      "assert 10>5",
      "assert False",
      "assert 0"
    ],
    "correctAnswer": 1
  },
  {
    "id": 35,
    "question": "Output क्या होगा?",
    "code": "print(\"ABCDE\"[1:4])",
    "options": [
      "ABC",
      "BCD",
      "BCDE",
      "CDE"
    ],
    "correctAnswer": 1
  },
  {
    "id": 36,
    "question": "Dictionary Frequency Counting के लिए सबसे उपयुक्त Structure कौन सा है?",
    "code": "",
    "options": [
      "List",
      "Tuple",
      "Dictionary",
      "String"
    ],
    "correctAnswer": 2
  },
  {
    "id": 37,
    "question": "निम्न में कौन Keyword Argument का उदाहरण है?",
    "code": "",
    "options": [
      "fun(10,20)",
      "fun(x=10,y=20)",
      "fun(*a)",
      "fun()"
    ],
    "correctAnswer": 1
  },
  {
    "id": 38,
    "question": "Output क्या होगा?",
    "code": "print(pow(2,5))",
    "options": [
      "10",
      "25",
      "32",
      "64"
    ],
    "correctAnswer": 2
  },
  {
    "id": 39,
    "question": "Module Files as Namespace का अर्थ है:",
    "code": "",
    "options": [
      "Module Variables का अलग Namespace होता है",
      "Module केवल Functions रखता है",
      "Module केवल Classes रखता है",
      "Module केवल Constants रखता है"
    ],
    "correctAnswer": 0
  },
  {
    "id": 40,
    "question": "File Processing Chapter से सबसे महत्वपूर्ण Functions कौन से हैं?",
    "code": "",
    "options": [
      "read(), write(), seek(), tell()",
      "len(), max()",
      "split(), join()",
      "ceil(), floor()"
    ],
    "correctAnswer": 0
  },
  {
    "id": 41,
    "question": "Algorithm की सबसे महत्वपूर्ण विशेषता क्या है?",
    "code": "",
    "options": [
      "Ambiguous होना",
      "Finite Steps होना",
      "Graphics होना",
      "Colorful होना"
    ],
    "correctAnswer": 1
  },
  {
    "id": 42,
    "question": "Flowchart में Input/Output Symbol कौन सा होता है?",
    "code": "",
    "options": [
      "Rectangle",
      "Diamond",
      "Parallelogram",
      "Circle"
    ],
    "correctAnswer": 2
  },
  {
    "id": 43,
    "question": "Fibonacci Series का अगला पद क्या होगा?",
    "code": "",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "correctAnswer": 3
  },
  {
    "id": 44,
    "question": "Python Interpreter का कार्य क्या है?",
    "code": "",
    "options": [
      "Program Compile करना",
      "Program को Line-by-Line Execute करना",
      "File Delete करना",
      "Memory Format करना"
    ],
    "correctAnswer": 1
  },
  {
    "id": 45,
    "question": "Python में Multi-line Comment के लिए सामान्यतः क्या प्रयोग किया जाता है?",
    "code": "",
    "options": [
      "### ###",
      "“”” “””",
      "// //",
      "&&"
    ],
    "correctAnswer": 1
  },
  {
    "id": 46,
    "question": "इनमें से कौन Float Literal है?",
    "code": "",
    "options": [
      "25",
      "2+3j",
      "3.14",
      "True"
    ],
    "correctAnswer": 2
  },
  {
    "id": 47,
    "question": "Output क्या होगा?",
    "code": "print(len(\"COMPUTER\"))",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "correctAnswer": 1
  },
  {
    "id": 48,
    "question": "Python में String Indexing कहाँ से शुरू होती है?",
    "code": "",
    "options": [
      "1",
      "-1",
      "0",
      "2"
    ],
    "correctAnswer": 2
  },
  {
    "id": 49,
    "question": "कौन सा Operator Exponentiation के लिए प्रयोग होता है?",
    "code": "",
    "options": [
      "^",
      "**",
      "//",
      "%%"
    ],
    "correctAnswer": 1
  },
  {
    "id": 50,
    "question": "Output क्या होगा?",
    "code": "print(15//4)",
    "options": [
      "3.75",
      "3",
      "4",
      "15"
    ],
    "correctAnswer": 1
  },
  {
    "id": 51,
    "question": "Relational Operator नहीं है:",
    "code": "",
    "options": [
      ">=",
      "<=",
      "!=",
      "+="
    ],
    "correctAnswer": 3
  },
  {
    "id": 52,
    "question": "Logical NOT Operator कौन सा है?",
    "code": "",
    "options": [
      "!",
      "not",
      "~",
      "&&"
    ],
    "correctAnswer": 1
  },
  {
    "id": 53,
    "question": "Output क्या होगा?",
    "code": "print(5 & 3)",
    "options": [
      "1",
      "7",
      "8",
      "2"
    ],
    "correctAnswer": 0
  },
  {
    "id": 54,
    "question": "Nested if का अर्थ है:",
    "code": "",
    "options": [
      "if के अंदर if",
      "Loop के अंदर Loop",
      "Function के अंदर Function",
      "None"
    ],
    "correctAnswer": 0
  },
  {
    "id": 55,
    "question": "कौन सा Loop निश्चित संख्या में Iteration के लिए अधिक उपयुक्त है?",
    "code": "",
    "options": [
      "while",
      "for",
      "do while",
      "recursion"
    ],
    "correctAnswer": 1
  },
  {
    "id": 56,
    "question": "pass Statement का उपयोग कब किया जाता है?",
    "code": "",
    "options": [
      "Loop समाप्त करने हेतु",
      "Placeholder के रूप में",
      "Error Generate करने हेतु",
      "File खोलने हेतु"
    ],
    "correctAnswer": 1
  },
  {
    "id": 57,
    "question": "Output क्या होगा?",
    "code": "print(list(range(1,6)))",
    "options": [
      "[1,2,3,4,5]",
      "[1,2,3,4]",
      "[0,1,2,3,4]",
      "Error"
    ],
    "correctAnswer": 0
  },
  {
    "id": 58,
    "question": "कौन Mutable है?",
    "code": "",
    "options": [
      "String",
      "Tuple",
      "List",
      "Integer"
    ],
    "correctAnswer": 2
  },
  {
    "id": 59,
    "question": "Tuple को किस Bracket में लिखा जाता है?",
    "code": "",
    "options": [
      "{}",
      "[]",
      "<>",
      "()"
    ],
    "correctAnswer": 3
  },
  {
    "id": 60,
    "question": "Dictionary Key कैसी होनी चाहिए?",
    "code": "",
    "options": [
      "Mutable",
      "Hashable",
      "List",
      "Dictionary"
    ],
    "correctAnswer": 1
  },
  {
    "id": 61,
    "question": "Output क्या होगा?",
    "code": "a=[10,20,30]\nprint(max(a))",
    "options": [
      "10",
      "20",
      "30",
      "Error"
    ],
    "correctAnswer": 2
  },
  {
    "id": 62,
    "question": "Top-Down Approach में पहले क्या बनाया जाता है?",
    "code": "",
    "options": [
      "Main Problem",
      "Variables",
      "Output",
      "Memory"
    ],
    "correctAnswer": 0
  },
  {
    "id": 63,
    "question": "Function Documentation के लिए क्या प्रयोग किया जाता है?",
    "code": "",
    "options": [
      "Comment",
      "DocString",
      "Print",
      "Input"
    ],
    "correctAnswer": 1
  },
  {
    "id": 64,
    "question": "कौन सा Default Argument का उदाहरण है?",
    "code": "",
    "options": [
      "def fun(x=5):",
      "def fun(*x):",
      "def fun():",
      "def fun(x,y):"
    ],
    "correctAnswer": 0
  },
  {
    "id": 65,
    "question": "Output क्या होगा?",
    "code": "print(\"hello\".capitalize())",
    "options": [
      "HELLO",
      "Hello",
      "hello",
      "hELLO"
    ],
    "correctAnswer": 1
  },
  {
    "id": 66,
    "question": "“Python Programming”.find(“Pro”) का परिणाम होगा?",
    "code": "",
    "options": [
      "7",
      "8",
      "9",
      "-1"
    ],
    "correctAnswer": 0
  },
  {
    "id": 67,
    "question": "कौन सा Function String को List में बदलता है?",
    "code": "",
    "options": [
      "join()",
      "split()",
      "strip()",
      "find()"
    ],
    "correctAnswer": 1
  },
  {
    "id": 68,
    "question": "Output क्या होगा?",
    "code": "print(\"ABC\".isalpha())",
    "options": [
      "False",
      "Error",
      "True",
      "None"
    ],
    "correctAnswer": 2
  },
  {
    "id": 69,
    "question": "Output क्या होगा?",
    "code": "print(\"123\".isdigit())",
    "options": [
      "True",
      "False",
      "Error",
      "None"
    ],
    "correctAnswer": 0
  },
  {
    "id": 70,
    "question": "Membership Operator कौन सा है?",
    "code": "",
    "options": [
      "is",
      "in",
      "and",
      "&"
    ],
    "correctAnswer": 1
  },
  {
    "id": 71,
    "question": "Pattern Matching के लिए Python में कौन सा Module अधिक उपयोगी है?",
    "code": "",
    "options": [
      "math",
      "random",
      "re",
      "os"
    ],
    "correctAnswer": 2
  },
  {
    "id": 72,
    "question": "ceil(4.2) का परिणाम क्या होगा?",
    "code": "",
    "options": [
      "4",
      "5",
      "4.2",
      "Error"
    ],
    "correctAnswer": 1
  },
  {
    "id": 73,
    "question": "floor(4.9) का परिणाम क्या होगा?",
    "code": "",
    "options": [
      "5",
      "4.9",
      "4",
      "Error"
    ],
    "correctAnswer": 2
  },
  {
    "id": 74,
    "question": "sqrt(144) का परिणाम क्या होगा?",
    "code": "",
    "options": [
      "10",
      "11",
      "12",
      "14"
    ],
    "correctAnswer": 2
  },
  {
    "id": 75,
    "question": "random() Function किस प्रकार की Value लौटाता है?",
    "code": "",
    "options": [
      "Integer",
      "Float (0 से 1 के बीच)",
      "String",
      "Boolean"
    ],
    "correctAnswer": 1
  },
  {
    "id": 76,
    "question": "Recursion में Base Case क्यों आवश्यक होता है?",
    "code": "",
    "options": [
      "Speed बढ़ाने के लिए",
      "Infinite Calls रोकने के लिए",
      "Memory बढ़ाने के लिए",
      "Variable Declare करने के लिए"
    ],
    "correctAnswer": 1
  },
  {
    "id": 77,
    "question": "File Mode “r+” का अर्थ है:",
    "code": "",
    "options": [
      "केवल Read",
      "केवल Write",
      "Read और Write",
      "Append"
    ],
    "correctAnswer": 2
  },
  {
    "id": 78,
    "question": "कौन सी Method पूरी File को List के रूप में पढ़ती है?",
    "code": "",
    "options": [
      "read()",
      "readline()",
      "readlines()",
      "write()"
    ],
    "correctAnswer": 2
  },
  {
    "id": 79,
    "question": "writelines() Function क्या लिखता है?",
    "code": "",
    "options": [
      "Single Character",
      "Multiple Lines",
      "Integer",
      "Dictionary"
    ],
    "correctAnswer": 1
  },
  {
    "id": 80,
    "question": "File Close न करने पर क्या समस्या हो सकती है?",
    "code": "",
    "options": [
      "Memory Leak",
      "Resource Waste",
      "Data Loss",
      "उपरोक्त सभी"
    ],
    "correctAnswer": 3
  },
  {
    "id": 81,
    "question": "Command Line Arguments किस Module से प्राप्त किए जाते हैं?",
    "code": "",
    "options": [
      "math",
      "random",
      "sys",
      "os"
    ],
    "correctAnswer": 2
  },
  {
    "id": 82,
    "question": "LEGB में G का अर्थ क्या है?",
    "code": "",
    "options": [
      "Generate",
      "Global",
      "Group",
      "General"
    ],
    "correctAnswer": 1
  },
  {
    "id": 83,
    "question": "Python पहले Variable को कहाँ खोजता है?",
    "code": "",
    "options": [
      "Global Scope",
      "Built-in Scope",
      "Local Scope",
      "Enclosing Scope"
    ],
    "correctAnswer": 2
  },
  {
    "id": 84,
    "question": "Module Reload करने के लिए कौन सा Function उपयोग किया जाता है?",
    "code": "",
    "options": [
      "reload()",
      "import()",
      "restart()",
      "refresh()"
    ],
    "correctAnswer": 0
  },
  {
    "id": 85,
    "question": "Output क्या होगा?",
    "code": "print(__name__)",
    "options": [
      "filename",
      "main",
      "main()",
      "Error"
    ],
    "correctAnswer": 1
  },
  {
    "id": 86,
    "question": "कौन सा Statement Module Import करते समय केवल विशेष Function Import करता है?",
    "code": "",
    "options": [
      "import math",
      "include math",
      "from math import sqrt",
      "use math"
    ],
    "correctAnswer": 2
  },
  {
    "id": 87,
    "question": "eval(“5+10”) का परिणाम होगा?",
    "code": "",
    "options": [
      "“5+10”",
      "510",
      "15",
      "Error"
    ],
    "correctAnswer": 2
  },
  {
    "id": 88,
    "question": "round(5.67,1) का परिणाम होगा?",
    "code": "",
    "options": [
      "5.6",
      "5.7",
      "6",
      "5"
    ],
    "correctAnswer": 1
  },
  {
    "id": 89,
    "question": "startswith() Function क्या जांचता है?",
    "code": "",
    "options": [
      "अंत",
      "शुरुआत",
      "लंबाई",
      "Index"
    ],
    "correctAnswer": 1
  },
  {
    "id": 90,
    "question": "M3-R5  में सबसे अधिक वेटेज किस Unit का है?",
    "code": "",
    "options": [
      "Introduction to Programming",
      "NumPy Basics",
      "Functions, File Processing, Modules",
      "Sequence Data Types"
    ],
    "correctAnswer": 2
  },
  {
    "id": 91,
    "question": "Algorithm में कौन-सी विशेषता आवश्यक नहीं है?",
    "code": "",
    "options": [
      "Finiteness",
      "Definiteness",
      "Ambiguity",
      "Input-Output"
    ],
    "correctAnswer": 2
  },
  {
    "id": 92,
    "question": "Flowchart में Connector का उपयोग क्यों किया जाता है?",
    "code": "",
    "options": [
      "Input लेने हेतु",
      "Flow को जोड़ने हेतु",
      "Decision हेतु",
      "Processing हेतु"
    ],
    "correctAnswer": 1
  },
  {
    "id": 93,
    "question": "किसी संख्या के Prime होने की न्यूनतम जाँच किस तक करनी पर्याप्त होती है?",
    "code": "",
    "options": [
      "n",
      "n/2",
      "√n",
      "n²"
    ],
    "correctAnswer": 2
  },
  {
    "id": 94,
    "question": "Output क्या होगा?",
    "code": "x=10\ny=20\nx,y=y,x\nprint(x,y)",
    "options": [
      "10 20",
      "20 10",
      "Error",
      "20 20"
    ],
    "correctAnswer": 1
  },
  {
    "id": 95,
    "question": "Python में कौन-सा Data Type Ordered तथा Immutable दोनों है?",
    "code": "",
    "options": [
      "List",
      "Dictionary",
      "Set",
      "Tuple"
    ],
    "correctAnswer": 3
  },
  {
    "id": 96,
    "question": "Output क्या होगा?",
    "code": "print(type(True))",
    "options": [
      "int",
      "bool",
      "str",
      "float"
    ],
    "correctAnswer": 1
  },
  {
    "id": 97,
    "question": "Output क्या होगा?",
    "code": "print(\"Python\"[-2])",
    "options": [
      "o",
      "n",
      "h",
      "t"
    ],
    "correctAnswer": 0
  },
  {
    "id": 98,
    "question": "Output क्या होगा?",
    "code": "print(10%3*2)",
    "options": [
      "2",
      "4",
      "6",
      "1"
    ],
    "correctAnswer": 0
  },
  {
    "id": 99,
    "question": "Output क्या होगा?",
    "code": "print(not(5>2 and 8>3))",
    "options": [
      "True",
      "False",
      "None",
      "Error"
    ],
    "correctAnswer": 1
  },
  {
    "id": 100,
    "question": "Bitwise Right Shift में 16 >> 2 का परिणाम होगा?",
    "code": "",
    "options": [
      "8",
      "4",
      "2",
      "32"
    ],
    "correctAnswer": 1
  },
  {
    "id": 101,
    "question": "Output क्या होगा?",
    "code": "if 0:\nprint(\"A\")\nelse:\nprint(\"B\")",
    "options": [
      "A",
      "B",
      "A B",
      "Error"
    ],
    "correctAnswer": 1
  },
  {
    "id": 102,
    "question": "While Loop कब तक चलता है?",
    "code": "",
    "options": [
      "Condition False होने तक",
      "Condition True होने तक",
      "केवल एक बार",
      "None"
    ],
    "correctAnswer": 1
  },
  {
    "id": 103,
    "question": "Output क्या होगा?",
    "code": "for i in range(3):\npass\nprint(i)",
    "options": [
      "2",
      "3",
      "0",
      "Error"
    ],
    "correctAnswer": 0
  },
  {
    "id": 104,
    "question": "Output क्या होगा?",
    "code": "a=[10,20,30,40]\nprint(a[-3])",
    "options": [
      "10",
      "20",
      "30",
      "40"
    ],
    "correctAnswer": 1
  },
  {
    "id": 105,
    "question": "List Slicing में a[1:5:2] क्या दर्शाता है?",
    "code": "",
    "options": [
      "Step Size 2",
      "Reverse List",
      "Index Error",
      "None"
    ],
    "correctAnswer": 0
  },
  {
    "id": 106,
    "question": "Dictionary में Duplicate Keys होने पर क्या होगा?",
    "code": "",
    "options": [
      "Error",
      "दोनों Store होंगे",
      "अंतिम Value Store होगी",
      "पहला Store होगा"
    ],
    "correctAnswer": 2
  },
  {
    "id": 107,
    "question": "Output क्या होगा?",
    "code": "d={\"a\":10,\"b\":20}\nprint(len(d))",
    "options": [
      "1",
      "2",
      "20",
      "Error"
    ],
    "correctAnswer": 1
  },
  {
    "id": 108,
    "question": "Local Variable कब नष्ट हो जाता है?",
    "code": "",
    "options": [
      "Program End पर",
      "Function समाप्त होने पर",
      "Module Import पर",
      "कभी नहीं"
    ],
    "correctAnswer": 1
  },
  {
    "id": 109,
    "question": "कौन-सा Function Object वापस करता है?",
    "code": "",
    "options": [
      "print()",
      "return",
      "input()",
      "eval()"
    ],
    "correctAnswer": 1
  },
  {
    "id": 110,
    "question": "Output क्या होगा?",
    "code": "def fun(a,b=5):\nreturn a+b\nprint(fun(10))",
    "options": [
      "10",
      "15",
      "5",
      "Error"
    ],
    "correctAnswer": 1
  },
  {
    "id": 111,
    "question": "Keyword Arguments का लाभ क्या है?",
    "code": "",
    "options": [
      "Order महत्वपूर्ण नहीं रहता",
      "Speed बढ़ती है",
      "Memory कम लगती है",
      "Compilation तेज होती है"
    ],
    "correctAnswer": 0
  },
  {
    "id": 112,
    "question": "Output क्या होगा?",
    "code": "print(\"welcome\".count(\"e\"))",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 1
  },
  {
    "id": 113,
    "question": "Output क्या होगा?",
    "code": "print(\"python\".replace(\"p\",\"j\"))",
    "options": [
      "python",
      "jython",
      "jython",
      "Error"
    ],
    "correctAnswer": 2
  },
  {
    "id": 114,
    "question": "Output क्या होगा?",
    "code": "print(\"   abc   \".strip())",
    "options": [
      "abc",
      "“ abc “",
      "Error",
      "Empty String"
    ],
    "correctAnswer": 0
  },
  {
    "id": 115,
    "question": "join() Function का उपयोग किसके लिए किया जाता है?",
    "code": "",
    "options": [
      "String को विभाजित करने हेतु",
      "Strings को जोड़ने हेतु",
      "File जोड़ने हेतु",
      "Dictionary Merge करने हेतु"
    ],
    "correctAnswer": 1
  },
  {
    "id": 116,
    "question": "Output क्या होगा?",
    "code": "print(\"Python\".startswith(\"Py\"))",
    "options": [
      "False",
      "Error",
      "True",
      "None"
    ],
    "correctAnswer": 2
  },
  {
    "id": 117,
    "question": "max([5,10,15,2]) का परिणाम?",
    "code": "",
    "options": [
      "2",
      "5",
      "10",
      "15"
    ],
    "correctAnswer": 3
  },
  {
    "id": 118,
    "question": "round(5.555,2) का परिणाम?",
    "code": "",
    "options": [
      "5.55",
      "5.56",
      "6",
      "5.5"
    ],
    "correctAnswer": 1
  },
  {
    "id": 119,
    "question": "Recursion का सबसे बड़ा नुकसान क्या है?",
    "code": "",
    "options": [
      "अधिक Memory उपयोग",
      "Compilation Error",
      "Syntax Error",
      "Output नहीं मिलता"
    ],
    "correctAnswer": 0
  },
  {
    "id": 120,
    "question": "File Mode “w” में File पहले से मौजूद हो तो?",
    "code": "",
    "options": [
      "Error",
      "Delete हो जाएगी",
      "Overwrite होगी",
      "Read होगी"
    ],
    "correctAnswer": 2
  },
  {
    "id": 121,
    "question": "Output क्या होगा?",
    "code": "f=open(\"a.txt\",\"w\")\nprint(f.mode)",
    "options": [
      "r",
      "w",
      "rw",
      "Error"
    ],
    "correctAnswer": 1
  },
  {
    "id": 122,
    "question": "कौन-सा Function केवल एक Line पढ़ता है?",
    "code": "",
    "options": [
      "read()",
      "readline()",
      "readlines()",
      "write()"
    ],
    "correctAnswer": 1
  },
  {
    "id": 123,
    "question": "File Pointer को File के अंत में ले जाने हेतु प्रयोग होगा?",
    "code": "",
    "options": [
      "seek(0)",
      "seek(1)",
      "seek(0,2)",
      "tell()"
    ],
    "correctAnswer": 2
  },
  {
    "id": 124,
    "question": "tell() Function Return करता है:",
    "code": "",
    "options": [
      "File Size",
      "Current Byte Position",
      "Total Lines",
      "Path Name"
    ],
    "correctAnswer": 1
  },
  {
    "id": 125,
    "question": "Command Line Arguments किस सूची में संग्रहित होते हैं?",
    "code": "",
    "options": [
      "argv",
      "sys.argv",
      "args",
      "parameters"
    ],
    "correctAnswer": 1
  },
  {
    "id": 126,
    "question": "LEGB Rule में सबसे अंत में कौन-सा Scope खोजा जाता है?",
    "code": "",
    "options": [
      "Local",
      "Enclosing",
      "Global",
      "Built-in"
    ],
    "correctAnswer": 3
  },
  {
    "id": 127,
    "question": "Output क्या होगा?",
    "code": "x=5\ndef test():\nx=10\ntest()\nprint(x)",
    "options": [
      "5",
      "10",
      "Error",
      "None"
    ],
    "correctAnswer": 0
  },
  {
    "id": 128,
    "question": "Global Variable को Function में Modify करने हेतु कौन-सा Keyword आवश्यक है?",
    "code": "",
    "options": [
      "public",
      "global",
      "static",
      "extern"
    ],
    "correctAnswer": 1
  },
  {
    "id": 129,
    "question": "Module Alias बनाने के लिए कौन-सा Keyword प्रयोग होता है?",
    "code": "",
    "options": [
      "rename",
      "alias",
      "as",
      "define"
    ],
    "correctAnswer": 2
  },
  {
    "id": 130,
    "question": "Output क्या होगा?",
    "code": "import math as m\nprint(m.sqrt(81))",
    "options": [
      "81",
      "9",
      "8",
      "Error"
    ],
    "correctAnswer": 1
  },
  {
    "id": 131,
    "question": "Reloading Module का मुख्य उद्देश्य क्या है?",
    "code": "",
    "options": [
      "Module Delete करना",
      "Updated Module पुनः Load करना",
      "Module Rename करना",
      "Compile करना"
    ],
    "correctAnswer": 1
  },
  {
    "id": 132,
    "question": "eval(“2**3”) का परिणाम होगा?",
    "code": "",
    "options": [
      "6",
      "8",
      "9",
      "Error"
    ],
    "correctAnswer": 1
  },
  {
    "id": 133,
    "question": "Output क्या होगा?",
    "code": "print(bool(\" \"))",
    "options": [
      "True",
      "False",
      "Error",
      "None"
    ],
    "correctAnswer": 0
  },
  {
    "id": 134,
    "question": "Output क्या होगा?",
    "code": "print(bool(\"\"))",
    "options": [
      "True",
      "False",
      "None",
      "Error"
    ],
    "correctAnswer": 1
  },
  {
    "id": 135,
    "question": "Output क्या होगा?",
    "code": "print(3<5<7)",
    "options": [
      "False",
      "Error",
      "True",
      "None"
    ],
    "correctAnswer": 2
  },
  {
    "id": 136,
    "question": "Output क्या होगा?",
    "code": "print([1,2]+[3,4])",
    "options": [
      "[4,6]",
      "[1,2,3,4]",
      "Error",
      "(1,2,3,4)"
    ],
    "correctAnswer": 1
  },
  {
    "id": 137,
    "question": "Output क्या होगा?",
    "code": "print((1,2)*2)",
    "options": [
      "(1,2,1,2)",
      "(2,4)",
      "Error",
      "(1,2,2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 138,
    "question": "कौन-सा Statement Exception उत्पन्न कर सकता है?",
    "code": "",
    "options": [
      "assert False",
      "pass",
      "continue",
      "break"
    ],
    "correctAnswer": 0
  },
  {
    "id": 139,
    "question": "Python में Namespace का मुख्य कार्य क्या है?",
    "code": "",
    "options": [
      "Memory बढ़ाना",
      "Name Conflict रोकना",
      "Program Compile करना",
      "Loop चलाना"
    ],
    "correctAnswer": 1
  },
  {
    "id": 140,
    "question": "Functions, File Processing और Modules Unit का Weightage कितना है?",
    "code": "",
    "options": [
      "10 Marks",
      "20 Marks",
      "30 Marks",
      "40 MarksO Level M3-R5 परीक्षा में"
    ],
    "correctAnswer": 3
  }
];