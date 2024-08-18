
import React from 'react';
import ProjectCard from './ProjectCard';


const Projects = () => {
    const projects = [
      
      {
        title: 'Billing Application',
        description: 'The "Billing Application" is a software tool that streamlines invoicing, payment tracking, and financial reporting for businesses.',
        category: 'Web Application',
        image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1718462762/e-billing_yibcpa.webp',
        link: 'https://billpp.vercel.app/'
      },
      {
        title: 'Expenditure Application',
        description: 'The "Expenditure Application" is a financial management tool designed to help users track and manage their expenses efficiently.',
        category: 'Web Application',
        image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1718462773/expense-app-2-1024x512_a8gg5m.jpg',
        link: 'https://exp-app.vercel.app/'
      },
      {
        title: 'YouTube Clone',
        description: 'A video-sharing platform where users can upload, view, and comment on videos.',
        category: 'frontend',
        image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/c_thumb,w_200,g_face/v1718547014/0dfe05d1f843d2705c096b93ccb80e54_original_u42j1g.jpg',
        link: 'https://youtubecln.vercel.app/home'
      },
      {
        title: 'JobbyApp',
        description: 'A job search application where users can find and apply for job openings.',
        category: 'frontend',
        image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1718546328/jobby-app-jobs-success-lg-output-v0_vb2df6.png',
        link: 'https://job-ap.vercel.app/home'
      },
      {
        title: 'Instagram Clone',
        description: 'A social media platform where users can share photos, follow others, and interact through likes and comments.',
        category: 'frontend',
        image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1718546491/alexander-shatov-71qk8odibko-unsplash-1_k1cxqs.webp',
        link: 'https://shivainstaclone.ccbp.tech/login'
      },
      {
        title: 'Food Munch Website',
        description: 'A website offering a wide range of recipes, cooking tips, and food reviews for culinary enthusiasts.',
        category: 'Website',
        image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1718548993/images_sie7bm.jpg',
        link: 'https://restuarentap.ccbp.tech/'
      },
      {
        title: 'IPL DashBoard Website',
        description: 'An interactive platform offering live scores, team statistics, player performance data, and match updates for the Indian Premier League (IPL).',
        category: 'Website',
        image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1718550563/Ipl-auction_1703034762917_1703034773943_j15yei.avif',
        link: 'https://iplldashshiva.ccbp.tech/'
      },
      {
        title: 'Assset Management',
        description: 'Efficient tracking and optimization of organizational assets for maximum value and performance.',
        category: 'Website',
        image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1723896926/assetify_svtuk0.png',
        link: 'https://shivarama99666.wixstudio.io/siva'
      },
      {
        title: 'ACCA Website',
        description: 'An informational website for the Association of Chartered Certified Accountants (ACCA) providing resources, membership details, and examination information.',
        category: 'Website',
        image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/c_thumb,w_200,g_face/v1718548099/download_exh15s.jpg',
        link: 'https://medi-mocha.vercel.app/'
      },

        {
          title: 'Sleeve Website',
          description: 'Sleeve sits on the desktop, displaying and controlling the music you’re currently playing insong1 Image of an app iconApple Music, Image of an app iconsong2 Spotify, Image of an app iconsong3 Doppler.',
          category: 'Website',
          image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1718549971/1717649630059_rsfdom.jpg',
          link: 'https://swio-app-7gnw.vercel.app/'
        },
        {
          title: 'Travel Website',
          description: 'A comprehensive platform providing trip details, itineraries, and secure payment methods for booking your next adventure.',
          category: 'Website',
          image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1718550304/download_1_xaddfy.jpg',
          link: 'https://traveltourism.vercel.app/'
        },
        {
          title: 'PayInstaCard Website',
          description:  'A general website featuring university information, testimonials, and services related to the PayInstaCard platform.',
          category: 'Website',
          image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1718548305/1708863287801_yzegzq.jpg',
          link: 'https://payinsta.vercel.app/'
        },
        {
          title: 'CommLAB Website',
          description: 'A website dedicated to providing AI training and resources to students, helping them develop skills in artificial intelligence and machine learning.',
          category: 'Website',
          image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/v1718548851/1701875113298_znxzun.jpg',
          link: 'https://commlab.vercel.app/'
        },
        {
          title: 'Online Shopping Application',
          description: 'An e-commerce platform where users can browse, purchase, and review products online.',
          category: 'E-commerce Application',
          image: 'https://res.cloudinary.com/dxgbxchqm/image/upload/c_thumb,w_200,g_face/v1718547448/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo_oftrto.jpg',
          link: 'https://nxttrendsshiva.ccbp.tech/login'
        },
        
              
      ];
      
      

  const websites = projects.filter(project => project.category === 'Website');
  const FrontendApplications = projects.filter(project => project.category === 'frontend');
  const webApplications = projects.filter(project => project.category === 'Web Application');
  const eCommApplications = projects.filter(project => project.category === 'E-commerce Application');

    return (
        <section className="projects-section" style={{backgroundColor:"whitesmoke",marginTop:"100px"}}>
            <h1 className='text-center'>Projects</h1>
          <div>

          <h2 style={{padding:"30px"}}>Web Applications</h2>
          <p style={{paddingLeft:"30px"}}>* Which are responsive can view on mobile also.</p>
            <div className="project-list" id="webApplication">
              {webApplications.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>

            <h2 style={{padding:"30px"}}>Frontend Applications</h2>
            <p style={{paddingLeft:"30px"}}>* use this credentials for login UserName:rahul Password:rahul@2021</p>
            <div className="project-list">
              {FrontendApplications.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>

            <h2 style={{padding:"30px"}} >Websites</h2>
            <div className="project-list"  id="website">
              {websites.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div> 
    
            <h2 style={{padding:"30px"}}>E-commerce Applications</h2>
            <p style={{paddingLeft:"30px"}}>use this credentials for login UserName:rahul Password:rahul@2021</p>
            
            <div className="project-list" id="ecommerceApplication">
              {eCommApplications.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
      );

  
  
};

export default Projects;
