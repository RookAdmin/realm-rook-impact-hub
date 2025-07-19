import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "facebook",
  "twitter",
  "instagram",
  "linkedin",
  "youtube",
  "tiktok",
  "pinterest",
  "snapchat",
  "whatsapp",
  "reddit",
  "telegram",
  "discord",
  "github",
  "dribbble",
  "behance",
  "medium",
  "tumblr",
  "slack",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
