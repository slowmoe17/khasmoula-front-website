import { Container, Filters } from "@/components";
import FavoritesContent from "@/components/FavoritesContent";
import { getTranslations } from "next-intl/server";

async function Page() {
  const tFavoriteFilters = await getTranslations("favorite.filters");
  const tTabs = await getTranslations("components.tabs");

  return (
    <div className="pt-[70px] lg:pb-[205px] pb-[170px]">
      <Container>
        <Filters
          title={tFavoriteFilters("title")}
          placeholder={tFavoriteFilters("placeholder")}
        />

        <FavoritesContent
          tabs={{ stores: tTabs("stores"), coupons: tTabs("coupons") }}
        />
      </Container>
    </div>
  );
}

export default Page;
