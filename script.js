// Matrix Rain Effect
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '01';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff41';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Projects Data
const projects = [
    {
        id: 1,
        title: 'Zero Trust Architecture Implementation for E-commerce industry',
        description: 'Enforced with Identity-based controls, micro-segmentation, and multi-factor authentication(MFA) to ensure authorized user access and network protection through segmentation.Allocated Azure AD for centralized Identity and Access Management (IAM) and deployed network segmentation policies with Palo Alto Firewall. Continuous monitoring through Splunk SIEM enhancing lateral movement protection and reducing the attack surface. Ensuring compliance like NIST CSF and CIS benchmarks to achieve data security and privacy.',
        technologies: ['NIST 800-53', 'Azure', 'Palo Alto Firewall', 'Splunk', 'MFA', 'Adaptive Authentication'],
        impact: 'Minimized 95% Attack surface on underlying architecture'
    },
    {
        id: 2,
        title: 'Security Monitoring Dashboard for Cloud Computing',
        description: 'Utilized AWS to build a comprehensive Cloud Security Monitoring Dashboard that aggregates, visualizes, and analyses security data to identify and respond to threats in real time. Collecting security logs and event data and integrating with a monitoring tool called AWS Guard Duty for continuous monitoring and AWS SNS for setting up a real-time alert system in case of suspicious activity. AWS Lambda function which is automated to revoke access and Kibana is used to build intuitive and interactive dashboards for better understanding.',
        technologies: ['AWS', 'Lambda', 'Kibana', 'Guard Duty', 'GRC'],
        impact: 'Detecting 95% threat accuracy and Visualized effectively to prioritize actions'
    },
    {
        id: 3,
        title: 'Key and Certificate Management System',
        description: 'AWS KMS and AWS Certificate Manager (ACM) to securely store, manage, and rotate cryptographic keys and certificates across services. Automated lifecycle management by leveraging AWS Lambda, CloudWatch, and CloudTrail for key rotation, certificate renewal, and activity auditing. AWS IAM policies ensuing role-based access control to KMS and ACM resources. Enhanced compliance with AWS Config and AWS CloudWatch for logging and monitoring purposes that automate compliance report.',
        technologies: ['AWS', 'IAM', 'ACL', 'ACM', 'Lambda', 'CloudTrail'],
        impact: 'Enabled Key rotation and secured storage without compromising both key & certificate security.'
    },
    {
        id: 4,
        title: 'Security Harderning for LUNA Bags Inc',
        description: 'Employs a multi-zone architecture (External, DMZ, Internal, VPN), protected by an iptables-based perimeter firewall conforming to a default-deny, least-privilege model. Traffic is strictly segmented—HTTP to DMZ, VPN-authenticated access for remote clients, and NAT-masked LAN egress. Stateful inspection, advanced filtering (null/xmas/FIN scan detection, malformed packet drops), rate limiting, granular logging, and restricted management ports ensure robust prevention of DoS, lateral movement, and external reconnaissance.',
        technologies: ['Network Segmentation', 'DMZ', 'Default-Deny Policy', 'NAT Masquerading', 'IDS & IPS', 'Firewall'],
        impact: 'Harderned security architecture and redesigned to adaptive defense system'
    },
    {
        id: 5,
        title: 'Network Traffic Examination for Intrusion Detection in IoV',
        description: 'Developed an unsupervised intrusion detection system for IoV using LSTM autoencoder-decoder. Included IoV traffic preprocessing, feature selection, anomaly detection via reconstruction error, and visual explainability. Achieved 98% accuracy, strong zero-day attack detection, and outperformed traditional models. Focus: Cybersecurity, Deep Learning, IoV, Anomaly Detection, LSTM, Autoencoder.',
        technologies: ['IoV Security', 'LSTM', 'Deep Learning', 'Anomaly Detection'],
        impact: 'Enabled highly accurate, explainable, and robust intrusion detection, especially for zero-day attacks using deep learning.'
    }
];

// Load Projects
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-impact">Impact: ${project.impact}</div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Load projects when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// Replace with your Google Apps Script web app URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzJ-8padOlAWdd0m0_MRgsbUpMF1LrpW1Q5oZBhcta_75r9TdpsSkVunZ97wDKb4HOHUg/exec';

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Show loading status
    formStatus.textContent = '⏳ Sending message...';
    formStatus.classList.add('show');
    
    try {
        // Send data to Google Sheets
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Important for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        });
        
        // Show success message
        formStatus.textContent = '✅ Message sent successfully! I\'ll get back to you soon.';
        formStatus.classList.add('show');
        
        // Reset form
        contactForm.reset();
        
    } catch (error) {
        // Show error message
        formStatus.textContent = '❌ Error sending message. Please try again.';
        formStatus.classList.add('show');
        console.error('Error:', error);
    }
    
    // Hide status after 5 seconds
    setTimeout(() => {
        formStatus.classList.remove('show');
    }, 5000);
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Add animation to stat cards on scroll
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    observer.observe(card);
});

// Console message for developers
console.log('%c🔐 Welcome to CyberFolio!', 'color: #00ff41; font-size: 20px; font-weight: bold;');
console.log('%cThis portfolio demonstrates cybersecurity expertise and modern web development skills.', 'color: #00d4ff; font-size: 14px;');
console.log('%cInterested in collaboration? Let\'s connect!', 'color: #00ff41; font-size: 14px;');
