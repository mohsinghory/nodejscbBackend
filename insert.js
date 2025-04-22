const connection = require('./db');

const counselingData = {
  title: "WBJEE Counseling",
  slug: "wbjee",
  sections: {
    hero: [
      {
        title: "WBJEE Counseling",
        description: "WBJEE counseling helps candidates secure admission in top engineering colleges of West Bengal based on their WBJEE rank.",
        enrollLink: "https://example.com/enroll-wbjee"
      }
    ],
    about: [
      {
        title: "About WBJEE",
        description: "West Bengal Joint Entrance Examination (WBJEE) is conducted for admission into undergraduate engineering and technology courses in West Bengal. Candidates are allotted seats through a centralized counseling process."
      }
    ],
    keypoints: [
      {
        name: "WBJEE",
        keyPoints: [
          "Admission to engineering colleges in West Bengal",
          "Based on WBJEE rank",
          "Online counselling process",
          "Multiple rounds of seat allocation",
          "Special provisions for domicile candidates"
        ]
      }
    ],
    process: [
      {
        title: "WBJEE Counselling Process",
        steps: [
          {
            id: 1,
            title: "Registration",
            description: "Register on the WBJEE counselling portal with your WBJEE roll number and other required details."
          },
          {
            id: 2,
            title: "Fee Payment",
            description: "Pay the registration fee online through the available payment methods."
          },
          {
            id: 3,
            title: "Choice Filling",
            description: "Select and prioritize your preferred colleges and courses from the available options."
          },
          {
            id: 4,
            title: "Seat Allotment",
            description: "Seats are allotted based on rank, category, and choices made. Check your allotment status online."
          },
          {
            id: 5,
            title: "Physical Reporting",
            description: "Report to the allotted institute with original documents for verification and admission."
          }
        ]
      }
    ],
    eligibility: [
      {
        name: "WBJEE",
        eligibility: [
          "Must have appeared in WBJEE examination",
          "Must have qualified in WBJEE with valid rank",
          "Must have passed 10+2 with Physics, Chemistry, and Mathematics",
          "Minimum 45% marks in PCM (40% for reserved categories)",
          "West Bengal domicile (for certain seat categories)"
        ]
      }
    ],
    dates: [
      {
        name: "WBJEE Counselling",
        dates: [
          { event: "Online Registration & Payment", date: "July 5 - 15, 2024" },
          { event: "Choice Filling & Locking", date: "July 16 - 20, 2024" },
          { event: "1st Round Seat Allotment", date: "July 25, 2024" },
          { event: "2nd Round Seat Allotment", date: "August 5, 2024" },
          { event: "Physical Reporting at Institutes", date: "August 10 - 15, 2024" }
        ]
      }
    ],
    documents: [
      {
        name: "WBJEE",
        documents: [
          "WBJEE Rank Card",
          "WBJEE Admit Card",
          "Class 10th Mark Sheet and Certificate",
          "Class 12th Mark Sheet and Certificate",
          "Category Certificate (if applicable)",
          "Domicile Certificate (if applicable)",
          "Income Certificate (if applicable)",
          "Passport Size Photographs",
          "Aadhaar Card",
          "Medical Fitness Certificate"
        ]
      }
    ],
    faqs: [
      {
        name: "JOSAA",
        faq: [
          {
            question: "What is JOSAA counselling?",
            answer: "JOSAA is a joint seat allocation process for admissions to NITs, IIITs, and GFTIs based on ranks obtained in JEE Main and JEE Advanced exams."
          },
          {
            question: "How many rounds of counselling are there in JOSAA?",
            answer: "Typically, JOSAA conducts 6-7 rounds of counselling, including a special round after the main rounds."
          },
          {
            question: "Can I participate in JOSAA with only a JEE Main score?",
            answer: "Yes, you can participate in JOSAA counselling with only a JEE Main score for NITs, IIITs, and GFTIs. However, for IITs, you need a valid JEE Advanced score."
          },
          {
            question: "What happens if I don't pay the acceptance fee after seat allocation?",
            answer: "If you don't pay the acceptance fee within the stipulated time, your allocated seat will be cancelled and offered to other candidates in subsequent rounds."
          }
        ]
      }
    ]
  }
};

const query = 'INSERT INTO counseling_pages (title, slug, sections) VALUES (?, ?, ?)';
connection.query(
  query,
  [counselingData.title, counselingData.slug, JSON.stringify(counselingData.sections)],
  (err, result) => {
    if (err) {
      console.error('Error saving data:', err);
    } else {
      console.log('WBJEE Counseling data saved successfully!');
    }
  }
);
