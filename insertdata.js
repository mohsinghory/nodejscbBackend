const connection = require('./db'); // calling database connection 


    // const CounselingCard = [
    //   {
    //     id: 1,
    //     title: "JoSAA Counselling",
    //     description: "Joint Seat Allocation Authority for admissions to IITs, NITs, IIITs and other GFTIs through JEE Main and JEE Advanced ranks.",
    //     icon: "🏛️",
    //      link: "https://josaa.nic.in"
    //   },
    //   {
    //     id: 2,
    //     title: "CSAB Counselling",
    //     description: "Central Seat Allocation Board handles admissions to NITs, IIITs and GFTIs through JEE Main ranks after JoSAA rounds.",
    //     icon: "🎓",
    //     link: "https://csab.nic.in"
    //   },
    //   {
    //     id: 3,
    //     title: "UPTAC Counselling",
    //     description: "Uttar Pradesh Technical Admission Counselling for engineering admissions in UP state colleges through UPSEE/AKTU ranks.",
    //     icon: "🏢",
    //     link: "https://uptac.admissions.nic.in"
    //   },
    //   {
    //     id: 4,
    //     title: "WBJEE Counselling",
    //     description: "West Bengal Joint Entrance Examination Board for engineering admissions in West Bengal colleges.",
    //     icon: "🎯",
      
    //     link: "https://wbjeeb.nic.in"
    //   },
    //   {
    //     id: 5,
    //     title: "COMEDK Counselling",
    //     description: "Consortium of Medical, Engineering and Dental Colleges of Karnataka for private engineering colleges in Karnataka.",
    //     icon: "🔬",
      
    //     link: "https://www.comedk.org"
    //   },
    //   {
    //     id: 6,
    //     title: "JAC Delhi Counselling",
    //     description: "Joint Admission Counselling for Delhi state engineering colleges like DTU, NSUT, IGDTUW and more.",
    //     icon: "🏙️",
    //    link: "https://jacdelhi.admissions.nic.in"
    //   },
    //   {
    //     id: 7,
    //     title: "MHT CET Counselling",
    //     description: "Maharashtra Common Entrance Test for engineering admissions across colleges in Maharashtra.",
    //     icon: "🏫",
      
    //     link: "https://fe2023.mahacet.org"
    //   },
    //   {
    //     id: 8,
    //     title: "JAC Chandigarh",
    //     description: "Joint Admission Committee for engineering admissions in Chandigarh colleges like PEC, CCET and more.",
    //     icon: "🏛️",
    //      link: "https://jacchd.admissions.nic.in"
    //   },
    //   {
    //     id: 9,
    //     title: "PTU Counselling",
    //     description: "Punjab Technical University (I.K. Gujral Punjab Technical University) admissions for colleges across Punjab.",
    //     icon: "🎓",
    //      link: "https://ptu.ac.in"
    //   },
    //   {
    //     id: 10,
    //     title: "MPDTE Counselling",
    //     description: "Madhya Pradesh Directorate of Technical Education counselling for MP state engineering colleges.",
    //     icon: "🏢",
      
    //     link: "https://dte.mponline.gov.in"
    //   },
    //   {
    //     id: 11,
    //     title: "UGEAC Counselling",
    //     description: "Uttar Pradesh State Entrance Examination counselling for state colleges in Uttar Pradesh.",
    //     icon: "🏫",
    //      link: "https://aktu.ac.in"
    //   },
    //   {
    //     id: 12,
    //     title: "HBTU Counselling",
    //     description: "Harcourt Butler Technical University direct admissions and counselling for their prestigious programs.",
    //     icon: "🎯",
      
    //     link: "https://hbtu.ac.in"
    //   },
    //   {
    //     id: 13,
    //     title: "MMMUT Counselling",
    //     description: "Madan Mohan Malaviya University of Technology counselling for admission to various engineering programs.",
    //     icon: "🔬",
      
    //     link: "https://mmmut.ac.in"
    //   },
    //   {
    //     id: 14,
    //     title: "REAP Counselling",
    //     description: "Rajasthan Engineering Admission Process for engineering colleges across Rajasthan state.",
    //     icon: "🏙️",
    //      link: "https://www.reaprajasthan.com"
    //   },
    //   {
    //     id: 15,
    //     title: "Other State Counselling",
    //     description: "Various other state-level counselling processes for engineering admissions across different states in India.",
    //     icon: "🇮🇳",
    //      link: "#"
    //   },
    // ];


// Insert function
CounselingCard.forEach(card => {
  const query = `INSERT INTO counseling_cards (id, title, description, icon, link) VALUES (?, ?, ?, ?, ?)`;

  const values = [card.id, card.title, card.description, card.icon, card.link];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error inserting data: ', err);
    } else {
      console.log(`Inserted: ${card.title}`);
    }
  });
});

// Close connection after all queries are done
setTimeout(() => {
  connection.end();
}, 2000); // Adjust timing if needed
