import React from "react";

import { Img, Text } from "components";

type DesktopSixStackOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "cameraname" | "featuresselected" | "recoff"
> &
  Partial<{ cameraname: string; featuresselected: string; recoff: string }>;

const DesktopSixStackOne: React.FC<DesktopSixStackOneProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[340px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
          src="images/img_rectangle188_2.png"
          alt="rectangle188"
        />
        <div className="absolute bg-gradient2  bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[15px] rounded-[20px] shadow-bs w-full">
          <div className="flex flex-col items-start justify-start mt-[212px] w-[99%] md:w-full">
            <Text
              className="text-lg text-white-A700"
              size="txtMontserratRegular18"
            >
              {props?.cameraname}
            </Text>
            <div className="flex flex-row items-start justify-start mt-[5px] w-full">
              <Text
                className="text-sm text-white-A700"
                size="txtMontserratRegular14"
              >
                {props?.featuresselected}
              </Text>
              <div className="bg-red-A700 h-2.5 ml-[145px] my-[3px] w-2.5"></div>
              <Text
                className="ml-1 text-sm text-white-A700"
                size="txtMontserratRegular14"
              >
                {props?.recoff}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopSixStackOne.defaultProps = {
  cameraname: "Cameraname lorem",
  featuresselected: "3 Features Selected",
  recoff: "REC OFF",
};

export default DesktopSixStackOne;
