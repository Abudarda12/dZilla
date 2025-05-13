import './footer.css'

export default function Footer() {
    return(
        <>
        <div className="footer">
            <div className="heading">
                <h1>Call Us For Pitching</h1>
            </div>
            <div className="btn">
                <button>Contact Us</button>
            </div>
            <div className="footer-logo">
                <img src="src\components\brand-image\dc2301d32368049bad4371ebbfc7d8e6302209ab.png" alt="logo" 
                height={'150px'}/>
            </div>
            <div className="social">
               <a href="#"><i class="fa-brands fa-instagram"></i></a>
               <a href="#"><i class="fa-brands fa-linkedin"></i></a>
               <a href="#"><i class="fa-brands fa-x"></i></a>
            </div>
              <div className="footer-text">
                 <p>© 2025 All rights reserved</p>
                 <p>Developed by @abudarda</p>
              </div>
        </div>
        </>
    )
}