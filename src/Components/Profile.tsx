import { FC } from "react";
import { MdLocationPin } from "react-icons/md";
import { FaLink, FaTwitter } from "react-icons/fa";

interface Props {
  profImg: string;
  userName: string;
  acctName: string;
  date: string;
  descri: string;
  repoNumb: number;
  followingNumb: number;
  followerNumb: number;
  location: string;
  website: string;
  twitter: string;
}
const Profile: FC<Props> = ({
  userName,
  acctName,
  date,
  descri = "This profile has no bio",
  repoNumb,
  followerNumb,
  followingNumb,
  location = "Not Available",
  website = "Not Available",
  twitter = "Not Available",
  profImg,
}) => {
  return (
    <section className="Profile">
      <div className="ProfileHeader">
        <img src={profImg} alt="Profile img" className="Profile__Img" />
        <div className="ProfileHeader__Text">
          <p className="Profile__Name">{userName}</p>
          <p className="Profile__Acct">@{acctName}</p>
          <span className="Profile__JoinDate">Joined {date}</span>
        </div>
      </div>
      <p className="Profile__Descri">{descri}</p>

      <div className="Profile__Stats">
        <div className="Profile__StatsCon">
          <p className="Profile__StatsTitle">Repos</p>
          <p className="Profile__StatsStat">{repoNumb}</p>
        </div>
        <div className="Profile__StatsCon">
          <p className="Profile__StatsTitle">Followers</p>
          <p className="Profile__StatsStat">{followerNumb}</p>
        </div>
        <div className="Profile__StatsCon">
          <p className="Profile__StatsTitle">Following</p>
          <p className="Profile__StatsStat">{followingNumb}</p>
        </div>
      </div>

      <div className="Links">
        <div className="Links__Location">
          <MdLocationPin className="Links__Icons" />
          <span>{location}</span>
        </div>
        <div className="Links__Website">
          <FaLink className="Links__Icons" />
          <span>{website}</span>
        </div>
        <div className="Links__Twitter">
          <FaTwitter className="Links__Icons" />
          <span>@{twitter}</span>
        </div>
      </div>
    </section>
  );
};

export default Profile;
