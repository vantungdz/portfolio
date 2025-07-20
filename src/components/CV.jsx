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
        <div style="font-size: 2.5rem; font-weight: 700; color: #6366f1; margin-bottom: 10px;">Tung Do</div>
        <div style="font-size: 1.2rem; color: #666; margin-bottom: 15px;">Senior Frontend Developer</div>
        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; font-size: 0.9rem;">
          <div>📧 tungdo.dev@example.com</div>
          <div>📱 +84 123 456 789</div>
          <div>📍 Ho Chi Minh City, Vietnam</div>
          <div>🔗 linkedin.com/in/your-linkedin</div>
        </div>
      </div>

      <div style="margin-bottom: 30px;">
        <div style="font-size: 1.3rem; font-weight: 600; color: #6366f1; margin-bottom: 15px; border-bottom: 2px solid #f3f4f6; padding-bottom: 5px;">Professional Summary</div>
        <div style="font-size: 1rem; line-height: 1.7; color: #555;">
          Passionate Senior Frontend Developer with 4+ years of experience building scalable web applications. 
          Expert in React, TypeScript, and modern web technologies. Proven track record of delivering 
          high-quality, user-centric solutions for enterprise applications. Strong focus on performance 
          optimization, clean code practices, and team collaboration.
        </div>
      </div>

      <div style="margin-bottom: 30px;">
        <div style="font-size: 1.3rem; font-weight: 600; color: #6366f1; margin-bottom: 15px; border-bottom: 2px solid #f3f4f6; padding-bottom: 5px;">Work Experience</div>
        
        <div style="margin-bottom: 20px; padding-left: 20px; border-left: 3px solid #e5e7eb;">
          <div style="font-weight: 600; font-size: 1.1rem; color: #333;">Senior Frontend Developer</div>
          <div style="font-weight: 500; color: #6366f1;">TechCorp Solutions</div>
          <div style="font-size: 0.9rem; color: #666; margin-bottom: 8px;">2023 - Present</div>
          <div style="color: #555; line-height: 1.6;">
            • Led a team of 5 developers to rebuild the main product dashboard<br>
            • Improved application performance by 40% through code optimization<br>
            • Implemented CI/CD pipeline reducing deployment time by 60%<br>
            • Mentored 3 junior developers and conducted code reviews
          </div>
        </div>

        <div style="margin-bottom: 20px; padding-left: 20px; border-left: 3px solid #e5e7eb;">
          <div style="font-weight: 600; font-size: 1.1rem; color: #333;">Frontend Developer</div>
          <div style="font-weight: 500; color: #6366f1;">Digital Innovations Ltd</div>
          <div style="font-size: 0.9rem; color: #666; margin-bottom: 8px;">2021 - 2023</div>
          <div style="color: #555; line-height: 1.6;">
            • Built 10+ responsive web applications for various clients<br>
            • Reduced bundle size by 30% through code splitting<br>
            • Implemented accessibility features improving WCAG compliance<br>
            • Collaborated with UX team to improve user experience
          </div>
        </div>

        <div style="margin-bottom: 20px; padding-left: 20px; border-left: 3px solid #e5e7eb;">
          <div style="font-weight: 600; font-size: 1.1rem; color: #333;">Junior Developer</div>
          <div style="font-weight: 500; color: #6366f1;">StartUp Ventures</div>
          <div style="font-size: 0.9rem; color: #666; margin-bottom: 8px;">2020 - 2021</div>
          <div style="color: #555; line-height: 1.6;">
            • Developed 5+ small to medium web applications<br>
            • Learned modern JavaScript frameworks and tools<br>
            • Participated in code reviews and team meetings<br>
            • Contributed to open-source projects
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
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">TypeScript</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Next.js</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">JavaScript</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">HTML5</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">CSS3</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Tailwind CSS</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Redux</span>
            </div>
          </div>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #6366f1;">
            <h4 style="font-weight: 600; margin-bottom: 10px; color: #333;">Backend & Tools</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Node.js</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Git</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Docker</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">AWS</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">MongoDB</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">PostgreSQL</span>
            </div>
          </div>

          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #6366f1;">
            <h4 style="font-weight: 600; margin-bottom: 10px; color: #333;">Design & Others</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Figma</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Python</span>
              <span style="background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Angular</span>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 30px;">
        <div style="font-size: 1.3rem; font-weight: 600; color: #6366f1; margin-bottom: 15px; border-bottom: 2px solid #f3f4f6; padding-bottom: 5px;">Featured Projects</div>
        <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 15px;">
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <div style="font-weight: 600; color: #333; margin-bottom: 5px;">Tomaho Soft</div>
            <div style="font-size: 0.8rem; color: #6366f1; margin-bottom: 8px;">React • TypeScript • Redux • Node.js • PostgreSQL</div>
            <div style="font-size: 0.9rem; color: #555; line-height: 1.5;">Enterprise management system covering accounting, warehouse, and business process workflows.</div>
          </div>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <div style="font-weight: 600; color: #333; margin-bottom: 5px;">FUJIA - Banking System</div>
            <div style="font-size: 0.8rem; color: #6366f1; margin-bottom: 8px;">Next.js • TypeScript • Redux • Jest • Tailwind CSS</div>
            <div style="font-size: 0.9rem; color: #555; line-height: 1.5;">Modern banking system frontend with comprehensive testing and dynamic forms.</div>
          </div>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <div style="font-weight: 600; color: #333; margin-bottom: 5px;">KingFood Mart</div>
            <div style="font-size: 0.8rem; color: #6366f1; margin-bottom: 8px;">React • JavaScript • CSS3 • Local Storage</div>
            <div style="font-size: 0.9rem; color: #555; line-height: 1.5;">Supermarket inventory management UI with filter, search, and update functionality.</div>
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
            <h2 className="text-2xl font-bold">Tung Do</h2>
            <p className="text-indigo-100">Senior Frontend Developer</p>
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
                    <div className="font-medium">Senior Frontend Developer</div>
                    <div className="text-gray-600">TechCorp Solutions • 2023-Present</div>
                  </div>
                  <div>
                    <div className="font-medium">Frontend Developer</div>
                    <div className="text-gray-600">Digital Innovations Ltd • 2021-2023</div>
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
                  <div className="font-medium">Tomaho Soft - Enterprise Management System</div>
                  <div className="text-gray-600">React, TypeScript, Redux, Node.js, PostgreSQL</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium">FUJIA - Banking System</div>
                  <div className="text-gray-600">Next.js, TypeScript, Redux, Jest, Tailwind CSS</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium">KingFood Mart - Inventory Management</div>
                  <div className="text-gray-600">React, JavaScript, CSS3, Local Storage</div>
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