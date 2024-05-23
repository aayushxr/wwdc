import { BentoGrid, BentoGridItem } from "@/components/bento";
import Page from "@/components/header";
import { briefings } from "@/data";

export default function Breif() {
  const items = briefings
  return (
    <Page title="Briefings" desc="You can access different briefings here">
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            url={item.url}
          />
        ))}
      </BentoGrid>
    </Page>
  );
}
