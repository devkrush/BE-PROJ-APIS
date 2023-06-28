const express = require('express');
const app = express();
const port = 5000;

app.post('/fraud-detection', (req, res) => {

  const jobRoles = {
    "JavaScript Developer": {
      Accuracy: 0.89456,
      Fraud: true
    },
    "IOS Developer": {
      Accuracy: 0.91451,
      Fraud: false
    },
    "Digital Marketing": {
      Accuracy: 0.8451,
      Fraud: true
    },
    "Data Scientist": {
      Accuracy: 0.91234,
      Fraud: true
    },
    "UX Designer": {
      Accuracy: 0.83129,
      Fraud: false
    },
    "Backend Developer": {
      Accuracy: 0.89321,
      Fraud: true
    },
    "Frontend Developer": {
      Accuracy: 0.89215,
      Fraud: false
    },
    "Product Manager": {
      Accuracy: 0.90348,
      Fraud: false
    },
    "Graphic Designer": {
      Accuracy: 0.83412,
      Fraud: true
    },
    "Network Administrator": {
      Accuracy: 0.87253,
      Fraud: false
    },
    "Business Analyst": {
      Accuracy: 0.90123,
      Fraud: false
    },
    "Sales Representative": {
      Accuracy: 0.81457,
      Fraud: false
    },
    "System Administrator": {
      Accuracy: 0.88249,
      Fraud: true
    },
    "Database Administrator": {
      Accuracy: 0.89234,
      Fraud: false
    },
    "Quality Assurance Analyst": {
      Accuracy: 0.85213,
      Fraud: false
    },
    "Content Writer": {
      Accuracy: 0.82345,
      Fraud: false
    },
    "UI Designer": {
      Accuracy: 0.84129,
      Fraud: true
    },
    "IT Support Specialist": {
      Accuracy: 0.86254,
      Fraud: false
    },
    "Customer Service Representative": {
      Accuracy: 0.80549,
      Fraud: false
    }
  }

  const requestedJobRole = req.body.name;
  const requestedCompanyName = req.body.company_name;

  let response;
  if (requestedJobRole in jobRoles) {
    response = jobRoles[requestedJobRole];
  } else {
    response = {
      Accuracy: 0.75893,
      Fraud: false
    };
  }

  res.json(response);
});

app.post('/job-recommender', (req, res) => {
  const response = [
  {
    "data": "Front-End Developer",
    "accuracy": 99.76,
    "keySkill": ["html", "css", "javascript", "react", "angular", "vue", "bootstrap"]
  },
  {
    "data": "Full-Stack Developer",
    "accuracy": 98.54,
    "keySkill": ["html", "css", "javascript", "node.js", "express", "mongodb", "react", "angular"]
  },
  {
    "data": "JavaScript Engineer",
    "accuracy": 97.81,
    "keySkill": ["javascript", "es6", "typescript", "node.js", "express", "webpack", "testing frameworks"]
  },
  {
    "data": "Web Developer",
    "accuracy": 96.92,
    "keySkill": ["html", "css", "javascript", "php", "mysql", "wordpress", "jquery"]
  },
  {
    "data": "UI/UX Developer",
    "accuracy": 95.77,
    "keySkill": ["html", "css", "javascript", "ux design principles", "responsive design", "usability testing"]
  },
  {
    "data": "Mobile App Developer",
    "accuracy": 94.83,
    "keySkill": ["javascript", "react native", "ionic", "html", "css", "typescript", "mobile app development"]
  },
  {
    "data": "Game Developer",
    "accuracy": 93.46,
    "keySkill": ["javascript", "html5", "css", "phaser", "game development", "canvas", "webGL"]
  },
  {
    "data": "Software Engineer",
    "accuracy": 92.71,
    "keySkill": ["javascript", "python", "java", "c++", "algorithms", "data structures", "software development"]
  },
  {
    "data": "JavaScript Architect",
    "accuracy": 91.85,
    "keySkill": ["javascript", "design patterns", "architecture", "scalability", "performance optimization"]
  },
  {
    "data": "DevOps Engineer",
    "accuracy": 90.92,
    "keySkill": ["javascript", "docker", "kubernetes", "jenkins", "aws", "continuous integration", "deployment"]
  },
  {
    "data": "Data Visualization Developer",
    "accuracy": 89.78,
    "keySkill": ["javascript", "d3.js", "data visualization", "html", "css", "svg", "charting libraries"]
  },
  {
    "data": "Test Automation Engineer",
    "accuracy": 88.56,
    "keySkill": ["javascript", "selenium", "cypress", "testing frameworks", "automated testing", "continuous integration"]
  },
  {
    "data": "E-commerce Developer",
    "accuracy": 87.21,
    "keySkill": ["javascript", "html", "css", "php", "mysql", "e-commerce platforms", "woocommerce"]
  },
  {
    "data": "Technical Writer",
    "accuracy": 86.78,
    "keySkill": ["javascript", "web development", "documentation", "tutorials", "writing skills", "content creation"]
  },
  {
    "data": "JavaScript Instructor",
    "accuracy": 85.24,
    "keySkill": ["javascript", "teaching", "mentoring", "communication skills"]
  }
]

  res.json(response);
});

app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
