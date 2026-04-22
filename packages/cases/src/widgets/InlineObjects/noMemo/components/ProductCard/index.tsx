import { HeavySpecs } from '../HeavySpecs';
import styles from './styles.module.css';

interface ProductCardProps {
  title: string;
}

export const ProductCard = ({ title }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p className={styles.description}>
        Ниже находится очень тяжелый компонент. Он принимает инлайн-объект и инлайн-функцию.
      </p>

      {/* ЛОВУШКА: 
        Каждый рендер ProductCard создает НОВЫЙ объект config и НОВУЮ функцию onItemClick.
        React 18 из-за этого заново перерисует все 3000 элементов.
        React 19 закэширует их и отменит рендер HeavySpecs.
      */}
      <HeavySpecs
        config={{
          itemHeight: 30,
          showTypes: true,
          theme: 'light'
        }}
        onItemClick={(id: string) => console.log('Клик по:', id)}
      />
    </div>
  );
};
