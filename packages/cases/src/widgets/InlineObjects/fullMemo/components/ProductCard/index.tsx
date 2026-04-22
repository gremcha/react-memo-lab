import { memo, useCallback, useMemo } from 'react';
import { HeavySpecs } from '../HeavySpecs';
import styles from './styles.module.css';

interface ProductCardProps {
  title: string;
}

export const ProductCard = memo(({ title }: ProductCardProps) => {
  const config = useMemo(() => ({
    itemHeight: 30,
    showTypes: true,
    theme: 'light' as const
  }), []);

  const onItemClick = useCallback((id: string) => {
    console.log('Клик по:', id);
  }, []);

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p className={styles.description}>
        Ниже находится очень тяжелый компонент. Он принимает мемоизированный объект и мемоизированную функцию.
      </p>

      {/* МЕМОИЗАЦИЯ: 
        Теперь мы передаем стабильные ссылки на config и onItemClick.
        При ререндере ProductCard, компонент HeavySpecs не будет перерисовываться.
      */}
      <HeavySpecs
        config={config}
        onItemClick={onItemClick}
      />
    </div>
  );
});
