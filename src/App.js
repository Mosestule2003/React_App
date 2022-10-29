import './App.css'


function App(){
    return (
       <section className="main-section">

        <div className="content">

        <div className="profile_section">
        <div className="profile_img_container">
        <img src={require('./images/Device=Web, State=Default.png')} alt="profile_img" id="profile_img" />
        <img src={require('./images/Device=Web, State=Hover.png')} alt="profile_img_hover" id="profile_img_hidden" />
        </div>

        <div className="profile_name">
          <p className="hidden" id="twitter">MosesTule</p>
          <p>Annette Black</p>
          <p className="hidden" id="slack">MosesTule</p>
        </div>

        <div className="avatar_share_icon bg_change">
            <img src={require('./images/share.png')} alt="avatar_icon" className="avatar_icon " />
            <img src={require('./images/dots.png')} alt="avatar_icon" className=" avatar_icon avatar_icon_hidden" />
        </div>
        </div>

        <div className="links_section">
        <a href="https://twitter.com/MosesTule" className="links bg_change" id="btn__zuri">Twitter</a>

        <a href="https://training.zuri.team/" className="links bg_change" id="btn__zuri">Zuri Team</a>
        
        <a href="http://books.zuri.team" className="links bg_change" id="books">Zuri Books</a>
        
        <a href=" https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" className="links bg_change" id="book__python">Python Books</a>
        
        <a href="https://backgroundcheck.zuri.team/" className="links bg_change" id="pitch">Background Check for coders</a>
        
        <a href=" https://books.zuri.team/design-rules" className="links bg_change" id="book__design">Design Books</a>
        </div>

        <div className="social_section">
        <div class="social_section_container">

        <div class="social_icons_container">
        
        <a href="#">
        <img src={require('./images/slack.png')} alt="slack" class="social_icon" />
        </a>

        <a href="#">
            <img src={require('./images/github.png')} alt="github" class="social_icon" />
        </a>

        </div>

        </div>
        </div>

        </div>

        <footer>
        <div class="footer_container">

        <div class="footer_content">

        <div class="footer_img">
        <img src={require('./images/logo_new.png')} alt="logo" className="logo" />
        </div>

        <div className="footer_text">
          <p>HNG Internship 9 Frontend Task</p>
        </div>

        <div class="footer_img">
        <img src={require('./images/logo2.png')} alt="logo2" className="logo2" />
        </div>

        </div>    
        </div>
        </footer>

       </section>
    )
}

export default App