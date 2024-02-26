function Footer() {
  const contactMedia =[
    {
      name:'Facebook',
      icon: 'fa fa-facebook-f',
      link: 'https://www.facebook.com/larsley.salvador'
    },
    {
      name:'LinkedIn',
      icon: 'fa fa-linkedin-square',
      link: 'https://www.linkedin.com/in/nov-larsley-salvador-87b430224/'
    },
    {
      name:'Github',
      icon: 'fa fa-github',
      link: 'https://github.com/nov-salvador'
    }
  ]
  const contact =["nov.salvador@gmail.com", "+639777227512", "Delfin Albano, Isabela"]
  return (
    <footer className="footer mono">
      <div className="contact">
        <div className="col1 col">Contact{contact.map((el, index) =>(<p key={index} className="contact-list">{el}</p>))}</div>
        <div className="col2 col"><p>Social Media</p> <div className="contact-icon">{contactMedia.map((el, index) => (<a href={el.link} target="_blank" key={index}><i className={el.icon} key={index} id="icon"></i></a>))}</div></div>
      </div>
      <div className="end">© 2023 All Rights Reserved | Nov Larsley Salvador</div>
    </footer>
  );
}

export default Footer;