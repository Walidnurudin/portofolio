export default function sitemap() {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_HOST}`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_HOST}/experience`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_HOST}/talks`,
      lastModified: new Date()
    }
  ];
}
