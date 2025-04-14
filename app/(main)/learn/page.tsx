import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import React from "react";
import Header from "./header";
import { UserProgress } from "@/components/user-progress";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Korean", imageSrc: "/kr.svg" }}
          hearts={5}
          points={100}
          hasActiveSubsription={false}
        />
      </StickyWrapper>

      <FeedWrapper>
        <Header title="Korean" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
