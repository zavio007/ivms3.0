import React from "react";

import { Img, Text } from "components";

type DesktopSixStackrectangle229Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "featuresselected" | "recoff"
> &
  Partial<{ username: string; featuresselected: string; recoff: string }>;

const DesktopSixStackrectangle229: React.FC<
  DesktopSixStackrectangle229Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[340px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
          src="images/img_rectangle188_1.png"
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
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-sm text-white-A700"
                size="txtMontserratRegular14"
              >
                {props?.featuresselected}
              </Text>
              <div className="bg-red-A700 h-2.5 ml-[146px] my-1 w-2.5"></div>
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

DesktopSixStackrectangle229.defaultProps = {
  username: "Cameraname lorem",
  featuresselected: "3 Features Selected",
  recoff: "REC OFF",
};

export default DesktopSixStackrectangle229;
