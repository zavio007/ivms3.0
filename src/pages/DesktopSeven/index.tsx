import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Dashboard from "components/Dashboard";
// import DesktopElevenColumnOne from "components/DesktopElevenColumnOne";
// import DesktopElevenColumnOne1 from "components/DesktopElevenColumnOne1";
// import DesktopElevenRowcar from "components/DesktopElevenRowcar";
// import DesktopElevenRowvector from "components/DesktopElevenRowvector";


import { CloseSVG } from "../../assets/images";

const DesktopSevenPage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  const [grouponevalue, setGrouponevalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="bg-gray-100 flex flex-col items-center justify-start p-3.5 w-full">
          <div className="flex md:flex-col flex-row gap-4 items-center justify-between max-w-[1883px] mb-[11px] mx-auto md:px-5 w-full">
            <div className="md:h-[929px] h-[930px] relative w-[10%] md:w-full">
              <Dashboard className="absolute bg-white-A700 flex flex-col gap-[31px] h-full items-center justify-center my-auto p-[29px] sm:px-5 right-px rounded-[20px] shadow-bs top-[0] w-[93%]" />
              <Img
                className="absolute h-16 right-[0] top-[4%]"
                src="images/img_group67.svg"
                alt="groupSixtySeven"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-[80px] items-center justify-start w-[90%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[100px] items-end justify-between w-full">
                <div className="flex flex-col gap-[11px] justify-start md:mt-0 mt-[17px]">
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
                  name="groupOne"
                  placeholder="You can search here"
                  value={grouponevalue}
                  onChange={(e) => setGrouponevalue(e)}
                  className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-light leading-[normal] p-0 text-left text-sm w-full"
                  wrapClassName="flex md:flex-1 md:w-full"
                  suffix={
                    grouponevalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer h-[37px] ml-[35px] my-auto"
                        onClick={() => setGrouponevalue("")}
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
                  className="bg-white-A700 cursor-pointer flex items-center justify-center min-w-[277px] pl-5 pr-[35  px] py-3 rounded-[20px] shadow-bs"
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
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[60px] sm:px-5 rounded-[20px] shadow-bs w-full">
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
                  <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[19px] w-full">
                    <Input
                      name="groupFive"
                      placeholder="Camera name"
                      className="leading-[normal] p-0 placeholder:bg-gray-100_01 placeholder:text-blue_gray-900 sm:pr-5 text-blue_gray-900 text-left text-sm w-full"
                      wrapClassName="bg-gray-100_01 sm:flex-1 left-[50px] pl-[19px] pr-[35px] py-[17px] relative rounded-[9px] sm:w-full"
                    ></Input>
                    <Input
                      name="groupFour"
                      placeholder="Camera IP address"
                      className="leading-[normal] p-0 placeholder:bg-gray-100_01 placeholder:text-blue_gray-900 sm:pr-5 text-blue_gray_900 text-left text-sm w-full"
                      wrapClassName="bg-gray-100_01 sm:flex-1 pl-5 pr-[35px] py-[17px] relative right-20 rounded-[9px] sm:w-full"
                    ></Input>
                    <Input
                      name="groupThree"
                      placeholder="Camera Location"
                      className="leading-[normal] p-0 placeholder:bg-gray-100_01 placeholder:text-blue_gray-900 sm:pr-5 text-blue_gray_900 text-left text-sm w-full"
                      wrapClassName="bg-gray-100_01 sm:flex-1 pl-[19px] pr-[35px] py-[17px] relative right-[180px] rounded-[9px] sm:w-full"
                    ></Input>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-[23px] w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-900 text-sm w-full"
                        size="txtMontserratLight14Bluegray900"
                      >
                        <>
                          this is just a test msg
                          {/* industry&#39;s standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type
                          and scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic{" "} */}
                        </>
                      </Text>
                    </div>
                    <Button
                      className="common-pointer !bg-colors3 !rounded-[55px] !text-colors4 cursor-pointer font-semibold leading-[normal] min-h-[45px] min-w-[200px] relative right-[50px] text-base text-center"
                      onClick={() => navigate("/desktopfifteen")}
                      shape="round"
                      color="blue_gray_900"
                      size="sm"
                      variant="fill"
                    >
                      Select ROI
                    </Button>
                  {/* </div> */}
                  {/* <Line className="bg-gray-200 h-px ml-0.5 md:ml-[0] mt-[33px] w-full" />
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
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[7px] mt-[37px] w-[99%] md:w-full"> */}
                    {/* Replacing components with Button components */}
                    {/* <Button
                      className="bg-gray-100_90 flex flex-row gap-[17px] items-center justify-center p-[19px] rounded-[20px] w-[22%] md:w-full"
                      onClick={() => handleButtonClick("/manufacturing")}
                    >
                      <DesktopElevenRowvector shipping={undefined} language={undefined} />
                    </Button>
                    <Button
                      className="bg-gray-100_90 flex flex-row gap-[17px] items-center justify-center p-[19px] rounded-[20px] w-[22%] md:w-full"
                      onClick={() => handleButtonClick("/shipping")}
                    >
                      <DesktopElevenRowcar roadTransport={undefined} language={undefined} />
                    </Button>
                    <Button
                      className="bg-gray-100_90 flex flex-row gap-[17px] items-center justify-center p-[19px] rounded-[20px] w-[22%] md:w-full"
                      onClick={() => handleButtonClick("/road-transport")}
                    >
                      <DesktopElevenColumnOne1 airline={undefined} language={undefined} />
                    </Button>
                    <Button
                      className="bg-gray-100_90 flex flex-row gap-[17px] items-center justify-center p-[19px] rounded-[20px] w-[22%] md:w-full"
                      onClick={() => handleButtonClick("/airline")}
                    >
                      <DesktopElevenColumnOne manufacturing={undefined} language={undefined} />
                    </Button> */}
                  </div>
                  <Line className="bg-gray-200 h-px ml-0.5 md:ml-[0] mt-[143px] w-full" />
                  <Button
                    className="!rounded-[50px] !text-white-A700 bg-colors5 cursor-not-allowed font-semibold leading-[normal] min-h-[55px] min-w-[200px] md:ml-[0] ml-[1300px] mt-7 opacity-op1 text-base text-center"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopSevenPage;