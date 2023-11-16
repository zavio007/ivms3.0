  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { Button, Img } from "components";

  type DashboardProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > &
    Partial<{}>;

  const Dashboard: React.FC<DashboardProps> = (props) => {
    const navigate = useNavigate();
    const [isDashboardHovered, setIsDashboardHovered] = useState(false);
    const [isCameraConfigHovered, setIsCameraConfigHovered] = useState(false);
    const [isSettingsHovered, setIsSettingsHovered] = useState(false);
    const [isUserHovered, setIsUserHovered] = useState(false);
    const [isLogoutHovered, setIsLogoutHovered] = useState(false); // Declare isLogoutHovered state

    return (
      <div className={props.className}>
        <Button 
          style={{
            filter: "brightness(100%)",
            transition: "filter 0.3s",
            width: "auto", // Set a fixed width
            height: "auto", // Set a fixed height
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.filter = "brightness(100%)";
            setIsDashboardHovered(true);
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.filter = "brightness(50%)";
            setIsDashboardHovered(false);
          }}
          className="h-[66px] mt-[31px]"
          onClick={() => navigate("/Dashboard1")}
        >
          <div style={{ position: "relative" }}>
            <Img
              src="images/img_info.svg"
              alt="info"
              className="w-[50px] h-[50px]" // Set the desired size
            />
            {isDashboardHovered && (
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px", // Adjust this value to control the distance from the image
                  left: "50%",
                  transform: "translateX(-50%)",
                  textAlign: "center",
                }}
                className="font-montserrat leading-[normal] text-indigo-A700 text-sm"
              >
                Dashboard
              </div>
            )}
          </div>
        </Button>

        <div style={{ margin: "1px 0" }} /> {/* Space between buttons */}

        <Button
          style={{
            filter: "brightness(100%)",
            transition: "filter 0.01s",
            width: "55px", // Set the desired width
            height: "52px", // Set the desired height
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.filter = "brightness(100%)";
            setIsCameraConfigHovered(true);
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.filter = "brightness(50%)";
            setIsCameraConfigHovered(false);
          }}
          className="common-pointer bg-transparent cursor-pointer flex flex-col h-[90px] items-center justify-center relative w-[60px]"
          onClick={() => navigate("/DesktopSix")}
        >
          <Img
            src="images/img_group61.png"
            alt="groupSixtyOne"
            className="w-full h-full"
          />
          {isCameraConfigHovered && (
            <div
              style={{
                position: "absolute",
                bottom: "-35px",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
              }}
              className="font-montserrat leading-[normal] text-indigo-A700 text-sm"
            >
              Camera Config
            </div>
          )}
        </Button>

        <Button
          style={{
            filter: "brightness(100%)",
            transition: "filter 0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.filter = "brightness(100%)";
            setIsSettingsHovered(true);
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.filter = "brightness(50%)";
            setIsSettingsHovered(false);
          }}
          className="h-[66px] mt-[31px]"
          onClick={() => navigate("/settings")}
        >
          <Img
            src="images/img_settings.svg"
            alt="settings"
            className="w-full h-full"
          />
          {isSettingsHovered && (
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
              }}
              className="font-montserrat leading-[normal] text-indigo-A700 text-sm"
            >
              Settings
            </div>
          )}
        </Button>

        <Button
          style={{
            filter: "brightness(100%)",
            transition: "filter 0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.filter = "brightness(100%)";
            setIsUserHovered(true);
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.filter = "brightness(50%)";
            setIsUserHovered(false);
          }}
          className="h-[66px] mt-[31px]"
          onClick={() => navigate("/user")}
        >
          <Img
            src="images/img_user.svg"
            alt="user"
            className="w-full h-full"
          />
          {isUserHovered && (
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
              }}
              className="font-montserrat leading-[normal] text-indigo-A700 text-sm"
            >
              User
            </div>
          )}
        </Button>

        <Button
        style={{
          filter: "brightness(100%)",
          transition: "filter 0.3s",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.filter = "brightness(100%)";
          setIsLogoutHovered(true);
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.filter = "brightness(50%)";
          setIsLogoutHovered(false);
        }}
        className="bg-transparent cursor-pointer flex items-center justify-center min-w-[68px] mt-48"
        onClick={() => navigate("/")}
      >
        <Img
          className="h-3 mt-0.5 mb-px mr-1.5"
          src="images/img_refresh.svg"
          alt="refresh"
        />
        <div
          className={`font-montserrat leading-[normal] text-left text-sm ${
            isLogoutHovered ? "text-blue-500" : "text-blue_gray-900"
          }`}
        >
          Logout
        </div>
      </Button>
    </div>
  );
};

Dashboard.defaultProps = {};
export default Dashboard;