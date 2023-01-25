import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

const ButtonPage = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <div>
        <Button className="mb-5" success rounded outline onClick={handleClick}>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <GoCloudDownload />
          Buy now
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoDatabase />
          Reserve it
        </Button>
      </div>
      <div>
        <Button secondary outline onMouseOver={handleClick}>
          Start
        </Button>
      </div>
      <div>
        <Button primary rounded onClick={handleClick}>
          End
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
