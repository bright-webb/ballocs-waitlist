import React from "react";
import { BentoGrid } from "./bento-grid";

export function Collaborate() {
  return (
    <section id="our-services">
      <div className="mx-auto max-w-screen-3xl px-4 py-4 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg sm:text-center">
          <h2 className="text-xl font-bold sm:text-4xl text-primary">Collaborate</h2>
        </div>

        <div className="relative h-screen w-full">
          <BentoGrid cards={cards} />
        </div>
      </div>
    </section>
  );
}

interface SkeletonProps {
  title: string;
  content: string;
}

const Skeleton = ({ content, title }: SkeletonProps) => {
  return (
    <div>
      <p className="text-4xl font-bold text-white">{title}</p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        {content}
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    title: "Backend Developer",
    content: <Skeleton title="Backend Developer" content="Backend Developer" />,
    className: "col-span-1 md:col-span-1",
    thumbnail: "/backend-engr.jpeg",
  },
  {
    id: 2,
    title: "Quality Assurrance",
    content: (
      <Skeleton title="Quality Assurrance" content="Quality Assurrance" />
    ),
    className: "col-span-1 row-span-3 md:col-span-1 md:row-span-3",
    thumbnail: "/analyst.jpeg",
  },
  {
    id: 3,
    title: "Content Writer",
    content: (
      <Skeleton
        title="Content Writer"
        content="Content Writer"
      />
    ),
    className: "col-span-1 row-span-2 md:col-span-1 md:row-span-1",
    thumbnail: "/content-writer.jpeg",
  },{
    id: 4,
    title: "Data Analyst",
    content: (
      <Skeleton
        title="Data Analyst"
        content="Data Analyst"
      />
    ),
    className: "col-span-2 row-span-1 md:col-span-1 md:row-span-1",
    thumbnail: "/data-analyst.jpeg",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    content: (
      <Skeleton title="UI/UX Designer" content="UI/UX Designer" />
    ),
    className: "col-span-1",
    thumbnail: "/designer.jpeg",
  },

  {
    id: 6,
    title: "Support",
    content: (
      <Skeleton
        title="Support"
        content="Support"
      />
    ),
    className: "col-span-1 row-span-2 md:col-span-1 md:row-span-2",
    thumbnail: "/female-UIUX.jpeg",
  },
  {
    id: 7,
    title: "Frontend Developer",
    content: <Skeleton title="Frontend Developer" content="Frontend Developer" />,
    className: "col-span-1 row-span-2",
    thumbnail: "/frontend-engr.jpeg",
  },
  {
    id: 8,
    title: "Software Engineer",
    content: <Skeleton title="Software Engineer" content="Software Engineer" />,
    className: "md:col-span-1 md:row-span-2",
    thumbnail: "/software-engr.jpeg",
  },
  {
    id: 9,
    title: "Project Manager",
    content: (
      <Skeleton
        title="Project Manager"
        content="Project Manager"
      />
    ),
    className: "col-span-1 row-span-2 md:col-span-1 md:row-span-1",
    thumbnail: "/pm.jpeg",
  },
  {
    id: 10,
    title: "Product Owner",
    content: (
      <Skeleton
        title="Product Owner"
        content="Product Owner"
      />
    ),
    className: "md:col-span-1 md:row-span-1",
    thumbnail: "/product-owner.jpeg",
  },
  {
    id: 11,
    title: "System Designer",
    content: (
      <Skeleton title="System Designer" content="System Designer" />
    ),
    className: "",
    thumbnail: "/system-design.jpeg",
  },
];
