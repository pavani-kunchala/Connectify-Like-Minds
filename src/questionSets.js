const questionSets = {
    c: {
        basic: [
          { question: "Which symbol is used to end a statement in C?", options: [";", ":", ".", ","], correctAnswer: ";" },
          { question: "Which data type is used for storing a single character?", options: ["char", "string", "int", "float"], correctAnswer: "char" },
          { question: "Which keyword is used to define a constant in C?", options: ["const", "#define", "constant", "final"], correctAnswer: "#define" },
        ],
        medium: [
          { question: "Which function is used to read a string in C?", options: ["scanf", "gets", "read", "input"], correctAnswer: "gets" },
          { question: "Which header file is needed for dynamic memory allocation?", options: ["stdlib.h", "stdio.h", "math.h", "malloc.h"], correctAnswer: "stdlib.h" },
          { question: "What is the output of 5 / 2 in C?", options: ["2.5", "2", "3", "Error"], correctAnswer: "2" },
        ],
        advanced: [
          { question: "What is the time complexity of QuickSort in the worst case?", options: ["O(n log n)", "O(n^2)", "O(n)", "O(1)"], correctAnswer: "O(n^2)" },
          { question: "Which data structure is used for recursion?", options: ["Queue", "Stack", "Heap", "Array"], correctAnswer: "Stack" },
          { question: "Which function is used to allocate memory dynamically?", options: ["malloc", "alloc", "memalloc", "calloc"], correctAnswer: "malloc" },
        ]
      },
      java: {
        basic: [
          { question: "Which keyword is used to define a class in Java?", options: ["class", "Class", "define", "struct"], correctAnswer: "class" },
          { question: "Which data type is used for decimal values in Java?", options: ["int", "float", "double", "char"], correctAnswer: "double" },
          { question: "Which method is the entry point of a Java program?", options: ["start()", "main()", "run()", "execute()"], correctAnswer: "main()" },
        ],
        medium: [
          { question: "Which keyword is used for inheritance in Java?", options: ["extends", "implements", "inherits", "super"], correctAnswer: "extends" },
          { question: "Which collection does not allow duplicate elements?", options: ["List", "Set", "Map", "Queue"], correctAnswer: "Set" },
          { question: "Which Java feature allows multiple methods with the same name?", options: ["Encapsulation", "Method Overloading", "Polymorphism", "Method Overriding"], correctAnswer: "Method Overloading" },
        ],
        advanced: [
          { question: "What is the time complexity of HashMap operations in Java?", options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"], correctAnswer: "O(1)" },
          { question: "Which keyword prevents method overriding?", options: ["static", "final", "const", "sealed"], correctAnswer: "final" },
          { question: "Which concept in Java allows a class to have multiple behaviors?", options: ["Polymorphism", "Abstraction", "Encapsulation", "Inheritance"], correctAnswer: "Polymorphism" },
        ]
      },
      dsa: {
        basic: [
          { question: "Which data structure follows FIFO?", options: ["Stack", "Queue", "Linked List", "Tree"], correctAnswer: "Queue" },
          { question: "Which sorting algorithm has the worst-case time complexity of O(n^2)?", options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"], correctAnswer: "Bubble Sort" },
          { question: "What is the worst-case time complexity of binary search?", options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"], correctAnswer: "O(log n)" },
        ],
        medium: [
          { question: "Which data structure uses LIFO?", options: ["Queue", "Heap", "Stack", "Linked List"], correctAnswer: "Stack" },
          { question: "Which algorithm is used for finding the shortest path in graphs?", options: ["Dijkstra's", "Bubble Sort", "Merge Sort", "Quick Sort"], correctAnswer: "Dijkstra's" },
          { question: "Which traversal method visits nodes in the order: left-root-right?", options: ["Preorder", "Postorder", "Inorder", "Level order"], correctAnswer: "Inorder" },
        ],
        advanced: [
          { question: "Which data structure is used for implementing recursion?", options: ["Queue", "Stack", "Heap", "Array"], correctAnswer: "Stack" },
          { question: "Which algorithm is used for detecting cycles in graphs?", options: ["Prim's", "Dijkstra's", "Kruskal's", "Floyd-Warshall"], correctAnswer: "Floyd-Warshall" },
          { question: "Which data structure is used for priority queues?", options: ["Stack", "Queue", "Heap", "Linked List"], correctAnswer: "Heap" },
        ]
      },
      reactjs: {
        basic: [
          { question: "What is React primarily used for?", options: ["Backend Development", "Machine Learning", "Building User Interfaces", "Database Management"], correctAnswer: "Building User Interfaces" },
          { question: "Which hook is used for adding state to a functional component?", options: ["useState", "useEffect", "useContext", "useReducer"], correctAnswer: "useState" },
          { question: "What does JSX stand for?", options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript eXtension"], correctAnswer: "JavaScript XML" },
        ],
        medium: [
          { question: "Which lifecycle method is invoked after a component is mounted?", options: ["componentDidMount", "componentWillUnmount", "componentDidUpdate", "shouldComponentUpdate"], correctAnswer: "componentDidMount" },
          { question: "Which React function is used to optimize performance?", options: ["useMemo", "useState", "useEffect", "useRef"], correctAnswer: "useMemo" },
          { question: "Which package is required for routing in React?", options: ["react-router", "react-navigation", "react-dom", "react-redux"], correctAnswer: "react-router" },
        ],
        advanced: [
          { question: "What is React Fiber?", options: ["A new rendering engine", "A new CSS framework", "A new database system", "A JavaScript compiler"], correctAnswer: "A new rendering engine" },
          { question: "Which hook allows sharing state logic across multiple components?", options: ["useEffect", "useReducer", "useContext", "Custom Hooks"], correctAnswer: "Custom Hooks" },
          { question: "Which algorithm is used for React's reconciliation process?", options: ["Merge Sort", "Diffing Algorithm", "Recursion", "Greedy Algorithm"], correctAnswer: "Diffing Algorithm" },
        ]
      },
      webdevelopment: {
        basic: [
          { question: "Which language is used for structuring web pages?", options: ["HTML", "CSS", "JavaScript", "Python"], correctAnswer: "HTML" },
          { question: "Which CSS property is used for changing text color?", options: ["color", "text-style", "font-color", "background"], correctAnswer: "color" },
          { question: "Which language makes web pages interactive?", options: ["JavaScript", "CSS", "HTML", "PHP"], correctAnswer: "JavaScript" },
        ],
        medium: [
          { question: "Which HTTP method is used for sending data to the server?", options: ["GET", "POST", "DELETE", "PUT"], correctAnswer: "POST" },
          { question: "Which tag is used to create a hyperlink in HTML?", options: ["<a>", "<link>", "<href>", "<url>"], correctAnswer: "<a>" },
          { question: "Which CSS framework is widely used for responsive design?", options: ["Bootstrap", "Foundation", "Tailwind CSS", "All of the above"], correctAnswer: "All of the above" },
        ],
        advanced: [
          { question: "Which JavaScript feature allows async operations?", options: ["Promises", "Callbacks", "Async/Await", "All of the above"], correctAnswer: "All of the above" },
          { question: "What does REST stand for?", options: ["Remote Execution and Service Testing", "Representational State Transfer", "Resource Encapsulation and Security Technique", "None"], correctAnswer: "Representational State Transfer" },
          { question: "Which design pattern is commonly used in web applications?", options: ["MVC", "Singleton", "Observer", "Factory"], correctAnswer: "MVC" },
        ]
      },
      nodejs: {
        basic: [
          { question: "Which runtime does Node.js use?", options: ["V8", "SpiderMonkey", "Chakra", "Rhino"], correctAnswer: "V8" },
          { question: "Which module is used to create a server in Node.js?", options: ["http", "fs", "path", "os"], correctAnswer: "http" },
          { question: "Which command initializes a new Node.js project?", options: ["node init", "npm start", "npm init", "node setup"], correctAnswer: "npm init" },
        ],
        medium: [
          { question: "Which function is used to read a file in Node.js?", options: ["fs.readFile", "fs.getFile", "file.read", "read.file"], correctAnswer: "fs.readFile" },
          { question: "Which framework is commonly used with Node.js for web development?", options: ["React", "Django", "Express", "Flask"], correctAnswer: "Express" },
          { question: "Which package manager is used with Node.js?", options: ["PIP", "Yarn", "npm", "Maven"], correctAnswer: "npm" },
        ],
        advanced: [
          { question: "Which method is used to handle asynchronous code in Node.js?", options: ["setTimeout", "callbacks", "async/await", "All of the above"], correctAnswer: "All of the above" },
          { question: "Which module is used for encryption in Node.js?", options: ["crypto", "secure", "hashing", "encrypt"], correctAnswer: "crypto" },
          { question: "Which HTTP method is used to send data to a server?", options: ["GET", "POST", "PUT", "DELETE"], correctAnswer: "POST" },
        ]
      },
      python: {
        basic: [
          { question: "Which keyword is used to define a function in Python?", options: ["func", "function", "def", "define"], correctAnswer: "def" },
          { question: "Which data type is immutable in Python?", options: ["List", "Tuple", "Set", "Dictionary"], correctAnswer: "Tuple" },
          { question: "Which operator is used for exponentiation in Python?", options: ["^", "**", "*", "//"], correctAnswer: "**" },
        ],
        medium: [
          { question: "Which library is used for data analysis in Python?", options: ["NumPy", "Pandas", "Matplotlib", "TensorFlow"], correctAnswer: "Pandas" },
          { question: "Which keyword is used for exception handling?", options: ["catch", "error", "try", "exception"], correctAnswer: "try" },
          { question: "Which function is used to read input from the user?", options: ["input()", "read()", "scan()", "get()"], correctAnswer: "input()" },
        ],
        advanced: [
          { question: "Which Python framework is used for machine learning?", options: ["Django", "Flask", "TensorFlow", "React"], correctAnswer: "TensorFlow" },
          { question: "Which module is used for regular expressions?", options: ["re", "regex", "pattern", "match"], correctAnswer: "re" },
          { question: "What is the time complexity of dictionary lookup in Python?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correctAnswer: "O(1)" },
        ]
      },
      ai: {
        basic: [
            { question: "What does AI stand for?", options: ["Artificial Integration", "Automated Intelligence", "Artificial Intelligence", "Advanced Interaction"], correctAnswer: "Artificial Intelligence" },
            { question: "Which field is closely related to AI?", options: ["Physics", "Psychology", "Astronomy", "Geology"], correctAnswer: "Psychology" },
            { question: "Which programming language is widely used for AI?", options: ["C", "Python", "JavaScript", "PHP"], correctAnswer: "Python" },
        ],
        medium: [
            { question: "What is the main goal of AI?", options: ["To replace humans", "To automate tasks", "To create intelligent machines", "To increase processing power"], correctAnswer: "To create intelligent machines" },
            { question: "Which AI technique involves learning from past experiences?", options: ["Rule-based systems", "Machine Learning", "Genetic Algorithms", "Expert Systems"], correctAnswer: "Machine Learning" },
            { question: "Which AI subset focuses on mimicking human reasoning?", options: ["NLP", "Machine Learning", "Expert Systems", "Robotics"], correctAnswer: "Expert Systems" },
        ],
        advanced: [
            { question: "Which algorithm is commonly used in AI for decision-making?", options: ["Dijkstra's Algorithm", "Minimax Algorithm", "Floyd-Warshall", "Depth First Search"], correctAnswer: "Minimax Algorithm" },
            { question: "Which AI field deals with language understanding?", options: ["Computer Vision", "NLP", "Data Mining", "Robotics"], correctAnswer: "NLP" },
            { question: "Which AI model is used in image recognition?", options: ["CNN", "SVM", "KNN", "Naïve Bayes"], correctAnswer: "CNN" },
        ]
    },
    cplusplus: {
        basic: [
            { question: "Which extension is used for C++ files?", options: [".cpp", ".c", ".cs", ".cp"], correctAnswer: ".cpp" },
            { question: "Which operator is used for dynamic memory allocation in C++?", options: ["malloc", "new", "alloc", "calloc"], correctAnswer: "new" },
            { question: "Which keyword is used to create a class in C++?", options: ["class", "struct", "object", "define"], correctAnswer: "class" },
        ],
        medium: [
            { question: "Which C++ feature allows function overloading?", options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"], correctAnswer: "Polymorphism" },
            { question: "Which standard library is used for input/output operations?", options: ["iostream", "stdio", "fstream", "iomanip"], correctAnswer: "iostream" },
            { question: "Which operator is used to access members of a class?", options: ["*", "->", ".", "::"], correctAnswer: "." },
        ],
        advanced: [
            { question: "Which data structure is used to implement recursion?", options: ["Queue", "Stack", "Heap", "Array"], correctAnswer: "Stack" },
            { question: "Which method is called when an object is destroyed?", options: ["Destructor", "Constructor", "Deallocator", "Finalizer"], correctAnswer: "Destructor" },
            { question: "Which feature of C++ allows creating multiple functions with the same name?", options: ["Function Overloading", "Encapsulation", "Abstraction", "Polymorphism"], correctAnswer: "Function Overloading" },
        ]
    },
    devops: {
        basic: [
            { question: "What does DevOps stand for?", options: ["Development Operations", "Developer Options", "Device Optimization", "None of the above"], correctAnswer: "Development Operations" },
            { question: "Which tool is used for continuous integration?", options: ["Docker", "Kubernetes", "Jenkins", "Terraform"], correctAnswer: "Jenkins" },
            { question: "Which cloud platform is widely used in DevOps?", options: ["AWS", "Google Drive", "Dropbox", "OneDrive"], correctAnswer: "AWS" },
        ],
        medium: [
            { question: "Which DevOps tool is used for container orchestration?", options: ["Docker", "Kubernetes", "Ansible", "Terraform"], correctAnswer: "Kubernetes" },
            { question: "Which scripting language is commonly used in DevOps?", options: ["Python", "Java", "C++", "Swift"], correctAnswer: "Python" },
            { question: "Which tool is used for Infrastructure as Code (IaC)?", options: ["Terraform", "Kubernetes", "Ansible", "Jenkins"], correctAnswer: "Terraform" },
        ],
        advanced: [
            { question: "Which tool is used for log management in DevOps?", options: ["Splunk", "Jenkins", "Docker", "Chef"], correctAnswer: "Splunk" },
            { question: "Which database is commonly used in DevOps monitoring?", options: ["Prometheus", "MongoDB", "MySQL", "Redis"], correctAnswer: "Prometheus" },
            { question: "Which configuration management tool is used in DevOps?", options: ["Ansible", "Docker", "Kubernetes", "Jenkins"], correctAnswer: "Ansible" },
        ]
    },
    machinelearning: {
      basic: [
        { question: "Which library is most commonly used for machine learning in Python?", options: ["TensorFlow", "Pandas", "Matplotlib", "Flask"], correctAnswer: "TensorFlow" },
        { question: "What is supervised learning?", options: ["Learning without labeled data", "Learning with labeled data", "Learning with reinforcement", "None of the above"], correctAnswer: "Learning with labeled data" },
        { question: "Which algorithm is used for classification?", options: ["K-Means", "Decision Tree", "DBSCAN", "KNN"], correctAnswer: "Decision Tree" },
      ],
      medium: [
        { question: "Which evaluation metric is used for classification models?", options: ["Mean Squared Error", "Accuracy", "R-Squared", "Log Loss"], correctAnswer: "Accuracy" },
        { question: "Which technique is used to prevent overfitting?", options: ["Regularization", "Feature Scaling", "Data Augmentation", "Batch Normalization"], correctAnswer: "Regularization" },
        { question: "Which method is used for feature selection?", options: ["PCA", "Gradient Descent", "Backpropagation", "Adam Optimizer"], correctAnswer: "PCA" },
      ],
      advanced: [
        { question: "Which type of neural network is used for image recognition?", options: ["CNN", "RNN", "GAN", "DBN"], correctAnswer: "CNN" },
        { question: "Which optimization algorithm is widely used in deep learning?", options: ["Gradient Descent", "Adam", "RMSprop", "All of the above"], correctAnswer: "All of the above" },
        { question: "Which concept helps models generalize better to unseen data?", options: ["Regularization", "Bias", "Variance", "Overfitting"], correctAnswer: "Regularization" },
      ]
    },
    nlp: {
      basic: [
        { question: "What does NLP stand for?", options: ["Natural Language Processing", "Neural Language Parsing", "Natural Logic Programming", "None of the above"], correctAnswer: "Natural Language Processing" },
        { question: "Which library is widely used for NLP tasks?", options: ["NLTK", "Matplotlib", "Scikit-learn", "TensorFlow"], correctAnswer: "NLTK" },
        { question: "What is tokenization in NLP?", options: ["Breaking text into sentences", "Breaking text into words", "Both A and B", "None"], correctAnswer: "Both A and B" },
      ],
      medium: [
        { question: "Which model is used for sentiment analysis?", options: ["CNN", "RNN", "Naive Bayes", "K-Means"], correctAnswer: "Naive Bayes" },
        { question: "Which technique converts words into numerical representations?", options: ["Stemming", "Lemmatization", "Word Embeddings", "Bag of Words"], correctAnswer: "Word Embeddings" },
        { question: "Which approach is used for named entity recognition?", options: ["CNN", "BERT", "PCA", "KNN"], correctAnswer: "BERT" },
      ],
      advanced: [
        { question: "Which transformer-based model revolutionized NLP?", options: ["BERT", "ResNet", "LSTM", "VGGNet"], correctAnswer: "BERT" },
        { question: "Which NLP task is used to generate summaries?", options: ["Text Classification", "Text Summarization", "Sentiment Analysis", "Named Entity Recognition"], correctAnswer: "Text Summarization" },
        { question: "Which technique is used for handling polysemy in NLP?", options: ["Word Embeddings", "TF-IDF", "Stopword Removal", "Bag of Words"], correctAnswer: "Word Embeddings" },
      ]
    },
    springboot: {
      basic: [
        { question: "Which language is used with Spring Boot?", options: ["Python", "C++", "Java", "Ruby"], correctAnswer: "Java" },
        { question: "Which dependency management tool is commonly used with Spring Boot?", options: ["npm", "Maven", "PIP", "Gradle"], correctAnswer: "Maven" },
        { question: "What annotation is used to mark a Spring Boot application?", options: ["@SpringBootApplication", "@SpringApp", "@EnableSpring", "@BootApp"], correctAnswer: "@SpringBootApplication" },
      ],
      medium: [
        { question: "Which embedded server is commonly used in Spring Boot?", options: ["Apache", "Nginx", "Tomcat", "IIS"], correctAnswer: "Tomcat" },
        { question: "Which file is used to configure properties in a Spring Boot application?", options: ["config.json", "application.properties", "settings.xml", "server.yaml"], correctAnswer: "application.properties" },
        { question: "Which annotation is used to define a REST API controller?", options: ["@RestController", "@Controller", "@Service", "@Component"], correctAnswer: "@RestController" },
      ],
      advanced: [
        { question: "Which annotation is used for dependency injection?", options: ["@Autowired", "@Inject", "@Resource", "All of the above"], correctAnswer: "All of the above" },
        { question: "Which layer in Spring Boot is responsible for business logic?", options: ["Controller", "Service", "Repository", "Model"], correctAnswer: "Service" },
        { question: "Which database is commonly used with Spring Boot?", options: ["MongoDB", "MySQL", "PostgreSQL", "All of the above"], correctAnswer: "All of the above" },
      ]
    }
  }; 

export default questionSets;