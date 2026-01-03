// IITM BS Data Science Program - Complete Course Data
const coursesData = {
    foundation: {
        title: "Foundation Level",
        description: "8 mandatory courses covering Mathematics, Statistics, Programming, and English",
        credits: 32,
        duration: "1-3 years",
        courses: [
            {
                code: "BSMA1001",
                name: "Mathematics for Data Science I",
                credits: 4,
                description: "Functions, sequences, limits, differentiation, integration",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=16",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=16",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=16",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC11"
                }
            },
            {
                code: "BSMA1002",
                name: "Statistics for Data Science I",
                credits: 4,
                description: "Descriptive statistics, probability, random variables",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=17",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=17",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=17",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC11"
                }
            },
            {
                code: "BSCS1001",
                name: "Computational Thinking",
                credits: 4,
                description: "Problem-solving, algorithms, computational thinking fundamentals",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=1",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=1",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=1",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC11"
                }
            },
            {
                code: "BSHS1001",
                name: "English I",
                credits: 4,
                description: "Academic writing, communication skills, comprehension",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=15",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=15",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=15",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC11"
                }
            },
            {
                code: "BSMA1003",
                name: "Mathematics for Data Science II",
                credits: 4,
                description: "Linear algebra, matrices, eigenvalues, vector spaces",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=3",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=3",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=3",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC11"
                }
            },
            {
                code: "BSMA1004",
                name: "Statistics for Data Science II",
                credits: 4,
                description: "Hypothesis testing, regression, statistical inference",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=4",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=4",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=4",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC11"
                }
            },
            {
                code: "BSCS1002",
                name: "Programming in Python",
                credits: 4,
                description: "Python basics, data structures, file handling, OOP",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=2",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=2",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=2",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC11"
                }
            },
            {
                code: "BSHS1002",
                name: "English II",
                credits: 4,
                description: "Advanced writing, presentation skills, critical thinking",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=18",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=18",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=18",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC11"
                }
            }
        ]
    },

    diplomaProgramming: {
        title: "Diploma in Programming",
        description: "6 courses + 2 projects focusing on software development and web applications",
        credits: 27,
        duration: "1-2 years",
        prerequisite: "Complete Foundation Level",
        courses: [
            {
                code: "BSCS2001",
                name: "Database Management Systems",
                credits: 4,
                description: "SQL, relational databases, normalization, transactions",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=5",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=5",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=5",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC12"
                }
            },
            {
                code: "BSCS2002",
                name: "Data Structures and Algorithms",
                credits: 4,
                description: "Arrays, linked lists, trees, graphs, sorting, searching",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=6",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=6",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=6",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC12"
                }
            },
            {
                code: "BSCS2005",
                name: "Java Programming",
                credits: 4,
                description: "Java fundamentals, OOP, collections, exception handling",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=9",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=9",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=9",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC12"
                }
            },
            {
                code: "BSSE2001",
                name: "System Commands",
                credits: 3,
                description: "Linux/Unix commands, shell scripting, system administration",
                resources: {
                    pyqs: "#",
                    notes: "#",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC12"
                }
            },
            {
                code: "BSCS2003",
                name: "Modern Application Development I",
                credits: 4,
                description: "HTML, CSS, JavaScript, frontend development",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=7",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=7",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=7",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC12"
                }
            },
            {
                code: "BSCS2006",
                name: "Modern Application Development II",
                credits: 4,
                description: "Backend development, Flask/Django, REST APIs",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=10",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=10",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=10",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC12"
                }
            },
            {
                code: "BSCS2009",
                name: "MAD I Project",
                credits: 2,
                description: "Frontend web application project",
                resources: {
                    guidelines: "#",
                    examples: "#"
                }
            },
            {
                code: "BSCS2010",
                name: "MAD II Project",
                credits: 2,
                description: "Full-stack web application project",
                resources: {
                    guidelines: "#",
                    examples: "#"
                }
            }
        ]
    },

    diplomaDataScience: {
        title: "Diploma in Data Science",
        description: "6 courses + 2 projects with choice between Business Analytics or Deep Learning track",
        credits: 27,
        duration: "1-2 years",
        prerequisite: "Complete Foundation Level",
        courses: [
            {
                code: "BSCS2004",
                name: "Machine Learning Foundations",
                credits: 4,
                description: "Supervised learning, classification, regression, model evaluation",
                type: "mandatory",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=8",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=8",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=8",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC12"
                }
            },
            {
                code: "BSMS2001",
                name: "Business Data Management",
                credits: 4,
                description: "Business analytics, data warehousing, BI tools",
                type: "mandatory",
                resources: {
                    pyqs: "#",
                    notes: "#",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC12"
                }
            },
            {
                code: "BSCS2007",
                name: "Machine Learning Techniques",
                credits: 4,
                description: "Advanced ML algorithms, ensemble methods, feature engineering",
                type: "mandatory",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=11",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=11",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=11",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC12"
                }
            },
            {
                code: "BSCS2008",
                name: "Machine Learning Practice",
                credits: 4,
                description: "Hands-on ML projects, real-world datasets, model deployment",
                type: "mandatory",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=12",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=12",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=12",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC12"
                }
            },
            {
                code: "BSSE2002",
                name: "Tools in Data Science",
                credits: 3,
                description: "NumPy, Pandas, Matplotlib, data manipulation tools",
                type: "mandatory",
                resources: {
                    pyqs: "#",
                    notes: "#",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC12"
                }
            },
            {
                code: "ML-PROJECT",
                name: "Machine Learning Project",
                credits: 2,
                description: "ML project based on mandatory courses",
                type: "mandatory",
                resources: {
                    guidelines: "#",
                    examples: "#"
                }
            }
        ],
        tracks: {
            businessAnalytics: {
                name: "Business Analytics Track",
                courses: [
                    {
                        code: "BSMS2002",
                        name: "Business Analytics",
                        credits: 4,
                        description: "Predictive analytics, customer analytics, marketing analytics",
                        resources: {
                            pyqs: "#",
                            notes: "#",
                            syllabus: "https://study.iitm.ac.in/ds/academics.html#AC12"
                        }
                    },
                    {
                        code: "BDM-PROJECT",
                        name: "BDM Project",
                        credits: 2,
                        description: "Business data management project",
                        resources: {
                            guidelines: "#",
                            examples: "#"
                        }
                    }
                ]
            },
            deepLearning: {
                name: "Deep Learning & AI Track",
                courses: [
                    {
                        code: "BSCS2011",
                        name: "Introduction to Deep Learning and Generative AI",
                        credits: 4,
                        description: "Neural networks, CNNs, RNNs, transformers, GANs",
                        resources: {
                            pyqs: "#",
                            notes: "#",
                            syllabus: "https://study.iitm.ac.in/ds/academics.html#AC12"
                        }
                    },
                    {
                        code: "DL-PROJECT",
                        name: "Deep Learning Project",
                        credits: 2,
                        description: "Deep learning application project",
                        resources: {
                            guidelines: "#",
                            examples: "#"
                        }
                    }
                ]
            }
        }
    },

    degree: {
        title: "BSc/BS Degree Level",
        description: "Advanced courses and electives for BSc and BS degrees",
        credits: "28+ credits",
        duration: "1-3 years",
        prerequisite: "Complete both Diploma levels",
        coreCourses: [
            {
                code: "BSCS3001",
                name: "Software Engineering",
                credits: 4,
                description: "SDLC, design patterns, testing, project management",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=26",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=26",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=26",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC15"
                }
            },
            {
                code: "BSCS3002",
                name: "Software Testing",
                credits: 4,
                description: "Testing methodologies, automation, quality assurance",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=25",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=25",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=25",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC15"
                }
            },
            {
                code: "BSCS3003",
                name: "AI: Search Methods for Problem Solving",
                credits: 4,
                description: "Search algorithms, heuristics, game playing, constraint satisfaction",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=27",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=27",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=27",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC15"
                }
            },
            {
                code: "BSCS3004",
                name: "Deep Learning",
                credits: 4,
                description: "Advanced neural networks, computer vision, NLP applications",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=28",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=28",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=28",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC15"
                }
            },
            {
                code: "BSGN3001",
                name: "Strategies for Professional Growth",
                credits: 4,
                description: "Career development, soft skills, professional communication",
                resources: {
                    quiz1: "https://www.quizpractice.space/exam/9251bc3a-e33e-45e0-bcf0-b16a0ea5b5fa?sub=24",
                    quiz2: "https://www.quizpractice.space/exam/1948ee72-5c62-4816-97c8-7d662330a220?sub=24",
                    endterm: "https://www.quizpractice.space/exam/7a6ff569-f50c-40e7-a08b-f5c334392600?sub=24",
                    syllabus: "https://study.iitm.ac.in/ds/academics.html#AC15"
                }
            }
        ],
        electives: [
            "Reinforcement Learning",
            "Natural Language Processing",
            "Big Data Processing",
            "Financial Forensics",
            "Data Visualization",
            "Computer Vision",
            "Time Series Analysis",
            "Bayesian Statistics",
            "Advanced Algorithms",
            "Blockchain Technology",
            "Cloud Computing",
            "Information Security",
            "Distributed Systems",
            "Recommender Systems"
        ]
    }
};

// Grading System
const gradingSystem = {
    scale: [
        { grade: "S", points: 10, range: "T ≥ 90", description: "Outstanding" },
        { grade: "A", points: 9, range: "90 > T ≥ 80", description: "Excellent" },
        { grade: "B", points: 8, range: "80 > T ≥ 70", description: "Very Good" },
        { grade: "C", points: 7, range: "70 > T ≥ 60", description: "Good" },
        { grade: "D", points: 6, range: "60 > T ≥ 50", description: "Pass" },
        { grade: "E", points: 4, range: "50 > T ≥ 40", description: "Fail" },
        { grade: "F", points: 0, range: "T < 40", description: "Fail" },
        { grade: "U", points: 0, range: "Absent/Incomplete", description: "Fail" }
    ],
    passingGrade: "D",
    passingPoints: 6
};

// Important Links
const importantLinks = {
    official: [
        { name: "Official Website", url: "https://study.iitm.ac.in/ds/", icon: "🎓" },
        { name: "Student Portal", url: "https://ds.study.iitm.ac.in/auth/login", icon: "📚" },
        { name: "Discourse Community", url: "https://discourse.onlinedegree.iitm.ac.in/", icon: "💬" },
        { name: "Academics", url: "https://study.iitm.ac.in/ds/academics.html", icon: "📖" },
        { name: "FAQ", url: "https://study.iitm.ac.in/ds/faq.html", icon: "❓" },
        { name: "Important Docs", url: "https://study.iitm.ac.in/ds/archive.html", icon: "📄" }
    ],
    resources: [
        { name: "Academic Calendar", url: "https://study.iitm.ac.in/ds/academic_calendar.html", icon: "📅" },
        { name: "Admissions", url: "https://study.iitm.ac.in/ds/admissions.html", icon: "🎯" },
        { name: "Fee Structure", url: "https://study.iitm.ac.in/ds/academics.html#AC10", icon: "💰" },
        { name: "Exam Cities", url: "https://study.iitm.ac.in/ds/academics.html#AC9", icon: "🗺️" }
    ],
    community: [
        { name: "Student Blog", url: "https://bsinsider.in/", icon: "✍️" },
        { name: "Testimonials", url: "https://study.iitm.ac.in/ds/testimonials.html", icon: "⭐" },
        { name: "Student Achievements", url: "https://study.iitm.ac.in/student-achievements/toppers", icon: "🏆" }
    ]
};
