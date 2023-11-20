import React from "react";

import { Img, Text } from "components";

type DesktopSixStackrectangle230Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "featuresselected" | "offlinestatus"
> &
  Partial<{
    username: string;
    featuresselected: string;
    offlinestatus: string;
  }>;

const DesktopSixStackrectangle230: React.FC<
  DesktopSixStackrectangle230Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[340px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
          src="images/img_rectangle188_4.png"
          alt="rectangle188"
        />
        <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[13px] rounded-[20px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-gradient3  h-[84px] rounded-[20px] shadow-bs w-full"></div>
            <Img
              className="h-[100px] mt-6 w-[100px]"
              src="images/img_link.svg"
              alt="link"
            />
            <div className="flex flex-col items-start justify-start mt-[73px] w-[92%] md:w-full">
              <Text
                className="text-lg text-white-A700"
                size="txtMontserratRegular18"
              >
                {props?.username}
              </Text>
              <div className="flex flex-row items-start justify-between mt-0.5 w-full">
                <Text
                  className="mt-[3px] text-sm text-white-A700"
                  size="txtMontserratRegular14"
                >
                  {props?.featuresselected}
                </Text>
                <Text
                  className="text-lg text-red-A700"
                  size="txtMontserratMedium18RedA700"
                >
                  {props?.offlinestatus}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopSixStackrectangle230.defaultProps = {
  username: "Cameraname lorem",
  featuresselected: "2 Features Selected",
  offlinestatus: "Offline",
};

export default DesktopSixStackrectangle230;