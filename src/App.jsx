import Profile from "./assets/profile.png";
import Facebook from "./assets/Facebook.svg";
import Instagram from "./assets/Instagram.svg";
import LinkedIn from "./assets/LinkedIn.svg";
import TikTok from "./assets/TikTok.svg";
import YouTube from "./assets/YouTube.svg";

const socials = [
  { icon: Facebook, url: "https://bit.ly/3RfOyl8" },
  { icon: Instagram, url: "https://bit.ly/abdallahayedtvInsta" },
  { icon: LinkedIn, url: "https://bit.ly/44GqBX7" },
  { icon: TikTok, url: "https://bit.ly/3ZcCoeD" },
  { icon: YouTube, url: "https://bit.ly/AbdallahAyedTV" },
];

function App() {
  return (
    <main>
      <div className="container">
        <div className="info">
          <div className="img">
            <img src={Profile} alt="" />
          </div>
          <h2>Abdallah Ayed</h2>
          <p>
            Hi, I am Abdallah, in the channel I will share with you the things I
            learn and anything that occupies my mind, Vlogs, reviews, and so on.
          </p>
          <div className="socials">
            {socials.map((website) => (
              <a href={website.url} target="_blank">
                <img src={website.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
