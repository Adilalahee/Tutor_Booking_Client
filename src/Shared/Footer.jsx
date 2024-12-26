import React from 'react';

const Footer = () => {
    return (
   <>
   <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
    <p>
      <h2 className='text-xl font-bold'>Teachers Time Tution Media</h2>
      <br />
      An online tutor platform is a digital service that <br /> connects students with qualified <br /> tutors for personalized learning sessions. 
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
   </>
    );
};

export default Footer;