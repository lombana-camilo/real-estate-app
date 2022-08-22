import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const githubLink =
    "https://github.com/lombana-camilo/real-estate-app";
  const linkedInLink = "https://www.linkedin.com/in/camilo-lombana-970812196";

  return (
    <div className="flex fixed bottom-0 py-1 px-2 bg-gradient-to-t from-secondary/80 w-full items-center justify-around backdrop-blur-lg">
      <span className="italic text-sm md:text-base"> Copyright &copy;2022 Camilo Lombana </span>
      <div className="flex items-center">
        <a href={githubLink} rel="noreferrer" target={"_blank"}>
          <FaGithub size="30px" style={{ margin: "0 0.6rem" }} />{" "}
        </a>

        <a href="mailto:lombana-camilo@hotmail.com">
          <FaEnvelope size="30px" style={{ margin: "0 0.6rem" }} />{" "}
        </a>

        <a href={linkedInLink} target={"_blank"} rel="noreferrer">
          {" "}
          <FaLinkedin size="30px" style={{ margin: "0 0.6rem" }} />{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
