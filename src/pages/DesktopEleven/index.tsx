import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";
import Dashboard from "components/Dashboard";
import RadioButtons from "components/4button";
type DesktopElevenColumnOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "manufacturing" | "language"
> &
  Partial<{ manufacturing: string; language: string; className: string }>;

const DesktopElevenPage: React.FC = () => {
  const navigate = useNavigate();

  const [groupelevenvalue, setGroupelevenvalue] = React.useState<string>("");
  const [resizedImageData, setResizedImageData] = useState<string | null>(null);
  useEffect(() => {
    // Retrieve the stored JSON data from local storage
    const jsonDataString = localStorage.getItem("resizedImageData");
    if (jsonDataString) {
      const jsonData = JSON.parse(jsonDataString);
      setResizedImageData(jsonData.videoSrc);
    }
  }, []);
  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-montserrat items-center justify-end mx-auto w-full">
        <div
          className="common-pointer bg-gray-100 flex flex-col items-center justify-start p-3.5 w-full"
          // onClick={() => navigate("/desktopseven")}
        > 
          <div className="flex md:flex-col flex-row gap-4 items-start justify-between max-w-[1883px] mb-[18px] mx-auto md:px-5 w-full">
            <div className="md:h-[927px] h-[930px] relative w-[10%] md:w-full">
              <Dashboard className="absolute bg-white-A700 flex flex-col gap-[31px] h-full inset-y-[0] items-center justify-center left-[0] my-auto p-7 sm:px-5 rounded-[20px] shadow-bs w-[93%]" />
              <Img
                className="absolute h-16 left-[60px] right-[50px] top-[4%]"
                src="images/img_group67.svg"
                alt="groupSixtySeven"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-[41px] items-center justify-start w-[90%] md:w-full">
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
                  name="groupEleven"
                  placeholder="You can search here"
                  value={groupelevenvalue}
                  onChange={(e) => setGroupelevenvalue(e)}
                  className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-light leading-[normal] p-0 text-left text-sm w-full"
                  wrapClassName="flex md:flex-1 md:w-full"
                  suffix={
                    groupelevenvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer h-[37px] ml-[35px] my-auto"
                        onClick={() => setGroupelevenvalue("")}
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
              <div className="bg-white-A700 flex flex-col items-center justify-end p-6 sm:px-5 rounded-[20px] shadow-bs w-full">
                <div className="flex flex-col justify-start mt-2.5 w-[99%] md:w-full">
                  <Text
                    className="text-[22px] text-blue_gray-900 sm:text-lg md:text-xl"
                    size="txtMontserratBold22"
                  >
                    Add new camera
                  </Text>
                  <Text
                    className="ml-1.5 md:ml-[0] mt-[35px] text-blue_gray-900 text-lg"
                    size="txtMontserratMedium18"
                  >
                    Add new camera
                  </Text>
                  <div className="flex flex-col items-center justify-start ml-1.5 md:ml-[0] mt-[23px] w-full">
                    <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[36%] md:w-full">
                        <div className="h-[352px] relative w-full">
                        {resizedImageData && (
          <Img
            className="h-[352px] m-auto object-cover rounded-[18px] w-full"
            src={resizedImageData}
            alt="resizedImage"
          />
        )}
        {/* <Img
          className="absolute h-[352px] inset-[0] justify-center m-auto"
          src="images/img_exclude.svg"
          alt="exclude"
        /> */}
{/*         
                          <Img
                            className="h-[352px] m-auto object-cover rounded-[18px] w-full"
                            src="images/img_rectangle233.png"
                            alt="rectangle233"
                          />
                          <Img  
                            className="absolute h-[352px] inset-[0] justify-center m-auto"
                            src="images/img_exclude.svg"
                            alt="exclude"
                          /> */}
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[63%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-[43px] items-center justify-between w-full">
                          <Input
                            name="groupNinetyEight"
                            placeholder="Camera name"
                            className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                            wrapClassName="sm:flex-1 rounded-[9px] sm:w-full"
                            type="text"
                            color="gray_100_01"
                            size="sm"
                            variant="fill"
                          ></Input>
                          <Input
                            name="groupNinetySeven"
                            placeholder="Camera IP address"
                            className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                            wrapClassName="sm:flex-1 rounded-[9px] sm:w-full"
                            color="gray_100_01"
                            size="sm"
                            variant="fill"
                          ></Input>
                        </div>
                        <Input
                          name="groupNinetyNine"
                          placeholder="Camera Location"
                          className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                          wrapClassName="mt-8 rounded-[9px] w-[48%]"
                          color="gray_100_01"
                          size="sm"
                          variant="fill"
                        ></Input>
                        <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mt-[19px] w-full">
                          <div className="flex flex-col items-center justify-start md:mt-0 mt-[9px]">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtMontserratLight14Bluegray900"
                            >
                              <>
                                {/* Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry&#39;s{" "} */}
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-semibold leading-[normal] mb-1 min-w-[243px] text-base text-center"
                            shape="round"
                            color="blue_gray_900"
                            size="sm"
                            variant="fill"
                          >
                            Change Camera
                          </Button>
                        </div>
                        <Line className="bg-gray-200 h-px mt-[30px] w-full" />
                        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-0.5 md:ml-[0] mt-11 w-full">
                          <div className="flex flex-col items-center justify-start md:mt-0 mt-[11px]">
                            <Text
                              className="text-blue_gray-900 text-sm w-full"
                              size="txtMontserratLight14Bluegray900"
                            >
                              <>
                                {/* Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry&#39;s{" "} */}
                              </>
                            </Text>
                          </div>
                          <Button
                            className="common-pointer cursor-pointer font-semibold leading-[normal] mb-2 min-w-[243px] text-base text-center"
                            onClick={() => navigate("/desktopfifteen")}
                            shape="round"
                            color="blue_gray_900"
                            size="sm"
                            variant="fill"
                          >
                            Change ROI
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-200 h-px mr-[3px] mt-[62px] w-full" />
                  <Text
                    className="md:ml-[0] ml-[5px] mt-[38px] text-blue_gray-900 text-lg"
                    size="txtMontserratMedium18"
                  >
                    Select Industry
                  </Text>
                  <div className="flex flex-col items-center justify-start ml-1 md:ml-[0] mt-[11px]">
                    <Text
                      className="text-blue_gray-900 text-sm"
                      size="txtMontserratLight14Bluegray900"
                    >
                      <>
                        {/* Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the 1500s,
                        when an unknown */}
                      </>
                    </Text>
                  </div>
                 <RadioButtons/>
                  <Line className="bg-gray-200 h-px mr-[3px] mt-[45px] w-full" />
                  <Button
                    className="common-pointer !rounded-[55px] !text-white-A700 bg-colors2 cursor-not-allowed font-semibold leading-[normal] min-h-[50px] md:ml-[0] ml-[1364px] mt-7 opacity-op text-base text-center w-[220px]"
                    onClick={() => navigate("/DesktopSix")}
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

export default DesktopElevenPage;
