import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Dashboard from "components/Dashboard";
import DesktopSixStack from "components/DesktopSixStack";
import DesktopSixStackOne from "components/DesktopSixStackOne";
import DesktopSixStackTwo from "components/DesktopSixStackTwo";
import DesktopSixStackrectangle188 from "components/DesktopSixStackrectangle188";
import DesktopSixStackrectangle229 from "components/DesktopSixStackrectangle229";
import DesktopSixStackrectangle230 from "components/DesktopSixStackrectangle230";

import { CloseSVG } from "../../assets/images";

const DesktopSixPage: React.FC = () => {
  const navigate = useNavigate();

  const [groupnineteenvalue, setGroupnineteenvalue] =
    React.useState<string>("");

  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-montserrat items-center justify-end mx-auto w-full">
        <div className="bg-gray-100 flex flex-col items-center justify-start p-3.5 w-full">
          <div className="flex md:flex-col flex-row gap-4 items-start justify-between max-w-[1883px] mb-4 mx-auto md:px-5 w-full">
            <div className="md:h-[929px] h-[930px] relative w-[10%] md:w-full">
              <Dashboard className="absolute bg-white-A700 flex flex-col gap-[31px] h-full inset-y-[0] items-center justify-center left-[0] my-auto p-[29px] sm:px-5 rounded-[20px] shadow-bs w-[93%]" />
              <Img
                className="absolute h-16 left-[60px] right-[50px] top-[4%]"
                src="images/img_group67.svg"
                alt="groupSixtySeven"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-[41px] items-center justify-start w-[90%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[17px] items-end justify-between w-full">
                <div className="flex flex-col gap-[21px] justify-start md:mt-0 mt-[18px]">
                  <Text
                    className="ml-3 md:ml-[0] text-base text-blue_gray-900"
                    size="txtMontserratMedium16"
                  >
                    Camera config
                  </Text>
                  <Line className="bg-gray-200 h-px w-full" />
                </div>
                <Input
                  name="groupNineteen"
                  placeholder="You can search here"
                  value={groupnineteenvalue}
                  onChange={(e) => setGroupnineteenvalue(e)}
                  className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-light leading-[normal] p-0 text-left text-sm w-full"
                  wrapClassName="flex md:flex-1 md:w-full"
                  suffix={
                    groupnineteenvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer h-[37px] ml-[35px] my-auto"
                        onClick={() => setGroupnineteenvalue("")}
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
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-end justify-start p-[25px] sm:px-5 rounded-[20px] shadow-bs w-full">
                  <Img
                    className="h-[45px] mb-1 ml-2.5 md:ml-[0]"
                    src="images/img_volume.svg"
                    alt="volume"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[19px] md:mt-0 mt-1.5">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtMontserratMedium16"
                    >
                      Add new camera
                    </Text>
                    <Text
                      className="text-black-900 text-sm"
                      size="txtMontserratLight14"
                    >
                      <>
                        this is just a test msg
                        {/* industry&#39;s standard dummy text ever since the */}
                      </>
                    </Text>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[243px] md:ml-[0] ml-[1080px] text-base text-center"
                    onClick={() => navigate("/desktopseven")}
                    shape="round"
                    size="sm"
                    variant="gradient"
                    color="indigo_A700_01_indigo_900"
                  >
                    ADD CAMERA
                  </Button>
                </div>
                <Text
                  className="md:ml-[0] ml-[26px] mt-[38px] text-[22px] text-blue_gray-900 sm:text-lg md:text-xl"
                  size="txtMontserratBold22"
                >
                  Connected Cameras
                </Text>
                <div className="flex md:flex-col flex-row gap-[39px] items-center justify-between mt-[22px] w-full">
                  <div className="bg-gradient4  flex md:flex-1 flex-col items-end justify-start p-[17px] rounded-[19px] w-[24%] md:w-full">
                    <div className="flex flex-row gap-7 items-start justify-end mb-[29px] mt-3 w-[95%] md:w-full">
                      <div className="flex flex-col gap-[49px] items-end justify-start w-3/5">
                        <Text
                          className="mr-0.5 text-lg text-white-A700"
                          size="txtMontserratSemiBold18"
                        >
                          6 Cameras Connected{" "}
                        </Text>
                        <div className="h-[193px] relative w-[194px]">
                          <div className="h-[193px] m-auto w-[194px]">
                            <div className="absolute border-[23px] border-indigo-A400 border-solid h-[193px] inset-[0] justify-center m-auto rounded-[96px] w-[193px]"></div>
                            <Img
                              className="absolute h-[188px] inset-[0] justify-center m-auto"
                              src="images/img_ellipse55.svg"
                              alt="ellipseFiftyFive"
                            />
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat h-[193px] inset-[0] justify-center m-auto p-[65px] md:px-10 sm:px-5 w-[193px]"
                            style={{
                              backgroundImage: "url('images/img_group31.svg')",
                            }}
                          >
                            <Text
                              className="mb-[-0.79px] mx-auto text-[22px] sm:text-lg text-white-A700 md:text-xl z-[1]"
                              size="txtMontserratBold22WhiteA700"
                            >
                              90%
                            </Text>
                            <Text
                              className="mt-auto mx-auto text-center text-sm text-white-A700"
                              size="txtMontserratRegular14"
                            >
                              <>
                                Cameras
                                <br />
                                Good{" "}
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-5 items-center justify-start mt-[86px] w-[33%]">
                        <div className="md:h-[39px] h-[70px] relative w-full">
                          <Text
                            className="absolute left-[0] sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 top-[0]"
                            size="txtMontserratSemiBold35"
                          >
                            05
                          </Text>
                          <Text
                            className="absolute bottom-[0] inset-x-[0] mx-auto text-sm text-white-A700 w-full"
                            size="txtMontserratRegular14"
                          >
                            cameras connected
                          </Text>
                        </div>
                        <div className="md:h-[39px] h-[70px] relative w-full">
                          <Text
                            className="absolute left-[0] sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 top-[0]"
                            size="txtMontserratSemiBold35"
                          >
                            01
                          </Text>
                          <Text
                            className="absolute bottom-[0] inset-x-[0] mx-auto text-sm text-white-A700 w-full"
                            size="txtMontserratRegular14"
                          >
                            camera disconnected
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
                    orientation="horizontal"
                  >
                    <DesktopSixStackrectangle188 className="h-[340px] md:h-[342px] mb-0.5 sm:ml-[0] relative w-full" />
                    <DesktopSixStack className="h-[340px] md:h-[342px] mb-0.5 sm:ml-[0] relative w-full" />
                    <DesktopSixStackrectangle229 className="h-[340px] md:h-[342px] sm:ml-[0] sm:mt-0 mt-0.5 relative w-full" />
                  </List>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 mt-[45px] w-3/4"
                  orientation="horizontal"
                >
                  <DesktopSixStackOne className="h-[340px] relative w-full" />
                  <DesktopSixStackTwo className="h-[340px] relative w-full" />
                  <DesktopSixStackrectangle230 className="h-[340px] relative w-full" />
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopSixPage;
