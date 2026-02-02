import { getAllCategories } from "@/graphql/components/getAllCategories";
import { getAllInsights } from "@/graphql/components/getAllInsights";
import ArticlesSectionClient from "./ArticlesSectionClient";

export default async function ArticlesSection() {
  const [insights, allCategories] = await Promise.all([
    getAllInsights(),
    getAllCategories(),
  ]);

  const categories = allCategories?.filter((cat) => (cat.count || 0) > 0) || [];

  if (!insights || insights.length === 0) return null;

  return (
    <section className="bg-black">
      <div className="container-fractal">
        <ArticlesSectionClient insights={insights} categories={categories} />
      </div>
    </section>
  );
}
