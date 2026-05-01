import Image from 'next/image';
import { ProductTopBar } from '@/components/ProductTopBar';
import { SimilarProductCard } from '@/components/SimilarProductCard';
import { Navbar } from '@/components/Navbar';
import styles from './ProductDetail.module.css';

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Mock data based on the screenshot
  const product = {
    title: 'Organic Red Strawberries',
    price: 4.99,
    unit: 'per lb',
    rating: 4.8,
    reviews: 1340,
    description: 'Hand-picked at peak ripeness from certified organic farms, our Red Strawberries are known for their exceptional sweetness and deep crimson color. These berries are grown without synthetic pesticides, ensuring you get the purest flavor possible. Perfect for breakfast bowls, fresh salads, or simply enjoyed on their own.',
    image: '/images/product_detail_design.png', // Temporary placeholder
    nutritionalFacts: [
      { label: 'Calories', value: '32 kcal' },
      { label: 'Vitamin C', value: '98% DV' },
      { label: 'Fiber', value: '2g' },
      { label: 'Potassium', value: '153mg' },
    ]
  };

  const similarItems = [
    { id: '1', title: 'Organic Blueberries', price: 5.99, imageUrl: '/images/bananas_1777488674452.png' },
    { id: '2', title: 'Fresh Raspberries', price: 6.50, imageUrl: '/images/apples_1777488660157.png' },
    { id: '3', title: 'Wild Blackberries', price: 4.75, imageUrl: '/images/bananas_1777488674452.png' },
    { id: '4', title: 'Red Bing Cherries', price: 7.99, imageUrl: '/images/apples_1777488660157.png' },
  ];

  return (
    <div className={styles.container}>
      <ProductTopBar />
      
      <main className={styles.main}>
        <div className={styles.imageGallery}>
          <div className={styles.mainImageWrapper}>
            <Image 
              src={product.image} 
              alt={product.title} 
              fill 
              className={styles.mainImage}
              priority
            />
          </div>
          <div className={styles.pagination}>
            <div className={`${styles.dot} ${styles.activeDot}`}></div>
            <div className={styles.dot}></div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.header}>
            <span className={styles.organicBadge}>ORGANIC</span>
            <div className={styles.titleRow}>
              <h1 className={styles.title}>{product.title}</h1>
              <div className={styles.priceContainer}>
                <span className={styles.price}>${product.price}</span>
                <span className={styles.unit}>({product.unit})</span>
              </div>
            </div>
            
            <div className={styles.ratingRow}>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} viewBox="0 0 24 24" fill={star <= 4 ? "#FFB800" : "none"} stroke="#FFB800" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className={styles.reviews}>{product.rating} ({product.reviews.toLocaleString()} Reviews)</span>
            </div>
          </div>

          <div className={styles.actionBar}>
            <div className={styles.quantitySelector}>
              <button aria-label="Decrease quantity">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <span>1</span>
              <button aria-label="Increase quantity">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
            <button className={styles.addToCartBtn}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Add to Cart
            </button>
          </div>

          <div className={styles.infoCards}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <h2>Product Description</h2>
              </div>
              <p className={styles.description}>{product.description}</p>
              <div className={styles.featureTags}>
                <span className={styles.tag}>GMO Free</span>
                <span className={styles.tag}>Local Farm</span>
                <span className={styles.tag}>No Additives</span>
              </div>
            </div>

            <div className={`${styles.card} ${styles.nutritionCard}`}>
              <div className={styles.cardHeader}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                <h2>Nutritional Facts</h2>
              </div>
              <ul className={styles.nutritionList}>
                {product.nutritionalFacts.map((fact, index) => (
                  <li key={index}>
                    <span className={styles.nutritionLabel}>{fact.label}</span>
                    <span className={styles.nutritionValue}>{fact.value}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.nutritionNote}>Values per 100g serving</p>
            </div>
          </div>

          <section className={styles.similarSection}>
            <div className={styles.sectionHeader}>
              <h2>Similar Items</h2>
              <span className={styles.seeAll}>See All &gt;</span>
            </div>
            <div className={styles.similarGrid}>
              {similarItems.map(item => (
                <SimilarProductCard key={item.id} {...item} />
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Navbar />
    </div>
  );
}
