import { FC } from "react";

interface Props {
  imgOrgs: string;
  nameOrgs: string;
  descri: string;
}
const Orgs: FC<Props> = ({ imgOrgs, nameOrgs, descri }) => {
  return (
    <div className="Orgs">
      <img src={imgOrgs} alt="" className="Orgs__Img" />
      <p className="Orgs__Name">{nameOrgs}</p>
      <p className="Orgs__Descri">{descri}</p>
    </div>
  );
};

export default Orgs;
