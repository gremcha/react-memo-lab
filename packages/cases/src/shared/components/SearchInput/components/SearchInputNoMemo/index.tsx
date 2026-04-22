import type { ChangeEventHandler } from 'react';
import styles from '../../styles.module.css';

interface SearchInputProps {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
}

export const SearchInputNoMemo = ({
  onChange,
  placeholder = 'Поиск по названию модели или бренду...',
  value
}: SearchInputProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = e => onChange(e.target.value);

  return (
    <input
      type='text'
      className={styles.input}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
