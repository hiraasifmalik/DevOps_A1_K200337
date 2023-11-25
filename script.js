// Sample project data (replace this with your actual project data)
const projects = [
    // C# Projects
    { name: 'Hospital Management System', technology: 'C#', description: 'Manage patient records and appointments.' },
    { name: 'Inventory Management System', technology: 'C#', description: 'Track inventory levels, orders, and suppliers.' },
    { name: 'Online Banking System', technology: 'C#', description: 'Secure user authentication and transaction handling.' },
    { name: 'Unity Game Development', technology: 'C#', description: 'Create games using Unity game engine.' },
  
    // Java Projects
    { name: 'Student Management System', technology: 'Java', description: 'Manage student records, grades, and courses.' },
    { name: 'Library Management System', technology: 'Java', description: 'Manage books, users, and borrowing/returning books.' },
    { name: 'E-commerce Website', technology: 'Java', description: 'Build an online store with product listings and cart.' },
    { name: 'Android App Development', technology: 'Java', description: 'Develop mobile applications for various purposes.' },
  
    // Node.js Projects
    { name: 'Blog or CMS', technology: 'Node.js', description: 'Create a content management system or a blog platform.' },
    { name: 'Real-time Chat Application', technology: 'Node.js', description: 'Build a chat application with real-time messaging.' },
    { name: 'RESTful API Development', technology: 'Node.js', description: 'Design and implement APIs for various purposes.' },
    { name: 'E-commerce Backend', technology: 'Node.js', description: 'Build the backend for an e-commerce platform.' }
    // Add more projects here
  ];
  
  
  
  // Sample education data (replace this with your actual education data)
  const education = [
    // High School Courses
    { grade: '9th', course: 'Algebra' },
    { grade: '9th', course: 'English Literature' },
    { grade: '9th', course: 'Biology' },
    { grade: '9th', course: 'World History' },
    // ... other 9th-grade courses
  
    { grade: '10th', course: 'Geometry' },
    { grade: '10th', course: 'American Literature' },
    { grade: '10th', course: 'Chemistry' },
    { grade: '10th', course: 'US History' },
    // ... other 10th-grade courses
  
    { grade: '11th', course: 'Trigonometry' },
    { grade: '11th', course: 'Foreign Language' },
    { grade: '11th', course: 'Physics' },
    { grade: '11th', course: 'Economics' },
    // ... other 11th-grade courses
  
    { grade: '12th', course: 'Calculus' },
    { grade: '12th', course: 'Computer Science Basics' },
    { grade: '12th', course: 'Government' },
    { grade: '12th', course: 'Electives (e.g., Arts, Music)' },
    // ... other 12th-grade courses
  
    // Undergraduate Computer Science Courses (Sample)
    { grade: 'Freshman', course: 'Introduction to Computer Science' },
    { grade: 'Freshman', course: 'Discrete Mathematics' },
    { grade: 'Freshman', course: 'English Composition' },
    { grade: 'Freshman', course: 'Physics for Computer Science' },
    // ... other freshman-level courses
  
    { grade: 'Sophomore', course: 'Data Structures and Algorithms' },
    { grade: 'Sophomore', course: 'Computer Organization and Architecture' },
    { grade: 'Sophomore', course: 'Social Sciences Elective' },
    { grade: 'Sophomore', course: 'Foreign Language Elective' },
    // ... other sophomore-level courses
  
    { grade: 'Junior', course: 'Operating Systems' },
    { grade: 'Junior', course: 'Software Engineering Principles' },
    { grade: 'Junior', course: 'Database Management Systems' },
    { grade: 'Junior', course: 'Advanced Mathematics' },
    // ... other junior-level courses
  
    { grade: 'Senior', course: 'Computer Networks' },
    { grade: 'Senior', course: 'Capstone Project/Thesis' },
    { grade: 'Senior', course: 'Electives/Specializations' },
    { grade: 'Senior', course: 'Humanities Elective' },
    // ... other senior-level courses
  
  ];
  
  
// Function to display projects based on technology filter
function displayProjects() {
    const filterValue = document.getElementById('filterInput').value.toLowerCase();
    const projectContainer = document.getElementById('projectList');
    projectContainer.innerHTML = '';
  
    projects.forEach(project => {
      if (project.technology.toLowerCase().includes(filterValue)) {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
  
        const title = document.createElement('h3');
        title.textContent = project.name;
  
        const tech = document.createElement('p');
        tech.textContent = `Technology: ${project.technology}`;
  
        const description = document.createElement('p');
        description.textContent = project.description;
  
        projectCard.appendChild(title);
        projectCard.appendChild(tech);
        projectCard.appendChild(description);
  
        projectContainer.appendChild(projectCard);
      }
    });
  }
  
  
  // Function to display education details
function displayEducation() {
    const educationContainer = document.getElementById('educationContainer');
    educationContainer.innerHTML = '';
  
    const uniqueGrades = [...new Set(education.map(course => course.grade))]; // Extract unique grades
  
    uniqueGrades.forEach(grade => {
      const gradeBox = document.createElement('div');
      gradeBox.classList.add('grade-box');
  
      const gradeTitle = document.createElement('h3');
      gradeTitle.classList.add('grade-title');
      gradeTitle.textContent = `Grade ${grade}`;
      gradeBox.appendChild(gradeTitle);
  
      const coursesForGrade = education.filter(course => course.grade === grade);
      coursesForGrade.forEach(course => {
        const courseElement = document.createElement('p');
        courseElement.textContent = course.course;
        gradeBox.appendChild(courseElement);
      });
  
      educationContainer.appendChild(gradeBox);
    });
  }
  
// Sample certifications data (replace this with your actual certifications)
const certifications = [
  'AWS Certified Machine Learning - Specialty',
  'Google Cloud Professional Machine Learning Engineer',
  'AWS Certified Solutions Architect - Associate',
  'Microsoft Certified: Azure Administrator Associate',
  'AWS Certified DevOps Engineer - Professional',
  'Microsoft Certified: Azure DevOps Engineer Expert',
  'Certified Information Systems Security Professional (CISSP)',
  'Certified Cloud Security Professional (CCSP)',
  // Add more certification details
];

// Function to display certifications as tiles
function displayCertifications() {
  const certificationContainer = document.getElementById('certificationContainer');
  certificationContainer.innerHTML = '';

  certifications.forEach(certification => {
    const certificationTile = document.createElement('div');
    certificationTile.classList.add('certification-tile');

    const certElement = document.createElement('p');
    certElement.textContent = certification;

    certificationTile.appendChild(certElement);
    certificationContainer.appendChild(certificationTile);
  });
}
  // Event listener for filtering projects
  document.getElementById('filterInput').addEventListener('input', displayProjects);
  
  // Initial display of projects and education
  displayProjects();
  displayEducation();
  displayCertifications(); 