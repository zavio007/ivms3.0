import React from "react";

import { Img, Text } from "components";

type DesktopSixStackProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "featuresselected" | "recontext"
> &
  Partial<{ username: string; featuresselected: string; recontext: string }>;

const DesktopSixStack: React.FC<DesktopSixStackProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[340px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
          src="images/img_rectangle188_340x392.png"
          alt="rectangle188"
        />
        <div className="absolute bg-gradient2  bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[13px] rounded-[20px] shadow-bs w-full">
          <div className="flex flex-col gap-[5px] items-start justify-start mt-[212px] w-[98%] md:w-full">
            <Text
              className="text-lg text-white-A700"
              size="txtMontserratRegular18"
            >
              {props?.username}
            </Text>
            <div className="flex flex-row items-start justify-start w-full">
              <Text
                className="text-sm text-white-A700"
                size="txtMontserratRegular14"
              >
                {props?.featuresselected}
              </Text>
              <div className="bg-green-A700 h-[9px] ml-[152px] my-1 rounded w-[9px]"></div>
              <Text
                className="ml-1 text-sm text-white-A700"
                size="txtMontserratRegular14"
              >
                {props?.recontext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopSixStack.defaultProps = {
  username: "Cameraname lorem",
  featuresselected: "3 Features Selected",
  recontext: "REC ON",
};

export default DesktopSixStack;
