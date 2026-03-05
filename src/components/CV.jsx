"use client";
import { useRef } from "react";
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTypescript, SiReact, SiNextdotjs, SiRedux, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiGit, SiDocker, SiAws, SiMongodb, SiPostgresql, SiFigma, SiPython, SiAngular } from "react-icons/si";

export default function CV() {
  const cvRef = useRef(null);

  const downloadCV = async () => {
    // Create a temporary div for the CV content with better structure
    const cvContent = document.createElement('div');
    cvContent.style.fontFamily = 'Arial, sans-serif';
    cvContent.style.maxWidth = '800px';
    cvContent.style.margin = '0 auto';
    cvContent.style.padding = '40px';
    cvContent.style.background = 'white';
    cvContent.style.color = '#333';
    cvContent.style.lineHeight = '1.6';

    cvContent.innerHTML = `
      <div style="text-align: center; margin-bottom: 40px; border-bottom: 3px solid #6366f1; padding-bottom: 20px;">
        <div style="font-size: 2.5rem; font-weight: 700; color: #6366f1; margin-bottom: 10px;">Do Van Tung</div>
        <div style="font-size: 1.2rem; color: #666; margin-bottom: 15px;">Frontend Engineer</div>
        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; font-size: 0.9rem;">
          <div>📧 tungdo.dev@example.com</div>
          <div>📱 +84 123 456 789</div>
          <div>📍 Ho Chi Minh City, Vietnam</div>
          <div>🔗 linkedin.com/in/t%C3%B9ng-%C4%91%E1%BB%97-v%C4%83n-475b8637a/</div>
        </div>
      </div>

      <div style="margin-bottom: 30px;">
        <div style="font-size: 1.3rem; font-weight: 600; color: #6366f1; margin-bottom: 15px; border-bottom: 2px solid #f3f4f6; padding-bottom: 5px;">Professional Summary</div>
        <div style="font-size: 1rem; line-height: 1.7; color: #555;">
          Frontend Engineer with nearly 4 years of experience building scalable web applications and enterprise management systems.
          Main expertise in React, Next.js, Vue.js, and TypeScript. Experienced in banking platforms, warehouse management systems,
          KPI dashboards, and enterprise accounting software. Focused on clean, maintainable code and intuitive user experiences.
        </div>
      </div>

      <div style="margin-bottom: 30px;">
        <div style="font-size: 1.3rem; font-weight: 600; color: #6366f1; margin-bottom: 15px; border-bottom: 2px solid #f3f4f6; padding-bottom: 5px;">Work Experience</div>
        
        <div style="margin-bottom: 20px; padding-left: 20px; border-left: 3px solid #e5e7eb;">
          <div style="font-weight: 600; font-size: 1.1rem; color: #333;">Frontend Engineer</div>
          <div style="font-weight: 500; color: #6366f1;">ISB Vietnam</div>
          <div style="font-size: 0.9rem; color: #666; margin-bottom: 8px;">Jul 2022 - Present</div>
          <div style="color: #555; line-height: 1.6;">
            • Participated in implementation and coding phases of software development<br>
            • Performed unit testing and debugging to ensure application quality<br>
            • Researched and applied new technologies when required by projects<br>
            • Updated and improved applications based on customer requirements
          </div>
        </div>

        <div style="margin-bottom: 20px; padding-left: 20px; border-left: 3px solid #e5e7eb;">
          <div style="font-weight: 600; font-size: 1.1rem; color: #333;">Frontend Engineer</div>
          <div style="font-weight: 500; color: #6366f1;">BUSO</div>
          <div style="font-size: 0.9rem; color: #666; margin-bottom: 8px;">Oct 2020 - Dec 2021</div>
          <div style="color: #555; line-height: 1.6;">
            • Developed interfaces for enterprise management applications<br>
            • Updated and improved application features based on customer requirements<br>
            • Collaborated with team members to improve UI functionality
          </div>
        </div>
      </div>

      <div style="margin-bottom: 30px;">
        <div style="font-size: 1.3rem; font-weight: 600; color: #6366f1; margin-bottom: 15px; border-bottom: 2px solid #f3f4f6; padding-bottom: 5px;">Technical Skills</div>
        <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 15px;">
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #6366f1;">
            <h4 style="font-weight: 600; margin-bottom: 10px; color: #333;">Frontend</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">React</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Next.js</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Vue.js</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">TypeScript</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">JavaScript</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">TailwindCSS</span>
            </div>
          </div>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #6366f1;">
            <h4 style="font-weight: 600; margin-bottom: 10px; color: #333;">State Management & Backend</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Redux</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Redux-Saga</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Vuex</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Node.js</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Socket.IO</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">MongoDB</span>
            </div>
          </div>

          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #6366f1;">
            <h4 style="font-weight: 600; margin-bottom: 10px; color: #333;">Tools</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Git</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Jira</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Angular</span>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 30px;">
        <div style="font-size: 1.3rem; font-weight: 600; color: #6366f1; margin-bottom: 15px; border-bottom: 2px solid #f3f4f6; padding-bottom: 5px;">Featured Projects</div>
        <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 15px;">
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <div style="font-weight: 600; color: #333; margin-bottom: 5px;">KPI Management System</div>
            <div style="font-size: 0.8rem; color: #6366f1; margin-bottom: 8px;">Vue 3 • Ant Design Vue • Vuex • Chart.js • Socket.IO • TypeScript</div>
            <div style="font-size: 0.9rem; color: #555; line-height: 1.5;">Full-stack KPI management platform supporting BSC methodology and multi-level approval workflows.</div>
          </div>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <div style="font-weight: 600; color: #333; margin-bottom: 5px;">PaySplit</div>
            <div style="font-size: 0.8rem; color: #6366f1; margin-bottom: 8px;">React Native • Expo • TypeScript • Node.js • MongoDB • Socket.IO</div>
            <div style="font-size: 0.9rem; color: #555; line-height: 1.5;">Mobile application for splitting bills and managing group payments with MoMo payment integration.</div>
          </div>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <div style="font-weight: 600; color: #333; margin-bottom: 5px;">Banking System (FUJIA)</div>
            <div style="font-size: 0.8rem; color: #6366f1; margin-bottom: 8px;">ReactJS • TypeScript • Next.js • Redux • Redux-Saga</div>
            <div style="font-size: 0.9rem; color: #555; line-height: 1.5;">Large-scale banking platform supporting financial operations and internal workflows.</div>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 30px;">
        <div style="font-size: 1.3rem; font-weight: 600; color: #6366f1; margin-bottom: 15px; border-bottom: 2px solid #f3f4f6; padding-bottom: 5px;">Education</div>
        <div style="margin-bottom: 20px; padding-left: 20px; border-left: 3px solid #e5e7eb;">
          <div style="font-weight: 600; font-size: 1.1rem; color: #333;">Bachelor of Computer Science</div>
          <div style="font-weight: 500; color: #6366f1;">VNUHCM - University Of Science</div>
          <div style="font-size: 0.9rem; color: #666; margin-bottom: 8px;">Graduated 08/2020</div>
        </div>
      </div>
    `;

    // Try html2pdf first, fallback to print if it fails
    const tryHtml2Pdf = async () => {
      try {
        // Dynamically import html2pdf only when needed
        const html2pdf = (await import('html2pdf.js')).default;

        const opt = {
          margin: [0.5, 0.5, 0.5, 0.5],
          filename: 'TungDo_CV.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff'
          },
          jsPDF: {
            unit: 'in',
            format: 'a4',
            orientation: 'portrait',
            compress: true
          }
        };

        return await html2pdf()
          .set(opt)
          .from(cvContent)
          .save();
      } catch (err) {
        console.error('html2pdf failed:', err);
        throw err;
      }
    };

    const tryPrintMethod = () => {
      // Create a new window for printing
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Tung Do - CV</title>
            <style>
              @media print {
                body { margin: 0; }
                * { box-sizing: border-box; }
              }
            </style>
          </head>
          <body>
            ${cvContent.outerHTML}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();

      // Wait a bit then print
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    };

    // Try html2pdf first, fallback to print
    try {
      await tryHtml2Pdf();
    } catch (error) {
      console.error('PDF generation failed:', error);
      console.log('Falling back to print method');
      tryPrintMethod();
    }
  };

  return (
    <div id="cv" className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Download <span className="text-indigo-500">CV</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional CV with all your experience, skills, and projects.
            Ready to impress potential employers.
          </p>
        </div>

        {/* CV Preview */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
          <div className="bg-indigo-500 text-white p-6">
            <h2 className="text-2xl font-bold">Do Van Tung</h2>
            <p className="text-indigo-100">Frontend Engineer</p>
          </div>

          <div className="p-6 text-gray-800">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-indigo-600">Contact</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-indigo-500" />
                    tungdo.dev@example.com
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-indigo-500" />
                    +84 123 456 789
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-indigo-500" />
                    Ho Chi Minh City, Vietnam
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-indigo-600">Experience</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <div className="font-medium">Frontend Engineer</div>
                    <div className="text-gray-600">ISB Vietnam • Jul 2022–Present</div>
                  </div>
                  <div>
                    <div className="font-medium">Frontend Engineer</div>
                    <div className="text-gray-600">BUSO • Oct 2020–Dec 2021</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3 text-indigo-600">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: <SiReact />, name: "React" },
                  { icon: <SiTypescript />, name: "TypeScript" },
                  { icon: <SiNextdotjs />, name: "Next.js" },
                  { icon: <SiRedux />, name: "Redux" },
                  { icon: <SiTailwindcss />, name: "Tailwind" },
                  { icon: <SiJavascript />, name: "JavaScript" },
                  { icon: <SiGit />, name: "Git" },
                  { icon: <SiDocker />, name: "Docker" },
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-indigo-600">Featured Projects</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium">KPI Management System</div>
                  <div className="text-gray-600">Vue 3, Ant Design Vue, Vuex, Chart.js, Socket.IO</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium">PaySplit</div>
                  <div className="text-gray-600">React Native, Expo, TypeScript, Node.js, MongoDB</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium">Banking System (FUJIA)</div>
                  <div className="text-gray-600">ReactJS, TypeScript, Next.js, Redux, Redux-Saga</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center">
          <button
            onClick={downloadCV}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <FaDownload className="text-sm" />
            Download CV as PDF
          </button>
          <p className="text-gray-400 text-sm mt-4">
            Downloads PDF or opens print dialog if PDF fails
          </p>
        </div>
      </div>
    </div>
  );
} 