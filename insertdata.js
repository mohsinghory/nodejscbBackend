const connection = require('./db'); // calling database connection 


const universities = [
  {
    id: 1,
    name: "Bennett University",
    location: "University in Greater Noida, Uttar Pradesh",
    imgSrc: "./logo/bennett.jpeg",
    route: "/UniversityLandingPage"
  },
  {
    id: 2,
    name: "IILM University Gr. Noida",
    location: "University in Greater Noida, Uttar Prades",
    imgSrc: "./logo/iilm.png",
    route: "/UniversityLandingPage"
  },
  {
    id: 3,
    name: "IILM University Gurugram",
    location: "University in Gurugram, Haryana",
    imgSrc: "./logo/iilm.png",
    route: "/UniversityLandingPage"
  },
  {
    id: 4,
    name: "UPES",
    location: "University in Dehradun, Uttarakhand",
    imgSrc: "./logo/images.png",
    route: "/UniversityLandingPage"
  },
  {
    id: 5,
    name: "Quantum University",
    location: "University in Jaysingha, Uttarakhand",
    imgSrc: "https://colleges18.s3.ap-south-1.amazonaws.com/mcv23201_unnamed_6b12b13630.png",
    route: "/UniversityLandingPage"
  },
  {
    id: 6,
    name: "K.R Mangalam University",
    location: "University in Sohna Rural, Haryana",
    imgSrc: "https://www.campusoption.com/images/colleges/logos/10_11_16_091512_kr_ll.jpg",
    route: "/UniversityLandingPage"
  },
  {
    id: 7,
    name: "Noida Internationl University",
    location: "University in Noida",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjALaNusyH6KfIzJvE9AC1-2tIbI8oXT_s5A&s",
    route: "/UniversityLandingPage"
  },
  {
    id: 8,
    name: "SRM University",
    location: "University in ghaziabad",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUoko4aGH9-9mtvI8DS5KYIiDSXtUm9QiN5g&s",
    route: "/UniversityLandingPage"
  },
  {
    id: 9,
    name: "GNIOT Institute",
    location: "University in Greater Noida",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAw34JTF8201KBY4YigyDeEzH9OZNFceMMJg&s",
    route: "/UniversityLandingPage"
  },
  {
    id: 10,
    name: "Mangalmay Institute",
    location: "University in Greater Noida",
    imgSrc: "https://myapplicationform.in/wp-content/uploads/Mangalmay-Institute-of-Management-Technology_application_form.jpg",
    route: "/UniversityLandingPage"
  },
  {
    id: 11,
    name: "LPU University",
    location: "University in Jalandhar, Panjab",
    imgSrc: "https://www.vidyalive.com/wp-content/uploads/2024/07/lpu.png",
    route: "/UniversityLandingPage"
  },
  {
    id: 12,
    name: "Chitkara University",
    location: "Private university in Chandigarh",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jwFDqwnLlghKlMCDXPF34ikUpbXDP_2ahA&s",
    route: "/UniversityLandingPage"
  },
  {
    id: 13,
    name: "Shoolini University",
    location: "University in Solan, Himachal Pradesh",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTW5fZBC4x7FbMdhlRSCerZ2hsesU6f-HQTQ&s",
    route: "/UniversityLandingPage"
  },
  {
    id: 14,
    name: "Uttaranchal University",
    location: "Research university in Dehradun, Uttarakhand",
    imgSrc: "https://images.shiksha.com/mediadata/images/1631180032phpvUgTqj.jpeg",
    route: "/UniversityLandingPage"
  },
  {
    id: 15,
    name: "Tula's Institute",
    location: "College in Dehradun, Uttarakhand",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGyo3y9oG1zboBk2KGWCRdYCvO9W-7TxXoA&s",
    route: "/UniversityLandingPage"
  },
  {
    id: 16,
    name: "Rit Institute",
    location: "College in Roorkee, Uttarakhand",
    imgSrc: "https://ritroorkee.com/wp-content/uploads/2024/03/Untitled-design-31.png",
    route: "/UniversityLandingPage"
  },
  {
    id: 17,
    name: "Sandip University",
    location: "University in Nashik, Maharashtra",
    imgSrc: "./logo/sandip.png",
    route: "/UniversityLandingPage"
  },
  {
    id: 18,
    name: "SR University",
    location: "University in Telangana",
    imgSrc: "https://certifier-production-amplify.s3.eu-west-1.amazonaws.com/public/3a2f80a0-26ad-406a-8dc6-b43fe86756a2%2Fcertificate-designs%2Fimages%2F04-10-2024-09%3A46%3A56_SRU_Main_Logo_Horizontal_Colour__2__page-0001-removebg-preview.png",
    route: "/UniversityLandingPage"
  },
  {
    id: 19,
    name: "Sandip University",
    location: "University in Madhubani, Bihar",
    imgSrc: "./logo/sandip.png",
    route: "/UniversityLandingPage"
  }
]



universities.forEach(card => {
  const query = `INSERT INTO universities (id, name, location, imgSrc, route) VALUES (?, ?, ?, ?, ?)`;
  const values = [card.id, card.name, card.location, card.imgSrc, card.route];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error inserting data: ', err);
    } else {
      console.log(`Inserted: ${card.name}`);
    }
  });
});

// Close connection after all queries are done
setTimeout(() => {
  connection.end();
}, 2000); // Adjust timing if needed
