import axios from "axios";

const UNSPLASH_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export interface UnsplashImage {
  id: string;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
}

export const fetchImages = async (
  searchTerm: string
): Promise<UnsplashImage[]> => {
  const response = await axios.get(UNSPLASH_URL, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
    params: {
      query: searchTerm,
    },
  });

  console.log('KEY:', import.meta.env.VITE_UNSPLASH_ACCESS_KEY);
console.log('All env:', import.meta.env);

  const rawData = response.data;

  const cleanedData: UnsplashImage[] = await rawData.results.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any) => ({
      id: item.id,
      description: item.description,
      urls: {
        small: item.urls.small,
        regular: item.urls.regular,
      },
      user: {
        name: item.user.name,
      },
    })
  );

  return cleanedData;
};
