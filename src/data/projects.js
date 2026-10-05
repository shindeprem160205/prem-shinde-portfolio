import businessDashboard from "../assets/images/business-dashboard.png"
import aiDocumentQA from "../assets/images/ai-document-qa.png"


export const projects = [
  {
    number: "01",
    title: "Employee Management API",
    category: "Backend / REST API",
    description:
      "A backend system for managing employee records through structured RESTful APIs and CRUD operations.",
    technologies: ["Python", "Django", "DRF", "SQL"],
    github: "https://github.com/shindeprem160205/smart-employee-management-app",
    live: "#",
  },
  {
    number: "02",
    title: "Business Sales Analytics",
    category: "Data Analytics / Power BI",
    description:
      "An interactive business analytics dashboard built with Python and Power BI to analyze sales performance, customer behavior, and business risk.",
    technologies: ["Python", "Pandas", "Power BI"],
    github:
      "https://github.com/shindeprem160205/Business-Sales-Analytics-and-Customer-Risk-Dashboard-using-Python-and-Power-BI",
    live: "#",
    image: businessDashboard,
  },
    {
    number: "03",
    title: "AI Document Q&A",
    category: "AI / RAG / LLM Application",
    description:
      "A production-style RAG application that allows users to upload PDF documents and ask natural-language questions with grounded answers and retrieved sources.",
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "Hugging Face",
      "FAISS",
      "Gemini",
      "Streamlit",
    ],
    github: "https://github.com/shindeprem160205/name-ai-document-qa",
    live: "https://name-ai-document-app.streamlit.app/",
    image: aiDocumentQA,
  },
]
