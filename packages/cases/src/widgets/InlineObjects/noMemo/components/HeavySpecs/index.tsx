import styles from './styles.module.css';

// Генерируем огромный массив данных ОДИН раз вне компонента
const MASSIVE_PERIPHERALS_LIST = Array.from({ length: 3000 }, (_, i) => ({
  id: `dev_${i}`,
  name: `Устройство ${Math.random().toString(36).substring(7).toUpperCase()}`,
  type: i % 2 === 0 ? 'USB-C' : 'Bluetooth'
}));

// Интерфейс для нашего инлайн-объекта
interface ListConfig {
  itemHeight: number;
  showTypes: boolean;
  theme: 'light' | 'dark';
}

interface HeavySpecsProps {
  config: ListConfig;
  onItemClick: (id: string) => void;
}

export const HeavySpecs = ({ config, onItemClick }: HeavySpecsProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Список совместимых устройств (3000 шт.)</h3>

      <div className={`${styles.list} ${styles[config.theme]}`}>
        {MASSIVE_PERIPHERALS_LIST.map(device => (
          <div
            key={device.id}
            className={styles.item}
            style={{
              height: `${config.itemHeight}px`
            }}
          >
            <span>{device.name}</span>
            <div className={styles.itemControls}>
              {config.showTypes && <span className={styles.type}>{device.type}</span>}
              <button onClick={() => onItemClick(device.id)}>Выбрать</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
