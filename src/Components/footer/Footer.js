import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: 'services' },
    { name: 'Work', path: 'work' },
    { name: 'About', path: 'about' },
  ];
  
  const socialLinks = [
    { icon: <GitHubIcon fontSize="medium" />, url: 'https://github.com/Niket7851', label: 'GitHub' },
    { icon: <LinkedInIcon fontSize="medium" />, url: 'www.linkedin.com/in/niket-shukla-906917254', label: 'LinkedIn' },
    { icon: <EmailIcon fontSize="medium" />, url: 'mailto:niketshukla01@gmail.com', label: 'Email' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-indigo-950 text-white">
      {/* Top section with navigation and contact */}
      <div className="container mx-auto px-4 py-12">
        <div className="md:grid-cols-3 gap-10 flex justify-around">
          {/* Brand column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Niket Shukla</h2>
            <p className="text-gray-300 text-sm md:text-base">
              Full-stack developer specializing in creating beautiful, 
              responsive web applications with modern technologies.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2 cursor-pointer">
              {footerLinks.map((link, index) => (
                <li key={index} className="text-gray-300 hover:text-blue-300 transition-colors duration-300" onClick={() => scrollToSection(link.path)}>
                    {link.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom copyright bar */}
      <div className="border-t border-indigo-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Niket Shukla. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed with ❤️ by Niket Shukla
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;