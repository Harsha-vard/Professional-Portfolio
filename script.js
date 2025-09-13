function downloadResume() {
  const resumeText = `HARSHAVARDHAN J
+91 9042006579
Kovaipudur, Coimbatore, 641042
harshavardhanj6705@gmail.com

Objective:
To work in a customer-focused environment where I can effectively handle queries and provide excellent service, while enhancing my communication and problem-solving abilities.

Education:
- Sri Krishna Arts and Science College (2023-2026) - B.Sc Computer Technology (Pursuing)
- Ashram Matriculation Higher Secondary School (2019-2023) - Higher Secondary Certificate

Technical Skills:
- C++
- Java
- Python

Soft Skills:
- Communication, Adaptability

Languages:
- English, Tamil

Projects:
- Capstone Project: Railway Ticket Booking Website
- IET Project: Web Authentication and Attack Detecting

Presentations:
- Digital Computing Fundamental - Exhibit

Certifications:
- NPTEL - Database Management Systems
- Coursera - Introduction to Data Science
- Spoken Tutorial - C, C++, Java`;

  const blob = new Blob([resumeText], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Harshavardhan_Resume.txt";
  link.click();
}