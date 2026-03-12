import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Loader2, Plus, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartDrawer } from "@/components/store/CartDrawer";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";

const ProductCard = ({
  product,
  index,
  onAddToCart,
  isLoading,
}: {
  product: ShopifyProduct;
  index: number;
  onAddToCart: (p: ShopifyProduct) => void;
  isLoading: boolean;
}) => {
  const image = product.node.images.edges[0]?.node;
  const price = product.node.priceRange.minVariantPrice;
  const hasDiscount = comparePrice && parseFloat(comparePrice.amount) > parseFloat(price.amount);

  return (
    <motion.div
      key={product.node.id}
      className="group relative rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Image */}
      <Link to={`/product/${product.node.handle}`} className="block relative aspect-[4/5] bg-muted overflow-hidden">
        {image ? (
          <img
            src={image.url}
            alt={image.altText || product.node.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ShoppingBag className="w-12 h-12 text-muted-foreground/40" />
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />

        {/* Quick actions overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <div className="flex gap-2">
            <Button
              size="sm"
              className="flex-1 rounded-full bg-background/90 text-foreground backdrop-blur-sm hover:bg-background border border-border/50 shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                onAddToCart(product);
              }}
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Plus className="w-4 h-4 mr-1" /> Add to Cart</>}
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="rounded-full bg-background/90 backdrop-blur-sm hover:bg-background border border-border/50 shadow-lg"
              asChild
            >
              <Link to={`/product/${product.node.handle}`} onClick={(e) => e.stopPropagation()}>
                <Eye className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Discount badge */}
        {hasDiscount && (
          <div className="absolute top-3 left-3">
            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-destructive text-destructive-foreground shadow-md">
              Sale
            </span>
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="p-4 space-y-1.5">
        <Link to={`/product/${product.node.handle}`}>
          <h3 className="font-display font-semibold text-foreground truncate group-hover:text-primary transition-colors duration-300">
            {product.node.title}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {product.node.description}
        </p>
        <div className="flex items-center gap-2 pt-1">
          <span className="font-display font-bold text-lg text-foreground">
            ${parseFloat(price.amount).toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-muted-foreground line-through">
              ${parseFloat(comparePrice.amount).toFixed(2)}
            </span>
          )}
          <span className="text-xs text-muted-foreground ml-auto uppercase tracking-wider">
            {price.currencyCode}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Store = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 50 });
        if (data?.data?.products?.edges) {
          setProducts(data.data.products.edges);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success(`${product.node.title} added to cart`, { position: "top-center" });
  };

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-2">Collection</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              iBloov Store
            </h1>
            <p className="text-muted-foreground mt-3 max-w-md text-lg">
              Support the vision. Wear the movement.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <CartDrawer />
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-border mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ transformOrigin: "left" }}
        />

        {/* Products */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Loading products…</p>
          </div>
        ) : products.length === 0 ? (
          <motion.div
            className="flex flex-col items-center justify-center py-32 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
              <ShoppingBag className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">No products yet</h2>
            <p className="text-muted-foreground max-w-sm">
              Products are coming soon. Check back later!
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {products.map((product, i) => (
                <ProductCard
                  key={product.node.id}
                  product={product}
                  index={i}
                  onAddToCart={handleAddToCart}
                  isLoading={isLoading}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Store;
