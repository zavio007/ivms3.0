
import React, { useState } from 'react';


import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Dashboard from "components/Dashboard";
// import DesktopElevenColumnOne1 from "components/DesktopElevenColumnOne1";
// import DesktopElevenRowcar from "components/DesktopElevenRowcar";
// import DesktopElevenRowvector from "components/DesktopElevenRowvector";
import { CloseSVG } from "../../assets/images";
import DragAndResizeBox from "components/DragAndResizeBox"; // Adjust the path based on your project structure
// import DesktopElevenColumnOne from 'components/DesktopElevenColumnOne';
const DesktopFifteenPage: React.FC = () => {
  const navigate = useNavigate();
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [groupthirtysixvalue, setGroupthirtysixvalue] = useState<string>("");
  const videoSrc = "https://webcam.sparkassenplatz.info/cgi-bin/faststream.jpg";
  const handleCrop = () => {
    // Assuming your DragAndResizeBox component provides a getCroppedImage function
    // Use the getCroppedImage function to get the cropped image URL
    // Set the cropped image URL in the state or perform any other action
    // For example:
    // const croppedImageUrl = getCroppedImage();
    // setCroppedImage(croppedImageUrl);
  };
    React.useState<string>("");

  return (
    <>
      <div className="bg-black-900 font-montserrat h-[969px] mx-auto relative w-full">
        <Dashboard className="absolute bg-white-A700 flex flex-col gap-[31px] h-max inset-y-[0] items-center justify-center left-[1%] my-auto p-[29px] md:px-5 rounded-[20px] shadow-bs w-[9%]" />
        <div className="absolute flex flex-col gap-[41px] h-max inset-y-[0] items-center justify-start my-auto md:px-5 right-[1%] w-[89%]">
          <div className="flex md:flex-col flex-row gap-[17px] items-end justify-between w-full">
            <div className="flex flex-col gap-[22px] justify-start md:mt-0 mt-[17px]">
              <Text
                className="md:ml-[0] ml-[11px] text-base text-blue_gray-900"
                size="txtMontserratMedium16"
              >
                <span className="text-blue_gray-900 font-montserrat text-left font-medium">
                  Add Camera /{" "}
                </span>
                <span className="text-blue_gray-900 font-montserrat text-left text-sm font-normal">
                  Camera config
                </span>
              </Text>
              <Line className="bg-gray-200 h-px w-full" />
            </div>
            <Input
              name="groupThirtySix"
              placeholder="You can search here"
              value={groupthirtysixvalue}
              onChange={(e) => setGroupthirtysixvalue(e)}
              className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-light leading-[normal] p-0 text-left text-sm w-full"
              wrapClassName="flex md:flex-1 md:w-full"
              suffix={
                groupthirtysixvalue?.length > 0 ? (
                  <CloseSVG
                    className="cursor-pointer h-[37px] ml-[35px] my-auto"
                    onClick={() => setGroupthirtysixvalue("")}
                    fillColor="#8c8c8c"
                    height={37}
                    width={37}
                    viewBox="0 0 37 37"
                  />
                ) : (
                  <Img
                    className="cursor-pointer h-[37px] ml-[35px] my-auto"
                    src="images/img_search.svg"
                    alt="search"
                  />
                )
              }
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            ></Input>
            <Button
              className="bg-white-A700 cursor-pointer flex items-center justify-center min-w-[277px] pl-5 pr-[35px] py-3 rounded-[20px] shadow-bs"
              rightIcon={
                <Img
                  className="h-[37px] ml-3 rounded-[18px]"
                  src="images/img_rectangle_23.png"
                  alt="Rectangle 23"
                />
              }
            >
              <div className="font-medium leading-[normal] sm:pr-5 text-base text-blue_gray-900 text-left">
                Username lorem
              </div>
            </Button>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[34px] sm:px-5 rounded-[20px] shadow-bs w-full">
            <div className="flex flex-col items-start justify-start mb-3.5 w-full">
              <Text
                className="text-[22px] text-blue_gray-900 sm:text-lg md:text-xl"
                size="txtMontserratBold22"
              >
                Add new camera
              </Text>
              <Text
                className="ml-2 md:ml-[0] mt-[35px] text-blue_gray-900 text-lg"
                size="txtMontserratMedium18"
              >
                Add new camera
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[19px] w-full">
                <Input
                  name="groupForty"
                  placeholder="Camera name"
                  className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                  wrapClassName="md:flex-1 rounded-[9px] md:w-full"
                  type="text"
                  color="gray_100_01"
                  size="sm"
                  variant="fill"
                ></Input>
                <div className="bg-gray-100_01 flex flex-col items-start justify-start p-[17px] rounded-[9px]">
                  <Text
                    className="ml-0.5 md:ml-[0] text-blue_gray-900 text-sm"
                    size="txtMontserratRegular14Bluegray900"
                  >
                    Camera IP address
                  </Text>
                </div>
                <div className="bg-gray-100_01 flex flex-col items-start justify-start p-[17px] rounded-[9px]">
                  <Text
                    className="text-blue_gray-900 text-sm"
                    size="txtMontserratRegular14Bluegray900"
                  >
                    Camera Location
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-[23px] w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-sm w-full"
                    size="txtMontserratLight14Bluegray900"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic{" "}
                    </>
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[243px] text-base text-center"
                  shape="round"
                  color="blue_gray_300"
                  size="sm"
                  variant="fill"
                >
                  Check Camera
                </Button>
              </div>
              <Line className="bg-gray-200 h-px ml-0.5 md:ml-[0] mt-[33px] w-full" />
              <Text
                className="md:ml-[0] ml-[7px] mt-[38px] text-blue_gray-900 text-lg"
                size="txtMontserratMedium18"
              >
                Select Industry
              </Text>
              <div className="flex flex-col items-center justify-start ml-1.5 md:ml-[0] mt-[11px]">
                <Text
                  className="text-blue_gray-900 text-sm"
                  size="txtMontserratLight14Bluegray900"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown
                  </>
                </Text>
              </div>
              <Line className="bg-gray-200 h-px ml-0.5 md:ml-[0] mt-[142px] w-full" />
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[243px] md:ml-[0] ml-[1366px] mt-7 text-base text-center"
                shape="round"
                size="sm"
                variant="gradient"
                color="indigo_A700_7e_indigo_900_7e"
              >
                Add Camera
              </Button>
            </div>
          </div>
        </div>
        <Img
          className="absolute h-16 left-[4%] top-[6%]"
          src="images/img_group67.svg"
          alt="groupSixtySeven"
        />
        <div className="absolute bg-black-900_84 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[79px] md:px-10 sm:px-5 w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1631px] mt-[7px] p-[15px] md:px-5 rounded-[18px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[79%] md:w-full">
                <div className="h-[774px] relative w-full">
                <DragAndResizeBox videoSrc={videoSrc} />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[59px] md:mt-0 mt-[84px] w-[16%] md:w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtMontserratMedium18"
                >
                  Select region of interest
                </Text>
                <div className="flex flex-col gap-[29px] items-center justify-start mt-[308px] w-[81%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-blue_gray-900 text-center text-sm"
                      size="txtMontserratLight14Bluegray900"
                    >
                      <span className="text-blue_gray-900 font-montserrat font-normal">
                        <>
                          Image Width
                          <br />
                        </>
                      </span>
                      <span className="text-blue_gray-900 font-montserrat text-base font-medium">
                        500
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-blue_gray-900 text-center text-sm"
                      size="txtMontserratLight14Bluegray900"
                    >
                      <span className="text-blue_gray-900 font-montserrat font-normal">
                        <>
                          Points
                          <br />
                        </>
                      </span>
                      <span className="text-blue_gray-900 font-montserrat text-base font-medium">
                        2555,562,89,55,556,56
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[51px] items-center justify-start mt-7 w-full">
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[243px] text-base text-center"
                    shape="round"
                    color="blue_gray_900"
                    size="sm"
                    variant="fill"
                  >
                    
                    Reset ROI
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[243px] text-base text-center"
                    onClick={() => navigate("/desktopeleven")}
                    shape="round"
                    size="sm"
                    variant="gradient"
                    color="indigo_A700_01_indigo_900"
                  >
                    Save ROI
                  </Button>
                </div>
              </div>
              <Img
                className="common-pointer h-[33px] ml-1 md:ml-[0] md:mt-0 mt-2 w-[34px]"
                src="images/img_close.svg"
                alt="close"
                onClick={() => navigate(-1)}
              />
            </div>
          </div>
        </div>
        <Button
          onClick={() => handleCrop()}
          className="cursor-pointer font-semibold leading-[normal] min-w-[243px] text-base text-center"
          shape="round"
          color="blue_gray_300"
          size="sm"
          variant="fill"
        >
          Crop Image
        </Button>
      </div>
    </>
  );
};
export default DesktopFifteenPage;