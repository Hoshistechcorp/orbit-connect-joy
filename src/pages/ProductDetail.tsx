import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartDrawer } from "@/components/store/CartDrawer";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle });
        if (data?.data?.productByHandle) {
          setProduct(data.data.productByHandle);
        }
      } catch (err) {
        console.error("Failed to fetch product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [handle]);

  const handleAddToCart = async () => {
    if (!product) return;
    const variant = product.variants.edges[selectedVariantIdx]?.node;
    if (!variant) return;
    await addItem({
      product: { node: product },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success(`${product.title} added to cart`, { position: "top-center" });
  };

  const selectedVariant = product?.variants.edges[selectedVariantIdx]?.node;

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16">
        <div className="flex items-center justify-between mb-6">
          <Link to="/store" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Store
          </Link>
          <CartDrawer />
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-32">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : !product ? (
          <div className="text-center py-32">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-display font-semibold">Product not found</h2>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Images */}
            <div className="space-y-3">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border">
                {product.images.edges[selectedImage]?.node ? (
                  <img
                    src={product.images.edges[selectedImage].node.url}
                    alt={product.images.edges[selectedImage].node.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ShoppingBag className="w-16 h-16 text-muted-foreground" />
                  </div>
                )}
              </div>
              {product.images.edges.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {product.images.edges.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-colors ${
                        i === selectedImage ? "border-ibloov-blue" : "border-border"
                      }`}
                    >
                      <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">{product.title}</h1>
                <p className="text-2xl font-bold text-ibloov-orange mt-2">
                  {selectedVariant?.price.currencyCode} {parseFloat(selectedVariant?.price.amount || "0").toFixed(2)}
                </p>
              </div>

              {product.options.length > 0 && product.options[0].name !== "Title" && (
                <div className="space-y-3">
                  {product.options.map((option) => (
                    <div key={option.name}>
                      <label className="text-sm font-medium text-foreground mb-2 block">{option.name}</label>
                      <div className="flex flex-wrap gap-2">
                        {product.variants.edges.map((v, idx) => {
                          const optVal = v.node.selectedOptions.find(o => o.name === option.name)?.value;
                          if (!optVal) return null;
                          return (
                            <button
                              key={v.node.id}
                              onClick={() => setSelectedVariantIdx(idx)}
                              className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                                idx === selectedVariantIdx
                                  ? "border-ibloov-blue bg-ibloov-blue/10 text-ibloov-blue font-semibold"
                                  : "border-border text-muted-foreground hover:border-foreground"
                              } ${!v.node.availableForSale ? "opacity-40 line-through" : ""}`}
                              disabled={!v.node.availableForSale}
                            >
                              {optVal}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <Button
                size="lg"
                className="w-full rounded-full"
                onClick={handleAddToCart}
                disabled={isLoading || !selectedVariant?.availableForSale}
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : !selectedVariant?.availableForSale ? "Sold Out" : "Add to Cart"}
              </Button>

              {product.description && (
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
