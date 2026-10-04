
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Billing Application',
      description: 'The "Billing Application" is a software tool that streamlines invoicing, payment tracking, and financial reporting for businesses.',
      category: 'Web Application',
      image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1718462762/e-billing_yibcpa.webp',
      link: 'https://billpro.shiva-tech.in',
    },

    {
      title: 'Expenditure Application',
      description: 'The "Expenditure Application" is a financial management tool designed to help users track and manage their expenses efficiently.',
      category: 'Web Application',
      image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1718462773/expense-app-2-1024x512_a8gg5m.jpg',
      link: 'https://expenditure.shiva-tech.in/',
    },

    // ============================
    // MOBILE APPLICATION
    // ============================
    {
      title: 'Expenditure Mobile Application',
      description: 'A mobile financial management application that helps users manage expenses, track earnings and savings, maintain financial records, and generate reports.',
      category: 'Mobile Application',
      image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1790404167/ex-logo_dufa7r.jpg',
      apk: 'https://github.com/Shiva143-debug/mobile-app-releases/releases/tag/v1.0.0',
      version: '1.0.0',
      size: '64 MB',
    },

    {
      title: 'Online Shopping Application',
      description: 'An e-commerce platform where users can browse, purchase, and review products online.',
      category: 'frontend',
      image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/c_thumb,w_200,g_face/v1718547448/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo_oftrto.jpg',
      link: 'https://nxt-trends.shiva-tech.in',
    },

    {
      title: 'YouTube Clone',
      description: 'A video-sharing platform where users can upload, view, and comment on videos.',
      category: 'frontend',
      image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/c_thumb,w_200,g_face/v1718547014/0dfe05d1f843d2705c096b93ccb80e54_original_u42j1g.jpg',
      link: 'https://youtube-cln.shiva-tech.in',
    },

    {
      title: 'JobbyApp',
      description: 'A job search application where users can find and apply for job openings.',
      category: 'frontend',
      image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1784643278/Screenshot_2026-07-21_194427_ebh6ry.png',
      link: 'https://job-portal.shiva-tech.in',
    },

    {
      title: 'Instagram Clone',
      description: 'A social media platform where users can share photos, follow others, and interact through likes and comments.',
      category: 'frontend',
      image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1718546491/alexander-shatov-71qk8odibko-unsplash-1_k1cxqs.webp',
      link: 'https://shivainstaclone.ccbp.tech/login',
    },

    {
      title: 'Food Munch Website',
      description: 'A website offering a wide range of recipes, cooking tips, and food reviews for culinary enthusiasts.',
      category: 'Website',
      image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1718548993/images_sie7bm.jpg',
      link: 'https://foodrestroapp.ccbp.tech/',
    },

    {
      title: 'Assset Management',
      description: 'Efficient tracking and optimization of organizational assets for maximum value and performance.',
      category: 'Website',
      image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1723896926/assetify_svtuk0.png',
      link: 'https://shivarama99666.wixstudio.io/siva',
    },

    {
      title: 'ACCA Website',
      description: 'Association of Chartered Certified Accountants providing resources, member ship details and examination information.',
      category: 'Website',
      image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/c_thumb,w_200,g_face/v1718548099/download_exh15s.jpg',
      link: 'https://medi.shiva-tech.in',
    },

    {
      title: 'Sleeve Website',
      description: 'Sleeve sits on the desktop, displaying and controlling the music you’re currently playing insong1 Image of an app iconApple Music, Image of an app iconsong2 Spotify.',
      category: 'Website',
      image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1718549971/1717649630059_rsfdom.jpg',
      link: 'https://swio.shiva-tech.in',
    },

    {
      title: 'Travel Website',
      description: 'A comprehensive platform providing trip details, itineraries, and secure payment methods for booking your next adventure.',
      category: 'Website',
      image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1718550304/download_1_xaddfy.jpg',
      link: 'https://tourism.shiva-tech.in',
    },

    {
      title: 'PayInstaCard Website',
      description: 'A general website featuring university information, testimonials, and services related to the PayInstaCard platform.',
      category: 'Website',
      image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1718548305/1708863287801_yzegzq.jpg',
      link: 'https://university.shiva-tech.in',
    },

    {
      title: 'CommLAB Website',
      description: 'A website dedicated to providing AI training and resources to students, helping them develop skills in artificial intelligence and machine learning.',
      category: 'Website',
      image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1718548851/1701875113298_znxzun.jpg',
      link: 'https://commlab.shiva-tech.in',
    },

    {
      title: 'IPL DashBoard Website',
      description: 'An interactive platform offering live scores, team statistics, player performance data, and match updates for the Indian Premier League (IPL).',
      category: 'Website',
      image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1718550563/Ipl-auction_1703034762917_1703034773943_j15yei.avif',
      link: 'https://ipl.shiva-tech.in',
    },
  ];

  const websites = projects.filter(
    (project) => project.category === 'Website'
  );

  const FrontendApplications = projects.filter(
    (project) => project.category === 'frontend'
  );

  const webApplications = projects.filter(
    (project) => project.category === 'Web Application'
  );

  const mobileApplications = projects.filter(
    (project) => project.category === 'Mobile Application'
  );

  const eCommApplications = projects.filter(
    (project) => project.category === 'E-commerce Application'
  );

  void eCommApplications;

  return (
    <section className="projects-section">
      <div className="project-container">
        <h1 className="mt-3">Projects</h1>
        <h2>Web Applications</h2>

        <div className="project-list" id="webApplication">
          {webApplications.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        {mobileApplications.length > 0 && (
          <>
            <h2>Mobile Applications</h2>
            <div className="project-list" id="mobileApplication">
              {mobileApplications.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </>
        )}

        <h2>Frontend Applications</h2>
        <p className="credentials-note">
          <strong>Credentials:</strong>{' '}
          <i>UserName</i>: rahul &nbsp;|&nbsp;{' '}
          <i>Password</i>: rahul@2021
        </p>

        <div className="project-list">
          {FrontendApplications.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <h2>Websites</h2>
        <div className="project-list" id="website">
          {websites.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;