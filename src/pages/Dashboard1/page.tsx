import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Line, Text } from "components";
import { CloseSVG } from "../../assets/images";
import Dashboard from "components/Dashboard";
const Dashboard1: React.FC = () => {
  const navigate = useNavigate();

  const handleCameraConfigButtonClick = () => {
    navigate("/DesktopSix");
  };
  const handleDashboard1ButtonClick = () => {
    navigate("/DashBoard1");
  };
  const handleSettingsButtonClick = () => {
    navigate("/DashBoard1");
  };
  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-montserrat items-center justify-end mx-auto w-full">
        <div className="bg-gray-100 flex flex-col items-center justify-start p-3.5 w-full">
          <div className="flex md:flex-col flex-row gap-4 items-start justify-between max-w-[1883px] mb-4 mx-auto md:px-5 w-full">
            <div className="md:h-[929px] h-[930px] relative w-[10%] md:w-full">
              <div className="absolute bg-white-A700 flex flex-col gap-[31px] h-full inset-y-[0] items-center justify-center left-[0] my-auto p-[29px] sm:px-5 rounded-[20px] shadow-bs1 w-[93%]">
              <Button className="flex flex-col gap-2.5 items-center justify-start w-full" onClick={handleDashboard1ButtonClick}>
                  <Img
                    className="h-9 md:h-auto object-cover"
                    src="images/img_info.svg"
                    alt="groupSixtyOne"
                  />
                  <Text
          className="text-indigo-A700 text-sm"
          size="txtMontserratRegular14"
        >
          DashBoard
        </Text>
                </Button>

                {/* Rest of the images turned into buttons */}
                {/* Add onClick handlers to these buttons */}
                <Button className="flex flex-col gap-2.5 items-center justify-start w-full" onClick={handleCameraConfigButtonClick}>
        <Img
          className="h-9 md:h-auto object-cover"
          src="images/img_group61.png"
          alt="groupSixtyOne"
        />
        <Text
          className="text-indigo-A700 text-sm"
          size="txtMontserratRegular14"
        >
          Camera config
        </Text>
      </Button>

      <Button className="flex flex-col gap-2.5 items-center justify-start w-full" onClick={handleSettingsButtonClick}>
                  <Img
                    className="h-9 md:h-auto object-cover"
                    src="images/img_settings.svg"
                    alt="groupSixtyOne"
                  />
                  <Text
          className="text-indigo-A700 text-sm"
          size="txtMontserratRegular14"
        >
          Settings
        </Text>
                </Button>

                <Button className="flex flex-col gap-2.5 items-center justify-start w-full" onClick={handleSettingsButtonClick}>
                  <Img
                  className="h-12 md:h-auto object-cover"
                    src="images/img_user.svg"
                    alt="groupSixtyOne"
                  />
                  <Text
          className="text-indigo-A700 text-sm"
          size="txtMontserratRegular14"
        >
          User
        </Text>
                </Button>

                <Button
                  className="bg-transparent cursor-pointer flex items-center justify-center min-w-[68px] mt-48"
                  onClick={() => navigate("/")} // Replace with actual path
                >
                  <Img
                    className="h-3 mt-0.5 mb-px mr-1.5"
                    src="images/img_refresh.svg"
                    alt="refresh"
                  />
                  <div className="leading-[normal] text-blue_gray-900 text-left text-sm">
                    Logout
                  </div>
                </Button>
              </div>
              <Img
                className="absolute h-16 left-[56px] right-[10] top-[4%]"
                src="images/img_group67.svg"
                alt="groupSixtySeven"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-[41px] items-center justify-start w-[90%] md:w-full">
              {/* ... (existing code for the rest of the page) */}
              <Text
                className="ml-3 md:ml-[0] text-base text-blue_gray-900 cursor-pointer"
                size="txtMontserratMedium16"
                onClick={handleCameraConfigButtonClick}
              >
                DashBoard
              </Text>
              <Line className="bg-gray-200 h-px w-full" />
              {/* ... (existing code for the rest of the page) */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};export default Dashboard1;