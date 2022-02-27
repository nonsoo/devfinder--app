import { FC } from "react";

const Profile: FC = () => {
  return (
    <section className="Profile">
      <div className="ProfileHeader">
        <div className="Profile__Img"></div>
        <div className="ProfileHeader__Text">
          <p className="Profile__Name">The Octocat</p>
          <p className="Profile__Acct">@octocat</p>
          <span className="Profile__JoinDate">Joined 25 Jan 2011</span>
        </div>
      </div>
      <p className="Profile__Descri">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam saepe
        vero velit, atque explicabo fugiat error fuga ad tempore recusandae
        laboriosam magnam eius ab, iure molestias. Nihil doloremque odit magni.
        Vitae earum neque aspernatur. Eius consectetur a fuga veritatis
        possimus, nemo dignissimos blanditiis itaque sunt, ipsam quod asperiores
        laborum eligendi porro nulla voluptatibus similique adipisci? Ex
        sapiente commodi consequuntur hic!
      </p>

      <div className="Profile__Stats">
        <div className="Profile__StatsCon">
          <p className="Profile__StatsTitle">Repos</p>
          <p className="Profile__StatsStat">8</p>
        </div>
        <div className="Profile__StatsCon">
          <p className="Profile__StatsTitle">Followers</p>
          <p className="Profile__StatsStat">8434</p>
        </div>
        <div className="Profile__StatsCon">
          <p className="Profile__StatsTitle">Following</p>
          <p className="Profile__StatsStat">3</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
