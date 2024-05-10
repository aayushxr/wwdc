import Page from "@/components/header";
import { VideoBentoGrid, VideoBentoGridItem } from "@/components/video";

export default function Breif() {
  const items = [
    {
      title: "Case building and Argumentation",
      description:
        "Check out a presentation on 'Case building and Argumentation'",
      className: "md:col-span-1",
      url: "https://www.youtube.com/watch?v=J2G1j8ScpJM",
    },
    {
      title: "Engagement",
      description: "Check out the Debaters Briefing  of our tournament",
      className: "md:col-span-1",
      url: "https://www.youtube.com/watch?v=OAbWlMPK4v4",
    },

    {
      title: "Marking Guidelines",
      description: "Check out the Equity Brief of our tournament",
      className: "md:col-span-1",
      url: "https://www.youtube.com/watch?v=AQbXakOr_-U",
    },
    {
      title: "Marking Guidelines",
      description: "Check out the Equity Brief of our tournament",
      className: "md:col-span-1",
      url: "https://www.youtube.com/watch?v=4HUFM3JZaLQ",
    },
    {
      title: "Marking Guidelines",
      description: "Check out the Equity Brief of our tournament",
      className: "md:col-span-1",
      url: "https://www.youtube.com/watch?v=9OkLZNeOMK0",
    },
    {
      title: "Marking Guidelines",
      description: "Check out the Equity Brief of our tournament",
      className: "md:col-span-1",
      url: "https://www.youtube.com/watch?v=CxHFvX94AC0",
    },
    {
      title: "Marking Guidelines",
      description: "Check out the Equity Brief of our tournament",
      className: "md:col-span-1",
      url: "https://www.youtube.com/watch?v=4YA4qiuOrdE",
    },
    {
      title: "Marking Guidelines",
      description: "Check out the Equity Brief of our tournament",
      className: "md:col-span-1",
      url: "https://www.youtube.com/watch?v=Qa5eTZ5H9nM",
    },
  ];
  return (
    <Page
      title="Sample Debates"
      desc="Here are some sample debates you can watch, to gain a better insight. You can watch these debates on Youtube. "
    >
      <VideoBentoGrid className="max-w-8xl mx-auto md:auto-rows-[17rem]">
        {items.map((item, i) => (
          <VideoBentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            url={item.url}
          />
        ))}
      </VideoBentoGrid>
    </Page>
  );
}
